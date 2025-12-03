const NewsReport= require("../../services/news/NewsReportService");

async function createNewsReportController(req, res) {
  try {
    const data = {
      video_url: req.body.video_url,
      title: req.body.title,
      description: req.body.description,
    };

    const result = await NewsReport.createNewsReport(data);

    res.json({
      success: true,
      message: "NewsReport created successfully",
      data: result,
      error: null,
    });
  } catch (err) {
    res.json({
      success: false,
      message: "Failed to create NewsReport",
      data: null,
      error: err.message,
    });
  }
}

async function getNewsReportController(req, res) {
  try {
    const result = await NewsReport.getNewsReport();

    res.json({
      success: true,
      message: "NewsReport fetched successfully",
      data: result,
      error: null,
    });
  } catch (err) {
    res.json({
      success: false,
      message: "Failed to fetch NewsReport",
      data: null,
      error: err.message,
    });
  }
}

async function updateNewsReportController(req, res) {
  try {
    const data = {
      video_url: req.body.video_url,
      title: req.body.title,
      description: req.body.description,
    };

    const result = await NewsReport.updateNewsReport(req.params.id, data);

    res.json({
      success: true,
      message: "NewsReport updated successfully",
      data: result,
      error: null,
    });
  } catch (err) {
    res.json({
      success: false,
      message: "Failed to update NewsReport",
      data: null,
      error: err.message,
    });
  }
}

async function deleteNewsReportController(req, res) {
  try {
    const result = await NewsReport.deleteNewsReport(req.params.id);

    res.json({
      success: true,
      message: "NewsReport deleted successfully",
      data: result,
      error: null,
    });
  } catch (err) {
    res.json({
      success: false,
      message: "Failed to delete NewsReport",
      data: null,
      error: err.message,
    });
  }
}

module.exports = {
  createNewsReportController,
  getNewsReportController,
  updateNewsReportController,
  deleteNewsReportController,
};
