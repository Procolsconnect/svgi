const mongoose = require("mongoose");

const newsheroSchema = new mongoose.Schema({
    image: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
});
const newsReportSchema = new mongoose.Schema({
    video_url: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
});
const newsCardSchema = new mongoose.Schema({
  image: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
});
 
const newssvgiSchema = new mongoose.Schema({
  image1: { type: String, required: true },
  image2: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
});
const newssectionSchema = new mongoose.Schema({
  image: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
});
const newsCollegeSchema = new mongoose.Schema(
  {
    type: { type: String, required: true, enum: ["text", "image"] },
    text: { type: String },        // only when type = "text"
    url: { type: String },         // only when type = "image"
  },
  { timestamps: true }
);

 
const NewsHero = mongoose.model("NewsHero", newsheroSchema);
const NewsReport = mongoose.model("NewsReport", newsReportSchema);
const NewsCard = mongoose.model("NewsCard", newsCardSchema);
const NewsSvgi = mongoose.model("NewsSvgi", newssvgiSchema);
const Newssection = mongoose.model("Newssection", newssectionSchema);
const NewsCollege = mongoose.model("NewsCollege", newsCollegeSchema);

module.exports = {
    NewsHero,
    NewsReport,
    NewsCard,
    NewsSvgi,
    Newssection,
    NewsCollege,
}




