const CampusEventGalleryService = require("../../services/welfare/AlumaniStudentService");

async function createAlumaniStudent(req, res) {
    try {
        const image = await CampusEventGalleryService.createAlumaniStudent(req.body, req.file);
        res.status(201).json({ success: true, message: "Campus Alumani Student Image created successfully", data: image });
    } catch (err) {
        res.status(500).json({ success: false, message: "Failed to create Alumani Student Gallery Image", error: err.message });
    }
}

async function getAlumaniStudents(req, res) {
    try {
        const images = await CampusEventGalleryService.getAlumaniStudents();
        res.status(200).json({ success: true, message: "Campus Alumani Student fetched successfully", data: images });
    } catch (err) {
        res.status(500).json({ success: false, message: "Failed to fetch Campus Alumani Student Images", error: err.message });
    }
}

async function getAlumaniStudentById(req, res) {
    try {
        const image = await CampusEventGalleryService.getAlumaniStudentById(req.params.id);
        res.status(200).json({ success: true, message: "Campus Alumani Student Image fetched successfully", data: image });
    } catch (err) {
        res.status(404).json({ success: false, message: "Campus Alumani Student Image not found", error: err.message });
    }
}

async function updateAlumaniStudent(req, res) {
    try {
        const image = await CampusEventGalleryService.updateAlumaniStudent(req.params.id, req.body, req.file);
        res.status(200).json({ success: true, message: "Campus Alumani Student Image updated successfully", data: image });
    } catch (err) {
        res.status(500).json({ success: false, message: "Failed to update Campus Alumani Student Image", error: err.message });
    }
}

async function deleteAlumaniStudent(req, res) {
    try {
        const image = await CampusEventGalleryService.deleteAlumaniStudent(req.params.id);
        res.status(200).json({ success: true, message: "Campus Alumani Student Image deleted successfully", data: image });
    } catch (err) {
        res.status(500).json({ success: false, message: "Failed to delete Campus Alumani Student Image", error: err.message });
    }
}

module.exports = {
    createAlumaniStudent,
    getAlumaniStudents,
    getAlumaniStudentById,
    updateAlumaniStudent,
    deleteAlumaniStudent,
};
