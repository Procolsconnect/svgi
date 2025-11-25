const homeRoutes = require("./home.route");
const admissionsRoutes = require("./admissions.route");
const academicRoute = require("./academic.route");
const placementRoute = require("./placement.route");
module.exports = function setRoutes(app) {
  homeRoutes(app);
  admissionsRoutes(app);
  academicRoute(app);
  placementRoute(app);
};
