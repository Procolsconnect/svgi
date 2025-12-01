const {AdvertisementFaculty} = require("../../models/advertisement");

async function createAdvertisementFaculty(body, file) {
  const data = {
    image: file?.path,
    name: body.name,
    description: body.description,
    mobile: body.mobile,
    email: body.email,
    page: body.page,
  };

  const item = new AdvertisementFaculty(data);
  await item.save();
  return item;
}

async function getAdvertisementFaculty() {
  const items = await AdvertisementFaculty.find().sort({ createdAt: -1 });
  return items;
}

async function updateAdvertisementFaculty(id, body, file) {
  const item = await AdvertisementFaculty.findById(id);
  if (!item) throw "AdvertisementFaculty not found";

  item.image = file?.path ?? item.image;
  item.name = body.name ?? item.name;
  item.description = body.description ?? item.description;
  item.mobile = body.mobile ?? item.mobile;
  item.email = body.email ?? item.email;
  item.page = body.page ?? item.page;

  await item.save();
  return item;
}

async function deleteAdvertisementFaculty(id) {
  const item = await AdvertisementFaculty.findByIdAndDelete(id);
  if (!item) throw "AdvertisementFaculty not found";
  return item;
}

module.exports = {
  createAdvertisementFaculty,
  getAdvertisementFaculty,
  updateAdvertisementFaculty,
  deleteAdvertisementFaculty,
};
