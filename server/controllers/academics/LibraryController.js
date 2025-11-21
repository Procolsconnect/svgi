const LibraryService = require('../../services/academics/LibraryService');



// CREATE HERO
async function createlibraryHeroController(req, res) {
    try {
        const hero = await LibraryService.createHero(req.body, req.file);
        res.status(201).json({
            success: true,
            message: 'Library Hero created successfully',
            data: hero,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'Failed to create Library Hero',
            error: err.message,
        });
    }
}

// GET ALL HEROES
async function getlibraryHeroController(req, res) {
    try {
        const heroes = await LibraryService.getHero();
        res.status(200).json({
            success: true,
            message: 'Library Hero fetched successfully',
            data: heroes,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'Failed to fetch Library Heroes',
            error: err.message,
        });
    }
}

// UPDATE HERO
async function updatelibraryHeroController(req, res) {
    try {
        const updated = await LibraryService.updateHero(req.params.id, req.body, req.file);
        res.status(200).json({
            success: true,
            message: 'Library Hero updated successfully',
            data: updated,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'Failed to update Library Hero',
            error: err.message,
        });
    }
}

// DELETE HERO
async function deletelibraryHeroController(req, res) {
    try {
        const deleted = await LibraryService.deleteHero(req.params.id);
        res.status(200).json({
            success: true,
            message: 'Library Hero deleted successfully',
            data: deleted,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'Failed to delete Library Hero',
            error: err.message,
        });
    }
}


/* ===============================
    📌 LIBRARY IMAGE CONTROLLERS
=============================== */

// CREATE IMAGE
async function createlibraryImageController(req, res) {
    try {
        const image = await LibraryService.createLibraryimage(req.file);
        res.status(201).json({
            success: true,
            message: 'Library Image created successfully',
            data: image,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'Failed to create Library Image',
            error: err.message,
        });
    }
}

// GET ALL IMAGES
async function getlibraryImageController(req, res) {
    try {
        const images = await LibraryService.getLibraryimage();
        res.status(200).json({
            success: true,
            data: images,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'Failed to fetch Library Images',
            error: err.message,
        });
    }
}

// DELETE IMAGE
async function deletelibraryImageController(req, res) {
    try {
        const deleted = await LibraryService.deleteLibraryimage(req.params.id);
        res.status(200).json({
            success: true,
            message: 'Library Image deleted successfully',
            data: deleted,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'Failed to delete Library Image',
            error: err.message,
        });
    }
}


/* ===============================
    📌 LIBRARY VIDEO CONTROLLERS
=============================== */

// CREATE VIDEO
async function createlibraryVideoController(req, res) {
    try {
        const video = await LibraryService.createLibraryvideo(req.body, req.file);
        res.status(201).json({
            success: true,
            message: 'Library Video created successfully',
            data: video,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'Failed to create Library Video',
            error: err.message,
        });
    }
}

// GET ALL VIDEOS
async function getlibraryVideoController(req, res) {
    try {
        const videos = await LibraryService.getLibraryvideo();
        res.status(200).json({
            success: true,
            data: videos,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'Failed to fetch Library Videos',
            error: err.message,
        });
    }
}

// UPDATE VIDEO
async function updatelibraryVideoController(req, res) {
    try {
        const updated = await LibraryService.updateLibraryvideo(req.params.id, req.body, req.file);
        res.status(200).json({
            success: true,
            message: 'Library Video updated successfully',
            data: updated,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'Failed to update Library Video',
            error: err.message,
        });
    }
}

// DELETE VIDEO
async function deletelibraryVideoController(req, res) {
    try {
        const deleted = await LibraryService.deleteLibraryvideo(req.params.id);
        res.status(200).json({
            success: true,
            message: 'Library Video deleted successfully',
            data: deleted,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'Failed to delete Library Video',
            error: err.message,
        });
    }
}


/* =============================================
    📌 LIBRARY VIDEO CARD CONTROLLERS
============================================= */

// CREATE VIDEO CARD
async function createlibraryVideoCardController(req, res) {
    try {
        const card = await LibraryService.createLibraryvideoCard(req.body, req.file);
        res.status(201).json({
            success: true,
            message: 'Video Card created successfully',
            data: card,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'Failed to create Video Card',
            error: err.message,
        });
    }
}

// GET ALL VIDEO CARDS
async function getlibraryVideoCardController(req, res) {
    try {
        const cards = await LibraryService.getLibraryvideoCard();
        res.status(200).json({
            success: true,
            data: cards,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'Failed to fetch Video Cards',
            error: err.message,
        });
    }
}

// UPDATE VIDEO CARD
async function updatelibraryVideoCardController(req, res) {
    try {
        const updated = await LibraryService.updateLibraryvideoCard(
            req.params.id,
            req.body,
            req.file
        );
        res.status(200).json({
            success: true,
            message: 'Video Card updated successfully',
            data: updated,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'Failed to update Video Card',
            error: err.message,
        });
    }
}

// DELETE VIDEO CARD
async function deletelibraryVideoCardController(req, res) {
    try {
        const deleted = await LibraryService.deleteLibraryvideoCard(req.params.id);
        res.status(200).json({
            success: true,
            message: 'Video Card deleted successfully',
            data: deleted,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'Failed to delete Video Card',
            error: err.message,
        });
    }
}

const createLibraryResourcesController = async (req, res) => {
    try {
        const result = await LibraryService.createLibraryResources(req.body);
        res.status(201).json({
            success: true,
            message: "Library resources created successfully",
            data: result
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Failed to create library resources",
            error: err.message
        });
    }
};

// GET ALL
const getLibraryResourcesController = async (req, res) => {
    try {
        const result = await LibraryService.getLibraryResources();
        res.status(200).json({
            success: true,
            message: "Library resources fetched successfully",
            data: result
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Failed to fetch library resources",
            error: err.message
        });
    }
};

// GET BY ID
const getLibraryResourcesByIdController = async (req, res) => {
    try {
        const result = await LibraryService.getLibraryResourcesById(req.params.id);
        res.status(200).json({
            success: true,
            message: "Resource fetched successfully",
            data: result
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Failed to fetch resource",
            error: err.message
        });
    }
};

// UPDATE
const updateLibraryResourcesController = async (req, res) => {
    try {
        const result = await LibraryService.updateLibraryResources(
            req.params.id,
            req.body
        );
        res.status(200).json({
            success: true,
            message: "Resource updated successfully",
            data: result
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Failed to update resource",
            error: err.message
        });
    }
};

// DELETE
const deleteLibraryResourcesController = async (req, res) => {
    try {
        const result = await LibraryService.deleteLibraryResources(req.params.id);
        res.status(200).json({
            success: true,
            message: "Resource deleted successfully",
            data: result
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Failed to delete resource",
            error: err.message
        });
    }
};


module.exports = {
    // HERO
    createlibraryHeroController,
    getlibraryHeroController,
    updatelibraryHeroController,
    deletelibraryHeroController,

    // IMAGE
    createlibraryImageController,
    getlibraryImageController,
    deletelibraryImageController,

    // VIDEO
    createlibraryVideoController,
    getlibraryVideoController,
    updatelibraryVideoController,
    deletelibraryVideoController,

    // VIDEO CARD
    createlibraryVideoCardController,
    getlibraryVideoCardController,
    updatelibraryVideoCardController,
    deletelibraryVideoCardController,

    // RESOURCES
    createLibraryResourcesController,
    getLibraryResourcesController,
    getLibraryResourcesByIdController,
    updateLibraryResourcesController,
    deleteLibraryResourcesController
};
