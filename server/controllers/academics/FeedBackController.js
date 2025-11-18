const FeedbackService = require("../../services/academics/FeedbackService");
async function createfeedbackHeroController(req, res) {
    try {
        const hero = await FeedbackService.createHero(req.body, req.file);
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

// GET ALL HEROES
const getfeedbackHeroController = async (req, res) => {
    try {
        const heroes = await FeedbackService.getHero();

        res.status(200).json({
            success: true,
            message: 'Heroes fetched successfully',
            data: heroes,
        });

    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'Failed to fetch heroes',
            error: err.message,
        });
    }
};

// UPDATE HERO
const updatefeedbackHeroController = async (req, res) => {
    try {
        const id = req.params.id;
        const hero = await FeedbackService.updateHero(id, req.body, req.file);

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

// DELETE HERO
const deletefeedbackHeroController = async (req, res) => {
    try {
        const id = req.params.id;
        const deleted = await FeedbackService.deleteHero(id);

        res.status(200).json({
            success: true,
            message: 'Hero deleted successfully',
            data: deleted,
        });

    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'Failed to delete hero',
            error: err.message,
        });
    }
};
module.exports = {
    createfeedbackHeroController,
    getfeedbackHeroController,
    updatefeedbackHeroController,
    deletefeedbackHeroController
};