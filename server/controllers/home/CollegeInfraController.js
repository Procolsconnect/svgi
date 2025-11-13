const CampusService = require('../../services/home/CollegeInfraService');

// CREATE
async function createCampusController(req, res) {
  try {
    const campus = await CampusService.createCampus(req.body, req.files);
    res.status(201).json({
      success: true,
      message: 'Campus created successfully',
      data: campus,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Failed to create campus',
      error: err.message,
    });
  }
}

// GET
async function getCampusController(req, res) {
  try {
    const campus = await CampusService.getCampus();
    res.status(200).json({
      success: true,
      message: 'Campus fetched successfully',
      data: campus,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Failed to fetch campus',
      error: err.message,
    });
  }
}

// UPDATE
async function updateCampusController(req, res) {
  try {
    const id = req.params.id;
    const campus = await CampusService.updateCampus(id, req.body, req.files);
    res.status(200).json({
      success: true,
      message: 'Campus updated successfully',
      data: campus,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Failed to update campus',
      error: err.message,
    });
  }
}

// DELETE
async function deleteCampusController(req, res) {
  try {
    const id = req.params.id;
    const campus = await CampusService.deleteCampus(id);
    res.status(200).json({
      success: true,
      message: 'Campus deleted successfully',
      data: campus,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Failed to delete campus',
      error: err.message,
    });
  }
}

module.exports = {
  createCampusController,
  getCampusController,
  updateCampusController,
  deleteCampusController,
};
