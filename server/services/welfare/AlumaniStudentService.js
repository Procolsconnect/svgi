const { AlumaniStudent } = require("../../models/campus");

// CREATE
async function createAlumaniStudent(body, file) {
    const data = {
        title: body.title,
        image: file?.path || null,
        achievement: body.achievement,
    };
    return await new AlumaniStudent(data).save();
}

// GET ALL
async function getAlumaniStudents() {
    return await AlumaniStudent.find().sort({ createdAt: -1 });
}

// GET BY ID
async function getAlumaniStudentById(id) {
    const image = await AlumaniStudent.findById(id);
    if (!image) throw new Error("Campus Event Gallery Image not found");
    return image;
}

// UPDATE
async function updateAlumaniStudent(id, body, file) {
    const image = await AlumaniStudent.findById(id);
    if (!image) throw new Error("Campus Alumani Student not found");

    if (file) image.image = file.path;
    if (body.title) image.title = body.title;
    if (body.achievement) image.achievement = body.achievement;

    return await image.save();
}

// DELETE
async function deleteAlumaniStudent(id) {
    const image = await AlumaniStudent.findByIdAndDelete(id);
    if (!image) throw new Error("Campus Event Gallery Image not found");
    return image;
}

module.exports = {
    createAlumaniStudent,
    getAlumaniStudents,
    getAlumaniStudentById,
    updateAlumaniStudent,
    deleteAlumaniStudent,
};
