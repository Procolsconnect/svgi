const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("cloudinary").v2;
require("dotenv").config();

// 🔹 Cloudinary config
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});


// 🔹 Storage engine for Cloudinary
const storage = new CloudinaryStorage({
  cloudinary,
  params: async (req, file) => {
    const folder = "svgi";
    const resource_type = "auto";

    // ✅ Sanitize filename (remove spaces/special chars)
    const originalName = file.originalname
      .split(".")[0]
      .trim()
      .replace(/\s+/g, "_") // replace spaces with underscore
      .replace(/[^a-zA-Z0-9_-]/g, ""); // remove illegal characters

    const ext = file.originalname.split(".").pop();

    return {
      folder,
      resource_type,
      format: ext,
      public_id: `${Date.now()}-${originalName}`,
    };
  },
});


// 🔹 Multer upload with filter
const upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    const allowedTypes = /(jpeg|jpg|pjpeg|png|gif|mp4|mov|avi|mkv)$/i;
    const extname = allowedTypes.test(
      file.originalname.toLowerCase().split(".").pop()
    );
    const mimetype = allowedTypes.test(file.mimetype);

    if (extname && mimetype) cb(null, true);
    else cb(new Error("Only image/video files are allowed!"));
  },
});

module.exports = upload;
