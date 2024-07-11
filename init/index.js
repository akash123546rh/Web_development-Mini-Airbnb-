

const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

main()
  .then(() => {
    console.log("connected to Db");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/wanderlust");
}

const initDB = async () => {
  await Listing.deleteMany({});
  const transformedData = initData.data.map((obj) => ({
    ...obj,
    owner:"667d2502febd1d2282beb676",
    image: { ...obj.image, url: obj.image.url } // Ensuring the image field retains its object structure
  }));
  await Listing.insertMany(transformedData);
  console.log("data was initialized");
};
initDB();


