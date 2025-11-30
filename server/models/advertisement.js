const mongoose = require("mongoose");

const advertisemenCardSchema = new mongoose.Schema({
    image: { type: String, required: true },
});
const advertisementfacultySchema = new mongoose.Schema({
    image: { type: String, required: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
    mobile: { type: String, required: true },
    email: { type: String, required: true },
    page: { type: String, required: true }
});

 const Advertisementcard = mongoose.model("Advertisementcard", advertisemenCardSchema);
 const AdvertisementFaculty = mongoose.model("AdvertisementFaculty", advertisementfacultySchema);
module.exports = {
    Advertisementcard,
    AdvertisementFaculty
}