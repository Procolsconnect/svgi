const  ughome = require("../controllers/admissions/UgController");
const  Pghome = require("../controllers/admissions/PgController");
const  research = require("../controllers/admissions/ResearchController");
const upload = require("../middleware/multer");
const { validate } = require("../middleware/validate");
const { auth } = require("../middleware/auth");


module.exports = function admissionsRoutes(app) {
  // ug Hero API
  app.post("/api/ughero", upload.single("image"),ughome.createugHeroController);
  app.get("/api/ughero", ughome.getugHeroController);
  app.put("/api/ughero/:id", upload.single("image"),ughome.updateugHeroController);
  app.delete("/api/ughero/:id", ughome.deleteugHeroController);
 //ug course
  app.post("/api/ugcourse", upload.fields([{ name: "image1", maxCount: 1 }, { name: "image2", maxCount: 1 }, { name: "image3", maxCount: 1 }]),ughome.createUgCourse,);
  app.get("/api/ugcourse", ughome.getAllUgCourses);
  app.put("/api/ugcourse/:id",upload.fields([{ name: "image1", maxCount: 1 }, { name: "image2", maxCount: 1 }, { name: "image3", maxCount: 1 }]),ughome.updateUgCourse,);
  app.delete("/api/ugcourse/:id", ughome.deleteUgCourse);
  app.get("/api/ugcourse/:id", ughome.getUgCourse);

  // Pg Courses
  app.post("/api/pgcourse", upload.fields([{ name: "image1", maxCount: 1 }, { name: "image2", maxCount: 1 }, { name: "image3", maxCount: 1 }]),Pghome.createPgCourse,);
  app.get("/api/pgcourse", Pghome.getAllPgCourses);
  app.put("/api/pgcourse/:id",upload.fields([{ name: "image1", maxCount: 1 }, { name: "image2", maxCount: 1 }, { name: "image3", maxCount: 1 }]),Pghome.updatePgCourse,);
  app.delete("/api/pgcourse/:id", Pghome.deletePgCourse);
  app.get("/api/pgcourse/:id", Pghome.getPgCourse);
   // Pg Hero
   app.post("/api/pghero", upload.single("image"),Pghome.createPgHeroController);
  app.get("/api/pghero", Pghome.getPgHeroController);
  app.put("/api/pghero/:id", upload.single("image"),Pghome.updatePgHeroController);
  app.delete("/api/pghero/:id", Pghome.deletePgHeroController);


  // Research Hero
  app.post("/api/researchhero", upload.single("image"),research.createResearchHeroController);
  app.get("/api/researchhero", research.getResearchHeroController);
  app.put("/api/researchhero/:id", upload.single("image"),research.updateResearchHeroController);
  app.delete("/api/researchhero/:id", research.deleteResearchHeroController);
   
  app.post("/api/research", upload.fields([{ name: "image1", maxCount: 1 }, { name: "image2", maxCount: 1 }, { name: "image3", maxCount: 1 }]),research.createResearchCourse,);
  app.get("/api/research", research.getAllResearchCourses);
  app.put("/api/research/:id",upload.fields([{ name: "image1", maxCount: 1 }, { name: "image2", maxCount: 1 }, { name: "image3", maxCount: 1 }]),research.updateResearchCourse,);
  app.delete("/api/research/:id", research.deleteResearchCourse);
  app.get("/api/research/:id", research.getResearchCourse);
};
