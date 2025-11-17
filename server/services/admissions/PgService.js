const {PgHero, PgCourse} = require('../../models/admissions');

async function createHero(body, file) {
  const data = {
    title: body.title,
    image: file.path
  };
  const hero = new Pghero(data);
  const savedHero = await hero.save();
  return savedHero;
}

// GET HEROES
async function getHero() {
  const heroes = await Pghero.find().sort({ created_at: -1 });
  return heroes;
}

// UPDATE HERO
async function updateHero(id, body, file) {
  const hero = await Pghero.findById(id);
  if (!hero) throw new Error("Hero not found");

  if (file) {
    hero.image =file.path
  }
  hero.title = body.title ?? hero.title;
  const updatedHero = await hero.save();
  return updatedHero;
}

// DELETE HERO
async function deleteHero(id) {
  const deletedHero = await Pghero.findByIdAndDelete(id);
  if (!deletedHero) throw new Error("Hero not found");
  return deletedHero;
}

//  UG COURSE ******************************
async function createCourse(body, files) {
  return await PgCourse.create({
    content: body.content,
    image1: files?.image1 ? files.image1[0].path : null,
    image2: files?.image2 ? files.image2[0].path : null,
    image3: files?.image3 ? files.image3[0].path : null,
    top_text: body.top_text,
    bottom_text: body.bottom_text,
  });
}

async function getAllCourses() {
  return await PgCourse.find();
}

async function getCourse(id) {
  return await PgCourse.findById(id);
}

async function updateCourse(id, body, files) {
  const updateData = {
    content: body.content,
    top_text: body.top_text,
    bottom_text: body.bottom_text,
  };

  if (files?.image1) updateData.image1 = files.image1[0].path;
  if (files?.image2) updateData.image2 = files.image2[0].path;
  if (files?.image3) updateData.image3 = files.image3[0].path;

  return await PgCourse.findByIdAndUpdate(id, updateData, { new: true });
}

async function deleteCourse(id) {
  return await PgCourse.findByIdAndDelete(id);
}



module.exports = {
  createHero,
  getHero,
  updateHero,
  deleteHero,
  createCourse,
  getAllCourses,
  getCourse,
  updateCourse,
  deleteCourse
};
