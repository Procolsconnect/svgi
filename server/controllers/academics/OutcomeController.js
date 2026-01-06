const OutcomeService = require('../../services/academics/OutcomeService');

const getAllOutcomes = async function (req, res) {
  try {
    const outcomes = await OutcomeService.getAllOutcomes();
    res.status(200).json(
      {
        success: true,
        message: "Outcome Fetched successfully",
        data: outcomes
      }
    );
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
}
// Get outcome by id
const getOutcomeById = async function (req, res) {
  try {
    const id = req.params.id;
    const outcome = await OutcomeService.getOutcomeById(id);
    if (!outcome) {
      throw new Error('Outcome not found');
    }
    res.status(200).json({
      success: true,
      message: "Outcome Fetched successfully",
      data: outcome
    });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
}

// Create outcome
const createOutcome = async function (req, res) {
  try {
    const outcome = await OutcomeService.createCourseOutcome(req.body);
    res.status(201).json({
      success: true,
      message: "Outcome created successfully",
      data: outcome
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}
// Update outcome
const updateOutcome = async function (req, res) {
  try {
    const id = req.params.id;
    const outcome = await OutcomeService.updateCourseOutcome(id, req.body);
    if (!outcome) {
      throw new Error('Outcome not found');
    }
    res.status(200).json({
      success: true,
      message: "Outcome updated successfully",
      data: outcome
    });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
}

// Delete outcome
const deleteOutcome = async function (req, res) {
  try {
    const id = req.params.id;
    const outcome = await OutcomeService.deleteCourseOutcome(id);
    if (!outcome) {
      throw new Error('Outcome not found');
    }
    res.status(204).json({ message: 'Outcome deleted successfully' });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
}

// Get all outcomehero
const getAllOutcomehero = async function (req, res) {
  try {
    const outcomehero = await OutcomeService.getAllOutcomehero();
    res.status(200).json({
      success: true,
      message: "Outcomehero Fetched successfully",
      data: outcomehero
    });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
}

// Get outcomehero by id
const getOutcomeheroById = async function (req, res) {
  try {
    const id = req.params.id;
    const outcomehero = await OutcomeService.getCourseOutcomeheroById(id);
    if (!outcomehero) {
      throw new Error('Outcomehero not found');
    }
    res.status(200).json({
      success: true,
      message: "Outcomehero Fetched successfully",
      data: outcomehero
    });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
}

// Create outcomehero
const createOutcomehero = async function (req, res) {
  try {
    const files = req.file ? { image: [req.file] } : null;
    const outcomehero = await OutcomeService.createCourseOutcomehero(req.body, files);
    res.status(201).json({
      success: true,
      message: "Outcomehero created successfully",
      data: outcomehero
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

// Update outcomehero
const updateOutcomehero = async function (req, res) {
  try {
    const id = req.params.id;
    const files = req.file ? { image: [req.file] } : null;
    const outcomehero = await OutcomeService.updateCourseOutcomehero(id, req.body, files);
    if (!outcomehero) {
      throw new Error('Outcomehero not found');
    }
    res.status(200).json({
      success: true,
      message: "Outcomehero updated successfully",
      data: outcomehero
    });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
}

// Delete outcomehero
const deleteOutcomehero = async function (req, res) {
  try {
    const id = req.params.id;
    const outcomehero = await OutcomeService.deleteCourseOutcomehero(id);
    if (!outcomehero) {
      throw new Error('Outcomehero not found');
    }
    res.status(204).json({ message: 'Outcomehero deleted successfully' });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
}
module.exports = {
  getAllOutcomes,
  getOutcomeById,
  createOutcome,
  updateOutcome,
  deleteOutcome,
  getAllOutcomehero,
  createOutcomehero,
  updateOutcomehero,
  deleteOutcomehero
}
