const academics = require("../controllers/academics/AcademicsController");
const feedback = require("../controllers/academics/FeedBackController");
const upload = require("../middleware/multer");
const library = require("../controllers/academics/LibraryController");
const outcome = require("../controllers/academics/OutcomeController");


module.exports = function academicRoutes(app) {
  // ---------------- HERO ROUTES ----------------
  app.post("/api/academicshero", upload.single("image"), academics.createacademicsHeroController);
  app.get("/api/academicshero", academics.getacademicsHeroController);
  app.put("/api/academicshero/:id", upload.single("image"), academics.updateacademicsHeroController);
  app.delete("/api/academicshero/:id", academics.deleteacademicsHeroController);

  // ---------------- CARD ROUTES ----------------
  app.post("/api/academicscard", upload.single("image"), academics.createacademicsCardController);
  app.get("/api/academicscard", academics.getacademicsCardController);
  app.get("/api/academicscard/:id", academics.getacademicsCardByIdController);
  app.put("/api/academicscard/:id", upload.single("image"), academics.updateacademicsCardController);
  app.delete("/api/academicscard/:id", academics.deleteacademicsCardController);

  //---------------- CONTENT ROUTES ----------------
  app.post("/api/academicscontent", upload.none(), academics.createacademicsContentController);
  app.get("/api/academicscontent", academics.getacademicsContentsController);
  app.put("/api/academicscontent/:id", upload.none(), academics.updateacademicsContentController);
  app.delete("/api/academicscontent/:id", academics.deleteacademicsContentController);

  //feedback
  app.post("/api/feedbackhero", upload.single("image"), feedback.createfeedbackHero);
  app.get("/api/feedbackhero", feedback.getfeedbackHero);
  app.put("/api/feedbackhero/:id", upload.single("image"), feedback.updatefeedbackHero);
  app.delete("/api/feedbackhero/:id", feedback.deletefeedbackHero);

  //feedback review
  app.post("/api/feedbackreview", upload.single("image"), feedback.createfeedbackReview);
  app.get("/api/feedbackreview", feedback.getfeedbackReview);
  app.put("/api/feedbackreview/:id", upload.single("image"), feedback.updatefeedbackReview);
  app.delete("/api/feedbackreview/:id", feedback.deletefeedbackReview);

  // FAQ ROUTES
  app.post("/api/faq", upload.none(), feedback.createFaqController);
  app.get("/api/faq", feedback.getFaqController);
  app.get("/api/faq/:id", feedback.getFaqByIdController);
  app.put("/api/faq/:id", upload.none(), feedback.updateFaqController);
  app.delete("/api/faq/:id", feedback.deleteFaqController);



  // ---------------- HERO ROUTES ----------------
  app.post("/api/libraryhero", upload.single("image"), library.createlibraryHeroController);
  app.get("/api/libraryhero", library.getlibraryHeroController);
  app.put("/api/libraryhero/:id", upload.single("image"), library.updatelibraryHeroController);
  app.delete("/api/libraryhero/:id", library.deletelibraryHeroController);


  // ---------------- IMAGE ROUTES ----------------
  app.post("/api/libraryimage", upload.single("image"), library.createlibraryImageController);
  app.get("/api/libraryimage", library.getlibraryImageController);
  app.delete("/api/libraryimage/:id", library.deletelibraryImageController);


  // ---------------- VIDEO ROUTES ----------------
  app.post("/api/libraryvideo", upload.single("video"), library.createlibraryVideoController);
  app.get("/api/libraryvideo", library.getlibraryVideoController);
  app.put("/api/libraryvideo/:id", upload.single("video"), library.updatelibraryVideoController);
  app.delete("/api/libraryvideo/:id", library.deletelibraryVideoController);


  // ---------------- VIDEO CARD ROUTES ----------------
  app.post("/api/libraryvideocard", upload.single("video"), library.createlibraryVideoCardController);
  app.get("/api/libraryvideocard", library.getlibraryVideoCardController);
  app.put("/api/libraryvideocard/:id", upload.single("video"), library.updatelibraryVideoCardController);
  app.delete("/api/libraryvideocard/:id", library.deletelibraryVideoCardController);

  // ---------------- RESOURCES ROUTES ----------------

  app.post("/api/library/resources", upload.none(), library.createLibraryResourcesController);
  app.get("/api/library/resources", library.getLibraryResourcesController);
  app.get("/api/library/resources/:id", library.getLibraryResourcesByIdController);
  app.put("/api/library/resources/:id", upload.none(), library.updateLibraryResourcesController);
  app.delete("/api/library/resources/:id", library.deleteLibraryResourcesController);


  //outcome routes
  app.post("/api/outcome", upload.fields([
    { name: "image", maxCount: 1 },
    { name: "pdf", maxCount: 1 }
  ]), outcome.createOutcome);
  app.get("/api/outcome", outcome.getAllOutcomes);
  app.get("/api/outcome/:id", outcome.getOutcomeById);
  app.put("/api/outcome/:id", upload.fields([
    { name: "image", maxCount: 1 },
    { name: "pdf", maxCount: 1 }
  ]), outcome.updateOutcome);
  app.delete("/api/outcome/:id", outcome.deleteOutcome);

  //outcomehero routes
  app.post("/api/outcomehero", upload.single("image"), outcome.createOutcomehero);
  app.get("/api/outcomehero", outcome.getAllOutcomehero);
  app.put("/api/outcomehero/:id", upload.single("image"), outcome.updateOutcomehero);
  app.delete("/api/outcomehero/:id", outcome.deleteOutcomehero);

};
