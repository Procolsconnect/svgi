const { date } = require("joi");
const { PolicyHero, PolicyTitle, PolicyCard } = require("../../models/campus");


async function createPolicyHero(body, file) {
    const data = {
        title: body.title,
        image: file?.path || body.image,
    };
    return await new PolicyHero(data).save();
}

async function getPolicyHero() {
    return await PolicyHero.find().sort({ createdAt: -1 });
}

async function getPolicyHeroById(id) {
    const hero = await PolicyHero.findById(id);
    if (!hero) throw new Error("Campus Policy Hero not found");
    return hero;
}

async function updatePolicyHero(id, body, file) {
    const hero = await PolicyHero.findById(id);
    if (!hero) throw new Error("Campus Policy Hero not found");
    if (file) {
        hero.image = file.path;
    } else if (body.image) {
        hero.image = body.image;
    }
    if (body.title) hero.title = body.title;
    return await hero.save();
}

async function deletePolicyHero(id) {
    const hero = await PolicyHero.findByIdAndDelete(id);
    if (!hero) throw new Error("Campus Policy Hero not found");
    return hero;
}


async function createPolicyTitle(body) {
    const data = {
        title: body.title,
        subTitle: body.subtitle,
    };
    return await new PolicyTitle(data).save();
}

async function getPolicyTitle() {
    return await PolicyTitle.find().sort({ createdAt: -1 });
}

async function getPolicyTitleById(id) {
    const data = await PolicyTitle.findById(id);
    if (!data) throw new Error("Campus Policy Titles not found");
    return data;
}

async function updatePolicyTitle(id, body) {
    const data = await PolicyTitle.findById(id);
    if (!data) throw new Error("Campus Policy Titles not found");
    if (body.title) data.title = body.title;
    if (body.subTitle) data.subTitle = body.subtitle;
    return await data.save();
}

async function deletePolicyTitle(id) {
    const hero = await PolicyTitle.findByIdAndDelete(id);
    if (!hero) throw new Error("Campus Policy Titles not found");
    return hero;
}

// Cards
async function createPolicyCard(body, file) {
    const data = {
        title: body.cardtitle,
        image: file?.path || body.cardimage,
    };
    return await new PolicyCard(data).save();
}

async function getPolicyCard() {
    return await PolicyCard.find().sort({ createdAt: -1 });
}

async function getPolicyCardById(id) {
    const hero = await PolicyCard.findById(id);
    if (!hero) throw new Error("Campus Policy Card not found");
    return hero;
}

async function updatePolicyCard(id, body, file) {
    const hero = await PolicyCard.findById(id);
    if (!hero) throw new Error("Campus Policy Card not found");
    if (file) {
        hero.image = file.path;
    } else if (body.image) {
        hero.image = body.cardimage;
    }
    if (body.title) hero.title = body.cardtitle;
    return await hero.save();
}

async function deletePolicyCard(id) {
    const hero = await PolicyCard.findByIdAndDelete(id);
    if (!hero) throw new Error("Campus Policy Card not found");
    return hero;
}



module.exports = {
    createPolicyHero,
    getPolicyHero,
    getPolicyHeroById,
    updatePolicyHero,
    deletePolicyHero,
    createPolicyTitle,
    getPolicyTitle,
    getPolicyTitleById,
    updatePolicyTitle,
    deletePolicyTitle,
    createPolicyCard,
    getPolicyCard,
    getPolicyCardById,
    updatePolicyCard,
    deletePolicyCard,
};