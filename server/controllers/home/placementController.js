const placementService = require("../../services/home/placementService");

// CREATE placement
// controllers/home/placementController.js
const createPlacementController = async (req, res) => {
  try {
    const file = req.file;
    const body = req.body;

    const result = await placementService.createPlacement(body, file);

    return res.status(201).json({
      success: true,
      message: "Placement added successfully",
      data: result,
    });
  } catch (error) {
    console.error("❌ Error creating placement:", error);
    console.error("Error details:", JSON.stringify(error, null, 2)); // 👈 key addition

    return res.status(500).json({
      success: false,
      message: "Failed to add placement",
      error: error.message || error.toString(),
    });
  }
};



// GET all placements
const getPlacementsController = async (req, res) => {
  try {
    const result = await placementService.getAllPlacements();
    res.status(200).json({
      message: "Placements fetched successfully",
      data: result,
    });
  } catch (error) {
    console.error("Error fetching placements:", error);
    res.status(500).json({
      message: "Failed to fetch placements",
      error: error.message,
    });
  }
};

// GET single placement by ID (optional)
const getPlacementByIdController = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await placementService.getPlacementById(id);

    res.status(200).json({
      message: "Placement fetched successfully",
      data: result,
    });
  } catch (error) {
    console.error("Error fetching placement:", error);
    res.status(500).json({
      message: "Failed to fetch placement",
      error: error.message,
    });
  }
};

// UPDATE placement
const updatePlacementController = async (req, res) => {
  try {
    const id = req.params.id;
    const file = req.file;
    const body = req.body;

    const result = await placementService.updatePlacement(id, body, file);

    res.status(200).json({
      message: "Placement updated successfully",
      data: result,
    });
  } catch (error) {
    console.error("Error updating placement:", error);
    res.status(500).json({
      message: "Failed to update placement",
      error: error.message,
    });
  }
};

// DELETE placement
const deletePlacementController = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await placementService.deletePlacement(id);

    if (result) {
      res.status(200).json({ message: "Placement deleted successfully" });
    } else {
      res.status(404).json({ message: "Placement not found" });
    }
  } catch (error) {
    console.error("Error deleting placement:", error);
    res.status(500).json({
      message: "Failed to delete placement",
      error: error.message,
    });
  }
};

module.exports = {
  createPlacementController,
  getPlacementsController,
  getPlacementByIdController,
  updatePlacementController,
  deletePlacementController,
};
