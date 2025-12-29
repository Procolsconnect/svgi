const BalticController = require("../controllers/about/BalticSliderController");
const OverviewController = require("../controllers/about/AboutOverviewController");
const LeadershipController = require("../controllers/about/leadershipController");
const VisMisController = require("../controllers/about/VisMisController")
const upload = require("../middleware/multer");

module.exports = function routes(app) {

    /* ------------------ ABOUT OVERVIEW HERO ------------------ */
    app.post("/api/about/overview/hero", upload.single("image"), OverviewController.createOverviewHero);
    app.get("/api/about/overview/hero", OverviewController.getOverviewHero);
    app.get("/api/about/overview/hero/:id", OverviewController.getOverviewHeroById);
    app.put("/api/about/overview/hero/:id", upload.single("image"), OverviewController.updateOverviewHero);
    app.delete("/api/about/overview/hero/:id", OverviewController.deleteOverviewHero);

    /* ------------------ ABOUT OVERVIEW INTRO ------------------ */
    app.post("/api/about/overview/intro", upload.fields([{ name: "images", maxCount: 10 }]), OverviewController.createOverviewIntro);
    app.get("/api/about/overview/intro", OverviewController.getAllOverviewIntro);
    app.get("/api/about/overview/intro/:id", OverviewController.getOverviewIntroById);
    app.put("/api/about/overview/intro/:id", upload.fields([{ name: "images", maxCount: 10 }]),
        OverviewController.updateOverviewIntro);
    app.delete("/api/about/overview/intro/:id", OverviewController.deleteOverviewIntro);

    /* ------------------ ABOUT OVERVIEW GRID ------------------ */
    app.post("/api/about/overview/grid", upload.fields([{ name: "gridImages", maxCount: 9 }]), OverviewController.createOverviewGrid);
    app.get("/api/about/overview/grid", OverviewController.getAllOverviewGrid);
    app.get("/api/about/overview/grid/:id", OverviewController.getOverviewGridById);
    app.put("/api/about/overview/grid/:id", upload.fields([{ name: "gridImages", maxCount: 4 }]),
        OverviewController.updateOverviewGrid);
    app.delete("/api/about/overview/grid/:id", OverviewController.deleteOverviewGrid);

    /* ------------------ BALTIC ------------------ */
    app.post("/api/about/baltic-data", upload.none(), BalticController.createBalticDataController);
    app.get("/api/about/baltic-data", BalticController.getBalticDataController);
    app.put("/api/about/baltic-data/:id", upload.none(), BalticController.updateBalticDataController);
    app.delete("/api/about/baltic-data/:id", BalticController.deleteBalticDataController);

    /* ------------------ LEADERSHIP HERO ------------------ */
    app.post("/api/leadership/hero", upload.single("image"), LeadershipController.createHeroController);
    app.get("/api/leadership/hero", LeadershipController.getHeroController);
    app.put("/api/leadership/hero/:id", upload.single("image"), LeadershipController.updateHeroController);
    app.delete("/api/leadership/hero/:id", LeadershipController.deleteHeroController);

    /* ------------------ MATERIAL CARDS ------------------ */
    app.post("/api/leadership/material-card", upload.single("image"), LeadershipController.createMaterialCardController);
    app.get("/api/leadership/material-card", LeadershipController.getMaterialCardsController);
    app.put("/api/leadership/material-card/:id", upload.single("image"), LeadershipController.updateMaterialCardController);
    app.delete("/api/leadership/material-card/:id", LeadershipController.deleteMaterialCardController);

    /* ------------------ QUOTE CARDS ------------------ */
    app.post("/api/leadership/quote", upload.single("image"), LeadershipController.createQuoteController);
    app.get("/api/leadership/quote", LeadershipController.getQuotesController);
    app.put("/api/leadership/quote/:id", upload.single("image"), LeadershipController.updateQuoteController);
    app.delete("/api/leadership/quote/:id", LeadershipController.deleteQuoteController);

    /* ------------------ Vission Mission --------------------*/
    app.post("/api/about/vismishero", upload.single("image"), VisMisController.createVMHero);
    app.get("/api/about/vismishero", VisMisController.getOverviewHero);
    app.get("/api/about/vismishero/:id", VisMisController.getOverviewHeroById);
    app.put("/api/about/vismishero/:id", upload.single("image"), VisMisController.updateOverviewHero);
    app.delete("/api/about/vismishero/:id", VisMisController.deleteOverviewHero);

    /* ------------------ Vission Mission Card Section --------------------*/
    app.post("/api/about/vismiscard", upload.single("image"), VisMisController.createVMCard);
    app.get("/api/about/vismiscard", VisMisController.getVMCard);
    app.get("/api/about/vismiscard/:id", VisMisController.getVMCardByID);
    app.put("/api/about/vismiscard/:id", upload.single("image"), VisMisController.updateVMCard);
    app.delete("/api/about/vismiscard/:id", VisMisController.deleteVMCard);

    /* ------------------ Vission Mission List Section --------------------*/
    app.post("/api/about/vismislist", upload.single("image"), VisMisController.createMVVSection);
    app.get("/api/about/vismislist", VisMisController.getAllMVVSections);
    app.get("/api/about/vismislist/:id", VisMisController.getAllMVVSections);
    app.put("/api/about/vismislist/:id", upload.single("image"), VisMisController.updateMVVSection);
    app.delete("/api/about/vismislist/:id", VisMisController.deleteMVVSection);

    /* ------------------ Vission Mission Circular Section --------------------*/
    app.post("/api/about/vismiscircle", upload.single("image"), VisMisController.createCampusCircle);
    app.get("/api/about/vismiscircle", VisMisController.getCampusCircles);
    app.get("/api/about/vismiscircle/:id", VisMisController.getCampusCircleById);
    app.put("/api/about/vismiscircle/:id", upload.single("image"), VisMisController.updateCampusCircle);
    app.delete("/api/about/vismiscircle/:id", VisMisController.deleteCampusCircle);
};
