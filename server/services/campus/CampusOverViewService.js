const {CampusOverviewHero} = require("../../models/campus");

// CREATE
async function createOverviewHero(body, file) {
  const data = {
    title: body.title,
    image: file?.path,
  };
  return await new CampusOverviewHero(data).save();
}

// GET ALL
async function getOverviewHero() {
  return await CampusOverviewHero.find().sort({ createdAt: -1 });
}

// GET BY ID
async function getOverviewHeroById(id) {
  const hero = await CampusOverviewHero.findById(id);
  if (!hero) throw new Error("Campus Overview Hero not found");
  return hero;
}

// UPDATE
async function updateOverviewHero(id, body, file) {
  const hero = await CampusOverviewHero.findById(id);
  if (!hero) throw new Error("Campus Overview Hero not found");
  if (file) hero.image = file.path;
  if (body.title) hero.title = body.title;
  return await hero.save();
}

// DELETE
async function deleteOverviewHero(id) {
  const hero = await CampusOverviewHero.findByIdAndDelete(id);
  if (!hero) throw new Error("Campus Overview Hero not found");
  return hero;
}

module.exports = {
  createOverviewHero,
  getOverviewHero,
  getOverviewHeroById,
  updateOverviewHero,
  deleteOverviewHero,
};