const AcademicsService= require('../../services/academics/OverViewService');

// --------------------- HERO CONTROLLERS ---------------------

// CREATE HERO
async function createacademicsHeroController(req, res) {
  try {
    const hero = await AcademicsService.createHero(req.body, req.file);

    res.status(201).json({
      success: true,
      message: 'Hero created successfully',
      data: hero,
    });

  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Failed to create hero',
      error: err.message,
    });
  }
}

// GET ALL HEROES
const getacademicsHeroController = async (req, res) => {
  try {
    const heroes = await AcademicsService.getHero();

    res.status(200).json({
      success: true,
      message: 'Heroes fetched successfully',
      data: heroes,
    });

  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Failed to fetch heroes',
      error: err.message,
    });
  }
};

// UPDATE HERO
const updateacademicsHeroController = async (req, res) => {
  try {
    const id = req.params.id;
    const hero = await AcademicsService.updateHero(id, req.body, req.file);

    res.status(200).json({
      success: true,
      message: 'Hero updated successfully',
      data: hero,
    });

  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Failed to update hero',
      error: err.message,
    });
  }
};

// DELETE HERO
const deleteacademicsHeroController = async (req, res) => {
  try {
    const id = req.params.id;
    const deleted = await AcademicsService.deleteHero(id);

    res.status(200).json({
      success: true,
      message: 'Hero deleted successfully',
      data: deleted,
    });

  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Failed to delete hero',
      error: err.message,
    });
  }
};

// --------------------- CARD CONTROLLERS ---------------------

// CREATE CARD
async function createacademicsCardController(req, res) {
  try {
    const card = await AcademicsService.createCard(req.body, req.file);

    res.status(201).json({
      success: true,
      message: 'Card created successfully',
      data: card,
    });

  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Failed to create card',
      error: err.message,
    });
  }
}

// GET ALL CARDS
const getacademicsCardController = async (req, res) => {
  try {
    const cards = await AcademicsService.getCards();

    res.status(200).json({
      success: true,
      message: 'Cards fetched successfully',
      data: cards,
    });

  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Failed to fetch cards',
      error: err.message,
    });
  }
};

// GET CARD BY ID
const getacademicsCardByIdController = async (req, res) => {
  try {
    const card = await AcademicsService.getCardById(req.params.id);

    res.status(200).json({
      success: true,
      message: 'Card fetched successfully',
      data: card,
    });

  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Failed to fetch card',
      error: err.message,
    });
  }
};

// UPDATE CARD
const updateacademicsCardController = async (req, res) => {
  try {
    const card = await AcademicsService.updateCard(req.params.id, req.body, req.file);

    res.status(200).json({
      success: true,
      message: 'Card updated successfully',
      data: card,
    });

  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Failed to update card',
      error: err.message,
    });
  }
};

// DELETE CARD
const deleteacademicsCardController = async (req, res) => {
  try {
    const deleted = await AcademicsService.deleteCard(req.params.id);

    res.status(200).json({
      success: true,
      message: 'Card deleted successfully',
      data: deleted,
    });

  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Failed to delete card',
      error: err.message,
    });
  }
};

// CREATE CONTENT
const createacademicsContentController = async (req, res) => {
  try {
    const content = await AcademicsService.createContent(req.body);

    res.status(201).json({
      success: true,
      message: 'Content created successfully',
      data: content,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Failed to create content',
      error: err.message,
    });
  }
};

// GET ALL CONTENTS
const getacademicsContentsController = async (req, res) => {
  try {
    const contents = await AcademicsService.getContents();

    res.status(200).json({
      success: true,
      message: 'Contents fetched successfully',
      data: contents,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Failed to fetch contents',
      error: err.message,
    });
  }
};

// UPDATE CONTENT
const updateacademicsContentController = async (req, res) => {
  try {
    const content = await AcademicsService.updateContent(req.params.id, req.body);

    res.status(200).json({
      success: true,
      message: 'Content updated successfully',
      data: content,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Failed to update content',
      error: err.message,
    });
  }
};

// DELETE CONTENT
const deleteacademicsContentController = async (req, res) => {
  try {
    const deleted = await AcademicsService.deleteContent(req.params.id);

    res.status(200).json({
      success: true,
      message: 'Content deleted successfully',
      data: deleted,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Failed to delete content',
      error: err.message,
    });
  }
};

module.exports = {
  // HERO
  createacademicsHeroController,
  getacademicsHeroController,
  updateacademicsHeroController,
  deleteacademicsHeroController,

  // CARD
  createacademicsCardController,
  getacademicsCardController,
  getacademicsCardByIdController,
  updateacademicsCardController,
  deleteacademicsCardController,

  // CONTENT
  createacademicsContentController,
  getacademicsContentsController,
  updateacademicsContentController,
  deleteacademicsContentController,
};
