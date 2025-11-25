const { PlacementHero,PlacementSlider } = require('../../models/placement');
// CREATE PLACEMENT HERO
async function createPlacementHero(body, file) {
  const data = {
    title: body.title,
    image: file.path
  };
  const hero = new PlacementHero(data);
  const savedHero = await hero.save();
  return savedHero;
}

// GET ALL PLACEMENT HEROES
async function getPlacementHeroes() {
  const heroes = await PlacementHero.find().sort({ createdAt: -1 });
  return heroes;
}

// UPDATE PLACEMENT HERO
async function updatePlacementHero(id, body, file) {
  const hero = await PlacementHero.findById(id);
  if (!hero) throw new Error("Placement hero not found");

  if (file) {
    hero.image = file.path;
  }
  hero.title = body.title ?? hero.title;
  const updatedHero = await hero.save();
  return updatedHero;
}

// DELETE PLACEMENT HERO
async function deletePlacementHero(id) {
  const deletedHero = await PlacementHero.findByIdAndDelete(id);
  if (!deletedHero) throw new Error("Placement hero not found");
  return deletedHero;
}

async function createPlacementSlider(body, file) {
  const data = {
    title: body.title,
    description: body.description,
    image: file?.path
  };

  const slider = new PlacementSlider(data);
  const savedSlider = await slider.save();
  return savedSlider;
}

// GET ALL SLIDERS
async function getPlacementSliders() {
  const sliders = await PlacementSlider.find().sort({ createdAt: -1 });
  return sliders;
}

// UPDATE SLIDER
async function updatePlacementSlider(id, body, file) {
  const slider = await PlacementSlider.findById(id);
  if (!slider) throw new Error("Placement slider not found");

  if (file) {
    slider.image = file.path;
  }

  slider.title = body.title ?? slider.title;
  slider.description = body.description ?? slider.description;

  const updatedSlider = await slider.save();
  return updatedSlider;
}

// DELETE SLIDER
async function deletePlacementSlider(id) {
  const deletedSlider = await PlacementSlider.findByIdAndDelete(id);
  if (!deletedSlider) throw new Error("Placement slider not found");
  return deletedSlider;
}



module.exports = {
  createPlacementHero,
  getPlacementHeroes,
  updatePlacementHero,
  deletePlacementHero,
  createPlacementSlider,
  getPlacementSliders,
  updatePlacementSlider,
  deletePlacementSlider,
};