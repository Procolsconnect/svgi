const { studentachivement } = require("../../models/home");

// ✅ GET all achievements
async function getStudentAchivement() {
  return await studentachivement.find().sort({ createdAt: -1 });
}

// ✅ CREATE achievement
async function createStudentAchivement(body, file) {
  try {
    const img_url = file?.path || body.img || null;

    if (!img_url) throw new Error("Image upload failed or 'img' field missing");

    const data = {
      img: img_url,
      title: body.title,
      description: body.description,
    };

    const std = new studentachivement(data);
    return await std.save();
  } catch (err) {
    console.error("❌ createStudentAchivement Error:", err);
    throw err;
  }
}

// ✅ UPDATE achievement
async function updateStudentAchivement(id, body, file) {
  const std = await studentachivement.findById(id);
  if (!std) throw new Error("Achievement not found");

  if (file?.path) std.img = file.path;
  std.title = body.title ?? std.title;
  std.description = body.description ?? std.description;

  return await std.save();
}

// ✅ DELETE achievement
async function deleteStudentAchivement(id) {
  const deleted = await studentachivement.findByIdAndDelete(id);
  if (!deleted) throw new Error("Achievement not found");
  return deleted;
}

module.exports = {
  getStudentAchivement,
  createStudentAchivement,
  updateStudentAchivement,
  deleteStudentAchivement,
};
