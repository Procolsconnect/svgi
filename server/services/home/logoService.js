const { Logo } = require("../../models/home");

/// services/home/logoService.js

// CREATE LOGO
async function createLogo(Model, body, file) {
  const img_url = file ? file.path : null;

  const data = {
    img: img_url,
    name: body.name,
  };

  const logo = new Model(data);
  return await logo.save();
}

// GET ALL LOGOS
async function getAllLogos(Model) {
  return await Model.find({}).sort({ createdAt: -1 });
}

// GET SINGLE LOGO
async function getLogoById(Model, id) {
  const logo = await Model.findById(id);
  if (!logo) throw new Error("Logo not found");
  return logo;
}

// UPDATE LOGO
async function updateLogo(Model, id, body, file) {
  const logo = await Model.findById(id);
  if (!logo) throw new Error("Logo not found");

  if (file) logo.img = file.path;
  logo.name = body.name ?? logo.name;

  return await logo.save();
}

// DELETE LOGO
async function deleteLogo(Model, id) {
  const deleted = await Model.findByIdAndDelete(id);
  if (!deleted) throw new Error("Logo not found");
  return deleted;
}

module.exports = {
  createLogo,
  getAllLogos,
  getLogoById,
  updateLogo,
  deleteLogo,
};
