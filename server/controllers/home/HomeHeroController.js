const createHero = require('../../services/home/HomeHeroServices');

async function createHeroController(req, res) {
  try {
    const createdBy = 1;
    const ip = req.ip; 
    const data = req.body; 
    const hero = await createHero(data,req.file, createdBy, ip);
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

module.exports = { createHeroController };
