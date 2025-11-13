const {CampusInfrastructure} = require('../../models/home');

// 🟢 CREATE
async function createCampus(body, files) {
  // Parse incoming files from multer
  const imagesCard = (files?.images || []).map(f => ({
    image: f.path, // cloudinary path or local upload
  }));

  const videosCard = (files?.video || []).map(f => ({
    image: f.path,
  }));

  const toursCard = (files?.image || []).map(f => ({
    image: f.path,
  }));

  // Save to MongoDB
  const campus = new CampusInfrastructure({
    imagesCard,
    videosCard,
    toursCard,
  });

  return await campus.save();
}

// 🟢 GET (Get first campus document)
async function getCampus() {
  return await CampusInfrastructure.findOne();
}

// 🟢 UPDATE (Replace arrays or add new ones)
async function updateCampus(id, body, files) {
  const campus = await CampusInfrastructure.findById(id);
  if (!campus) throw new Error('Campus not found');

  if (files?.images) {
    campus.imagesCard = files.images.map(f => ({ image: f.path }));
  }

  if (files?.video) {
    campus.videosCard = files.video.map(f => ({ image: f.path }));
  }

  if (files?.image) {
    campus.toursCard = files.image.map(f => ({ image: f.path }));
  }

  return await campus.save();
}

// 🟢 DELETE
async function deleteCampus(id) {
  const campus = await CampusInfrastructure.findByIdAndDelete(id);
  if (!campus) throw new Error('Campus not found');
  return campus;
}

module.exports = {
  createCampus,
  getCampus,
  updateCampus,
  deleteCampus,
};
