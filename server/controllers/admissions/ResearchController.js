const ResearchService = require('../../services/admissions/ResearchService');

// ------------ HERO -------------

async function createResearchHeroController(req, res) {
  try {
    const hero = await ResearchService.createResearchHero(req.body, req.file);
    res.status(201).json({
      success: true,
      message: 'Research Hero created successfully',
      data: hero,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Failed to create Research Hero',
      error: err.message,
    });
  }
}

async function getResearchHeroController(req, res) {
  try {
    const heroes = await ResearchService.getResearchHero();
    res.status(200).json({
      success: true,
      message: 'Research Heroes fetched successfully',
      data: heroes,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Failed to fetch Research Heroes',
      error: err.message,
    });
  }
}

async function updateResearchHeroController(req, res) {
  try {
    const hero = await ResearchService.updateResearchHero(
      req.params.id,
      req.body,
      req.file
    );

    res.status(200).json({
      success: true,
      message: 'Research Hero updated successfully',
      data: hero,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Failed to update Research Hero',
      error: err.message,
    });
  }
}

async function deleteResearchHeroController(req, res) {
  try {
    const hero = await ResearchService.deleteResearchHero(req.params.id);

    res.status(200).json({
      success: true,
      message: 'Research Hero deleted successfully',
      data: hero,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Failed to delete Research Hero',
      error: err.message,
    });
  }
}


// ------------ COURSE -------------

async function createResearchCourse(req, res) {
  try {
    const course = await ResearchService.createResearchCourse(req.body, req.files);
    res.status(201).json({
      success: true,
      message: 'Research Course created successfully',
      data: course,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Failed to create Research Course',
      error: err.message,
    });
  }
}

async function getAllResearchCourses(req, res) {
  try {
    const courses = await ResearchService.getAllResearchCourses();
    res.status(200).json({
      success: true,
      message: 'Research Courses fetched successfully',
      data: courses,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Failed to fetch Research Courses',
      error: err.message,
    });
  }
}

async function getResearchCourse(req, res) {
  try {
    const course = await ResearchService.getResearchCourse(req.params.id);
    res.status(200).json({
      success: true,
      message: 'Research Course fetched successfully',
      data: course,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Failed to fetch Research Course',
      error: err.message,
    });
  }
}

async function updateResearchCourse(req, res) {
  try {
    const course = await ResearchService.updateResearchCourse(
      req.params.id,
      req.body,
      req.files
    );

    res.status(200).json({
      success: true,
      message: 'Research Course updated successfully',
      data: course,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Failed to update Research Course',
      error: err.message,
    });
  }
}

async function deleteResearchCourse(req, res) {
  try {
    const result = await ResearchService.deleteResearchCourse(req.params.id);

    res.status(200).json({
      success: true,
      message: 'Research Course deleted successfully',
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Failed to delete Research Course',
      error: err.message,
    });
  }
}

module.exports = {
  createResearchHeroController,
  getResearchHeroController,
  updateResearchHeroController,
  deleteResearchHeroController,
  createResearchCourse,
  getAllResearchCourses,
  getResearchCourse,
  updateResearchCourse,
  deleteResearchCourse
};
