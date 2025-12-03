const { Newssection } = require("../../models/news");

async function createNewssection(data) {
  const newItem = new Newssection({
    image: data.image,
    title: data.title,
    description: data.description,
  });

  await newItem.save();
  return newItem;
}

async function getNewssection() {
  const items = await Newssection.find().sort({ createdAt: -1 });
  return items;
}

async function updateNewssection(id, body) {
  const item = await Newssection.findById(id);
  if (!item) {
    throw new Error("Newssection not found");
  }

  item.image = body.image ?? item.image;
  item.title = body.title ?? item.title;
  item.description = body.description ?? item.description;

  await item.save();
  return item;
}

async function deleteNewssection(id) {
  const item = await Newssection.findById(id);
  if (!item) {
    throw new Error("Newssection not found");
  }

  await item.deleteOne();
  return item;
}

module.exports = {
  createNewssection,
  getNewssection,
  updateNewssection,
  deleteNewssection,
};
