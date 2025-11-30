 const {Advertisementcard} = require("../../models/advertisement");

 const getAdvertisementcard = async () => {
    try {
        const advertisementcard = await Advertisementcard.find();
        return advertisementcard;
    } catch (error) {
        console.log(error);
    }
}

async function createAdvertisementCard(body, file) {
  try {
    const advertisementCard = new Advertisementcard({
      ...body,
      image: file ? file.path : null,
    });
    const savedAdvertisementCard = await advertisementCard.save();
    return savedAdvertisementCard;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

async function updateAdvertisementCard(id, body, file) {
  try {
    const advertisementCard = await Advertisementcard.findById(id);
    if (!advertisementCard) {
      throw new Error("Advertisement card not found");
    }
    if (file) {
      advertisementCard.image = file.path;
    }
    if (body.title) {
      advertisementCard.title = body.title;
    }
    if (body.description) {
      advertisementCard.description = body.description;
    }
    const updatedAdvertisementCard = await advertisementCard.save();
    return updatedAdvertisementCard;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

async function deleteAdvertisementCard(id) {
  try {
    const advertisementCard = await Advertisementcard.findByIdAndDelete(id);
    if (!advertisementCard) {
      throw new Error("Advertisement card not found");
    }
    return advertisementCard;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

module.exports = {
  createAdvertisementCard,
  updateAdvertisementCard,
  deleteAdvertisementCard,
  getAdvertisementcard
};
