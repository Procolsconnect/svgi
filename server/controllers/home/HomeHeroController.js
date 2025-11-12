const HeroService= require('../../services/home/HomeHeroServices');

async function createHeroController(req, res) {

  try {
    const createdBy = 1;
    const ip = req.ip;
    const data = req.body;
    const hero = await HeroService.createHero(data,req.file, createdBy, ip);
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

const getHeroController = async (req, res) => {
  try {
    const hero = await HeroService.getHero();
    res.status(200).json({
      success: true,
      message: 'Hero fetched successfully',
      data: hero,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Failed to fetch hero',
      error: err.message,
    });
  }
};
const updateHeroController = async (req, res) => {

  try {
    const id = req.params.id;
    const data = req.body;
    const file = req.file;
    const hero = await HeroService.updateHero(id,data,file);
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
 
 const deleteHeroController = async (req, res) => {
  try {
    const id = req.params.id;
    const hero = await HeroService.deleteHero(id);
    res.status(200).json({
      success: true,
      message: 'Hero deleted successfully',
      data: hero,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Failed to delete hero',
      error: err.message,
    });
  }
};

module.exports = { 
  getHeroController,
  createHeroController,
  updateHeroController,
  deleteHeroController};
