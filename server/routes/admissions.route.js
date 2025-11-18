const  ughome = require("../controllers/admissions/UgController");
const  Pghome = require("../controllers/admissions/PgController");
const  research = require("../controllers/admissions/ResearchController");
const procedure = require("../controllers/admissions/ProcedureController");
const overview = require("../controllers/admissions/AdmissionOverviewController");


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

  // ----------- PROCEDURE HERO -----------
  app.post(
    "/api/procedurehero",
    upload.single("image"),
    procedure.createProcedureHero
  );

  app.get(
    "/api/procedurehero",
    procedure.getProcedureHero
  );

  app.put(
    "/api/procedurehero/:id",
    upload.single("image"),
    procedure.updateProcedureHero
  );

  app.delete(
    "/api/procedurehero/:id",
    procedure.deleteProcedureHero
  );


  // ----------- PROCEDURE (VIDEO + STEPS) -----------
  app.post(
    "/api/procedure",
    upload.single("video"),
    procedure.create
  );

  app.get(
    "/api/procedure",
    procedure.getAllController
  );

  app.get(
    "/api/procedure/:id",
    procedure.getOneController
  );

  app.put(
    "/api/procedure/:id",
    upload.single("video"),
    procedure.update
  );

  app.delete(
    "/api/procedure/:id",
    procedure.deleteOne
  );


app.post(
  "/api/overviewhero",
  upload.single("image"),
  overview.createOverviewHero
);

app.get(
  "/api/overviewhero",
  overview.getOverviewHero
);

app.get(
  "/api/overviewhero/:id",
  overview.getOverviewHeroById
);

app.put(
  "/api/overviewhero/:id",
  upload.single("image"),
  overview.updateOverviewHero
);

app.delete(
  "/api/overviewhero/:id",
  overview.deleteOverviewHero
);


// ===================== OVERVIEW CONTENT =====================

// Upload fields for overview main images
const overviewUploads = upload.fields([
  { name: "image1", maxCount: 1 },
  { name: "ug", maxCount: 1 },
  { name: "pg", maxCount: 1 },
  { name: "research", maxCount: 1 },
  { name: "procedure", maxCount: 1 } // procedure image
]);

app.post(
  "/api/overview",
  overviewUploads,
  overview.createOverview
);

app.get(
  "/api/overview",
  overview.getAllOverview
);

app.get(
  "/api/overview/:id",
  overview.getOneOverview
);

app.put(
  "/api/overview/:id",
  overviewUploads,
  overview.updateOverview
);

app.delete(
  "/api/overview/:id",
  overview.deleteOverview
);

app.post("/api/contact-card", upload.single("image"), overview.createCard);
app.get("/api/contact-card", overview.getAllCards);
app.get("/api/contact-card/:id", overview.getOneCard);
app.put("/api/contact-card/:id", upload.single("image"), overview.updateCard);
app.delete("/api/contact-card/:id", overview.deleteCard);

};