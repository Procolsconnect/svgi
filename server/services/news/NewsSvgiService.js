const { NewsSvgi } = require("../../models/news");

async function createNewsSvgi(data) {
  const newItem = new NewsSvgi({
    image1: data.image1,
    image2: data.image2,
    title: data.title,
    description: data.description,
  });

  await newItem.save();
  return newItem;
}

async function getNewsSvgi() {
  const items = await NewsSvgi.find().sort({ createdAt: -1 });
  return items;
}

async function updateNewsSvgi(id, body) {
  const item = await NewsSvgi.findById(id);
  if (!item) {
    throw new Error("NewsSvgi not found");
  }

  item.image1 = body.image1 ?? item.image1;
  item.image2 = body.image2 ?? item.image2;
  item.title = body.title ?? item.title;
  item.description = body.description ?? item.description;

  await item.save();
  return item;
}

async function deleteNewsSvgi(id) {
  const item = await NewsSvgi.findById(id);
  if (!item) {
    throw new Error("NewsSvgi not found");
  }

  await item.deleteOne();
  return item;
}

module.exports = {
  createNewsSvgi,
  getNewsSvgi,
  updateNewsSvgi,
  deleteNewsSvgi,
};
