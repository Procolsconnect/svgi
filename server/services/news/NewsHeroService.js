const {NewsHero} = require("../../models/news.js");

async function createNewshero(data) {
  const newItem = new NewsHero({
    image: data.image,
    title: data.title,
    description: data.description,
  });

  await newItem.save();
  return newItem;
}

async function getNewshero() {
  const items = await NewsHero.find().sort({ createdAt: -1 });
  return items;
}

async function updateNewshero(id, body) {
  const item = await NewsHero.findById(id);
  if (!item) {
    throw new Error("Newshero not found");
  }

  item.image = body.image ?? item.image;
  item.title = body.title ?? item.title;
  item.description = body.description ?? item.description;

  await item.save();
  return item;
}

async function deleteNewshero(id) {
  const item = await NewsHero.findById(id);
  if (!item) {
    throw new Error("Newshero not found");
  }

  await item.deleteOne();
  return item;
}

module.exports = {
  createNewshero,
  getNewshero,
  updateNewshero,
  deleteNewshero,
};
