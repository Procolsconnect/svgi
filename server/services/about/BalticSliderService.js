const {BalticData} = require("../../models/about");

async function createData(body) {
    const data = {
        winter: {
            title: body.winterTitle,
            description: body.winterDescription,
        },
        summer: {
            title: body.summerTitle,
            description: body.summerDescription,
        },
        contentSection: {
            title: body.contentTitle,
            description: body.contentDescription,
        },
    };

    const record = new BalticData(data);
    const savedData = await record.save();
    return savedData;
}

async function getData() {
    return await BalticData.findOne(); // returns full nested object
}

async function updateData(id, body) {
    const updated = {
        winter: {
            title: body.winterTitle,
            description: body.winterDescription,
        },
        summer: {
            title: body.summerTitle,
            description: body.summerDescription,
        },
        contentSection: {
            title: body.contentTitle,
            description: body.contentDescription,
        },
    };

    return await BalticData.findByIdAndUpdate(id, updated, { new: true });
}

async function deleteData(id) {
    return await BalticData.findByIdAndDelete(id);
}

module.exports = {
    createData,
    getData,
    updateData,
    deleteData,
};
