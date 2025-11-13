const mongoose = require('mongoose');

/* =========================
   HOME HERO SECTION
========================= */
const homeHeroSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  media_url: { type: String },
  media_type: { type: String, enum: ['image', 'video'], default: 'image' },
  button_text: { type: String },
  status: { type: Number, default: 1 }
}, {
  timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } 
});

/* =========================
   HOME INSTITUTION SECTION
========================= */
const homeInstitutionSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image_url: { type: String },
  logo_url: { type: String },
  link: { type: String },
  status: { type: Number, default: 1 }
}, { 
  timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } 
});

/* =========================
   PLACEMENT SWIPER SECTION
========================= */
const placementSwiperSchema = new mongoose.Schema({
  image_url: { type: String },
}, { 
  timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } 
});

/* =========================
   SERVICE OFFERINGS SECTION
========================= */
const serviceOfferingSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  image: { type: String }
}, { 
  timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } 
});


const campusSchema = new mongoose.Schema({
  imagesCard: [
    {
      image: { type: String, required: true },
    },
  ],
  videosCard: [
    {
      image: { type: String, required: true },
    },
  ],

  // Card 3 - 360 Tours
  toursCard: [
    {
      image: { type: String, required: true }, 
    },
  ],
}, { timestamps: true });



/* =========================
   EXPORT ALL MODELS
========================= */
const HomeHero = mongoose.model('HomeHero', homeHeroSchema);
const HomeInstitution = mongoose.model('HomeInstitution', homeInstitutionSchema);
const PlacementSwiper = mongoose.model('PlacementSwiper', placementSwiperSchema);
const ServiceOffering = mongoose.model('ServiceOffering', serviceOfferingSchema);
const CampusInfrastructure = mongoose.model('CampusInfrastructure', campusSchema);
module.exports = {
  HomeHero,
  HomeInstitution,
  PlacementSwiper,
  ServiceOffering,
  CampusInfrastructure
};
