const ProcedureService = require('../../services/admissions/ProcedureService');

// ------------ HERO -------------

async function createProcedureHero(req, res) {
  try {
    const hero = await ProcedureService.createProcedureHero(req.body, req.file);
    res.status(201).json({
      success: true,
      message: 'Procedure Hero created successfully',
      data: hero,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Failed to create Procedure Hero',
      error: err.message,
    });
  }
}

async function getProcedureHero(req, res) {
  try {
    const heroes = await ProcedureService.getProcedureHero();
    res.status(200).json({
      success: true,
      message: 'Procedure Heroes fetched successfully',
      data: heroes,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Failed to fetch Procedure Heroes',
      error: err.message,
    });
  }
}

async function updateProcedureHero(req, res) {
  try {
    const hero = await ProcedureService.updateProcedureHero(
      req.params.id,
      req.body,
      req.file
    );

    res.status(200).json({
      success: true,
      message: 'Procedure Hero updated successfully',
      data: hero,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Failed to update Procedure Hero',
      error: err.message,
    });
  }
}

async function deleteProcedureHero(req, res) {
  try {
    const hero = await ProcedureService.deleteProcedureHero(req.params.id);

    res.status(200).json({
      success: true,
      message: 'Procedure Hero deleted successfully',
      data: hero,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Failed to delete Procedure Hero',
      error: err.message,
    });
  }
}


// ------------ COURSE -------------

const create = async (req, res) => {
  try {
    const videoPath = req.file?.path;
    if (!videoPath)
      return res.status(400).json({ message: "Video is required" });

    const result = await ProcedureService.createProcedure(req.body, videoPath);

    res.status(201).json({
      success: true,
      message: "Procedure created",
      data: result,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

const getAllController = async (req, res) => {
  try {
    const data = await ProcedureService.getAll();
    res.json({ success: true, data });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

const getOneController = async (req, res) => {
  try {
    const data = await ProcedureService.getOne(req.params.id);
    res.json({ success: true, data });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

const update = async (req, res) => {
  try {
    const updated = await ProcedureService.updateProcedure(
      req.params.id,
      req.body,
      req.file?.path
    );

    res.json({
      success: true,
      message: "Procedure updated",
      data: updated,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

const deleteOne = async (req, res) => {
  try {
    await ProcedureService.deleteProcedure(req.params.id);
    res.json({ success: true, message: "Procedure deleted" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

module.exports = {
  createProcedureHero,    
  getProcedureHero,
  updateProcedureHero,
  deleteProcedureHero,
  create,
  getAllController,
  getOneController,
  update,
  deleteOne,
};
