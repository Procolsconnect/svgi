const Joi = require("joi");

// Overview Hero
const createOverviewSchema = Joi.object({
    title: Joi.string().trim().min(1).max(255).required(),
});
const updateOverviewSchema = Joi.object({
    title: Joi.string().trim().min(1).max(255).optional(),
});

// Sports Hero
const createSportsHeroSchema = Joi.object({
    title: Joi.string().trim().min(1).max(255).required(),
});
const updateSportsHeroSchema = Joi.object({
    title: Joi.string().trim().min(1).max(255).optional(),
});

// Sports Card
const createSportsCardSchema = Joi.object({
    title: Joi.string().trim().min(1).max(255).required(),
    description: Joi.string().trim().min(1).required(),
});
const updateSportsCardSchema = Joi.object({
    title: Joi.string().trim().min(1).max(255).optional(),
    description: Joi.string().trim().min(1).optional(),
});

// Sports Acheivement
const createSportsAcheivementSchema = Joi.object({
    title: Joi.string().trim().min(1).max(255).required(),
});
const updateSportsAcheivementSchema = Joi.object({
    title: Joi.string().trim().min(1).max(255).optional(),
});

// Sports Video: allow either uploaded file (handled by multer) or video_url in body
const createSportsVideoSchema = Joi.object({
    title: Joi.string().trim().min(1).max(255).required(),
    video_url: Joi.string().uri().optional(),
});
const updateSportsVideoSchema = Joi.object({
    title: Joi.string().trim().min(1).max(255).optional(),
    video_url: Joi.string().uri().optional(),
});

// Sports Athelets
const createSportsAtheletSchema = Joi.object({
    title: Joi.string().trim().min(1).max(255).required(),
});
const updateSportsAtheletSchema = Joi.object({
    title: Joi.string().trim().min(1).max(255).optional(),
});

// Hostel Hero
const createHostelSchema = Joi.object({
    title: Joi.string().trim().min(1).max(255).required(),
});
const updateHostelSchema = Joi.object({
    title: Joi.string().trim().min(1).max(255).optional(),
});

// Hostel Card
const createHostelCardSchema = Joi.object({
    title: Joi.string().trim().min(1).max(255).required(),
    description: Joi.string().trim().min(1).required(),
});
const updateHostelCardSchema = Joi.object({
    title: Joi.string().trim().min(1).max(255).optional(),
    description: Joi.string().trim().min(1).optional(),
});

// Hostel FAQ
const createHostelFaqSchema = Joi.object({
    question: Joi.string().trim().min(1).required(),
    answer: Joi.string().trim().min(1).required(),
});
const updateHostelFaqSchema = Joi.object({
    question: Joi.string().trim().min(1).optional(),
    answer: Joi.string().trim().min(1).optional(),
});

// Health Hero
const createHealthHeroSchema = Joi.object({
    title: Joi.string().trim().min(1).max(255).required(),
});
const updateHealthHeroSchema = Joi.object({
    title: Joi.string().trim().min(1).max(255).optional(),
});

// Festival Hero
const createFestivalHeroSchema = Joi.object({
    title: Joi.string().trim().min(1).max(255).required(),
});
const updateFestivalHeroSchema = Joi.object({
    title: Joi.string().trim().min(1).max(255).optional(),
});

// Greensvgi Hero
const createGreensvgiHeroSchema = Joi.object({
    title: Joi.string().trim().min(1).max(255).required(),
});
const updateGreensvgiHeroSchema = Joi.object({
    title: Joi.string().trim().min(1).max(255).optional(),
});

// Greensvgi Image
const createGreensvgiImageSchema = Joi.object({
    title: Joi.string().trim().min(1).max(255).required(),
});
const updateGreensvgiImageSchema = Joi.object({
    title: Joi.string().trim().min(1).max(255).optional(),
});

// Greensvgi Image Gallary
const createGreensvgiImageGallarySchema = Joi.object({
    title: Joi.string().trim().min(1).max(255).required(),
});
const updateGreensvgiImageGallarySchema = Joi.object({
    title: Joi.string().trim().min(1).max(255).optional(),
});

// Festival Card
const createFestivalCardSchema = Joi.object({
    title: Joi.string().trim().min(1).max(255).required(),
    description: Joi.string().trim().min(1).required(),
});
const updateFestivalCardSchema = Joi.object({
    title: Joi.string().trim().min(1).max(255).optional(),
    description: Joi.string().trim().min(1).optional(),
});

// Festival Event
const createFestivalEventSchema = Joi.object({
    title: Joi.string().trim().min(1).max(255).required(),
    description: Joi.string().trim().min(1).required(),
});
const updateFestivalEventSchema = Joi.object({
    title: Joi.string().trim().min(1).max(255).optional(),
    description: Joi.string().trim().min(1).optional(),
});

// Health Card
const createHealthCardSchema = Joi.object({
    title: Joi.string().trim().min(1).max(255).required(),
    description: Joi.string().trim().min(1).required(),
});
const updateHealthCardSchema = Joi.object({
    title: Joi.string().trim().min(1).max(255).optional(),
    description: Joi.string().trim().min(1).optional(),
});

module.exports = {
    createOverviewSchema,
    updateOverviewSchema,
    createSportsHeroSchema,
    updateSportsHeroSchema,
    createSportsCardSchema,
    updateSportsCardSchema,
    createSportsAcheivementSchema,
    updateSportsAcheivementSchema,
    createSportsVideoSchema,
    updateSportsVideoSchema,
    createSportsAtheletSchema,
    updateSportsAtheletSchema,
    createHostelSchema,
    updateHostelSchema,
    createHostelCardSchema,
    updateHostelCardSchema,
    createHostelFaqSchema,
    updateHostelFaqSchema,
    createHealthHeroSchema,
    updateHealthHeroSchema,
    createHealthCardSchema,
    updateHealthCardSchema,
    createFestivalHeroSchema,
    updateFestivalHeroSchema,
    createGreensvgiHeroSchema,
    updateGreensvgiHeroSchema,
    createGreensvgiImageSchema,
    updateGreensvgiImageSchema,
    createGreensvgiImageGallarySchema,
    updateGreensvgiImageGallarySchema,
    createFestivalCardSchema,
    updateFestivalCardSchema,
    createFestivalEventSchema,
    updateFestivalEventSchema,
}
