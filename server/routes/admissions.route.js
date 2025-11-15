const  ughome = require("../controllers/admissions/UgController");
const upload = require("../middleware/multer");
const { validate } = require("../middleware/validate");
const { auth } = require("../middleware/auth");


module.exports = function admissionsRoutes(app) {
  //Hero API
  app.post("/api/ughero", upload.single("image"),ughome.createugHeroController);
  app.get("/api/ughero", ughome.getugHeroController);
  app.put("/api/ughero/:id", upload.single("image"),ughome.updateugHeroController);
  app.delete("/api/ughero/:id", ughome.deleteugHeroController);

  app.post("/api/ugcourse", upload.fields([{ name: "image1", maxCount: 1 }, { name: "image2", maxCount: 1 }, { name: "image3", maxCount: 1 }]),ughome.createUgCourse,);
  app.get("/api/ugcourse", ughome.getAllUgCourses);
  app.put("/api/ugcourse/:id",upload.fields([{ name: "image1", maxCount: 1 }, { name: "image2", maxCount: 1 }, { name: "image3", maxCount: 1 }]),ughome.updateUgCourse,);
  app.delete("/api/ugcourse/:id", ughome.deleteUgCourse);
  app.get("/api/ugcourse/:id", ughome.getUgCourse);
  // 
  app.post("/api/ugcourse", upload.fields([{ name: "image1", maxCount: 1 }, { name: "image2", maxCount: 1 }, { name: "image3", maxCount: 1 }]),ughome.createUgCourse,);
  app.get("/api/ugcourse", ughome.getAllUgCourses);
  app.put("/api/ugcourse/:id",upload.fields([{ name: "image1", maxCount: 1 }, { name: "image2", maxCount: 1 }, { name: "image3", maxCount: 1 }]),ughome.updateUgCourse,);
  app.delete("/api/ugcourse/:id", ughome.deleteUgCourse);
  app.get("/api/ugcourse/:id", ughome.getUgCourse);
   
  

};
