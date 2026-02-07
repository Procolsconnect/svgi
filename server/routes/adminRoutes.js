const adminController = require('../controllers/adminController');
const adminAuth = require('../middleware/authMiddleware');

module.exports = function adminRoutes(app) {
    // Public route
    app.post('/api/admin/login', adminController.login);
    app.post('/api/admin/logout', adminController.logout);

    // Protected routes
    app.get('/api/admin/me', adminAuth, adminController.getMe);
    app.put('/api/admin/change-password', adminAuth, adminController.changePassword);
};
