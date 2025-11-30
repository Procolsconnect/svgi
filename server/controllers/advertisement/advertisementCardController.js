const Advertisement = require('../../services/advertisement/AdvertisementCardService.js');

const getadvertisementCardController = async (req, res) => {
  try {
    const advertisementCards = await Advertisement.getAdvertisementcard();
    res.status(200).json(advertisementCards);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const updateAdvertisementCardController = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedAdvertisementCard = await Advertisement.updateAdvertisementCard(id, req.body, req.file);
    res.status(200).json(updatedAdvertisementCard);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const createAdvertisementCardController = async (req, res) => {
  try {
    const newAdvertisementCard = await Advertisement.createAdvertisementCard(req.body, req.file);
    res.status(201).json(newAdvertisementCard);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const deleteAdvertisementCardController = async (req, res) => {
  try {
    const { id } = req.params;
    await Advertisement.deleteAdvertisementCard(id);
    res.status(204).end();
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
    getadvertisementCardController,
  updateAdvertisementCardController,
  createAdvertisementCardController,
  deleteAdvertisementCardController,
};
