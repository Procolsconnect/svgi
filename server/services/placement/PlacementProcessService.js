const { PlacementProcessHero, PlacementProcessCard, PlacementProcessCompany } = require("../../models/placement");

async function createPlacementProcessHero(body, file) {
  const data = {
    title: body.title,
    image: file?.path,
  };

  return await PlacementProcessHero.create(data);
}

async function getPlacementProcessHero() {
  return await PlacementProcessHero.find().sort({ createdAt: -1 });
}

async function updatePlacementProcessHero(id, body, file) {
  const existing = await PlacementProcessHero.findById(id);
  if (!existing) throw "PlacementProcessHero not found";

  existing.title = body.title ?? existing.title;
  existing.image = file?.path ?? existing.image;

  return await existing.save();
}

async function deletePlacementProcessHero(id) {
  const existing = await PlacementProcessHero.findById(id);
  if (!existing) throw "PlacementProcessHero not found";

  await existing.deleteOne();
  return existing;
}



// ------------------------------------------------------------
// CARD
// ------------------------------------------------------------
async function createPlacementProcessCard(body, file) {
  const data = {
    image: file?.path,
    title: body.title,
    description: body.description,
  };

  return await PlacementProcessCard.create(data);
}

async function getPlacementProcessCard() {
  return await PlacementProcessCard.find().sort({ createdAt: -1 });
}

async function updatePlacementProcessCard(id, body, file) {
  const existing = await PlacementProcessCard.findById(id);
  if (!existing) throw "PlacementProcessCard not found";

  existing.image = file?.path ?? existing.image;
  existing.title = body.title ?? existing.title;
  existing.description = body.description ?? existing.description;

  return await existing.save();
}

async function deletePlacementProcessCard(id) {
  const existing = await PlacementProcessCard.findById(id);
  if (!existing) throw "PlacementProcessCard not found";

  await existing.deleteOne();
  return existing;
}



// ------------------------------------------------------------
// COMPANY
// ------------------------------------------------------------
async function createPlacementProcessCompany(body, file) {
  const data = {
    image: file?.path,
    comapany: body.comapany,
  };

  return await PlacementProcessCompany.create(data);
}

async function getPlacementProcessCompany() {
  return await PlacementProcessCompany.find().sort({ createdAt: -1 });
}

async function updatePlacementProcessCompany(id, body, file) {
  const existing = await PlacementProcessCompany.findById(id);
  if (!existing) throw "PlacementProcessCompany not found";

  existing.image = file?.path ?? existing.image;
  existing.comapany = body.comapany ?? existing.comapany;

  return await existing.save();
}

async function deletePlacementProcessCompany(id) {
  const existing = await PlacementProcessCompany.findById(id);
  if (!existing) throw "PlacementProcessCompany not found";

  await existing.deleteOne();
  return existing;
}



// ------------------------------------------------------------
// EXPORT
// ------------------------------------------------------------
module.exports = {
  createPlacementProcessHero,
  getPlacementProcessHero,
  updatePlacementProcessHero,
  deletePlacementProcessHero,

  createPlacementProcessCard,
  getPlacementProcessCard,
  updatePlacementProcessCard,
  deletePlacementProcessCard,

  createPlacementProcessCompany,
  getPlacementProcessCompany,
  updatePlacementProcessCompany,
  deletePlacementProcessCompany,
};
