const NewsCollege = require("../../services/news/NewsCollegeService");

async function createNewsCollegeController(req, res) {
  try {
    const result = await NewsCollege.createNewsCollege(req.body, req.file);

    res.json({
      success: true,
      message: "NewsCollege created successfully",
      data: result,
      error: null,
    });
  } catch (err) {
    res.json({
      success: false,
      message: "Failed to create NewsCollege",
      data: null,
      error: err.message,
    });
  }
}

async function getNewsCollegeController(req, res) {
  try {
    const result = await NewsCollege.getNewsCollege();

    res.json({
      success: true,
      message: "NewsCollege fetched successfully",
      data: result,
      error: null,
    });
  } catch (err) {
    res.json({
      success: false,
      message: "Failed to fetch NewsCollege",
      data: null,
      error: err.message,
    });
  }
}

async function updateNewsCollegeController(req, res) {
  try {
    const result = await NewsCollege.updateNewsCollege(
      req.params.id,
      req.body,
      req.file
    );

    res.json({
      success: true,
      message: "NewsCollege updated successfully",
      data: result,
      error: null,
    });
  } catch (err) {
    res.json({
      success: false,
      message: "Failed to update NewsCollege",
      data: null,
      error: err.message,
    });
  }
}

async function deleteNewsCollegeController(req, res) {
  try {
    const result = await NewsCollege.deleteNewsCollege(req.params.id);

    res.json({
      success: true,
      message: "NewsCollege deleted successfully",
      data: result,
      error: null,
    });
  } catch (err) {
    res.json({
      success: false,
      message: "Failed to delete NewsCollege",
      data: null,
      error: err.message,
    });
  }
}

module.exports = {
  createNewsCollegeController,
  getNewsCollegeController,
  updateNewsCollegeController,
  deleteNewsCollegeController,
};
