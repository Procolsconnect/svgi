const { VMHeroSchema, VMCardSchema } = require("../../models/about");

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



module.exports = {
    createVMHero,
    getVMHero,
    getVMHeroByID,
    updateVMHero,
    deleteVMHero,
    createVMCard,
    getVMCard,
};