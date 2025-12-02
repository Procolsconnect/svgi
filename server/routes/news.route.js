const upload = require("../middleware/multer");
const Newshero = require("../controllers/news/NewsHeroController.js");

module.exports = function newsheroRoutes(app) {
  app.post("/api/newshero", upload.single("image"),Newshero.createNewsheroController);
  app.get("/api/newshero", Newshero.getNewsheroController);
  app.put("/api/newshero/:id", upload.single("image"),Newshero.updateNewsheroController);
  app.delete("/api/newshero/:id",Newshero.deleteNewsheroController);
};
