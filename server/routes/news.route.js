const upload = require("../middleware/multer");
const Newshero = require("../controllers/news/NewsHeroController.js");
const NewsReport = require("../controllers/news/NewsReportController.js");
const NewsCard = require("../controllers/news/NewsCardController.js");
const NewsSvgi = require("../controllers/news/NewsSvgiController.js");
const Newssection = require("../controllers/news/NewsSectionController.js");
const NewsCollege = require("../controllers/news/NewsCollegeController.js");



module.exports = function newsheroRoutes(app) {
  app.post("/api/newshero", upload.single("image"),Newshero.createNewsheroController);
  app.get("/api/newshero", Newshero.getNewsheroController);
  app.put("/api/newshero/:id", upload.single("image"),Newshero.updateNewsheroController);
  app.delete("/api/newshero/:id",Newshero.deleteNewsheroController);

app.post("/api/newsreport",NewsReport. createNewsReportController);
  app.get("/api/newsreport", NewsReport.getNewsReportController);
  app.put("/api/newsreport/:id",NewsReport. updateNewsReportController);
  app.delete("/api/newsreport/:id",NewsReport. deleteNewsReportController);

app.post("/api/newscard", upload.single("image"), NewsCard.createNewsCardController);
app.get("/api/newscard", NewsCard.getNewsCardController);
app.put("/api/newscard/:id", upload.single("image"), NewsCard.updateNewsCardController);
app.delete("/api/newscard/:id", NewsCard.deleteNewsCardController);


app.post(
  "/api/NewsSvgi",
  upload.fields([
    { name: "image1", maxCount: 1 },
    { name: "image2", maxCount: 1 },
  ]),
  NewsSvgi.createNewsSvgiController
);

app.get("/api/NewsSvgi", NewsSvgi.getNewsSvgiController);

app.put(
  "/api/NewsSvgi/:id",
  upload.fields([
    { name: "image1", maxCount: 1 },
    { name: "image2", maxCount: 1 },
  ]),
  NewsSvgi.updateNewsSvgiController
);
app.delete("/api/NewsSvgi/:id", NewsSvgi.deleteNewsSvgiController);
app.post("/api/newssection", upload.single("image"), Newssection.createNewssectionController);
app.get("/api/newssection", Newssection.getNewssectionController);
app.put("/api/newssection/:id", upload.single("image"), Newssection.updateNewssectionController);
app.delete("/api/newssection/:id", Newssection.deleteNewssectionController);

  app.post("/api/newscollege", upload.single("image"), NewsCollege.createNewsCollegeController);
  app.get("/api/newscollege", NewsCollege.getNewsCollegeController);
  app.put("/api/newscollege/:id", upload.single("image"), NewsCollege.updateNewsCollegeController);
  app.delete("/api/newscollege/:id", NewsCollege.deleteNewsCollegeController);


};
