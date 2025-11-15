const UgService= require('../../services/admissions/ugService');

async function createugHeroController(req, res) {

  try {

    const data = req.body;
    const hero = await UgService.createHero(data,req.file);
    res.status(201).json({
      success: true,
      message: 'Hero created successfully',
      data: hero,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Failed to create hero',
      error: err.message,
    });
  }
}

const getugHeroController = async (req, res) => {
  try {
    const hero = await UgService.getHero();
    res.status(200).json({
      success: true,
      message: 'Hero fetched successfully',
      data: hero,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Failed to fetch hero',
      error: err.message,
    });
  }
};
const updateugHeroController = async (req, res) => {

  try {
    const id = req.params.id;
    const data = req.body;
    const file = req.file;
    const hero = await UgService.updateHero(id,data,file);
    res.status(200).json({
      success: true,
      message: 'Hero updated successfully',
      data: hero,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Failed to update hero',
      error: err.message,
    });
  }
};
 
 const deleteugHeroController = async (req, res) => {
  try {
    const id = req.params.id;
    const hero = await UgService.deleteHero(id);
    res.status(200).json({
      success: true,
      message: 'Hero deleted successfully',
      data: hero,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Failed to delete hero',
      error: err.message,
    });
  }
};

async function createUgCourse(req, res) {
  try {
    const course = await UgService.createCourse(req.body, req.files);

    res.status(201).json({
      success: true,
      message: "UG Course created successfully",
      data: course,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to create UG Course",
      error: err.message,
    });
  }
}

async function getAllUgCourses(req, res) {
  try {
    const courses = await UgService.getAllCourses();

    res.status(200).json({
      success: true,
      message: "UG Courses fetched successfully",
      data: courses,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch courses",
      error: err.message,
    });
  }
}

async function getUgCourse(req, res) {
  try {
    const course = await UgService.getCourse(req.params.id);

    res.status(200).json({
      success: true,
      message: "UG Course fetched successfully",
      data: course,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch course",
      error: err.message,
    });
  }
}

async function updateUgCourse(req, res) {
  try {
    const course = await UgService.updateCourse(
      req.params.id,
      req.body,
      req.files
    );

    res.status(200).json({
      success: true,
      message: "UG Course updated successfully",
      data: course,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to update course",
      error: err.message,
    });
  }
}

async function deleteUgCourse(req, res) {
  try {
    const result = await UgService.deleteCourse(req.params.id);

    res.status(200).json({
      success: true,
      message: "UG Course deleted successfully",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to delete course",
      error: err.message,
    });
  }
}



module.exports = { 
  getugHeroController,
  createugHeroController,
  updateugHeroController,
  deleteugHeroController,
    createUgCourse,
  getAllUgCourses,
  getUgCourse,
  updateUgCourse,
  deleteUgCourse
};
