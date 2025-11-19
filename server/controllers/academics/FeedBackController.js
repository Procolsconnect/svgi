const FeedbackService = require("../../services/academics/FeedbackService");
async function createfeedbackHero(req, res) {
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
const getfeedbackHero = async (req, res) => {
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
const updatefeedbackHero = async (req, res) => {
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
const deletefeedbackHero = async (req, res) => {
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
async function createfeedbackReview(req, res) {
    try {
        const review = await FeedbackService.createReview(req.body, req.file);
        res.status(201).json({
            success: true,
            message: 'Review created successfully',
            data: review,
        });

    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'Failed to create Review',
            error: err.message,
        });
    }
}

// GET ALL HEROES
const getfeedbackReview = async (req, res) => {
    try {
        const review = await FeedbackService.getReview();

        res.status(200).json({
            success: true,
            message: 'Reviewes fetched successfully',
            data: review,
        });

    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'Failed to fetch Review',
            error: err.message,
        });
    }
};

// UPDATE HERO
const updatefeedbackReview = async (req, res) => {
    try {
        const id = req.params.id;
        const Review = await FeedbackService.updateReview(id, req.body, req.file);

        res.status(200).json({
            success: true,
            message: 'Review updated successfully',
            data: Review,
        });

    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'Failed to update Review',
            error: err.message,
        });
    }
};

// DELETE HERO
const deletefeedbackReview = async (req, res) => {
    try {
        const id = req.params.id;
        const deleted = await FeedbackService.deleteReview(id);

        res.status(200).json({
            success: true,
            message: 'Review deleted successfully',
            data: deleted,
        });

    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'Failed to delete Review',
            error: err.message,
        });
    }
};


async function createFaqController(req, res) {
    try {
        const faq = await FeedbackService.createFaq(req.body);
        res.status(201).json({
            success: true,
            message: "FAQ created successfully",
            data: faq,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Failed to create FAQ",
            error: err.message,
        });
    }
}

// GET ALL FAQ
const getFaqController = async (req, res) => {
    try {
        const faqs = await FeedbackService.getFaq();

        res.status(200).json({
            success: true,
            message: "FAQs fetched successfully",
            data: faqs,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Failed to fetch FAQs",
            error: err.message,
        });
    }
};

// GET FAQ BY ID
const getFaqByIdController = async (req, res) => {
    try {
        const id = req.params.id;
        const faq = await FeedbackService.getFaqById(id);

        res.status(200).json({
            success: true,
            message: "FAQ fetched successfully",
            data: faq,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Failed to fetch FAQ",
            error: err.message,
        });
    }
};

// UPDATE FAQ
const updateFaqController = async (req, res) => {
    try {
        const id = req.params.id;
        const faq = await FeedbackService.updateFaq(id, req.body);

        res.status(200).json({
            success: true,
            message: "FAQ updated successfully",
            data: faq,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Failed to update FAQ",
            error: err.message,
        });
    }
};

// DELETE FAQ
const deleteFaqController = async (req, res) => {
    try {
        const id = req.params.id;
        const deleted = await FeedbackService.deleteFaq(id);

        res.status(200).json({
            success: true,
            message: "FAQ deleted successfully",
            data: deleted,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Failed to delete FAQ",
            error: err.message,
        });
    }
};


module.exports = {
    createfeedbackHero,
    getfeedbackHero,
    updatefeedbackHero,
    deletefeedbackHero,
    createfeedbackReview,
    getfeedbackReview,
    updatefeedbackReview,
    deletefeedbackReview,
    createFaqController,
    getFaqController,
    getFaqByIdController,
    updateFaqController,
    deleteFaqController,
};