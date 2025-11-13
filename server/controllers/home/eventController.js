const eventService = require("../../services/home/eventService");

// CREATE EVENT
const createEventController = async (req, res) => {
  try {
    const file = req.file;
    const body = req.body;

    const result = await eventService.createEvent(body, file);

    return res.status(201).json({
      success: true,
      message: "Event added successfully",
      data: result,
    });
  } catch (error) {
    console.error("❌ Error creating event:", error);
    console.error("Error details:", JSON.stringify(error, null, 2));

    return res.status(500).json({
      success: false,
      message: "Failed to add event",
      error: error.message || error.toString(),
    });
  }
};

// GET ALL EVENTS
const getEventsController = async (req, res) => {
  try {
    const result = await eventService.getAllEvents();
    res.status(200).json({
      message: "Events fetched successfully",
      data: result,
    });
  } catch (error) {
    console.error("Error fetching events:", error);
    res.status(500).json({
      message: "Failed to fetch events",
      error: error.message,
    });
  }
};

// GET SINGLE EVENT BY ID
const getEventByIdController = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await eventService.getEventById(id);

    res.status(200).json({
      message: "Event fetched successfully",
      data: result,
    });
  } catch (error) {
    console.error("Error fetching event:", error);
    res.status(500).json({
      message: "Failed to fetch event",
      error: error.message,
    });
  }
};

// UPDATE EVENT
const updateEventController = async (req, res) => {
  try {
    const id = req.params.id;
    const file = req.file;
    const body = req.body;

    const result = await eventService.updateEvent(id, body, file);

    res.status(200).json({
      message: "Event updated successfully",
      data: result,
    });
  } catch (error) {
    console.error("Error updating event:", error);
    res.status(500).json({
      message: "Failed to update event",
      error: error.message,
    });
  }
};

// DELETE EVENT
const deleteEventController = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await eventService.deleteEvent(id);

    if (result) {
      res.status(200).json({ message: "Event deleted successfully" });
    } else {
      res.status(404).json({ message: "Event not found" });
    }
  } catch (error) {
    console.error("Error deleting event:", error);
    res.status(500).json({
      message: "Failed to delete event",
      error: error.message,
    });
  }
};

module.exports = {
  createEventController,
  getEventsController,
  getEventByIdController,
  updateEventController,
  deleteEventController,
};
