const mongoose = require('mongoose');

const academicsheroSchema = new mongoose.Schema({
  title: { type: String, required: true },
  image: { type: String }
})
const academicsCardSchema = new mongoose.Schema({
title: { type: String, required: true },
subtitle: { type: String, required: true },
description: { type: String, required: true },
image: { type: String }
})

const feedbackheroSchema = new mongoose.Schema({
  title: { type: String, required: true },
  image: { type: String }
})

const Academicshero = mongoose.model('Academicshero', academicsheroSchema);
const AcademicsCard = mongoose.model('AcademicsCard', academicsCardSchema);
const Feedbackhero = mongoose.model('Feedbackhero', feedbackheroSchema);
module.exports = {
    Academicshero,
    AcademicsCard,
    Feedbackhero
}