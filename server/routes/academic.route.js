const academics = require("../controllers/academics/AcademicsController");
const upload = require("../middleware/multer");

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

 //feedback
   app.post("/api/feedbackhero", upload.single("image"), academics.createfeedbackHeroController);
  app.get("/api/feedbackhero", academics.getfeedbackHeroController);
  app.put("/api/feedbackhero/:id", upload.single("image"), academics.updatefeedbackHeroController);
  app.delete("/api/feedbackhero/:id", academics.deletefeedbackHeroController);



};
