const home = require("../controllers/home/HomeHeroController");
const service = require("../controllers/home/ServiceOfferingsController");
const upload = require("../middleware/multer");
const {validate} = require("../middleware/validate");
const {createHeroSchema, updateHeroSchema} = require("../inputvalidations/home.validation");
const {auth} = require("../middleware/auth");

module.exports = function homeRoutes(app) {
  //Hero API
  app.post("/api/hero",upload.single("media"),validate(createHeroSchema),home.createHeroController);
  app.get("/api/hero",home.getHeroController);
  app.put("/api/hero/:id",upload.single("media"),validate(updateHeroSchema),home.updateHeroController);
  app.delete("/api/hero/:id",home.deleteHeroController);

  app.get("/api/service-offerings",service.getServiceOfferingsController);
  app.post("/api/service-offerings",upload.single("image"),service.createServiceOfferingController);
  app.put("/api/service-offerings/:id",upload.single("image"),service.updateServiceOfferingController);
  app.delete("/api/service-offerings/:id",service.deleteServiceOfferingController);



};
