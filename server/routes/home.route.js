const home = require("../controllers/home/HomeHeroController");
const upload = require("../middleware/multer");

module.exports = function homeRoutes(app) {
  app.post("/api/home",upload.single("media"),home.createHeroController);

};
