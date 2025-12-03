const { VMHeroSchema, VMCardSchema, MVSection, CampusCircle } = require("../../models/about");

// ------------------ HERO ------------------
async function createVMHero(body, file) {
    const hero = new VMHeroSchema({
        title: body.title,
        image: file?.path || null || body.image,
    });
    return await hero.save();
}

async function getVMHero() {
    return await VMHeroSchema.findOne().sort({ createdAt: -1 });
}

async function getVMHeroByID(id) {
    return await VMHeroSchema.findById(id);
}

async function updateVMHero(id, body, file) {
    const hero = await VMHeroSchema.findById(id);
    if (!hero) throw new Error("Hero not found");
    if (body.title) hero.title = body.title;
    if (file) hero.image = file.path;
    return await hero.save();
}

async function deleteVMHero(id) {
    const deleted = await VMHeroSchema.findByIdAndDelete(id);
    if (!deleted) throw new Error("Hero not found");
    return deleted;
}


// -------------------- Card Section ----------------
async function createVMCard(body, file){
    const card = new VMCardSchema({
        title: body.title,
        image: file?.path || null || body.image,
        desc: body.desc,
        link: body.link
    })
    return await card.save();
}

async function getVMCard(){
    return VMCardSchema.find().sort({createdAt : -1})
}

async function getVMCardByID(id){
    return VMCardSchema.findById(id);
}

async function updateVMCard(id, body, file) {
    const card = await VMCardSchema.findById(id);
    if (!card) throw new Error("card not found");
    if (body.title) card.title = body.title;
    if (body.desc) card.desc = body.desc;
    if (body.link) card.link = body.link;
    if (file) card.image = file.path;
    return await card.save();
}

async function deleteVMCard(id) {
    const deleted = await VMCardSchema.findByIdAndDelete(id);
    if (!deleted) throw new Error("Card not found");
    return deleted;
}

// ------------------- Vis Mis Sections ---------------------

async function createMVVSection(body) {
    const data = {
        mission: {
            title: body.mission.title,
            sections: body.mission.sections,
        },
        vision: {
            title: body.vision.title,
            lines: body.vision.lines,
        },
        values: {
            title: body.values.title,
            list: body.values.list,
        }
    };

    const mvv = new MVSection(data);
    return await mvv.save();
}

async function getAllMVVSections() {
    return await MVSection.find();
}

async function getMVVSectionById(id) {
    const section = await MVSection.findById(id);
    if (!section) throw new Error("MVV section not found");
    return section;
}

async function updateMVVSection(id, body) {
    const section = await MVSection.findById(id);
    if (!section) throw new Error("MVV section not found");

    // Mission
    if (body.mission) {
        if (body.mission.title) section.mission.title = body.mission.title;
        if (body.mission.sections) section.mission.sections = body.mission.sections;
    }

    // Vision
    if (body.vision) {
        if (body.vision.title) section.vision.title = body.vision.title;
        if (body.vision.lines) section.vision.lines = body.vision.lines;
    }

    // Values
    if (body.values) {
        if (body.values.title) section.values.title = body.values.title;
        if (body.values.list) section.values.list = body.values.list;
    }

    return await section.save();
}

async function deleteMVVSection(id) {
    const section = await MVSection.findByIdAndDelete(id);
    if (!section) throw new Error("MVV section not found");
    return section;
}


// ---------------------Circular Section---------------------
async function createCampusCircle(body, file) {
    const data = {
        logo: file?.path || body.logo || null,

        academics: {
            title: body.academics.title,
            items: body.academics.items
        },

        research: {
            title: body.research.title,
            items: body.research.items
        },

        campus: {
            title: body.campus.title,
            items: body.campus.items
        },

        placements: {
            title: body.placements.title,
            items: body.placements.items
        }
    };

    const circle = new CampusCircle(data);
    return await circle.save();
}

async function getCampusCircles() {
    return await CampusCircle.find().sort({ createdAt: -1 });
}

async function getCampusCircleById(id) {
    const circle = await CampusCircle.findById(id);
    if (!circle) throw new Error("Campus Circle not found");
    return circle;
}

async function updateCampusCircle(id, body, file) {
    const circle = await CampusCircle.findById(id);
    if (!circle) throw new Error("Campus Circle not found");

    // Update logo
    if (file) circle.logo = file.path;
    if (body.logo) circle.logo = body.logo;

    // Update Academics
    if (body.academics) {
        if (body.academics.title) circle.academics.title = body.academics.title;
        if (body.academics.items) circle.academics.items = body.academics.items;
    }

    // Update Research
    if (body.research) {
        if (body.research.title) circle.research.title = body.research.title;
        if (body.research.items) circle.research.items = body.research.items;
    }

    // Update Campus
    if (body.campus) {
        if (body.campus.title) circle.campus.title = body.campus.title;
        if (body.campus.items) circle.campus.items = body.campus.items;
    }

    // Update Placements
    if (body.placements) {
        if (body.placements.title) circle.placements.title = body.placements.title;
        if (body.placements.items) circle.placements.items = body.placements.items;
    }

    return await circle.save();
}

async function deleteCampusCircle(id) {
    const deleted = await CampusCircle.findByIdAndDelete(id);
    if (!deleted) throw new Error("Campus Circle not found");
    return deleted;
}





module.exports = {
    createVMHero,
    getVMHero,
    getVMHeroByID,
    updateVMHero,
    deleteVMHero,
    createVMCard,
    getVMCard,
    getVMCardByID,
    updateVMCard,
    deleteVMCard,
    createMVVSection,
    getAllMVVSections,
    getMVVSectionById,
    updateMVVSection,
    deleteMVVSection,
    createCampusCircle,
    getCampusCircles,
    getCampusCircleById,
    updateCampusCircle,
    deleteCampusCircle
};