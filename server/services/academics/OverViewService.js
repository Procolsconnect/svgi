const {Academicshero,AcademicsCard} = require('../../models/academics');

async function createHero(body, file) {
  const data = {
    title: body.title,
    image: file.path
  };
  const hero = new Academicshero(data);
  const savedHero = await hero.save();
  return savedHero;
}

// GET HEROES
async function getHero() {
  const heroes = await Academicshero.find().sort({ created_at: -1 });
  return heroes;
}

// UPDATE HERO
async function updateHero(id, body, file) {
  const hero = await Academicshero.findById(id);
  if (!hero) throw new Error("Hero not found");

  if (file) {
    hero.image =file.path
  }
  hero.title = body.title ?? hero.title;
  const updatedHero = await hero.save();
  return updatedHero;
}
 async function deleteHero(id) {
  const deletedHero = await Academicshero.findByIdAndDelete(id);
  if (!deletedHero) throw new Error("Hero not found");
  return deletedHero;
}
 

// CREATE
async function createCard(body, file) {
  const data = {
    title: body.title,
    subtitle: body.subtitle,
    description: body.description,
    image: file ? file.path : undefined
  };

  const card = new AcademicsCard(data);
  const savedCard = await card.save();
  return savedCard;
}

// GET ALL
async function getCards() {
  const cards = await AcademicsCard.find().sort({ created_at: -1 });
  return cards;
}

// UPDATE
async function updateCard(id, body, file) {
  const card = await AcademicsCard.findById(id);
  if (!card) throw new Error("Card not found");

  // Update fields
  if (file) card.image = file.path;
  card.title = body.title ?? card.title;
  card.subtitle = body.subtitle ?? card.subtitle;
  card.description = body.description ?? card.description;

  const updated = await card.save();
  return updated;
}

// DELETE
async function deleteCard(id) {
  const deleted = await AcademicsCard.findByIdAndDelete(id);
  if (!deleted) throw new Error("Card not found");
  return deleted;
}

async function getCardById(id) {
  const card = await AcademicsCard.findById(id);
  if (!card) throw new Error("Card not found");
  return card;
}

module.exports = {
  createHero,
  getHero,
  updateHero,
  deleteHero,
  createCard,
  getCards,
  updateCard,
  deleteCard,
  getCardById
};