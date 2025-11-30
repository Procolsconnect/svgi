const Advertisement = require("../../services/advertisement/AdvertisementFacultyService.js");

async function createAdvertisementFacultyController(req, res) {
  try {
    const data = await Advertisement.createAdvertisementFaculty(req.body, req.file);
    res.json({
      success: true,
      message: "AdvertisemenFaculty created successfully",
      data,
      error: null,
    });
  } catch (error) {
    res.json({
      success: false,
      message: "Failed to create AdvertisemenFaculty",
      data: null,
      error,
    });
  }
}

async function getAdvertisementFacultyController(req, res) {
  try {
    const data = await Advertisement.getAdvertisementFaculty();
    res.json({
      success: true,
      message: "AdvertisemenFaculty fetched successfully",
      data,
      error: null,
    });
  } catch (error) {
    res.json({
      success: false,
      message: "Failed to fetch AdvertisemenFaculty",
      data: null,
      error,
    });
  }
}

async function updateAdvertisementFacultyController(req, res) {
  try {
    const data = await Advertisement.updateAdvertisementFaculty(req.params.id, req.body, req.file);
    res.json({
      success: true,
      message: "AdvertisemenFaculty updated successfully",
      data,
      error: null,
    });
  } catch (error) {
    res.json({
      success: false,
      message: "Failed to update AdvertisemenFaculty",
      data: null,
      error,
    });
  }
}

async function deleteAdvertisementFacultyController(req, res) {
  try {
    const data = await Advertisement.deleteAdvertisementFaculty(req.params.id);
    res.json({
      success: true,
      message: "AdvertisemenFaculty deleted successfully",
      data,
      error: null,
    });
  } catch (error) {
    res.json({
      success: false,
      message: "Failed to delete AdvertisemenFaculty",
      data: null,
      error,
    });
  }
}

module.exports = {
  createAdvertisementFacultyController,
  getAdvertisementFacultyController,
  updateAdvertisementFacultyController,
  deleteAdvertisementFacultyController,
};
