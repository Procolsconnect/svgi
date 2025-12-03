const Newssection = require("../../services/news/NewsSectionService");

async function createNewssectionController(req, res) {
  try {
    const data = {
      image: req.file?.path,
      title: req.body.title,
      description: req.body.description,
    };

    const result = await Newssection.createNewssection(data);

    res.json({
      success: true,
      message: "Newssection created successfully",
      data: result,
      error: null,
    });
  } catch (err) {
    res.json({
      success: false,
      message: "Failed to create Newssection",
      data: null,
      error: err.message,
    });
  }
}

async function getNewssectionController(req, res) {
  try {
    const result = await Newssection.getNewssection();

    res.json({
      success: true,
      message: "Newssection fetched successfully",
      data: result,
      error: null,
    });
  } catch (err) {
    res.json({
      success: false,
      message: "Failed to fetch Newssection",
      data: null,
      error: err.message,
    });
  }
}

async function updateNewssectionController(req, res) {
  try {
    const data = {
      image: req.file?.path,
      title: req.body.title,
      description: req.body.description,
    };

    const result = await Newssection.updateNewssection(req.params.id, data);

    res.json({
      success: true,
      message: "Newssection updated successfully",
      data: result,
      error: null,
    });
  } catch (err) {
    res.json({
      success: false,
      message: "Failed to update Newssection",
      data: null,
      error: err.message,
    });
  }
}

async function deleteNewssectionController(req, res) {
  try {
    const result = await Newssection.deleteNewssection(req.params.id);

    res.json({
      success: true,
      message: "Newssection deleted successfully",
      data: result,
      error: null,
    });
  } catch (err) {
    res.json({
      success: false,
      message: "Failed to delete Newssection",
      data: null,
      error: err.message,
    });
  }
}

module.exports = {
  createNewssectionController,
  getNewssectionController,
  updateNewssectionController,
  deleteNewssectionController,
};
