const StudentAchivementService = require('../../services/home/StudentAchivementService');

// CREATE
async function createStudentAchivementController(req, res) {
  try {
    const result = await StudentAchivementService.createStudentAchivement(req.body, req.file);
    res.status(201).json({
      success: true,
      message: "Student achievement created successfully",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to create student achievement",
      error: err.message,
    });
  }
}

// GET
async function getStudentAchivementController(req, res) {
  try {
    const data = await StudentAchivementService.getStudentAchivement();
    res.status(200).json({
      success: true,
      message: "Student achievements fetched successfully",
      data,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch student achievements",
      error: err.message,
    });
  }
}

// UPDATE
async function updateStudentAchivementController(req, res) {
  try {
    const id = req.params.id;
    const updated = await StudentAchivementService.updateStudentAchivement(id, req.body, req.file);
    res.status(200).json({
      success: true,
      message: "Student achievement updated successfully",
      data: updated,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to update student achievement",
      error: err.message,
    });
  }
}

// DELETE
async function deleteStudentAchivementController(req, res) {
  try {
    const id = req.params.id;
    const deleted = await StudentAchivementService.deleteStudentAchivement(id);
    res.status(200).json({
      success: true,
      message: "Student achievement deleted successfully",
      data: deleted,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to delete student achievement",
      error: err.message,
    });
  }
}

module.exports = {
  createStudentAchivementController,
  getStudentAchivementController,
  updateStudentAchivementController,
  deleteStudentAchivementController,
};
