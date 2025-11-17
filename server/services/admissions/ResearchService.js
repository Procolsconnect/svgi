const { ResearchHero, ResearchCourse } = require('../../models/admissions');

// ---------------- RESEARCH HERO ----------------

async function createResearchHero(body, file) {
  const data = {
    title: body.title,
    image: file.path
  };
  const hero = new ResearchHero(data);
  return await hero.save();
}

async function getResearchHero() {
  return await ResearchHero.find().sort({ created_at: -1 });
}

async function updateResearchHero(id, body, file) {
  const hero = await ResearchHero.findById(id);
  if (!hero) throw new Error("Research Hero not found");

  if (file) {
    hero.image = file.path;
  }

  hero.title = body.title ?? hero.title;

  return await hero.save();
}

async function deleteResearchHero(id) {
  const hero = await ResearchHero.findByIdAndDelete(id);
  if (!hero) throw new Error("Research Hero not found");
  return hero;
}


// ---------------- RESEARCH COURSE ----------------

async function createResearchCourse(body, files) {
  return await ResearchCourse.create({
    image1: files?.image1 ? files.image1[0].path : null,
    image2: files?.image2 ? files.image2[0].path : null,
    image3: files?.image3 ? files.image3[0].path : null,
    top_text: body.top_text,
    bottom_text: body.bottom_text,
  });
}

async function getAllResearchCourses() {
  return await ResearchCourse.find();
}

async function getResearchCourse(id) {
  return await ResearchCourse.findById(id);
}

async function updateResearchCourse(id, body, files) {
  const updateData = {
    top_text: body.top_text,
    bottom_text: body.bottom_text,
  };

  if (files?.image1) updateData.image1 = files.image1[0].path;
  if (files?.image2) updateData.image2 = files.image2[0].path;
  if (files?.image3) updateData.image3 = files.image3[0].path;

  return await ResearchCourse.findByIdAndUpdate(id, updateData, { new: true });
}

async function deleteResearchCourse(id) {
  return await ResearchCourse.findByIdAndDelete(id);
}

module.exports = {
  createResearchHero,
  getResearchHero,
  updateResearchHero,
  deleteResearchHero,
  createResearchCourse,
  getAllResearchCourses,
  getResearchCourse,
  updateResearchCourse,
  deleteResearchCourse
};
