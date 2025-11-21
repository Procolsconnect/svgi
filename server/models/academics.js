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
const academicsContentSchema = new mongoose.Schema({
content: { type: String, required: true },
name: { type: String, required: true },
})
 


const feedbackheroSchema = new mongoose.Schema({
  title: { type: String, required: true },
  image: { type: String }
})

const feedbackreviewSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String },
  review:{type: String, required: true}
})
 
const feedbackfaqSchema = new mongoose.Schema({
  question: { type: String, required: true },
  answer: { type: String, required: true }
})
 const libraryheroSchema = new mongoose.Schema({
  title: { type: String, required: true },
  image: { type: String }
})
 const libraryimageSchema = new mongoose.Schema({
  image: { type: String }
})

const libraryvideoCardSchema = new mongoose.Schema({
  video: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String , required: true},
})
const libraryvideoSchema = new mongoose.Schema({
  video: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String , required: true},
})

const libraryResourcesSchema = new mongoose.Schema({
  campus: { type: String, required: true },
  totalBooks: { type: String, required: true },
  totalBackVolumes: { type: String, required: true },
  printJournalsMagazines: { type: String, required: true },
  national: { type: String, required: true },
  international: { type: String, required: true },
  onlineDatabases: { type: String, required: true },  // example: "16,829"
  databaseList: { type: String, required: true },     // big string
  ebooks: { type: String, required: true }
}, { timestamps: true });

const courseOutcomeSchema = new mongoose.Schema({
  image: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String , required: true},
  pdf: { type: String, required: true }
})


const Academicshero = mongoose.model('Academicshero', academicsheroSchema);
const AcademicsCard = mongoose.model('AcademicsCard', academicsCardSchema);
const Feedbackhero = mongoose.model('Feedbackhero', feedbackheroSchema);
const Feedbackreview = mongoose.model('Feedbackreview', feedbackreviewSchema);
const Feedbackfaq = mongoose.model('Feedbackfaq', feedbackfaqSchema);
const AcademicsContent = mongoose.model('AcademicsContent', academicsContentSchema);
const Libraryhero = mongoose.model('libraryhero', libraryheroSchema);
const Libraryimage = mongoose.model('libraryimage', libraryimageSchema);
const Libraryvideo = mongoose.model('libraryvideo', libraryvideoSchema);
const Libraryvideocard = mongoose.model('libraryvideocard', libraryvideoCardSchema);
const LibraryResources = mongoose.model('LibraryResources', libraryResourcesSchema);
const CourseOutcome = mongoose.model('CourseOutcome', courseOutcomeSchema);
module.exports = {
    Academicshero,
    AcademicsCard,
    Feedbackhero,
    Feedbackreview,
    Feedbackfaq,
    AcademicsContent,
    Libraryhero,
    Libraryimage,
    Libraryvideo,
    Libraryvideocard,
    LibraryResources,
    CourseOutcome
}