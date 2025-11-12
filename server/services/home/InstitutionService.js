const { HomeInstitution } = require('../../models/home');

// GET ALL ACTIVE INSTITUTIONS
async function getInstitutions() {
  return await HomeInstitution.find({ status: 1 });
}

// GET BY ID
async function getInstitutionById(id) {
  return await HomeInstitution.findById(id);
}

// CREATE INSTITUTION
async function createInstitution(body) {
  const institution = new HomeInstitution({
    title: body.title,
    description: body.description,
    image_url: body.image_url,
    logo_url: body.logo_url,
    link: body.link,
    status: body.status ?? 1,
  });

  const savedInstitution = await institution.save();
  return savedInstitution;
}

// UPDATE INSTITUTION
async function updateInstitution(id, body) {
  const updatedInstitution = await HomeInstitution.findByIdAndUpdate(
    id,
    {
      $set: {
        ...(body.title && { title: body.title }),
        ...(body.description && { description: body.description }),
        ...(body.image_url && { image_url: body.image_url }),
        ...(body.logo_url && { logo_url: body.logo_url }),
        ...(body.link && { link: body.link }),
        ...(body.status !== undefined && { status: body.status }),
      },
    },
    { new: true } // return the updated doc
  );

  return updatedInstitution;
}

// DELETE INSTITUTION
async function deleteInstitution(id) {
  const result = await HomeInstitution.findByIdAndDelete(id);
  return result ? true : false;
}

module.exports = {
  getInstitutions,
  getInstitutionById,
  createInstitution,
  updateInstitution,
  deleteInstitution,
};
