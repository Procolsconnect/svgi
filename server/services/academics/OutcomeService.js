const { CourseOutcome, CourseOutcomehero } = require("../../models/academics");

// ------------------- GET ALL -------------------
async function getAllOutcomes() {
  return await CourseOutcome.find().sort({ createdAt: -1 });
}
async function getAllOutcomehero() {
  return await CourseOutcomehero.find().sort({ createdAt: -1 });
}

async function createCourseOutcomehero(body, files) {
  if (!files || !files.image) {
    throw new Error("Image is required");
  }

  const imageUrl = files.image[0].path;

  const outcomehero = await CourseOutcomehero.create({
    title: body.title,
    image: imageUrl,
  });

  return outcomehero;
}

async function updateCourseOutcomehero(id, body, files) {
  const updateData = {
    title: body.title,
  };

  if (files && files.image && files.image.length > 0) {
    updateData.image = files.image[0].path;
  }

  const updated = await CourseOutcomehero.findByIdAndUpdate(id, updateData, {
    new: true,
  });

  if (!updated) throw new Error("CourseOutcomehero not found");

  return updated;
}

async function deleteCourseOutcomehero(id) {
  const deleted = await CourseOutcomehero.findByIdAndDelete(id);
  if (!deleted) throw new Error("CourseOutcomehero not found");
  return deleted;
}
// ------------------- GET BY ID -------------------
async function getCourseOutcomeById(id) {
  const outcome = await CourseOutcome.findById(id);
  if (!outcome) throw new Error("CourseOutcome not found");
  return outcome;
}

// ------------------- CREATE -------------------
async function createCourseOutcome(body, files) {
  if (!files || !files.image || !files.pdf) {
    throw new Error("Image and PDF are required");
  }

  const imageUrl = files.image[0].path;
  const pdfUrl = files.pdf[0].path;

  const outcome = await CourseOutcome.create({
    title: body.title,
    description: body.description,
    image: imageUrl,
    pdf: pdfUrl,
  });

  return outcome;
}

// ------------------- UPDATE -------------------
async function updateCourseOutcome(id, body, files) {
  const updateData = {
    title: body.title,
    description: body.description,
  };

  if (files?.image) updateData.image = files.image[0].path;
  if (files?.pdf) updateData.pdf = files.pdf[0].path;

  const updated = await CourseOutcome.findByIdAndUpdate(id, updateData, {
    new: true,
  });

  if (!updated) throw new Error("CourseOutcome not found");

  return updated;
}

// ------------------- DELETE -------------------
async function deleteCourseOutcome(id) {
  const deleted = await CourseOutcome.findByIdAndDelete(id);
  if (!deleted) throw new Error("CourseOutcome not found");
  return deleted;
}

// ------------------- GET HERO BY ID -------------------
async function getCourseOutcomeheroById(id) {
  const outcomehero = await CourseOutcomehero.findById(id);
  if (!outcomehero) throw new Error("CourseOutcomehero not found");
  return outcomehero;
}

module.exports = {
  getAllOutcomes,
  getCourseOutcomeById,
  createCourseOutcome,
  updateCourseOutcome,
  deleteCourseOutcome,
  getAllOutcomehero,
  getCourseOutcomeheroById,
  createCourseOutcomehero,
  updateCourseOutcomehero,
  deleteCourseOutcomehero,
};
