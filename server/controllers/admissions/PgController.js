const PgService= require('../../services/admissions/PgService');

async function createPgHeroController(req, res) {

  try {

    const data = req.body;
    const hero = await PgService.createHero(data,req.file);
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

const getPgHeroController = async (req, res) => {
  try {
    const hero = await PgService.getHero();
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
const updatePgHeroController = async (req, res) => {

  try {
    const id = req.params.id;
    const data = req.body;
    const file = req.file;
    const hero = await PgService.updateHero(id,data,file);
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
 
 const deletePgHeroController = async (req, res) => {
  try {
    const id = req.params.id;
    const hero = await PgService.deleteHero(id);
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

async function createPgCourse(req, res) {
  try {
    const course = await PgService.createCourse(req.body, req.files);

    res.status(201).json({
      success: true,
      message: "Pg Course created successfully",
      data: course,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to create Pg Course",
      error: err.message,
    });
  }
}

async function getAllPgCourses(req, res) {
  try {
    const courses = await PgService.getAllCourses();

    res.status(200).json({
      success: true,
      message: "Pg Courses fetched successfully",
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

async function getPgCourse(req, res) {
  try {
    const course = await PgService.getCourse(req.params.id);

    res.status(200).json({
      success: true,
      message: "Pg Course fetched successfully",
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

async function updatePgCourse(req, res) {
  try {
    const course = await PgService.updateCourse(
      req.params.id,
      req.body,
      req.files
    );

    res.status(200).json({
      success: true,
      message: "Pg Course updated successfully",
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

async function deletePgCourse(req, res) {
  try {
    const result = await PgService.deleteCourse(req.params.id);

    res.status(200).json({
      success: true,
      message: "Pg Course deleted successfully",
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
  getPgHeroController,
  createPgHeroController,
  updatePgHeroController,
  deletePgHeroController,
    createPgCourse,
  getAllPgCourses,
  getPgCourse,
  updatePgCourse,
  deletePgCourse
};
