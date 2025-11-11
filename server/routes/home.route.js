const home = require("../controllers/home/HomeHeroController");
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



};
