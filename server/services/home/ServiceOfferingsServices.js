const { ServiceOffering } = require("../../models/home"); // Import model

// CREATE SERVICE OFFERING
async function createServiceOffering(body, file) {
  let image = null;

  // Handle file upload
  if (file) {
    image = "/uploads/" + file.filename;
  }

  const data = {
    title: body.title,
    description: body.description,
    image,
  };

  const offering = new ServiceOffering(data);
  const savedOffering = await offering.save();
  return savedOffering;
}

// GET ALL SERVICE OFFERINGS
async function getServiceOfferings() {
  const offerings = await ServiceOffering.find().sort({ createdAt: -1 });
  return offerings;
}

// UPDATE SERVICE OFFERING
async function updateServiceOffering(id, body, file) {
  const offering = await ServiceOffering.findById(id);
  if (!offering) throw new Error("Service offering not found");

  // Update file if provided
  if (file) {
    offering.image = "/uploads/" + file.filename;
  }

  // Update other fields
  offering.title = body.title ?? offering.title;
  offering.description = body.description ?? offering.description;

  const updatedOffering = await offering.save();
  return updatedOffering;
}

// DELETE SERVICE OFFERING
async function deleteServiceOffering(id) {
  const deletedOffering = await ServiceOffering.findByIdAndDelete(id);
  if (!deletedOffering) throw new Error("Service offering not found");
  return deletedOffering;
}

module.exports = {
  createServiceOffering,
  getServiceOfferings,
  updateServiceOffering,
  deleteServiceOffering,
};
