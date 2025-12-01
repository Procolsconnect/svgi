const advertisement = require("../controllers/advertisement/advertisementCardController.js");
const faculty = require("../controllers/advertisement/AdvertisementFacultyController.js");
const upload = require("../middleware/multer");
const { validate } = require("../middleware/validate");
const { auth } = require("../middleware/auth");

const AdverticementRoutes = (app) => {
    app.get("/api/advertisementcard", advertisement.getadvertisementCardController);
    app.post("/api/advertisementcard", upload.single("image"), validate(advertisement.createAdvertisementCardSchema), advertisement.createAdvertisementCardController);
    app.put("/api/advertisementcard/:id", upload.single("image"), validate(advertisement.updateAdvertisementCardSchema), advertisement.updateAdvertisementCardController);
    app.delete("/api/advertisementcard/:id", advertisement.deleteAdvertisementCardController);

app.post("/api/advertisemenfaculty", upload.single("image"),faculty.createAdvertisementFacultyController);
  app.get("/api/advertisemenfaculty",faculty.getAdvertisementFacultyController);
  app.put("/api/advertisemenfaculty/:id", upload.single("image"),faculty. updateAdvertisementFacultyController);
  app.delete("/api/advertisemenfaculty/:id",faculty.deleteAdvertisementFacultyController)
};

module.exports = AdverticementRoutes;
