const { OverviewHero, Overview,ContactCard } = require('../../models/admissions');


/* =========================================================
    OVERVIEW HERO SERVICES
   ========================================================= */

// CREATE
async function createOverviewHero(body, file) {
  const data = {
    title: body.title,
    image: file?.path
  };
  return await new OverviewHero(data).save();
}

// GET ALL
async function getOverviewHero() {
  return await OverviewHero.find().sort({ created_at: -1 });
}

// GET BY ID
async function getOverviewHeroById(id) {
  const hero = await OverviewHero.findById(id);
  if (!hero) throw new Error("Overview Hero not found");
  return hero;
}

// UPDATE
async function updateOverviewHero(id, body, file) {
  const hero = await OverviewHero.findById(id);
  if (!hero) throw new Error("Overview Hero not found");

  if (file) hero.image = file.path;
  if (body.title) hero.title = body.title;

  return await hero.save();
}

// DELETE
async function deleteOverviewHero(id) {
  const hero = await OverviewHero.findByIdAndDelete(id);
  if (!hero) throw new Error("Overview Hero not found");
  return hero;
}

/* =========================================================
    OVERVIEW (MAIN CONTENT)
   ========================================================= */

// CREATE
async function createOverview(body, files) {
  return await Overview.create({
    title1: body.title1,
    para1: body.para1,
    image1: files.image1?.[0].path,

    title2: body.title2,
    para2: body.para2,

    ug: files.ug?.[0].path,
    pg: files.pg?.[0].path,
    research: files.research?.[0].path,
    procedure: files.procedure?.[0].path,    
      para3: body.para3,
    // << added procedure image
       // if this is required
  });
}

// GET ALL
async function getAll() {
  return await Overview.find().sort({ created_at: -1 });
}

// GET BY ID
async function getOne(id) {
  const overview = await Overview.findById(id);
  if (!overview) throw new Error("Overview not found");
  return overview;
}

// UPDATE
async function updateOverview(id, body, files) {
  const updateData = { ...body };

  if (files.image1) updateData.image1 = files.image1[0].path;
  if (files.ug) updateData.ug = files.ug[0].path;
  if (files.pg) updateData.pg = files.pg[0].path;
  if (files.research) updateData.research = files.research[0].path;
  if (files.procedure) updateData.procedure = files.procedure[0].path;
  if (files.overview) updateData.overview = files.overview[0].path;

  const updated = await Overview.findByIdAndUpdate(id, updateData, { new: true });

  if (!updated) throw new Error("Overview not found");

  return updated;
}

// DELETE
async function deleteOverview(id) {
  const deleted = await Overview.findByIdAndDelete(id);
  if (!deleted) throw new Error("Overview not found");
  return deleted;
}


async function createContactCard(body, file) {
  return await ContactCard.create({
    title: body.title,
    phone: body.phone,
    email: body.email,
    description: body.description,
    image: file.path,
  });
}

async function getAllCards() {
  return await ContactCard.find().sort({ createdAt: -1 });
}

async function getOneCard(id) {
  const card = await ContactCard.findById(id);
  if (!card) throw new Error("Contact Card not found");
  return card;
}

async function updateContactCard(id, body, file) {
  const updateData = { ...body };
  if (file) updateData.image = file.path;

  const card = await ContactCard.findByIdAndUpdate(id, updateData, { new: true });
  if (!card) throw new Error("Contact Card not found");
  return card;
}

async function deleteContactCard(id) {
  const card = await ContactCard.findByIdAndDelete(id);
  if (!card) throw new Error("Contact Card not found");
  return card;
}



/* ========================================================= */

module.exports = {
  // HERO
  createOverviewHero,
  getOverviewHero,
  getOverviewHeroById,
  updateOverviewHero,
  deleteOverviewHero,

  // OVERVIEW
  createOverview,
  getAll,
  getOne,
  updateOverview,
  deleteOverview,

    createContactCard,
  getAllCards,
  getOneCard,
  updateContactCard,
  deleteContactCard,
};
