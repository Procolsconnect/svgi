const PlacementRecordsService = require('../../services/placement/PlacementRecordsService');

// CREATE HERO ******************************************
async function createPlacementRecordsHeroController(req, res) {
  try {
    const hero = await PlacementRecordsService.createPlacementRecordsHero(req.body, req.file);

    res.status(201).json({
      success: true,
      message: 'Placement records hero created successfully',
      data: hero,
    });

  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Failed to create placement records hero',
      error: err.message,
    });
  }
}

// GET ALL
const getPlacementRecordsHeroController = async (req, res) => {
  try {
    const heroes = await PlacementRecordsService.getPlacementRecordsHeroes();

    res.status(200).json({
      success: true,
      message: 'Placement records heroes fetched successfully',
      data: heroes,
    });

  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Failed to fetch placement records heroes',
      error: err.message,
    });
  }
};

// UPDATE
const updatePlacementRecordsHeroController = async (req, res) => {
  try {
    const id = req.params.id;
    const hero = await PlacementRecordsService.updatePlacementRecordsHero(id, req.body, req.file);

    res.status(200).json({
      success: true,
      message: 'Placement records hero updated successfully',
      data: hero,
    });

  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Failed to update placement records hero',
      error: err.message,
    });
  }
};

// DELETE
const deletePlacementRecordsHeroController = async (req, res) => {
  try {
    const id = req.params.id;
    const deleted = await PlacementRecordsService.deletePlacementRecordsHero(id);

    res.status(200).json({
      success: true,
      message: 'Placement records hero deleted successfully',
      data: deleted,
    });

  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Failed to delete placement records hero',
      error: err.message,
    });
  }
};

// CREATE SLIDER ******************************************
async function createPlacementRecordsSliderController(req, res) {
  try {
    const data = await PlacementRecordsService.createPlacementRecordsSlider(req.body, req.file);
    res.json({ success: true, message: "Placement records slider created", data });
  } catch (error) {
    res.json({ success: false, message: "Failed to create placement records slider", error: error.message });
  }
}

// GET ALL
async function getPlacementRecordsSliderController(req, res) {
  try {
    const data = await PlacementRecordsService.getPlacementRecordsSliders();
    res.json({ success: true, message: "Placement records sliders fetched", data });
  } catch (error) {
    res.json({ success: false, message: "Failed to fetch placement records sliders", error: error.message });
  }
}

// UPDATE
async function updatePlacementRecordsSliderController(req, res) {
  try {
    const data = await PlacementRecordsService.updatePlacementRecordsSlider(req.params.id, req.body, req.file);
    res.json({ success: true, message: "Placement records slider updated", data });
  } catch (error) {
    res.json({ success: false, message: "Failed to update placement records slider", error: error.message });
  }
}

// DELETE
async function deletePlacementRecordsSliderController(req, res) {
  try {
    const data = await PlacementRecordsService.deletePlacementRecordsSlider(req.params.id);
    res.json({ success: true, message: "Placement records slider deleted", data });
  } catch (error) {
    res.json({ success: false, message: "Failed to delete placement records slider", error: error.message });
  }
}


// CREATE WORKSPACE ******************************************
async function createPlacementRecordsWorkspace(req, res) {
  try {
    const data = await PlacementRecordsService.createPlacementRecordsWorkspace(req.body, req.file);
    res.json({ success: true, message: "Placement records workspace created", data });
  } catch (error) {
    res.json({ success: false, message: "Failed to create placement records workspace", error: error.message });
  }
}

// GET ALL
async function getPlacementRecordsWorkspace(req, res) {
  try {
    const data = await PlacementRecordsService.getPlacementRecordsWorkspaces();
    res.json({ success: true, message: "Placement records workspace fetched", data });
  } catch (error) {
    res.json({ success: false, message: "Failed to fetch placement records workspace", error: error.message });
  }
}

// UPDATE
async function updatePlacementRecordsWorkspace(req, res) {
  try {
    const data = await PlacementRecordsService.updatePlacementRecordsWorkspace(req.params.id, req.body, req.file);
    res.json({ success: true, message: "Placement records workspace updated", data });
  } catch (error) {
    res.json({ success: false, message: "Failed to update placement records workspace", error: error.message });
  }
}

// DELETE
async function deletePlacementRecordsWorkspace(req, res) {
  try {
    const data = await PlacementRecordsService.deletePlacementRecordsWorkspace(req.params.id);
    res.json({ success: true, message: "Placement records workspace deleted", data });
  } catch (error) {
    res.json({ success: false, message: "Failed to delete placement records workspace", error: error.message });
  }
}

// CREATE TEAM ****************************************************
async function createPlacementRecordsTeam(req, res) {
  try {
    const data = await PlacementRecordsService.createPlacementRecordsTeam(req.body, req.file);
    res.json({ success: true, message: "Placement records team created", data });
  } catch (error) {
    res.json({ success: false, message: "Failed to create placement records team", error: error.message });
  }
}

// GET ALL
async function getPlacementRecordsTeam(req, res) {
  try {
    const data = await PlacementRecordsService.getPlacementRecordsTeams();
    res.json({ success: true, message: "Placement records team fetched", data });
  } catch (error) {
    res.json({ success: false, message: "Failed to fetch placement records team", error: error.message });
  }
}

// UPDATE
async function updatePlacementRecordsTeam(req, res) {
  try {
    const data = await PlacementRecordsService.updatePlacementRecordsTeam(req.params.id, req.body, req.file);
    res.json({ success: true, message: "Placement records team updated", data });
  } catch (error) {
    res.json({ success: false, message: "Failed to update placement records team", error: error.message });
  }
}

// DELETE
async function deletePlacementRecordsTeam(req, res) {
  try {
    const data = await PlacementRecordsService.deletePlacementRecordsTeam(req.params.id);
    res.json({ success: true, message: "Placement records team deleted", data });
  } catch (error) {
    res.json({ success: false, message: "Failed to delete placement records team", error: error.message });
  }
}


async function createCompanyCategoryController(req, res) {
  try {
    const data = await PlacementRecordsService.createCompanyCategory(req.body, req.files);
    res.json({
      success: true,
      message: "Company Category created successfully",
      data,
    });
  } catch (error) {
    res.json({
      success: false,
      message: "Failed to create Company Category",
      error,
    });
  }
}

async function getCompanyCategoryController(req, res) {
  try {
    const data = await PlacementRecordsService.getCompanyCategory();
    res.json({
      success: true,
      message: "Company Categories fetched successfully",
      data,
    });
  } catch (error) {
    res.json({
      success: false,
      message: "Failed to fetch Company Categories",
      error,
    });
  }
}

async function updateCompanyCategoryController(req, res) {
  try {
    const data = await PlacementRecordsService.updateCompanyCategory(req.params.id, req.body, req.files);
    res.json({
      success: true,
      message: "Company Category updated successfully",
      data,
    });
  } catch (error) {
    res.json({
      success: false,
      message: "Failed to update Company Category",
      error,
    });
  }
}

async function deleteCompanyCategoryController(req, res) {
  try {
    const data = await PlacementRecordsService.deleteCompanyCategory(req.params.id);
    res.json({
      success: true,
      message: "Company Category deleted successfully",
      data,
    });
  } catch (error) {
    res.json({
      success: false,
      message: "Failed to delete Company Category",
      error,
    });
  }
}



async function createPlacementRecordsFaqController(req, res) {
  try {
    const data = await PlacementRecordsService.createPlacementRecordsFaq(req.body);
    res.json({
      success: true,
      message: "PlacementRecordsFaq created successfully",
      data,
      error: null,
    });
  } catch (error) {
    res.json({
      success: false,
      message: "Failed to create PlacementRecordsFaq",
      data: null,
      error,
    });
  }
}

async function getPlacementRecordsFaqController(req, res) {
  try {
    const data = await PlacementRecordsService.getPlacementRecordsFaq();
    res.json({
      success: true,
      message: "PlacementRecordsFaq fetched successfully",
      data,
      error: null,
    });
  } catch (error) {
    res.json({
      success: false,
      message: "Failed to fetch PlacementRecordsFaq",
      data: null,
      error,
    });
  }
}

async function updatePlacementRecordsFaqController(req, res) {
  try {
    const data = await PlacementRecordsService.updatePlacementRecordsFaq(req.params.id, req.body);
    res.json({
      success: true,
      message: "PlacementRecordsFaq updated successfully",
      data,
      error: null,
    });
  } catch (error) {
    res.json({
      success: false,
      message: "Failed to update PlacementRecordsFaq",
      data: null,
      error,
    });
  }
}

async function deletePlacementRecordsFaqController(req, res) {
  try {
    const data = await PlacementRecordsService.deletePlacementRecordsFaq(req.params.id);
    res.json({
      success: true,
      message: "PlacementRecordsFaq deleted successfully",
      data,
      error: null,
    });
  } catch (error) {
    res.json({
      success: false,
      message: "Failed to delete PlacementRecordsFaq",
      data: null,
      error,
    });
  }
}


async function createPlacementRecordsVideoController(req, res) {
  try {
    const data = await PlacementRecordsService.createPlacementRecordsVideo(req.body);
    res.json({
      success: true,
      message: "PlacementRecordsVideo created successfully",
      data,
      error: null,
    });
  } catch (error) {
    res.json({
      success: false,
      message: "Failed to create PlacementRecordsVideo",
      data: null,
      error,
    });
  }
}

async function getPlacementRecordsVideoController(req, res) {
  try {
    const data = await PlacementRecordsService.getPlacementRecordsVideo();
    res.json({
      success: true,
      message: "PlacementRecordsVideo fetched successfully",
      data,
      error: null,
    });
  } catch (error) {
    res.json({
      success: false,
      message: "Failed to fetch PlacementRecordsVideo",
      data: null,
      error,
    });
  }
}

async function deletePlacementRecordsVideoController(req, res) {
  try {
    const data = await PlacementRecordsService.deletePlacementRecordsVideo(req.params.id);
    res.json({
      success: true,
      message: "PlacementRecordsVideo deleted successfully",
      data,
      error: null,
    });
  } catch (error) {
    res.json({
      success: false,
      message: "Failed to delete PlacementRecordsVideo",
      data: null,
      error,
    });
  }
}


 
module.exports = {
  createPlacementRecordsHeroController,
  getPlacementRecordsHeroController,
  updatePlacementRecordsHeroController,
  deletePlacementRecordsHeroController,
  createPlacementRecordsSliderController,
  getPlacementRecordsSliderController,
  updatePlacementRecordsSliderController,
  deletePlacementRecordsSliderController,
  createPlacementRecordsWorkspace,
  getPlacementRecordsWorkspace,
  updatePlacementRecordsWorkspace,
  deletePlacementRecordsWorkspace,
  createPlacementRecordsTeam,
  getPlacementRecordsTeam,
  updatePlacementRecordsTeam,
  deletePlacementRecordsTeam,
  createCompanyCategoryController,
  getCompanyCategoryController,
  updateCompanyCategoryController,
  deleteCompanyCategoryController,
   createPlacementRecordsFaqController,
  getPlacementRecordsFaqController,
  updatePlacementRecordsFaqController,
  deletePlacementRecordsFaqController,
  createPlacementRecordsVideoController,
  getPlacementRecordsVideoController,
  deletePlacementRecordsVideoController,
};

