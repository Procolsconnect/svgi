const BalticController = require("../controllers/about/BalticSliderController");
const OverviewController = require("../controllers/about/AboutOverviewController");
const LeadershipController = require("../controllers/about/leadershipController");
const upload = require("../middleware/multer");

module.exports = function routes(app) {


    /* ------------------ BALTIC ------------------ */
    app.post("/api/baltic-data", BalticController.createBalticDataController);
    app.get("/api/baltic-data", BalticController.getBalticDataController);
    app.put("/api/baltic-data/:id", BalticController.updateBalticDataController);
    app.delete("/api/baltic-data/:id", BalticController.deleteBalticDataController);

    /* ------------------ ABOUT OVERVIEW HERO ------------------ */
    app.post("/api/about/overview/hero", upload.single("image"), OverviewController.createOverviewHero);
    app.get("/api/about/overview/hero", OverviewController.getOverviewHero);
    app.get("/api/about/overview/hero/:id", OverviewController.getOverviewHeroById);
    app.put("/api/about/overview/hero/:id", upload.single("image"), OverviewController.updateOverviewHero);
    app.delete("/api/about/overview/hero/:id", OverviewController.deleteOverviewHero);

    /* ------------------ ABOUT OVERVIEW CONTENT ------------------ */
    app.post(
        "/api/about/overview",
        upload.fields([
            { name: "sectionOneImages", maxCount: 4 },
            { name: "sectionTwoImages", maxCount: 9 }
        ]),
        OverviewController.createOverview
    );
    app.get("/api/about/overview", OverviewController.getAllOverview);
    app.get("/api/about/overview/:id", OverviewController.getOverviewById);
    app.put(
        "/api/about/overview/:id",
        upload.fields([
            { name: "sectionOneImages", maxCount: 4 },
            { name: "sectionTwoImages", maxCount: 9 }
        ]),
        OverviewController.updateOverview
    );
    app.delete("/api/about/overview/:id", OverviewController.deleteOverview);

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
    app.get("/api/leadership/quote",  LeadershipController.getQuotesController);
    app.put("/api/leadership/quote/:id", upload.single("image"), LeadershipController.updateQuoteController);
    app.delete("/api/leadership/quote/:id", LeadershipController.deleteQuoteController);

};
