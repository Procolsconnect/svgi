const { PlacementSwiper } = require('../../models/home');

// GET ALL SWIPERS (ordered by creation)
async function getPlacementSwiper() {
  return await PlacementSwiper.find().sort({ _id: 1 });
}

// CREATE SWIPER
async function createPlacementSwiper(file) {
  try {
    const imagePath = file ? `/uploads/${file.filename}` : null;

    const swiper = new PlacementSwiper({
      image_url: imagePath,
    });

    const savedSwiper = await swiper.save();
    return savedSwiper;
  } catch (error) {
    console.error("Error creating placement swiper:", error);
    throw error;
  }
}

// DELETE SWIPER
async function deletePlacementSwiper(id) {
  try {
    const result = await PlacementSwiper.findByIdAndDelete(id);
    return result ? true : false;
  } catch (error) {
    console.error("Error deleting placement swiper:", error);
    throw error;
  }
}

module.exports = {
  getPlacementSwiper,
  createPlacementSwiper,
  deletePlacementSwiper,
};
