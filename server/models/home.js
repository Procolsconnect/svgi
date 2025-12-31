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
  title: { type: String, required: true, default: "College Campus Infrastructure" },
  description: { type: String, required: true },
  since: { type: String, required: true, default: "2011" },
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
})


const placementSchema = new mongoose.Schema({
  img: { type: String, required: true },
  title: { type: String, required: true },
  desc: { type: String, required: true },
}, { timestamps: true });

const studentachivementSchema = new mongoose.Schema({
  img: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
}, { timestamps: true });



/* =========================
   Events Card SECTION
========================= */

const eventSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Event title is required"],
      trim: true,
    },
    desc: {
      type: String,
      required: [true, "Event description is required"],
      trim: true,
    },
    img: {
      type: String, // Cloudinary URL or local file path
      required: [true, "Event image is required"],
    },
  },
  {
    timestamps: true, // adds createdAt and updatedAt
  }
);



/* =========================
  Our Team SECTION
========================= */

const teamSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    role: { type: String, required: true },
    img: { type: String, required: true }, // URL or uploaded path
  },
  { timestamps: true }
);




/* =========================
  Logo Section 1 SECTION
========================= */

const logoSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    img: { type: String, required: true }, // URL or local path
  },
  { timestamps: true }
);

const logoSchema1 = new mongoose.Schema(
  {
    name: { type: String, required: true },
    img: { type: String, required: true }, // URL or local path
  },
  { timestamps: true }
);



/* =========================
   EXPORT ALL MODELS
========================= */
const HomeHero = mongoose.model('HomeHero', homeHeroSchema);
const HomeInstitution = mongoose.model('HomeInstitution', homeInstitutionSchema);
const PlacementSwiper = mongoose.model('PlacementSwiper', placementSwiperSchema);
const ServiceOffering = mongoose.model('ServiceOffering', serviceOfferingSchema);
const CampusInfrastructure = mongoose.model('CampusInfrastructure', campusSchema);
const Placement = mongoose.model("Placement", placementSchema);
const studentachivement = mongoose.model("studentachivement", studentachivementSchema);
const Event = mongoose.model("Event", eventSchema);
const Team = mongoose.model("Team", teamSchema);
const Logo = mongoose.model("Logo", logoSchema);
const Logo1 = mongoose.model("Logo1", logoSchema1);

module.exports = {
  HomeHero,
  HomeInstitution,
  PlacementSwiper,
  ServiceOffering,
  CampusInfrastructure,
  Placement,
  studentachivement,
  Event,
  Team,
  Logo,
  Logo1,
};
