const Listing = require("../models/listing.js");
const { listingSchema } = require("../schema.js");
const ExpressError = require("../utils/ExpressError.js");
const mbxGeocoding = require('@mapbox/mapbox-sdk/services/geocoding');
const mapToken=process.env.MAP_TOKEN;
const geocodingClient = mbxGeocoding({ accessToken: mapToken});



module.exports.index = async (req, res) => {
    const alllisting = await Listing.find();
    res.render("listing/index.ejs", { alllisting });
};

module.exports.newrender = (req, res) => {
    res.render("listing/new.ejs");
};

module.exports.showroute = async (req, res) => {
    const { id } = req.params;
    const list = await Listing.findById(id)
        .populate({
            path: "reviews",
            populate: {
                path: "author",
            },
        })
        .populate("owner");
    if (!list) {
        req.flash("error", "Listing you requested does not exist");
        return res.redirect("/listing");
    }
    res.render("listing/show.ejs", { list });
};

module.exports.createroute = async (req, res, next) => {
    let response=await geocodingClient.forwardGeocode({
        query: req.body.listing.location,
        limit: 1
      })
        .send()
        
        
        

    let url=req.file.path;
    let filename=req.file.filename;
    const result = listingSchema.validate(req.body);
    if (result.error) {
        const errmsg = result.error.details.map(el => el.message).join(",");
        throw new ExpressError(400, errmsg);
    }
    const newListing = new Listing(req.body.listing);
    newListing.owner = req.user._id;
    newListing.image= {  url, filename};
    newListing.geometry=response.body.features[0].geometry;
    let newlist=await newListing.save();
    console.log(newlist);
    req.flash("success", "New listing created!");
    res.redirect("/listing");
};



module.exports.editroute = async (req, res) => {
    const { id } = req.params;
    const listing = await Listing.findById(id);
    if (!listing) {
        req.flash("error", "Listing you requested does not exist");
        return res.redirect("/listing");
    }
    res.render("listing/edit.ejs", { listing });
};

module.exports.editputroute = async (req, res) => {
    const { id } = req.params;
    let listing=await Listing.findByIdAndUpdate(id, { ...req.body.listing });
    if(typeof req.file !== "undefined") {
        let url=req.file.path;
        let filename=req.file.filename;
        listing.image= {url, filename};
        await listing.save();
        }
    req.flash("success", "Listing updated!");
    res.redirect(`/listing/${id}`);
};

module.exports.deleteroute = async (req, res) => {
    const { id } = req.params;
    const deletelist = await Listing.findByIdAndDelete(id);
    req.flash("success", "Listing deleted!");
    res.redirect("/listing");
};







