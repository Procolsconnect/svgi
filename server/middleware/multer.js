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
    let folder = "svgi"; // You can customize per module if needed
    let resource_type = "auto"; // auto handles image & video

    return {
      folder,
      resource_type,
      format: undefined, // keep original format
      public_id: Date.now() + "-" + file.originalname.split(".")[0],
    };
  },
});

// 🔹 Multer upload with filter
const upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    const allowedTypes = /jpeg|jpg|png|gif|mp4|mov|avi|mkv/;
    const extname = allowedTypes.test(
      file.originalname.toLowerCase().split(".").pop()
    );
    const mimetype = allowedTypes.test(file.mimetype);

    if (extname && mimetype) cb(null, true);
    else cb(new Error("Only image/video files are allowed!"));
  },
});

module.exports = upload;
