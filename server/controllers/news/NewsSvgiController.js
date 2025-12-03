const NewsSvgi = require("../../services/news/NewsSvgiService");

async function createNewsSvgiController(req, res) {
  try {
    const data = {
      image1: req.files?.image1?.[0]?.path,
      image2: req.files?.image2?.[0]?.path,
      title: req.body.title,
      description: req.body.description,
    };

    const result = await NewsSvgi.createNewsSvgi(data);

    res.json({
      success: true,
      message: "NewsSvgi created successfully",
      data: result,
      error: null,
    });
  } catch (err) {
    res.json({
      success: false,
      message: "Failed to create NewsSvgi",
      data: null,
      error: err.message,
    });
  }
}

async function getNewsSvgiController(req, res) {
  try {
    const result = await NewsSvgi.getNewsSvgi();

    res.json({
      success: true,
      message: "NewsSvgi fetched successfully",
      data: result,
      error: null,
    });
  } catch (err) {
    res.json({
      success: false,
      message: "Failed to fetch NewsSvgi",
      data: null,
      error: err.message,
    });
  }
}

async function updateNewsSvgiController(req, res) {
  try {
    const data = {
      image1: req.files?.image1?.[0]?.path,
      image2: req.files?.image2?.[0]?.path,
      title: req.body.title,
      description: req.body.description,
    };

    const result = await NewsSvgi.updateNewsSvgi(req.params.id, data);

    res.json({
      success: true,
      message: "NewsSvgi updated successfully",
      data: result,
      error: null,
    });
  } catch (err) {
    res.json({
      success: false,
      message: "Failed to update NewsSvgi",
      data: null,
      error: err.message,
    });
  }
}

async function deleteNewsSvgiController(req, res) {
  try {
    const result = await NewsSvgi.deleteNewsSvgi(req.params.id);

    res.json({
      success: true,
      message: "NewsSvgi deleted successfully",
      data: result,
      error: null,
    });
  } catch (err) {
    res.json({
      success: false,
      message: "Failed to delete NewsSvgi",
      data: null,
      error: err.message,
    });
  }
}

module.exports = {
  createNewsSvgiController,
  getNewsSvgiController,
  updateNewsSvgiController,
  deleteNewsSvgiController,
};
