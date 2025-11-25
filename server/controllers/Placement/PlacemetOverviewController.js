const PlacementService = require('../../services/placement/PlacementOverviewService');


// CREATE PLACEMENT HERO
async function createPlacementHeroController(req, res) {
  try {
    const hero = await PlacementService.createPlacementHero(req.body, req.file);

    res.status(201).json({
      success: true,
      message: 'Placement hero created successfully',
      data: hero,
    });

  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Failed to create placement hero',
      error: err.message,
    });
  }
}

// GET ALL PLACEMENT HEROES
const getPlacementHeroController = async (req, res) => {
  try {
    const heroes = await PlacementService.getPlacementHeroes();

    res.status(200).json({
      success: true,
      message: 'Placement heroes fetched successfully',
      data: heroes,
    });

  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Failed to fetch placement heroes',
      error: err.message,
    });
  }
};

// UPDATE PLACEMENT HERO
const updatePlacementHeroController = async (req, res) => {
  try {
    const id = req.params.id;
    const hero = await PlacementService.updatePlacementHero(id, req.body, req.file);

    res.status(200).json({
      success: true,
      message: 'Placement hero updated successfully',
      data: hero,
    });

  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Failed to update placement hero',
      error: err.message,
    });
  }
};

// DELETE PLACEMENT HERO
const deletePlacementHeroController = async (req, res) => {
  try {
    const id = req.params.id;
    const deleted = await PlacementService.deletePlacementHero(id);

    res.status(200).json({
      success: true,
      message: 'Placement hero deleted successfully',
      data: deleted,
    });

  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Failed to delete placement hero',
      error: err.message,
    });
  }
};

// CREATE PLACEMENT SLIDER
async function createPlacementSliderController(req, res) {
  try {
    const slider = await PlacementService.createPlacementSlider(req.body, req.file);

    res.status(201).json({
      success: true,
      message: 'Placement slider created successfully',
      data: slider,
    });

  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Failed to create placement slider',
      error: err.message,
    });
  }
}

// GET ALL PLACEMENT SLIDERS
const getPlacementSliderController = async (req, res) => {
  try {
    const sliders = await PlacementService.getPlacementSliders();

    res.status(200).json({
      success: true,
      message: 'Placement sliders fetched successfully',
      data: sliders,
    });

  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Failed to fetch placement sliders',
      error: err.message,
    });
  }
};

// UPDATE PLACEMENT SLIDER
const updatePlacementSliderController = async (req, res) => {
  try {
    const id = req.params.id;
    const slider = await PlacementService.updatePlacementSlider(id, req.body, req.file);

    res.status(200).json({
      success: true,
      message: 'Placement slider updated successfully',
      data: slider,
    });

  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Failed to update placement slider',
      error: err.message,
    });
  }
};

// DELETE PLACEMENT SLIDER
const deletePlacementSliderController = async (req, res) => {
  try {
    const id = req.params.id;
    const deleted = await PlacementService.deletePlacementSlider(id);

    res.status(200).json({
      success: true,
      message: 'Placement slider deleted successfully',
      data: deleted,
    });

  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Failed to delete placement slider',
      error: err.message,
    });
  }
};


module.exports = {
  createPlacementHeroController,
  getPlacementHeroController,
  updatePlacementHeroController,
  deletePlacementHeroController,
  createPlacementSliderController,
  getPlacementSliderController,
  updatePlacementSliderController,
  deletePlacementSliderController,
};