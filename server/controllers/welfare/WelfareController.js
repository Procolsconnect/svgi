const { date } = require("joi");
const WelfareService = require("../../services/welfare/WelfareService");

async function createHeroImage(req, res) {
    try {
        const image = await WelfareService.createHeroImage(req.body, req.file);
        res.status(201).json({ success: true, message: "Campus Welfare Hero Image created successfully", data: image });
    } catch (err) {
        res.status(500).json({ success: false, message: "Failed to create Welfare Hero Image", error: err.message });
    }
}

async function getHeroImages(req, res) {
    try {
        const images = await WelfareService.getHeroImage();
        res.status(200).json({ success: true, message: "Campus Welfare Hero fetched successfully", data: images });
    } catch (err) {
        res.status(500).json({ success: false, message: "Failed to fetch Campus Welfare Hero Image", error: err.message });
    }
}

async function getHeroImageById(req, res) {
    try {
        const image = await WelfareService.getHeroImageById(req.params.id);
        res.status(200).json({ success: true, message: "Campus Welfare Hero Image fetched successfully", data: image });
    } catch (err) {
        res.status(404).json({ success: false, message: "Campus Welfare Hero Image not found", error: err.message });
    }
}

async function updateHeroImage(req, res) {
    try {
        const image = await WelfareService.updateHeroImage(req.params.id, req.body, req.file);
        res.status(200).json({ success: true, message: "Campus Welfare Hero Image updated successfully", data: image });
    } catch (err) {
        res.status(500).json({ success: false, message: "Failed to update Campus Welfare Hero Image", error: err.message });
    }
}

async function deleteHeroImage(req, res) {
    try {
        const image = await WelfareService.deleteHeroImage(req.params.id);
        res.status(200).json({ success: true, message: "Campus Welfare Hero Image deleted successfully", data: image });
    } catch (err) {
        res.status(500).json({ success: false, message: "Failed to delete Campus Welfare Hero Image", error: err.message });
    }
}

// -----------------------Bouncer Title-----------------------
async function createBouncerTitle(req, res) {
    try {
        const title = await WelfareService.createBouncerTitle(req.body);
        res.status(201).json({ success: true, message: "Campus Welfare Bouncer Title created successfully", data: title });
    } catch (err) {
        res.status(500).json({ success: false, message: "Failed to create Welfare Bouncer Title", error: err.message });
    }
}

async function getBouncerTitle(req, res) {
    try {
        const bouncertitle = await WelfareService.getBouncerTitle();
        res.status(200).json({ success: true, message: "Campus Welfare BouncerTitle fetched successfully", data: bouncertitle });
    } catch (err) {
        res.status(500).json({ success: false, message: "Failed to fetch Campus Welfare BouncerTitle", error: err.message });
    }
}

async function getBouncerTitleById(req, res) {
    try {
        const title = await WelfareService.getBouncerTitleById(req.params.id);
        res.status(200).json({ success: true, message: "Campus Welfare BouncerTitleById fetched successfully", data: title });
    } catch (err) {
        res.status(404).json({ success: false, message: "Campus Welfare BouncerTitleById not found", error: err.message });
    }
}

async function updateBouncerTitle(req, res) {
    try {
        const title = await WelfareService.updateBouncerTitle(req.params.id, req.body);
        res.status(200).json({ success: true, message: "Campus Welfare Bouncer Title updated successfully", data: title });
    } catch (err) {
        res.status(500).json({ success: false, message: "Failed to update Campus Welfare Bouncer Title", error: err.message });
    }
}

async function deleteBouncerTitle(req, res) {
    try {
        const title = await WelfareService.deleteBouncerTitle(req.params.id);
        res.status(200).json({ success: true, message: "Campus Welfare Bouncer Title deleted successfully", data: title });
    } catch (err) {
        res.status(500).json({ success: false, message: "Failed to delete Campus Welfare Bouncer Title", error: err.message });
    }
}


// -----------------------Fancy Text---------------------
async function createFancyText(req, res) {
    try{
        const datas = await WelfareService.createFancyText(req.body);
        res.status(201).json({success: true, message: "Fancy Text Datas Created Successfully.", date: datas})
    }catch(err){
        res.status(500).json({success: true, message: "Failed to Create Fancy Text Datas.", Error: err})
    }
}

async function getFancyText(req, res) {
    try {
        const bouncertitle = await WelfareService.getFancyText();
        res.status(200).json({ success: true, message: "Campus Welfare FancyText fetched successfully", data: bouncertitle });
    } catch (err) {
        res.status(500).json({ success: false, message: "Failed to fetch Campus Welfare FancyText", error: err.message });
    }
}

async function getFancyTextById(req, res) {
    try {
        const title = await WelfareService.getFancyTextById(req.params.id);
        res.status(200).json({ success: true, message: "Campus Welfare FancyText fetched successfully", data: title });
    } catch (err) {
        res.status(404).json({ success: false, message: "Campus Welfare FancyText not found", error: err.message });
    }
}

async function updateFancyText(req, res) {
    try {
        const title = await WelfareService.updateFancyText(req.params.id, req.body);
        res.status(200).json({ success: true, message: "Campus Welfare Fancy Text Data updated successfully", data: title });
    } catch (err) {
        res.status(500).json({ success: false, message: "Failed to update Campus Welfare Fancy Text Data", error: err.message });
    }
}

async function deleteFancyText(req, res) {
    try {
        const title = await WelfareService.deleteFancyText(req.params.id);
        res.status(200).json({ success: true, message: "Campus Welfare Fancy Text Data deleted successfully", data: title });
    } catch (err) {
        res.status(500).json({ success: false, message: "Failed to delete Campus Welfare Fancy Text Data", error: err.message });
    }
}

// -------------------Student Club----------------
async function createStudentClub(req, res){
    try {
        const scData = await WelfareService.createStudentClub(req.body, req.file);
        res.status(201).json({success: true, message: "Card Image Successfully Created.", date: scData})
    } catch (err) {
        res.status(500).json({success: true, message: "Failed to Create Card Image.", Error: err.message})
    }
}

async function getStudentClub(req, res){
    try {
        const scData = await WelfareService.getStudentClub();
        res.status(200).json({ success: true, message: "Campus Welfare Card fetched successfully", data: scData });
    } catch (error) {
        res.status(500).json({ success: false, message: "Failed to fetch Campus Welfare Card", Error: error.message });
    }
}

async function getStudentClubById(req, res) {
    try {
        const card = await WelfareService.getStudentClubById(req.params.id);
        res.status(200).json({ success: true, message: "Campus Welfare Card fetched successfully", data: card });
    } catch (err) {
        res.status(404).json({ success: false, message: "Campus Welfare Card not found", error: err.message });
    }
}

async function updateStudentClubById(req, res) {
    try {
        const image = await WelfareService.updateStudentClubById(req.params.id, req.body, req.file);
        res.status(200).json({ success: true, message: "Campus Welfare Card updated successfully", data: image });
    } catch (err) {
        res.status(500).json({ success: false, message: "Failed to update Campus Welfare Card", error: err.message });
    }
}

async function deleteStudentClub(req, res) {
    try {
        const card = await WelfareService.deleteStudentClub(req.params.id);
        res.status(200).json({ success: true, message: "Campus Welfare Card deleted successfully", data: card });
    } catch (err) {
        res.status(500).json({ success: false, message: "Failed to delete Campus Welfare Card", error: err.message });
    }
}



module.exports = {
    createHeroImage,
    getHeroImages,
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
