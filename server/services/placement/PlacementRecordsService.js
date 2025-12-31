const { PlacementRecordsHero, PlacementRecordsSlider, PlacementRecordsWorkspace, PlacementRecordsTeam, CompanyCategory, PlacementRecordsFaq, PlacementRecordsVideo } = require('../../models/placement');

// CREATE HERO ******************************************
async function createPlacementRecordsHero(body, file) {
  const data = {
    title: body.title,
    image: file.path,
  };

  const hero = new PlacementRecordsHero(data);
  const savedHero = await hero.save();
  return savedHero;
}

// GET ALL
async function getPlacementRecordsHeroes() {
  const heroes = await PlacementRecordsHero.find().sort({ createdAt: -1 });
  return heroes;
}

// UPDATE
async function updatePlacementRecordsHero(id, body, file) {
  const hero = await PlacementRecordsHero.findById(id);
  if (!hero) throw new Error("Placement records hero not found");

  if (file) {
    hero.image = file.path;
  }

  hero.title = body.title ?? hero.title;

  const updatedHero = await hero.save();
  return updatedHero;
}

// DELETE
async function deletePlacementRecordsHero(id) {
  const deletedHero = await PlacementRecordsHero.findByIdAndDelete(id);
  if (!deletedHero) throw new Error("Placement records hero not found");

  return deletedHero;
}

// CREATE SLIDER ******************************************
async function createPlacementRecordsSlider(body, file) {
  const data = {
    title: body.title,
    image: file.path
  };

  const slider = new PlacementRecordsSlider(data);
  const savedSlider = await slider.save();
  return savedSlider;
}

// GET ALL
async function getPlacementRecordsSliders() {
  const sliders = await PlacementRecordsSlider.find().sort({ createdAt: -1 });
  return sliders;
}

// UPDATE
async function updatePlacementRecordsSlider(id, body, file) {
  const slider = await PlacementRecordsSlider.findById(id);
  if (!slider) throw new Error("Placement records slider not found");

  if (file) slider.image = file.path;

  slider.title = body.title ?? slider.title;

  const updatedSlider = await slider.save();
  return updatedSlider;
}

// DELETE
async function deletePlacementRecordsSlider(id) {
  const deletedSlider = await PlacementRecordsSlider.findByIdAndDelete(id);
  if (!deletedSlider) throw new Error("Placement records slider not found");
  return deletedSlider;
}



// CREATE WORKSPACE******************************************
async function createPlacementRecordsWorkspace(body, file) {
  const data = {
    title: body.title,
    description: body.description,
    image: file.path
  };

  const workspace = new PlacementRecordsWorkspace(data);
  const savedWorkspace = await workspace.save();
  return savedWorkspace;
}

// GET ALL
async function getPlacementRecordsWorkspaces() {
  const workspaces = await PlacementRecordsWorkspace.find().sort({ createdAt: -1 });
  return workspaces;
}

// UPDATE
async function updatePlacementRecordsWorkspace(id, body, file) {
  const workspace = await PlacementRecordsWorkspace.findById(id);
  if (!workspace) throw new Error("Placement records workspace not found");

  if (file) workspace.image = file.path;

  workspace.title = body.title ?? workspace.title;
  workspace.description = body.description ?? workspace.description;

  const updatedWorkspace = await workspace.save();
  return updatedWorkspace;
}

// DELETE
async function deletePlacementRecordsWorkspace(id) {
  const deletedWorkspace = await PlacementRecordsWorkspace.findByIdAndDelete(id);
  if (!deletedWorkspace) throw new Error("Placement records workspace not found");
  return deletedWorkspace;
}


// CREATE TEAM****************************************************
async function createPlacementRecordsTeam(body, file) {
  const data = {
    name: body.name,
    designation: body.designation,
    profile: body.profile,
    linkedin: body.linkedin,
    email: body.email,
    image: file.path
  };

  const team = new PlacementRecordsTeam(data);
  const savedTeam = await team.save();
  return savedTeam;
}

// GET ALL
async function getPlacementRecordsTeams() {
  const teams = await PlacementRecordsTeam.find().sort({ createdAt: -1 });
  return teams;
}

// UPDATE
async function updatePlacementRecordsTeam(id, body, file) {
  const team = await PlacementRecordsTeam.findById(id);
  if (!team) throw new Error("Placement records team not found");

  if (file) team.image = file.path;

  team.name = body.name ?? team.name;
  team.designation = body.designation ?? team.designation;
  team.profile = body.profile ?? team.profile;
  team.linkedin = body.linkedin ?? team.linkedin;
  team.email = body.email ?? team.email;

  const updatedTeam = await team.save();
  return updatedTeam;
}

// DELETE
async function deletePlacementRecordsTeam(id) {
  const deletedTeam = await PlacementRecordsTeam.findByIdAndDelete(id);
  if (!deletedTeam) throw new Error("Placement records team not found");
  return deletedTeam;
}



async function createCompanyCategory(body, files) {
  const companies = body.companies ? JSON.parse(body.companies) : [];

  let fileIndex = 0;
  companies.forEach((c) => {
    if (c._isNewImage && files[fileIndex]) {
      c.image = files[fileIndex].path;
      fileIndex++;
    }
    delete c._isNewImage;
  });

  const data = new CompanyCategory({
    title: body.title,
    companies: companies,
  });

  await data.save();
  return data;
}

async function getCompanyCategory() {
  const data = await CompanyCategory.find().sort({ createdAt: -1 });
  return data;
}

async function updateCompanyCategory(id, body, files) {
  const existing = await CompanyCategory.findById(id);
  if (!existing) throw "Company Category not found";

  const companies = body.companies ? JSON.parse(body.companies) : existing.companies;

  let fileIndex = 0;
  companies.forEach((c) => {
    if (c._isNewImage && files[fileIndex]) {
      c.image = files[fileIndex].path;
      fileIndex++;
    }
    delete c._isNewImage;
  });

  existing.title = body.title ?? existing.title;
  existing.companies = companies;

  await existing.save();
  return existing;
}

async function deleteCompanyCategory(id) {
  const existing = await CompanyCategory.findById(id);
  if (!existing) throw "Company Category not found";

  await existing.deleteOne();
  return existing;
}


async function createPlacementRecordsFaq(body) {
  const data = {
    question: body.question,
    answer: body.answer,
  };

  const result = await PlacementRecordsFaq.create(data);
  return result;
}

async function getPlacementRecordsFaq() {
  const result = await PlacementRecordsFaq.find().sort({ createdAt: -1 });
  return result;
}

async function updatePlacementRecordsFaq(id, body) {
  const existing = await PlacementRecordsFaq.findById(id);
  if (!existing) throw "PlacementRecordsFaq not found";

  existing.question = body.question ?? existing.question;
  existing.answer = body.answer ?? existing.answer;

  const updated = await existing.save();
  return updated;
}

async function deletePlacementRecordsFaq(id) {
  const existing = await PlacementRecordsFaq.findById(id);
  if (!existing) throw "PlacementRecordsFaq not found";

  await existing.deleteOne();
  return existing;
}


async function createPlacementRecordsVideo(body) {
  const data = {
    video: body.video,
  };

  const result = await PlacementRecordsVideo.create(data);
  return result;
}

async function getPlacementRecordsVideo() {
  const result = await PlacementRecordsVideo.find().sort({ createdAt: -1 });
  return result;
}

async function deletePlacementRecordsVideo(id) {
  const existing = await PlacementRecordsVideo.findById(id);
  if (!existing) throw "PlacementRecordsVideo not found";

  await existing.deleteOne();
  return existing;
}


module.exports = {
  createPlacementRecordsHero,
  getPlacementRecordsHeroes,
  updatePlacementRecordsHero,
  deletePlacementRecordsHero,
  createPlacementRecordsSlider,
  getPlacementRecordsSliders,
  updatePlacementRecordsSlider,
  deletePlacementRecordsSlider,
  createPlacementRecordsWorkspace,
  getPlacementRecordsWorkspaces,
  updatePlacementRecordsWorkspace,
  deletePlacementRecordsWorkspace,
  createPlacementRecordsTeam,
  getPlacementRecordsTeams,
  updatePlacementRecordsTeam,
  deletePlacementRecordsTeam,
  createCompanyCategory,
  getCompanyCategory,
  updateCompanyCategory,
  deleteCompanyCategory,
  createPlacementRecordsFaq,
  getPlacementRecordsFaq,
  updatePlacementRecordsFaq,
  deletePlacementRecordsFaq,
  createPlacementRecordsVideo,
  getPlacementRecordsVideo,
  deletePlacementRecordsVideo,
};
