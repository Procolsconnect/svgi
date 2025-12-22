// upload.js
const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("cloudinary").v2;
require("dotenv").config();

// 🔹 CLOUDINARY CONFIG
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// 🔹 CLOUDINARY STORAGE CONFIG
const storage = new CloudinaryStorage({
  cloudinary,
  params: async (req, file) => {
    const ext = file.originalname.split(".").pop().toLowerCase();

    // Detect if file is a document
    const documentExt = ["pdf", "ppt", "pptx"];
    const isDocument = documentExt.includes(ext);

    // Detect if file is a video
    const videoExt = ["mp4", "mov", "avi", "mkv", "webm"];
    const isVideo = videoExt.includes(ext);

    // Clean file name
    const sanitizedName = file.originalname
      .split(".")[0]
      .trim()
      .replace(/\s+/g, "_")
      .replace(/[^a-zA-Z0-9_-]/g, "");

    let resource_type = "auto";
    if (isDocument) resource_type = "raw";
    else if (isVideo) resource_type = "video";
    else resource_type = "image";

    return {
      folder: "svgi",
      resource_type: resource_type,
      public_id: `${Date.now()}-${sanitizedName}`,
      // Cloudinary format can be tricky for videos, 
      // sometimes it's better to let it detect from the public_id or omit it
      format: isVideo ? undefined : ext,
    };
  },
});

// 🔹 MULTER FILE FILTER
const upload = multer({
  storage,
  fileFilter: (_, file, cb) => {
    const allowed = [
      // Images
      "image/jpeg",
      "image/jpg",
      "image/png",
      "image/gif",

      // Videos
      "video/mp4",
      "video/mov",
      "video/avi",
      "video/mkv",

      // Documents
      "application/pdf",
      "application/vnd.ms-powerpoint",
      "application/vnd.openxmlformats-officedocument.presentationml.presentation",
    ];

    if (!allowed.includes(file.mimetype)) {
      return cb(new Error("Only images, videos, PDF, and PPT/PPTX are allowed!"));
    }

    cb(null, true);
  },
  limits: { fileSize: 50 * 1024 * 1024 }, // 50 MB (optional)
});
module.exports = upload;
