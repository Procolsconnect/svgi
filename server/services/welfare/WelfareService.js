const { WelfareHeroImage, BouncerTitle, FancyText, StudentClubs } = require("../../models/campus");

// CREATE
async function createHeroImage(body, file) {
    const data = {
        title: body.title,
        image: file?.path || null,
    };
    return await new WelfareHeroImage(data).save();
}

// GET ALL
async function getHeroImage() {
    return await WelfareHeroImage.find().sort({ createdAt: -1 });
}

// GET BY ID
async function getHeroImageById(id) {
    const image = await WelfareHeroImage.findById(id);
    if (!image) throw new Error("Campus Hero Image not found");
    return image;
}

// UPDATE
async function updateHeroImage(id, body, file) {
    const image = await WelfareHeroImage.findById(id);
    if (!image) throw new Error("Campus Hero Image not found");

    if (file) image.image = file.path;
    if (body.title) image.title = body.title;

    return await image.save();
}

// DELETE
async function deleteHeroImage(id) {
    const image = await WelfareHeroImage.findByIdAndDelete(id);
    if (!image) throw new Error("Campus Hero Image not found");
    return image;
}

// ------------------------Bouncer Title--------------------------
async function createBouncerTitle(body) {
    const data = {
        title: body.title,
    };
    return await new BouncerTitle(data).save();
}

async function getBouncerTitle() {
    return await BouncerTitle.find().sort({ createdAt: -1 });
}

async function getBouncerTitleById(id) {
    const bTitle =await BouncerTitle.findById(id);
    if (!bTitle) throw new Error("Campus Title not found");
    return bTitle;
}

async function updateBouncerTitle(id, body) {
    const bTitle = await BouncerTitle.findById(id);
    if (!bTitle) throw new Error("Campus Title not found");
    if (body.title) bTitle.title = body.title;
    return await bTitle.save();
}

async function deleteBouncerTitle(id) {
    const bTitle = await BouncerTitle.findByIdAndDelete(id);
    if (!bTitle) throw new Error("Campus Title not found");
    return bTitle;
}


// -------------------Fancy Text-------------------
async function createFancyText(body){
    const datas = {
        rowoneTitle : body.r1Title,
        rowoneImage : body.r1Image,
        rowtwoPara : body.para,
        rowtwoImage : body.r2Image,
    };
    return await new FancyText(datas).save();
}
async function getFancyText() {
    return await FancyText.find().sort({ createdAt: -1 });
}
async function getFancyTextById(id) {
    const fDatas =await FancyText.findById(id);
    if (!fDatas) throw new Error("Data not found");
    return fDatas;
}
async function updateFancyText(id, body) {
    const fDatas = await FancyText.findById(id);
    if (!fDatas) throw new Error("FancyText not found");

    // Update fields only if provided
    if (body.r1Title) fDatas.rowoneTitle = body.r1Title;
    if (body.r1Image) fDatas.rowoneImage = body.r1Image;
    if (body.para) fDatas.rowtwoPara = body.para;       // must be array
    if (body.r2Image) fDatas.rowtwoImage = body.r2Image;

    return await fDatas.save();
}
async function deleteFancyText(id) {
    const bTitle = await FancyText.findByIdAndDelete(id);
    if (!bTitle) throw new Error("Data not found");
    return bTitle;
}


// ---------------------- Student Clubs ------------------
async function createStudentClub(body, file) {
    const data = {
        title: body.title,
        image: file?.path || null || body.image,
    };
    return await new StudentClubs(data).save();
}

async function getStudentClub(){
    return await StudentClubs.find().sort({ createdAt: -1 });
}

async function getStudentClubById(id) {
    const card = await StudentClubs.findById(id);
    if (!card) throw new Error("Campus Hero Image not found");
    return card;
}

async function updateStudentClubById(id, body, file) {
    const card = await StudentClubs.findById(id);
    if (!card) throw new Error("Campus Card not found");

    if (file) {
        card.image = file.path;
    } else if (body.image) {
        card.image = body.image;
    }

    if (body.title) {
        card.title = body.title;
    }

    return await card.save();
}
async function deleteStudentClub(id) {
    const bTitle = await StudentClubs.findByIdAndDelete(id);
    if (!bTitle) throw new Error("Card not found");
    return bTitle;
}


module.exports = {
    createHeroImage,
    getHeroImage,
    getHeroImageById,
    updateHeroImage,
    deleteHeroImage,
    createBouncerTitle,
    getBouncerTitle,
    getBouncerTitleById,
    updateBouncerTitle,
    deleteBouncerTitle,
    createFancyText,
    getFancyText,
    getFancyTextById,
    updateFancyText,
    deleteFancyText,
    createStudentClub,
    getStudentClub,
    getStudentClubById,
    updateStudentClubById,
    deleteStudentClub,
};
