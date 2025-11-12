const InstitutionService = require('../../services/home/InstitutionService');

// CREATE
const createInstitutionController = async (req, res) => {
  try {
    console.log("FILES:", req.files);
    console.log("BODY:", req.body);

    // Get files from multer Cloudinary
    const image_url = req.files?.image ? req.files.image[0].path : null;
    const logo_url = req.files?.logo ? req.files.logo[0].path : null;

    const { title, description, link, status } = req.body;

    if (!title || !description) {
      return res.status(400).json({
        success: false,
        message: "Title and description are required"
      });
    }

    const createdInstitution = await InstitutionService.createInstitution({
      title,
      description,
      image_url,
      logo_url,
      link,
      status: status ?? 1
    });

    res.status(201).json({
      success: true,
      message: "Institution created successfully",
      data: createdInstitution
    });
  } catch (error) {
    console.error('Error creating institution:', error);
    res.status(500).json({
      success: false,
      message: "Failed to create institution",
      error: error.message
    });
  }
};

// GET ALL
const getInstitutionsController = async (req, res) => {
  try {
    const institutions = await InstitutionService.getInstitutions();
    res.status(200).json({
      success: true,
      message: "Institutions fetched successfully",
      data: institutions
    });
  } catch (error) {
    console.error('Error fetching institutions:', error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch institutions",
      error: error.message
    });
  }
};

// GET BY ID
const getInstitutionByIdController = async (req, res) => {
  try {
    const id = req.params.id;
    const institution = await InstitutionService.getInstitutionById(id);
    if (!institution) {
      return res.status(404).json({
        success: false,
        message: "Institution not found"
      });
    }
    res.status(200).json({
      success: true,
      message: "Institution fetched successfully",
      data: institution
    });
  } catch (error) {
    console.error('Error fetching institution:', error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch institution",
      error: error.message
    });
  }
};

// UPDATE
const updateInstitutionController = async (req, res) => {
  try {
    const id = req.params.id;

    const image_url = req.files?.image ? req.files.image[0].path : undefined;
    const logo_url = req.files?.logo ? req.files.logo[0].path : undefined;

    const { title, description, link, status } = req.body;

    const updatedInstitution = await InstitutionService.updateInstitution(id, {
      title,
      description,
      image_url,
      logo_url,
      link,
      status
    });

    if (!updatedInstitution) {
      return res.status(404).json({
        success: false,
        message: "Institution not found"
      });
    }

    res.status(200).json({
      success: true,
      message: "Institution updated successfully",
      data: updatedInstitution
    });
  } catch (error) {
    console.error('Error updating institution:', error);
    res.status(500).json({
      success: false,
      message: "Failed to update institution",
      error: error.message
    });
  }
};

// DELETE
const deleteInstitutionController = async (req, res) => {
  try {
    const id = req.params.id;
    const deleted = await InstitutionService.deleteInstitution(id);
    if (!deleted) {
      return res.status(404).json({
        success: false,
        message: "Institution not found"
      });
    }
    res.status(200).json({
      success: true,
      message: "Institution deleted successfully"
    });
  } catch (error) {
    console.error('Error deleting institution:', error);
    res.status(500).json({
      success: false,
      message: "Failed to delete institution",
      error: error.message
    });
  }
};

module.exports = {
  createInstitutionController,
  getInstitutionsController,
  getInstitutionByIdController,
  updateInstitutionController,
  deleteInstitutionController
};
