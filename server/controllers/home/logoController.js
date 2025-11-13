const logoService = require("../../services/home/logoService");

/**
 * Factory function to create logo controllers for any logo model.
 * @param {MongooseModel} Model - Mongoose model (e.g., LogoSection1, LogoSection2)
 */
function createLogoController(Model) {
  // CREATE LOGO
  const createLogoController = async (req, res) => {
    try {
      const file = req.file;
      const body = req.body;

      const result = await logoService.createLogo(Model, body, file);

      return res.status(201).json({
        success: true,
        message: "Logo added successfully",
        data: result,
      });
    } catch (error) {
      console.error("❌ Error creating logo:", error);
      return res.status(500).json({
        success: false,
        message: "Failed to add logo",
        error: error.message || error.toString(),
      });
    }
  };

  // GET ALL LOGOS
  const getLogosController = async (req, res) => {
    try {
      const result = await logoService.getAllLogos(Model);
      res.status(200).json({
        success: true,
        message: "Logos fetched successfully",
        data: result,
      });
    } catch (error) {
      console.error("❌ Error fetching logos:", error);
      res.status(500).json({
        success: false,
        message: "Failed to fetch logos",
        error: error.message,
      });
    }
  };

  // GET SINGLE LOGO BY ID
  const getLogoByIdController = async (req, res) => {
    try {
      const id = req.params.id;
      const result = await logoService.getLogoById(Model, id);

      if (!result) {
        return res.status(404).json({
          success: false,
          message: "Logo not found",
        });
      }

      res.status(200).json({
        success: true,
        message: "Logo fetched successfully",
        data: result,
      });
    } catch (error) {
      console.error("❌ Error fetching logo:", error);
      res.status(500).json({
        success: false,
        message: "Failed to fetch logo",
        error: error.message,
      });
    }
  };

  // UPDATE LOGO
  const updateLogoController = async (req, res) => {
    try {
      const id = req.params.id;
      const file = req.file;
      const body = req.body;

      const result = await logoService.updateLogo(Model, id, body, file);

      res.status(200).json({
        success: true,
        message: "Logo updated successfully",
        data: result,
      });
    } catch (error) {
      console.error("❌ Error updating logo:", error);
      res.status(500).json({
        success: false,
        message: "Failed to update logo",
        error: error.message,
      });
    }
  };

  // DELETE LOGO
  const deleteLogoController = async (req, res) => {
    try {
      const id = req.params.id;
      const result = await logoService.deleteLogo(Model, id);

      if (result) {
        res.status(200).json({
          success: true,
          message: "Logo deleted successfully",
        });
      } else {
        res.status(404).json({
          success: false,
          message: "Logo not found",
        });
      }
    } catch (error) {
      console.error("❌ Error deleting logo:", error);
      res.status(500).json({
        success: false,
        message: "Failed to delete logo",
        error: error.message,
      });
    }
  };

  // Return all controllers for the given model
  return {
    createLogoController,
    getLogosController,
    getLogoByIdController,
    updateLogoController,
    deleteLogoController,
  };
}

module.exports = createLogoController;
