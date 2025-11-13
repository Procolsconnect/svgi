const { Placement } = require("../../models/home");

// CREATE PLACEMENT
async function createPlacement(body, file) {
  try {
    const img_url = file?.path || body.img || null;

    const data = {
      img: img_url,
      title: body.title,
      desc: body.desc,
    };

    if (!data.img) {
      throw new Error("Image upload failed or 'img' field missing");
    }

    const placement = new Placement(data);
    return await placement.save();
  } catch (err) {
    console.error("❌ createPlacement Error:", err);
    throw err;
  }
}

// GET ALL PLACEMENTS
async function getAllPlacements() {
  try {
    return await Placement.find({}).sort({ createdAt: -1 });
  } catch (err) {
    console.error("❌ getAllPlacements Error:", err);
    throw err;
  }
}

// GET SINGLE PLACEMENT
async function getPlacementById(id) {
  const placement = await Placement.findById(id);
  if (!placement) throw new Error("Placement not found");
  return placement;
}

// UPDATE PLACEMENT
async function updatePlacement(id, body, file) {
  const placement = await Placement.findById(id);
  if (!placement) throw new Error("Placement not found");

  if (file?.path) {
    placement.img = file.path; // ✅ Cloudinary URL
  }

  placement.title = body.title ?? placement.title;
  placement.desc = body.desc ?? placement.desc;

  return await placement.save();
}

// DELETE PLACEMENT
async function deletePlacement(id) {
  const deleted = await Placement.findByIdAndDelete(id);
  if (!deleted) throw new Error("Placement not found");
  return deleted;
}

module.exports = {
  createPlacement,
  getAllPlacements,
  getPlacementById,
  updatePlacement,
  deletePlacement,
};
