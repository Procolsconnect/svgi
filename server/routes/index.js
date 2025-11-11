const homeRoutes = require("./home.route");
module.exports = function setRoutes(app) {
  homeRoutes(app);
};
