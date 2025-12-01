const Newshero = require("../../services/news/NewsHeroService");

async function createNewsheroController(req, res) {
  try {
    const data = {
      image: req.file?.path,
      ...req.body,
    };

    const result = await Newshero.createNewshero(data);

    res.json({
      success: true,
      message: "Newshero created successfully",
      data: result,
      error: null,
    });
  } catch (err) {
    res.json({
      success: false,
      message: "Failed to create Newshero",
      data: null,
      error: err.message,
    });
  }
}

async function getNewsheroController(req, res) {
  try {
    const result = await Newshero.getNewshero();

    res.json({
      success: true,
      message: "Newshero fetched successfully",
      data: result,
      error: null,
    });
  } catch (err) {
    res.json({
      success: false,
      message: "Failed to fetch Newshero",
      data: null,
      error: err.message,
    });
  }
}

async function updateNewsheroController(req, res) {
  try {
    const data = {
      ...req.body,
      image: req.file?.path,
    };

    const result = await Newshero.updateNewshero(req.params.id, data);

    res.json({
      success: true,
      message: "Newshero updated successfully",
      data: result,
      error: null,
    });
  } catch (err) {
    res.json({
      success: false,
      message: "Failed to update Newshero",
      data: null,
      error: err.message,
    });
  }
}

async function deleteNewsheroController(req, res) {
  try {
    const result = await Newshero.deleteNewshero(req.params.id);

    res.json({
      success: true,
      message: "Newshero deleted successfully",
      data: result,
      error: null,
    });
  } catch (err) {
    res.json({
      success: false,
      message: "Failed to delete Newshero",
      data: null,
      error: err.message,
    });
  }
}

module.exports = {
  createNewsheroController,
  getNewsheroController,
  updateNewsheroController,
  deleteNewsheroController,
};
