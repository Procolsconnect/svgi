const campusOverview = require("../controllers/campus/CampusOverviewController");
const upload = require("../middleware/multer");
const { validate } = require("../middleware/validate");
const campusSchemas = require("../inputvalidations/campus.validation");
const campusHostel = require("../controllers/campus/CampusHostelController");
const campusHealth = require("../controllers/campus/CampusHealthController");
const campusFestival = require("../controllers/campus/CampusFestivalController");
const campusGreensvgi = require("../controllers/campus/CampusGreensvgiController");

module.exports = function campusRoutes(app) {
    // CAMPUS OVERVIEW HERO API
    app.post(
        "/api/campus/overviewhero",
        upload.single("image"),
        validate(campusSchemas.createOverviewSchema),
        campusOverview.createOverviewHero
    );

    app.get(
        "/api/campus/overviewhero",
        campusOverview.getOverviewHero
    );

    app.get(
        "/api/campus/overviewhero/:id",
        campusOverview.getOverviewHeroById
    );

    app.put(
        "/api/campus/overviewhero/:id",
        upload.single("image"),
        validate(campusSchemas.updateOverviewSchema),
        campusOverview.updateOverviewHero
    );

    app.delete(
        "/api/campus/overviewhero/:id",
        campusOverview.deleteOverviewHero
    );

    // CAMPUS SPORTS HERO API
    const campusSports = require("../controllers/campus/CampusSportsController");

    // CAMPUS HOSTEL HERO API
    app.post(
        "/api/campus/hostelhero",
        upload.single("image"),
        validate(campusSchemas.createHostelSchema),
        campusHostel.createHostelHero
    );

    app.get(
        "/api/campus/hostelhero",   
        campusHostel.getHostelHero
    );

    app.get(
        "/api/campus/hostelhero/:id",
        campusHostel.getHostelHeroById
    );

    app.put(
        "/api/campus/hostelhero/:id",
        upload.single("image"),
        validate(campusSchemas.updateHostelSchema),
        campusHostel.updateHostelHero
    );

    app.delete(
        "/api/campus/hostelhero/:id",
        campusHostel.deleteHostelHero
    );

    // CAMPUS HEALTH HERO API
    app.post(
        "/api/campus/healthhero",
        upload.single("image"),
        validate(campusSchemas.createHealthHeroSchema),
        campusHealth.createHealthHero
    );

    app.get(
        "/api/campus/healthhero",
        campusHealth.getHealthHero
    );

    app.get(
        "/api/campus/healthhero/:id",
        campusHealth.getHealthHeroById
    );

    app.put(
        "/api/campus/healthhero/:id",
        upload.single("image"),
        validate(campusSchemas.updateHealthHeroSchema),
        campusHealth.updateHealthHero
    );

    app.delete(
        "/api/campus/healthhero/:id",
        campusHealth.deleteHealthHero
    );

    // CAMPUS FESTIVAL HERO API
    app.post(
        "/api/campus/festivalhero",
        upload.single("image"),
        validate(campusSchemas.createFestivalHeroSchema),
        campusFestival.createFestivalHero
    );

    app.get(
        "/api/campus/festivalhero",
        campusFestival.getFestivalHero
    );

    app.get(
        "/api/campus/festivalhero/:id",
        campusFestival.getFestivalHeroById
    );

    app.put(
        "/api/campus/festivalhero/:id",
        upload.single("image"),
        validate(campusSchemas.updateFestivalHeroSchema),
        campusFestival.updateFestivalHero
    );

    app.delete(
        "/api/campus/festivalhero/:id",
        campusFestival.deleteFestivalHero
    );

    // CAMPUS GREENSVGI HERO API
    app.post(
        "/api/campus/greensvgihero",
        upload.single("image"),
        validate(campusSchemas.createGreensvgiHeroSchema),
        campusGreensvgi.createGreensvgiHero
    );

    app.get(
        "/api/campus/greensvgihero",
        campusGreensvgi.getGreensvgiHero
    );

    app.get(
        "/api/campus/greensvgihero/:id",
        campusGreensvgi.getGreensvgiHeroById
    );

    app.put(
        "/api/campus/greensvgihero/:id",
        upload.single("image"),
        validate(campusSchemas.updateGreensvgiHeroSchema),
        campusGreensvgi.updateGreensvgiHero
    );

    app.delete(
        "/api/campus/greensvgihero/:id",
        campusGreensvgi.deleteGreensvgiHero
    );

    // CAMPUS GREENSVGI IMAGE API
    app.post(
        "/api/campus/greensvgiimage",
        upload.single("image"),
        validate(campusSchemas.createGreensvgiImageSchema),
        campusGreensvgi.createGreensvgiImage
    );

    app.get(
        "/api/campus/greensvgiimage",
        campusGreensvgi.getGreensvgiImages
    );

    app.get(
        "/api/campus/greensvgiimage/:id",
        campusGreensvgi.getGreensvgiImageById
    );

    app.put(
        "/api/campus/greensvgiimage/:id",
        upload.single("image"),
        validate(campusSchemas.updateGreensvgiImageSchema),
        campusGreensvgi.updateGreensvgiImage
    );

    app.delete(
        "/api/campus/greensvgiimage/:id",
        campusGreensvgi.deleteGreensvgiImage
    );

    // CAMPUS GREENSVGI IMAGE GALLARY API
    app.post(
        "/api/campus/greensvgiimagegallary",
        upload.single("image"),
        validate(campusSchemas.createGreensvgiImageGallarySchema),
        campusGreensvgi.createGreensvgiImageGallary
    );

    app.get(
        "/api/campus/greensvgiimagegallary",
        campusGreensvgi.getGreensvgiImageGallaries
    );

    app.get(
        "/api/campus/greensvgiimagegallary/:id",
        campusGreensvgi.getGreensvgiImageGallaryById
    );

    app.put(
        "/api/campus/greensvgiimagegallary/:id",
        upload.single("image"),
        validate(campusSchemas.updateGreensvgiImageGallarySchema),
        campusGreensvgi.updateGreensvgiImageGallary
    );

    app.delete(
        "/api/campus/greensvgiimagegallary/:id",
        campusGreensvgi.deleteGreensvgiImageGallary
    );

    // CAMPUS FESTIVAL CARD API
    app.post(
        "/api/campus/festivalcard",
        upload.single("image"),
        validate(campusSchemas.createFestivalCardSchema),
        campusFestival.createFestivalCard
    );

    app.get(
        "/api/campus/festivalcard",
        campusFestival.getFestivalCard
    );

    app.get(
        "/api/campus/festivalcard/:id",
        campusFestival.getFestivalCardById
    );

    app.put(
        "/api/campus/festivalcard/:id",
        upload.single("image"),
        validate(campusSchemas.updateFestivalCardSchema),
        campusFestival.updateFestivalCard
    );

    app.delete(
        "/api/campus/festivalcard/:id",
        campusFestival.deleteFestivalCard
    );
    // CAMPUS FESTIVAL EVENT API
    app.post(
        "/api/campus/festivalevent",
        upload.single("image"),
        validate(campusSchemas.createFestivalEventSchema),
        campusFestival.createFestivalEvent
    );

    app.get(
        "/api/campus/festivalevent",
        campusFestival.getFestivalEvent
    );

    app.get(
        "/api/campus/festivalevent/:id",
        campusFestival.getFestivalEventById
    );

    app.put(
        "/api/campus/festivalevent/:id",
        upload.single("image"),
        validate(campusSchemas.updateFestivalEventSchema),
        campusFestival.updateFestivalEvent
    );

    app.delete(
        "/api/campus/festivalevent/:id",
        campusFestival.deleteFestivalEvent
    );
    // CAMPUS HEALTH CARD API
    app.post(
        "/api/campus/healthcard",
        upload.single("image"),
        validate(campusSchemas.createHealthCardSchema),
        campusHealth.createHealthCard
    );

    app.get(
        "/api/campus/healthcard",
        campusHealth.getHealthCard
    );

    app.get(
        "/api/campus/healthcard/:id",
        campusHealth.getHealthCardById
    );

    app.put(
        "/api/campus/healthcard/:id",
        upload.single("image"),
        validate(campusSchemas.updateHealthCardSchema),
        campusHealth.updateHealthCard
    );

    app.delete(
        "/api/campus/healthcard/:id",
        campusHealth.deleteHealthCard
    );

    // CAMPUS HOSTEL CARD API
    app.post(
        "/api/campus/hostelcard",
        upload.single("image"),
        validate(campusSchemas.createHostelCardSchema),
        campusHostel.createHostelCard
    );

    app.get(
        "/api/campus/hostelcard",
        campusHostel.getHostelCard
    );

    app.get(
        "/api/campus/hostelcard/:id",
        campusHostel.getHostelCardById
    );

    app.put(
        "/api/campus/hostelcard/:id",
        upload.single("image"),
        validate(campusSchemas.updateHostelCardSchema),
        campusHostel.updateHostelCard
    );

    app.delete(
        "/api/campus/hostelcard/:id",
        campusHostel.deleteHostelCard
    );

    // CAMPUS HOSTEL FAQ API
    app.post(
        "/api/campus/hostelfaq",
        validate(campusSchemas.createHostelFaqSchema),
        campusHostel.createHostelFaq
    );

    app.get(
        "/api/campus/hostelfaq",
        campusHostel.getHostelFaq
    );

    app.get(
        "/api/campus/hostelfaq/:id",
        campusHostel.getHostelFaqById
    );

    app.put(
        "/api/campus/hostelfaq/:id",
        validate(campusSchemas.updateHostelFaqSchema),
        campusHostel.updateHostelFaq
    );

    app.delete(
        "/api/campus/hostelfaq/:id",
        campusHostel.deleteHostelFaq
    );

    app.post(
        "/api/campus/sportshero",
        upload.single("image"),
        validate(campusSchemas.createSportsHeroSchema),
        campusSports.createSportsHero
    );

    app.get(
        "/api/campus/sportshero",
        campusSports.getSportsHero
    );

    app.get(
        "/api/campus/sportshero/:id",
        campusSports.getSportsHeroById
    );

    app.put(
        "/api/campus/sportshero/:id",
        upload.single("image"),
        validate(campusSchemas.updateSportsHeroSchema),
        campusSports.updateSportsHero
    );

    app.delete(
        "/api/campus/sportshero/:id",
        campusSports.deleteSportsHero
    );

    // CAMPUS SPORTS CARD API (use CampusSportsController)
    app.post(
        "/api/campus/sportscard",
        upload.single("image"),
        validate(campusSchemas.createSportsCardSchema),
        campusSports.createSportsCard
    );

    app.get(
        "/api/campus/sportscard",
        campusSports.getSportsCard
    );

    app.get(
        "/api/campus/sportscard/:id",
        campusSports.getSportsCardById
    );

    app.put(
        "/api/campus/sportscard/:id",
        upload.single("image"),
        validate(campusSchemas.updateSportsCardSchema),
        campusSports.updateSportsCard
    );

    app.delete(
        "/api/campus/sportscard/:id",
        campusSports.deleteSportsCard
    );

    // CAMPUS SPORTS ACHEIVEMENT API (use CampusSportsController)
    app.post(
        "/api/campus/sportsacheivement",
        upload.single("image"),
        validate(campusSchemas.createSportsAcheivementSchema),
        campusSports.createSportsAcheivement
    );

    app.get(
        "/api/campus/sportsacheivement",
        campusSports.getSportsAcheivement
    );

    app.get(
        "/api/campus/sportsacheivement/:id",
        campusSports.getSportsAcheivementById
    );

    app.put(
        "/api/campus/sportsacheivement/:id",
        upload.single("image"),
        validate(campusSchemas.updateSportsAcheivementSchema),
        campusSports.updateSportsAcheivement
    );

    app.delete(
        "/api/campus/sportsacheivement/:id",
        campusSports.deleteSportsAcheivement
    );

    // CAMPUS SPORTS VIDEO API (use CampusSportsController)
    app.post(
        "/api/campus/sportsvideo",
        upload.single("video"),
        validate(campusSchemas.createSportsVideoSchema),
        campusSports.createSportsVideo
    );

    app.get(
        "/api/campus/sportsvideo",
        campusSports.getSportsVideo
    );

    app.get(
        "/api/campus/sportsvideo/:id",
        campusSports.getSportsVideoById
    );

    app.put(
        "/api/campus/sportsvideo/:id",
        upload.single("video"),
        validate(campusSchemas.updateSportsVideoSchema),
        campusSports.updateSportsVideo
    );

    app.delete(
        "/api/campus/sportsvideo/:id",
        campusSports.deleteSportsVideo
    );

    // CAMPUS SPORTS ATHELETS API (use CampusSportsController)
    app.post(
        "/api/campus/sportsathelets",
        upload.single("image"),
        validate(campusSchemas.createSportsAtheletSchema),
        campusSports.createSportsAthelet
    );

    app.get(
        "/api/campus/sportsathelets",
        campusSports.getSportsAthelet
    );

    app.get(
        "/api/campus/sportsathelets/:id",
        campusSports.getSportsAtheletById
    );

    app.put(
        "/api/campus/sportsathelets/:id",
        upload.single("image"),
        validate(campusSchemas.updateSportsAtheletSchema),
        campusSports.updateSportsAthelet
    );

    app.delete(
        "/api/campus/sportsathelets/:id",
        campusSports.deleteSportsAthelet
    );
};