const Feedbackhero = require("../../models/academics/Feedbackhero");

async function createHero(body, file) {
  const data = {
    title: body.title,
    image: file.path
  };
  const hero = new Feedbackhero(data);
  const savedHero = await hero.save();
  return savedHero;
}

// GET HEROES
async function getHero() {
  const heroes = await Feedbackhero.find().sort({ created_at: -1 });
  return heroes;
}

// UPDATE HERO
async function updateHero(id, body, file) {
  const hero = await Feedbackhero.findById(id);
  if (!hero) throw new Error("Hero not found");

  if (file) {
    hero.image =file.path
  }
  hero.title = body.title ?? hero.title;
  const updatedHero = await hero.save();
  return updatedHero;
}
 async function deleteHero(id) {
  const deletedHero = await Feedbackhero.findByIdAndDelete(id);
  if (!deletedHero) throw new Error("Hero not found");
  return deletedHero;
}

module.exports = { createHero, getHero, updateHero, deleteHero };
