const placement = require("../controllers/Placement/PlacemetOverviewController");
const placementRecords = require("../controllers/Placement/PlacementRecordsController");
const placementProcess = require("../controllers/Placement/PlacementProcessController");

const upload = require("../middleware/multer");

module.exports = function placementRoutes(app) {
  // ---------------- PLACEMENT HERO ROUTES ----------------
  app.post("/api/placementhero", upload.single("image"), placement.createPlacementHeroController);
  app.get("/api/placementhero", placement.getPlacementHeroController);
  app.put("/api/placementhero/:id", upload.single("image"), placement.updatePlacementHeroController);
  app.delete("/api/placementhero/:id", placement.deletePlacementHeroController);

  // ---------------- PLACEMENT SLIDER ROUTES ----------------
  app.post("/api/placementslider", upload.single("image"), placement.createPlacementSliderController);
  app.get("/api/placementslider", placement.getPlacementSliderController);
  app.put("/api/placementslider/:id", upload.single("image"), placement.updatePlacementSliderController);
  app.delete("/api/placementslider/:id", placement.deletePlacementSliderController);

  // ---------------- PLACEMENT RECORDS HERO ROUTES ----------------
  app.post("/api/placementrecordhero", upload.single("image"), placementRecords.createPlacementRecordsHeroController);
  app.get("/api/placementrecordhero", placementRecords.getPlacementRecordsHeroController);
  app.put("/api/placementrecordhero/:id", upload.single("image"), placementRecords.updatePlacementRecordsHeroController);
  app.delete("/api/placementrecordhero/:id", placementRecords.deletePlacementRecordsHeroController);

  // ---------------- PLACEMENT RECORDS SLIDER ROUTES ----------------
  app.post("/api/placementrecordsslider", upload.single("image"), placementRecords.createPlacementRecordsSliderController); 
  app.get("/api/placementrecordsslider", placementRecords.getPlacementRecordsSliderController);
  app.put("/api/placementrecordsslider/:id", upload.single("image"), placementRecords.updatePlacementRecordsSliderController);
  app.delete("/api/placementrecordsslider/:id", placementRecords.deletePlacementRecordsSliderController);

  // ---------------- PLACEMENT RECORDS WORKSPACE ROUTES ----------------
  app.post("/api/placementrecordsworkspace", upload.single("image"), placementRecords.createPlacementRecordsWorkspace);
  app.get("/api/placementrecordsworkspace", placementRecords.getPlacementRecordsWorkspace);
  app.put("/api/placementrecordsworkspace/:id", upload.single("image"), placementRecords.updatePlacementRecordsWorkspace);
  app.delete("/api/placementrecordsworkspace/:id", placementRecords.deletePlacementRecordsWorkspace);

  // ---------------- PLACEMENT RECORDS TEAM ROUTES ----------------
  app.post("/api/placementrecordsteam", upload.single("image"), placementRecords.createPlacementRecordsTeam);
  app.get("/api/placementrecordsteam", placementRecords.getPlacementRecordsTeam);
  app.put("/api/placementrecordsteam/:id", upload.single("image"), placementRecords.updatePlacementRecordsTeam);
  app.delete("/api/placementrecordsteam/:id", placementRecords.deletePlacementRecordsTeam);

  // ---------------- COMPANY CATEGORY ROUTES ----------------
  app.post("/api/company-category", upload.array("images", 300),placementRecords.createCompanyCategoryController);
  app.get("/api/company-category",placementRecords.getCompanyCategoryController);
  app.put("/api/company-category/:id", upload.array("images", 300), placementRecords.updateCompanyCategoryController);
  app.delete("/api/company-category/:id",placementRecords.deleteCompanyCategoryController);

 // ---------------- PLACEMENT RECORDS FAQ ROUTES ----------------
  app.post("/api/placement-records-faq", upload.single("image"),placementRecords. createPlacementRecordsFaqController);
  app.get("/api/placement-records-faq",placementRecords.getPlacementRecordsFaqController);
  app.put("/api/placement-records-faq/:id", upload.single("image"),placementRecords. updatePlacementRecordsFaqController);
  app.delete("/api/placement-records-faq/:id",placementRecords.deletePlacementRecordsFaqController);

  app.post("/api/placement-records-video", upload.single("image"), placementRecords.createPlacementRecordsVideoController);
  app.get("/api/placement-records-video",placementRecords.getPlacementRecordsVideoController);
  app.delete("/api/placement-records-video/:id", placementRecords. deletePlacementRecordsVideoController);

  app.post("/api/placement-process-hero", upload.single("image"),placementProcess. createPlacementProcessHeroController);
  app.get("/api/placement-process-hero",placementProcess. getPlacementProcessHeroController);
  app.put("/api/placement-process-hero/:id", upload.single("image"),placementProcess.updatePlacementProcessHeroController);
  app.delete("/api/placement-process-hero/:id",placementProcess.deletePlacementProcessHeroController);


  app.post("/api/placement-process-card", upload.single("image"), placementProcess.createPlacementProcessCard);
  app.get("/api/placement-process-card",placementProcess. getPlacementProcessCard);
  app.put("/api/placement-process-card/:id", upload.single("image"),placementProcess. updatePlacementProcessCard);
  app.delete("/api/placement-process-card/:id",placementProcess. deletePlacementProcessCard);



};





