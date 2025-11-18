const { ProcedureHero, Procedure } = require('../../models/admissions');


async function createProcedureHero(body, file) {
  const data = {
    title: body.title,
    image: file.path
  };
  const hero = new ProcedureHero(data);
  return await hero.save();
}

async function getProcedureHero() {
  return await ProcedureHero.find().sort({ created_at: -1 });
}

async function updateProcedureHero(id, body, file) {
  const hero = await ProcedureHero.findById(id);
  if (!hero) throw new Error("Research Hero not found");

  if (file) {
    hero.image = file.path;
  }

  hero.title = body.title ?? hero.title;

  return await hero.save();
}

async function deleteProcedureHero(id) {
  const hero = await ProcedureHero.findByIdAndDelete(id);
  if (!hero) throw new Error("Research Hero not found");
  return hero;
}

const createProcedure = async (body, videoPath) => {
  const { content, steps } = body;
  const parsedSteps = steps ? JSON.parse(steps) : [];

  return await Procedure.create({
    content,
    video: videoPath,
    steps: parsedSteps
  });
};

const getAll = async () => {
  return await Procedure.find().sort({ createdAt: -1 });
};

const getOne = async (id) => {
  return await Procedure.findById(id);
};const updateProcedure = async (id, body, videoPath) => {
  const { content, steps } = body;

  const updateData = {};

  if (content) updateData.content = content;

  // Only update steps if frontend sends steps
  if (steps) {
    updateData.steps = JSON.parse(steps);
  }

  if (videoPath) {
    updateData.video = videoPath;
  }

  return await Procedure.findByIdAndUpdate(id, updateData, { new: true });
};

const deleteProcedure = async (id) => {
  return await Procedure.findByIdAndDelete(id);
};

module.exports = {
  createProcedureHero,
  getProcedureHero,
  updateProcedureHero,
  deleteProcedureHero,
  createProcedure,
  getAll,
  getOne,
  updateProcedure,
  deleteProcedure
};
