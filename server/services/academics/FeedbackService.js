const { Feedbackhero, Feedbackreview ,Feedbackfaq} = require("../../models/academics");

async function createHero(body, file) {
  const data = {
    title: body.title,
    image: file.path,
  };
  const hero = new Feedbackhero(data);
  const savedHero = await hero.save();
  return savedHero;
}

// GET HEROES
async function getHero() {
  const heroes = await Feedbackhero.find().sort({ created_at: -1 });
  return heroes;
}

// UPDATE HERO
async function updateHero(id, body, file) {
  const hero = await Feedbackhero.findById(id);
  if (!hero) throw new Error("Hero not found");

  if (file) {
    hero.image = file.path;
  }
  hero.title = body.title ?? hero.title;
  const updatedHero = await hero.save();
  return updatedHero;
}
async function deleteHero(id) {
  const deletedHero = await Feedbackhero.findByIdAndDelete(id);
  if (!deletedHero) throw new Error("Hero not found");
  return deletedHero;
}

//student feedback
async function createReview(body, file) {
  const data = {
    name: body.name,
    review: body.review,
    image: file.path,
  };
  const review = new Feedbackreview(data);
  const savedreview = await review.save();
  return savedreview;
}

async function getReview() {
  const review = await Feedbackreview.find().sort({ created_at: -1 });
  return review;
}
async function deleteReview(id) {
  const deletedReview = await Feedbackreview.findByIdAndDelete(id);
  if (!deletedReview) throw new Error("Hero not found");
  return deletedReview;
}

// UPDATE HERO
async function updateReview(id, body, file) {
  const review = await Feedbackreview.findById(id);
  if (!review) throw new Error("Hero not found");

  if (file) {
    review.image = file.path;
  }
  review.name = body.name ?? review.name;
review.review = body.review ?? review.review;
  const updatedReview = await review.save();
  return updatedReview;
}

async function deleteReview(id) {
  const deletedHero = await Feedbackhero.findByIdAndDelete(id);
  if (!deletedHero) throw new Error("Hero not found");
  return deletedHero;
}

// FAQ CRUD
async function createFaq(body) {
  const data = {
    question: body.question,
    answer: body.answer,
  };

  const faq = new Feedbackfaq(data);
  const savedFaq = await faq.save();
  return savedFaq;
}

// GET ALL FAQ
async function getFaq() {
  const faqs = await Feedbackfaq.find().sort({ created_at: -1 });
  return faqs;
}

// GET FAQ BY ID
async function getFaqById(id) {
  const faq = await Feedbackfaq.findById(id);
  if (!faq) throw new Error("FAQ not found");
  return faq;
}

// UPDATE FAQ
async function updateFaq(id, body) {
  const faq = await Feedbackfaq.findById(id);
  if (!faq) throw new Error("FAQ not found");

  faq.question = body.question ?? faq.question;
  faq.answer = body.answer ?? faq.answer;

  const updatedFaq = await faq.save();
  return updatedFaq;
}

// DELETE FAQ
async function deleteFaq(id) {
  const deletedFaq = await Feedbackfaq.findByIdAndDelete(id);
  if (!deletedFaq) throw new Error("FAQ not found");
  return deletedFaq;
}

module.exports = {
  
};


module.exports = {
  createHero,
  getHero,
  updateHero,
  deleteHero,
  createReview,
  updateReview,
  getReview,
  deleteReview,
  createFaq,
  getFaq,
  getFaqById,
  updateFaq,
  deleteFaq,
};
