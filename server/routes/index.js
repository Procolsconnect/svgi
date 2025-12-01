const homeRoutes = require("./home.route");
const admissionsRoutes = require("./admissions.route");
const academicRoute = require("./academic.route");
const placementRoute = require("./placement.route");
const campusRoutes = require("./campus.route");
const AdvertisemenRoutes = require("./advertisement.route");
const newsRoutes = require("./news.route");
module.exports = function setRoutes(app) {
  homeRoutes(app);
  admissionsRoutes(app);
  academicRoute(app);
  placementRoute(app);
  campusRoutes(app);
  AdvertisemenRoutes(app);
  newsRoutes(app);

};
