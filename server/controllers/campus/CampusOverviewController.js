const CampusOverviewService = require("../../services/campus/CampusOverViewService");

async function createOverviewHero(req, res) {
  try {
    const hero = await CampusOverviewService.createOverviewHero(req.body, req.file);
    res.status(201).json({
      success: true,
      message: "Campus Overview Hero created successfully",
      data: hero,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to create Campus Overview Hero",
      error: err.message,
    });
  }
}

async function getOverviewHero(req, res) {
  try {
    const heroes = await CampusOverviewService.getOverviewHero();
    res.status(200).json({
      success: true,
      message: "Campus Overview Heroes fetched successfully",
      data: heroes,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch Campus Overview Heroes",
      error: err.message,
    });
  }
}

async function getOverviewHeroById(req, res) {
  try {
    const hero = await CampusOverviewService.getOverviewHeroById(req.params.id);
    res.status(200).json({
      success: true,
      message: "Campus Overview Hero fetched successfully",
      data: hero,
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: "Campus Overview Hero not found",
      error: err.message,
    });
  }
}

async function updateOverviewHero(req, res) {
  try {
    const hero = await CampusOverviewService.updateOverviewHero(req.params.id, req.body, req.file);
    res.status(200).json({
      success: true,
      message: "Campus Overview Hero updated successfully",
      data: hero,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to update Campus Overview Hero",
      error: err.message,
    });
  }
}

async function deleteOverviewHero(req, res) {
  try {
    const hero = await CampusOverviewService.deleteOverviewHero(req.params.id);
    res.status(200).json({
      success: true,
      message: "Campus Overview Hero deleted successfully",
      data: hero,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to delete Campus Overview Hero",
      error: err.message,
    });
  }
}

module.exports = {
  createOverviewHero,
  getOverviewHero,
  getOverviewHeroById,
  updateOverviewHero,
  deleteOverviewHero,
};