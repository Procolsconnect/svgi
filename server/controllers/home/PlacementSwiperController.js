const placement = require('../../services/home/PlacementSwiperService.js');

 const createPlacementSwiperController = async (req, res) => {
  try {
    const file = req.file;
    const result = await placement.createPlacementSwiper(file);
    res.status(201).json(result);
  } catch (error) {
    console.error('Error creating placement swiper:', error);
    res.status(500).json({ error: 'Failed to create placement swiper' });
  }
};
 const getPlacementSwiperController = async (req, res) => {
  try {
    const result = await placement.getPlacementSwiper();
    res.status(200).json(result);
  } catch (error) {
    console.error('Error fetching placement swiper:', error);
    res.status(500).json({ error: 'Failed to fetch placement swiper' });
  }
};
const deletePlacementSwiperController = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await placement.deletePlacementSwiper(id);
    if (result) {
      res.status(200).json({ message: 'Placement swiper deleted successfully' });
    } else {
      res.status(404).json({ error: 'Placement swiper not found' });
    }
  } catch (error) {
    console.error('Error deleting placement swiper:', error);
    res.status(500).json({ error: 'Failed to delete placement swiper' });
  }
}
module.exports = { createPlacementSwiperController,getPlacementSwiperController,deletePlacementSwiperController };