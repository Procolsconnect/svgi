const mongoose = require("mongoose");

const newsheroSchema = new mongoose.Schema({
    image: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
});
 
const NewsHero = mongoose.model("NewsHero", newsheroSchema);
module.exports = {
    NewsHero
}