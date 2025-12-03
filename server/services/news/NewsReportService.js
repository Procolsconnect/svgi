const {NewsReport} = require("../../models/news");

async function createNewsReport(data) {
  const newItem = new NewsReport({
    video_url: data.video_url,
    title: data.title,
    description: data.description,
  });

  await newItem.save();
  return newItem;
}

async function getNewsReport() {
  const items = await NewsReport.find().sort({ createdAt: -1 });
  return items;
}

async function updateNewsReport(id, body) {
  const item = await NewsReport.findById(id);
  if (!item) {
    throw new Error("NewsReport not found");
  }

  item.video_url = body.video_url ?? item.video_url;
  item.title = body.title ?? item.title;
  item.description = body.description ?? item.description;

  await item.save();
  return item;
}

async function deleteNewsReport(id) {
  const item = await NewsReport.findById(id);
  if (!item) {
    throw new Error("NewsReport not found");
  }

  await item.deleteOne();
  return item;
}

module.exports = {
  createNewsReport,
  getNewsReport,
  updateNewsReport,
  deleteNewsReport,
};
