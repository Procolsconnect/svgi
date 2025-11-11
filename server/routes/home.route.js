const home = require("../controllers/home/HomeHeroController");
const Institution = require("../controllers/home/InstutionController");
const upload = require("../middleware/multer");
const {validate} = require("../middleware/validate");
const {auth} = require("../middleware/auth");
const {
  createHeroSchema,
  updateHeroSchema, 
  createInstitutionSchema, 
  updateInstitutionSchema } = require("../inputvalidations/home.validation");


module.exports = function homeRoutes(app) {
  //Hero API
  app.post("/api/hero",upload.single("media"),validate(createHeroSchema),home.createHeroController);
  app.get("/api/hero",home.getHeroController);
  app.put("/api/hero/:id",upload.single("media"),validate(updateHeroSchema),home.updateHeroController);
  app.delete("/api/hero/:id",home.deleteHeroController);

  //Institution API
  app.post("/api/institution",upload.fields([{ name: "image", maxCount: 1 }, { name: "logo", maxCount: 1 }]),validate(createInstitutionSchema),Institution.createInstitutionController);

  app.get("/api/institution",Institution.getInstitutionsController);
  app.put("/api/institution/:id",upload.fields([{ name: "image", maxCount: 1 }, { name: "logo", maxCount: 1 }]),validate(updateInstitutionSchema),Institution.updateInstitutionController);
  app.delete("/api/institution/:id",Institution.deleteInstitutionController);  

};
