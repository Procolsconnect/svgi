const homeRoutes = require("./home.route");
const admissionsRoutes = require("./admissions.route");
module.exports = function setRoutes(app) {
  homeRoutes(app);
  admissionsRoutes(app);
};
