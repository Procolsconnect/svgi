const { Event } = require("../../models/home");

// CREATE EVENT
async function createEvent(body, file) {
  let img_url = null;

  if (file) {
    img_url = file.path; // Cloudinary gives a full URL here
  }

  const data = {
    img: img_url,
    title: body.title,
    desc: body.desc,
  };

  const event = new Event(data);
  const savedEvent = await event.save();
  return savedEvent;
}

// GET ALL EVENTS
async function getAllEvents() {
  const events = await Event.find({}).sort({ createdAt: -1 });
  return events;
}

// GET SINGLE EVENT
async function getEventById(id) {
  const event = await Event.findById(id);
  if (!event) throw new Error("Event not found");
  return event;
}

// UPDATE EVENT
async function updateEvent(id, body, file) {
  const event = await Event.findById(id);
  if (!event) throw new Error("Event not found");

  if (file) {
    event.img = file.path;
  }

  event.title = body.title ?? event.title;
  event.desc = body.desc ?? event.desc;

  const updatedEvent = await event.save();
  return updatedEvent;
}

// DELETE EVENT
async function deleteEvent(id) {
  const deletedEvent = await Event.findByIdAndDelete(id);
  if (!deletedEvent) throw new Error("Event not found");
  return deletedEvent;
}

module.exports = {
  createEvent,
  getAllEvents,
  getEventById,
  updateEvent,
  deleteEvent,
};
