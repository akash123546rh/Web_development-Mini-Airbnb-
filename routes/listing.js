const express=require("express");
const router=express.Router(); 
const WrapAsync=require("../utils/WrapAsync.js");
const {listingSchema,reviewSchema}=require("../schema.js");
const Listing=require("../models/listing.js");
const {isLoggedIn,isOwner,vallidatelisting}=require("../middleware.js");
const listingController=require("../controllers/listing.js");
const multer  = require('multer');
const {storage}=require("../cloudconfig.js");
const upload = multer({ storage });




router.get("/",WrapAsync(listingController.index));
router.post("/",isLoggedIn,upload.single('listing[image]'),vallidatelisting,WrapAsync(listingController.createroute));


  

//new
  router.get("/new",isLoggedIn,listingController.newrender);

//show

router.get("/:id",WrapAsync(listingController.showroute));
router.put("/:id",isLoggedIn,isOwner,upload.single('listing[image]'), WrapAsync(listingController.editputroute));
router.delete("/:id",isLoggedIn,isOwner,WrapAsync(listingController.deleteroute));





// edit

router.get("/:id/edit",isLoggedIn,isOwner,WrapAsync(listingController.editroute));

module.exports=router;


















