const { HomeHero } = require('../../models/home'); // import model

// CREATE HERO
async function createHero(body, file, createdBy, ip) {
  let media_url = null;
  let media_type = null;

  // File handling (same logic)
  if (file) {
    media_url = file.path; 

    if (file.mimetype.startsWith("image")) {
      media_type = "image";
    } else if (file.mimetype.startsWith("video")) {
      media_type = "video";
    }
  }

  const data = {
    title: body.title,
    description: body.description,
    media_url,
    media_type,
    button_text: body.button_text,
    status: body.status ?? 1,
  };

  // Insert into MongoDB
  const hero = new HomeHero(data);
  const savedHero = await hero.save();
  return savedHero;
}

// GET HEROES
async function getHero() {
  const heroes = await HomeHero.find({ status: 1 }).sort({ created_at: -1 });
  return heroes;
}

// UPDATE HERO
async function updateHero(id, body, file) {
  const hero = await HomeHero.findById(id);
  if (!hero) throw new Error("Hero not found");

  // Update media if new file uploaded
  if (file) {
    hero.media_url = "/uploads/" + file.filename;
    hero.media_type = file.mimetype.startsWith("image") ? "image" : "video";
  }

  // Update other fields
  hero.title = body.title ?? hero.title;
  hero.description = body.description ?? hero.description;
  hero.button_text = body.button_text ?? hero.button_text;
  hero.status = body.status ?? hero.status;

  const updatedHero = await hero.save();
  return updatedHero;
}

// DELETE HERO
async function deleteHero(id) {
  const deletedHero = await HomeHero.findByIdAndDelete(id);
  if (!deletedHero) throw new Error("Hero not found");
  return deletedHero;
}

module.exports = {
  createHero,
  getHero,
  updateHero,
  deleteHero
};
