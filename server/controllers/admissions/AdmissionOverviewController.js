const OverviewService = require('../../services/admissions/AdmissionOverviewService');


async function createOverviewHero(req, res) {
  try {
    const hero = await OverviewService.createOverviewHero(req.body, req.file);

    res.status(201).json({
      success: true,
      message: "Overview Hero created successfully",
      data: hero,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to create Overview Hero",
      error: err.message,
    });
  }
}

async function getOverviewHero(req, res) {
  try {
    const heroes = await OverviewService.getOverviewHero();

    res.status(200).json({
      success: true,
      message: "Overview Heroes fetched successfully",
      data: heroes,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch Overview Heroes",
      error: err.message,
    });
  }
}

async function getOverviewHeroById(req, res) {
  try {
    const hero = await OverviewService.getOverviewHeroById(req.params.id);

    res.status(200).json({
      success: true,
      message: "Overview Hero fetched successfully",
      data: hero,
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: "Overview Hero not found",
      error: err.message,
    });
  }
}

async function updateOverviewHero(req, res) {
  try {
    const hero = await OverviewService.updateOverviewHero(
      req.params.id,
      req.body,
      req.file
    );

    res.status(200).json({
      success: true,
      message: "Overview Hero updated successfully",
      data: hero,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to update Overview Hero",
      error: err.message,
    });
  }
}

async function deleteOverviewHero(req, res) {
  try {
    const hero = await OverviewService.deleteOverviewHero(req.params.id);

    res.status(200).json({
      success: true,
      message: "Overview Hero deleted successfully",
      data: hero,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to delete Overview Hero",
      error: err.message,
    });
  }
}

/* ============================
        OVERVIEW CONTENT
============================ */

async function createOverview(req, res) {
  try {
    const result = await OverviewService.createOverview(req.body, req.files);

    res.status(201).json({
      success: true,
      message: "Overview created successfully",
      data: result,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: "Failed to create Overview",
      error: err.message,
    });
  }
}

async function getAllOverview(req, res) {
  try {
    const data = await OverviewService.getAll();

    res.status(200).json({
      success: true,
      message: "Overview list fetched successfully",
      data,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch Overview list",
      error: err.message,
    });
  }
}

async function getOneOverview(req, res) {
  try {
    const data = await OverviewService.getOne(req.params.id);

    res.status(200).json({
      success: true,
      message: "Overview fetched successfully",
      data,
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: "Overview not found",
      error: err.message,
    });
  }
}

async function updateOverview(req, res) {
  try {
    const updated = await OverviewService.updateOverview(
      req.params.id,
      req.body,
      req.files
    );

    res.status(200).json({
      success: true,
      message: "Overview updated successfully",
      data: updated,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to update Overview",
      error: err.message,
    });
  }
}

async function deleteOverview(req, res) {
  try {
    await OverviewService.deleteOverview(req.params.id);

    res.status(200).json({
      success: true,
      message: "Overview deleted successfully",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to delete Overview",
      error: err.message,
    });
  }
}

async function createCard (req, res) {
  try {
    const card = await OverviewService.createContactCard(req.body, req.file);
    res.json({ success: true, message: "Card created", data: card });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};
async function getAllCards(req, res) {
  try {
    const cards = await OverviewService.getAllCards();
    res.json({ success: true, data: cards });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

async function getOneCard(req, res)  {
  try {
    const card = await OverviewService.getOneCard(req.params.id);
    res.json({ success: true, data: card });
  } catch (err) {
    res.status(404).json({ success: false, message: err.message });
  }
};

async function updateCard (req, res) {
  try {
    const updated = await OverviewService.updateContactCard(req.params.id, req.body, req.file);
    res.json({ success: true, message: "Card updated", data: updated });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

async function deleteCard (req, res) {
  try {
    const deleted = await OverviewService.deleteContactCard(req.params.id);
    res.json({ success: true, message: "Card deleted", data: deleted });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

module.exports = {
  createOverviewHero,
  getOverviewHero,
  getOverviewHeroById,
  updateOverviewHero,
  deleteOverviewHero,
  createOverview,
  getAllOverview,
  getOneOverview,
  updateOverview,
  deleteOverview,
  createCard,
  getAllCards,
  getOneCard,
  updateCard,
  deleteCard
};
