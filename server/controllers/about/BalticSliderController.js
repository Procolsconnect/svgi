const BalticService = require("../../services/about/BalticSliderService");

// -------------------- CREATE (POST) --------------------
const createBalticDataController = async (req, res) => {
    try {
        const data = await BalticService.createData(req.body);

        res.status(201).json({
            success: true,
            message: "Baltic data created successfully",
            data,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Failed to create Baltic data",
            error: err.message,
        });
    }
};

// -------------------- GET ALL (GET) --------------------
const getBalticDataController = async (req, res) => {
    try {
        const data = await BalticService.getData();

        res.status(200).json({
            success: true,
            message: "Baltic data fetched successfully",
            data : data,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Failed to fetch Baltic data",
            error: err.message,
        });
    }
};

// -------------------- UPDATE (PUT) --------------------
const updateBalticDataController = async (req, res) => {
    try {
        const updated = await BalticService.updateData(req.params.id, req.body);

        res.status(200).json({
            success: true,
            message: "Baltic data updated successfully",
            data: updated,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Failed to update Baltic data",
            error: err.message,
        });
    }
};

// -------------------- DELETE (DELETE) --------------------
const deleteBalticDataController = async (req, res) => {
    try {
        const deleted = await BalticService.deleteData(req.params.id);

        res.status(200).json({
            success: true,
            message: "Baltic data deleted successfully",
            data: deleted,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Failed to delete Baltic data",
            error: err.message,
        });
    }
};

module.exports = {
    createBalticDataController,
    getBalticDataController,
    updateBalticDataController,
    deleteBalticDataController,
};
