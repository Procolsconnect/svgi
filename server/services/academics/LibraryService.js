const {
  Libraryhero,
  Libraryimage,
  Libraryvideo,
  Libraryvideocard,
  LibraryResources
} = require("../../models/academics");


// ======================================================
// HERO SERVICES
// ======================================================

// CREATE HERO
async function createHero(body, file) {
  const hero = new Libraryhero({
    title: body.title,
    image: file ? file.path : null,
  });

  return await hero.save();
}

// GET HERO
async function getHero() {
  return await Libraryhero.find().sort({ _id: -1 });
}

// UPDATE HERO
async function updateHero(id, body, file) {
  const hero = await Libraryhero.findById(id);
  if (!hero) throw new Error("Hero not found");

  hero.title = body.title ?? hero.title;
  if (file) hero.image = file.path;

  return await hero.save();
}

// DELETE HERO
async function deleteHero(id) {
  const deleted = await Libraryhero.findByIdAndDelete(id);
  if (!deleted) throw new Error("Hero not found");
  return deleted;
}



// LIBRARY IMAGE SERVICES
// ======================================================

async function getLibraryimage() {
  return await Libraryimage.find().sort({ _id: -1 });
}

async function createLibraryimage(file) {
  if (!file) throw new Error("Image file is required");

  const img = new Libraryimage({
    image: file.path,
  });

  return await img.save();
}

async function deleteLibraryimage(id) {
  const deleted = await Libraryimage.findByIdAndDelete(id);
  if (!deleted) throw new Error("Image not found");
  return deleted;
}



// ======================================================
// LIBRARY VIDEO SERVICES (YOUR MODEL REQUIRES title + description)
// ======================================================

async function getLibraryvideo() {
  return await Libraryvideo.find().sort({ _id: -1 });
}

async function createLibraryvideo(data, file) {
  if (!file) throw new Error("Video file required");

  const video = new Libraryvideo({
    video: file.path,
    title: data.title,
    description: data.description,
  });

  return await video.save();
}

async function deleteLibraryvideo(id) {
  const deleted = await Libraryvideo.findByIdAndDelete(id);
  if (!deleted) throw new Error("Video not found");
  return deleted;
}

async function updateLibraryvideo(id, data, file) {
  const video = await Libraryvideo.findById(id);
  if (!video) throw new Error("Video not found");

  if (file) video.video = file.path;

  video.title = data.title ?? video.title;
  video.description = data.description ?? video.description;

  return await video.save();
}



// ======================================================
// VIDEO CARD SERVICES (SAME MODEL, DIFFERENT USE)
// ======================================================

async function getLibraryvideoCard() {
  return await Libraryvideocard.find().sort({ _id: -1 });
}

async function createLibraryvideoCard(data, file) {
  if (!file) throw new Error("Video file required");

  const video = new Libraryvideocard({
    video: file.path,
    title: data.title,
    description: data.description,
  });

  return await video.save();
}

async function deleteLibraryvideoCard(id) {
  const deleted = await Libraryvideocard.findByIdAndDelete(id);
  if (!deleted) throw new Error("Video card not found");
  return deleted;
}

async function updateLibraryvideoCard(id, data, file) {
  const video = await Libraryvideocard.findById(id);
  if (!video) throw new Error("Video card not found");

  if (file) video.video = file.path;

  video.title = data.title ?? video.title;
  video.description = data.description ?? video.description;

  return await video.save();
}


// CREATE
async function createLibraryResources(data) {
  const item = new LibraryResources(data);
  return await item.save();
}

// GET ALL
async function getLibraryResources() {
  return await LibraryResources.find().sort({ createdAt: -1 });
}

// GET BY ID
async function getLibraryResourcesById(id) {
  return await LibraryResources.findById(id);
}

// UPDATE
async function updateLibraryResources(id, data) {
  const updated = await LibraryResources.findByIdAndUpdate(id, data, { new: true });
  if (!updated) throw new Error("Resource not found");
  return updated;
}

// DELETE
async function deleteLibraryResources(id) {
  const deleted = await LibraryResources.findByIdAndDelete(id);
  if (!deleted) throw new Error("Resource not found");
  return deleted;
}




module.exports = {
  createHero,
  getHero,
  updateHero,
  deleteHero,

  getLibraryimage,
  createLibraryimage,
  deleteLibraryimage,

  getLibraryvideo,
  createLibraryvideo,
  deleteLibraryvideo,
  updateLibraryvideo,

  getLibraryvideoCard,
  createLibraryvideoCard,
  deleteLibraryvideoCard,
  updateLibraryvideoCard,

  createLibraryResources,
  getLibraryResources,
  getLibraryResourcesById,
  updateLibraryResources,
  deleteLibraryResources
};
