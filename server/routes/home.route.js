const home = require("../controllers/home/HomeHeroController");
const Institution = require("../controllers/home/InstutionController");
const service = require("../controllers/home/ServiceOfferingsController");
const placement = require("../controllers/home/PlacementSwiperController");
const infra = require("../controllers/home/CollegeInfraController");
const studentAchivement = require("../controllers/home/StudenAchivementController");
const upload = require("../middleware/multer");
const { validate } = require("../middleware/validate");
const { auth } = require("../middleware/auth");
const {
  createHeroSchema,
  updateHeroSchema,
  createInstitutionSchema,
  updateInstitutionSchema } = require("../inputvalidations/home.validation");

const placementController = require("../controllers/home/placementController");
const eventController = require("../controllers/home/eventController");
const teamController = require("../controllers/home/teamController");


const { Logo, Logo1 } = require("../models/home");

// Import the factory function for logo controllers
const createLogoController = require("../controllers/home/logoController");

// Create separate controller instances for each collection
const logoSection1 = createLogoController(Logo);
const logoSection2 = createLogoController(Logo1);


module.exports = function homeRoutes(app) {
  //Hero API
  app.post("/api/hero", upload.single("media"), validate(createHeroSchema), home.createHeroController);
  app.get("/api/hero", home.getHeroController);
  app.put("/api/hero/:id", upload.single("media"), validate(updateHeroSchema), home.updateHeroController);
  app.delete("/api/hero/:id", home.deleteHeroController);

  //Service Offering API
  app.get("/api/service-offerings", service.getServiceOfferingsController);
  app.post("/api/service-offerings", upload.single("image"), service.createServiceOfferingController);
  app.put("/api/service-offerings/:id", upload.single("image"), service.updateServiceOfferingController);
  app.delete("/api/service-offerings/:id", service.deleteServiceOfferingController);

  //Institution API
  app.post("/api/institution", upload.fields([{ name: "image", maxCount: 1 }, { name: "logo", maxCount: 1 }]), validate(createInstitutionSchema), Institution.createInstitutionController);
  app.get("/api/institution", Institution.getInstitutionsController);
  app.put("/api/institution/:id", upload.fields([{ name: "image", maxCount: 1 }, { name: "logo", maxCount: 1 }]), validate(updateInstitutionSchema), Institution.updateInstitutionController);
  app.delete("/api/institution/:id", Institution.deleteInstitutionController);

  //placemet swiper API
  app.get("/api/placement-swiper", placement.getPlacementSwiperController);
  app.post("/api/placement-swiper", upload.single("image"), placement.createPlacementSwiperController);
  app.delete("/api/placement-swiper/:id", placement.deletePlacementSwiperController);

  //Collage API
  app.post(
    "/api/campus",
    upload.fields([
      { name: "images", maxCount: 5 },
      { name: "video", maxCount: 1 },
      { name: "image", maxCount: 1 },
    ]),
    infra.createCampusController
  );

  app.get("/api/campus", infra.getCampusController);
  app.put(
    "/api/campus/:id",
    upload.fields([
      { name: "images", maxCount: 5 },
      { name: "video", maxCount: 1 },
      { name: "image", maxCount: 1 },
    ]),
    infra.updateCampusController
  );
  app.delete("/api/campus/:id", infra.deleteCampusController);

  // Placements Card API
  app.get("/api/placements", placementController.getPlacementsController);
  app.post("/api/placements", upload.single("img"), placementController.createPlacementController);
  app.get("/api/placements/:id", placementController.getPlacementByIdController);
  app.put("/api/placements/:id", upload.single("img"), placementController.updatePlacementController);
  app.delete("/api/placements/:id", placementController.deletePlacementController);

  // Student Achievements
 app.get("/api/student-achievements", studentAchivement.getStudentAchivementController);
  app.post(
    "/api/student-achievements",
    upload.single("image"),
    studentAchivement.createStudentAchivementController
  );
  app.put(
    "/api/student-achievements/:id",
    upload.single("image"),
    studentAchivement.updateStudentAchivementController
  );
  app.delete(
    "/api/student-achievements/:id",
    studentAchivement.deleteStudentAchivementController
  );

  // Events API
  app.post("/api/events", upload.single("img"), eventController.createEventController);
  app.get("/api/events", eventController.getEventsController);
  app.get("/api/events/:id", eventController.getEventByIdController);
  app.put("/api/events/:id", upload.single("img"), eventController.updateEventController);
  app.delete("/api/events/:id", eventController.deleteEventController);

  // Team Member API
  app.post("/api/ourteam", upload.single("img"), teamController.createTeamController);
  app.get("/api/ourteam", teamController.getTeamMembersController);
  app.get("/api/ourteam/:id", teamController.getTeamMemberByIdController);
  app.put("/api/ourteam/:id", upload.single("img"), teamController.updateTeamController);
  app.delete("/api/ourteam/:id", teamController.deleteTeamController);

  // Define routes for Logo Section 1
  app.post("/api/logosection1", upload.single("img"), logoSection1.createLogoController);
  app.get("/api/logosection1", logoSection1.getLogosController);
  app.get("/api/logosection1/:id", logoSection1.getLogoByIdController);
  app.put("/api/logosection1/:id", upload.single("img"), logoSection1.updateLogoController);
  app.delete("/api/logosection1/:id", logoSection1.deleteLogoController);

  // Define routes for Logo Section 2
  app.post("/api/logosection2", upload.single("img"), logoSection2.createLogoController);
  app.get("/api/logosection2", logoSection2.getLogosController);
  app.get("/api/logosection2/:id", logoSection2.getLogoByIdController);
  app.put("/api/logosection2/:id", upload.single("img"), logoSection2.updateLogoController);
  app.delete("/api/logosection2/:id", logoSection2.deleteLogoController);


};
