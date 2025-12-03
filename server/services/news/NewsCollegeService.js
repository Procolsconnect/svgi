const { NewsCollege } = require("../../models/news");

async function createNewsCollege(data, file) {
  const newItem = new NewsCollege({
    type: data.type,
    text: data.text,
    url: file ? file.path : null, // CLOUDINARY URL
  });

  await newItem.save();
  return newItem;
}

async function getNewsCollege() {
  return await NewsCollege.find().sort({ createdAt: -1 });
}

async function updateNewsCollege(id, body, file) {
  const item = await NewsCollege.findById(id);
  if (!item) {
    throw new Error("NewsCollege not found");
  }

  item.type = body.type ?? item.type;
  item.text = body.text ?? item.text;
  item.url = file ? file.path : item.url;

  await item.save();
  return item;
}

async function deleteNewsCollege(id) {
  const item = await NewsCollege.findById(id);
  if (!item) {
    throw new Error("NewsCollege not found");
  }

  await item.deleteOne();
  return item;
}

module.exports = {
  createNewsCollege,
  getNewsCollege,
  updateNewsCollege,
  deleteNewsCollege,
};
