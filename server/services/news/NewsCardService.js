const { NewsCard } = require("../../models/news");

async function createNewsCard(data) {
  const newItem = new NewsCard({
    image: data.image,
    title: data.title,
    description: data.description,
  });

  await newItem.save();
  return newItem;
}

async function getNewsCard() {
  const items = await NewsCard.find().sort({ createdAt: -1 });
  return items;
}

async function updateNewsCard(id, body) {
  const item = await NewsCard.findById(id);
  if (!item) {
    throw new Error("NewsCard not found");
  }

  item.image = body.image ?? item.image;
  item.title = body.title ?? item.title;
  item.description = body.description ?? item.description;

  await item.save();
  return item;
}

async function deleteNewsCard(id) {
  const item = await NewsCard.findById(id);
  if (!item) {
    throw new Error("NewsCard not found");
  }

  await item.deleteOne();
  return item;
}

module.exports = {
  createNewsCard,
  getNewsCard,
  updateNewsCard,
  deleteNewsCard,
};
