import Event from "../models/Event.js";

// Create a new event (Faculty)
export const createEvent = async (req, res) => {
  try {
    const { clubId, title, description } = req.body;
    const newEvent = new Event({ clubId, title, description });
    await newEvent.save();
    res.status(201).json(newEvent);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// Get all events (HOD) or events for a specific club (Faculty/Student)
export const getEvents = async (req, res) => {
  try {
    const { clubId } = req.query;
    const filter = clubId ? { clubId } : {};
    const events = await Event.find(filter).populate('clubId');
    res.json(events);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// Update an event (Faculty)
export const updateEvent = async (req, res) => {
  try {
    const { eventId } = req.params;
    const { title, description } = req.body;
    const updatedEvent = await Event.findByIdAndUpdate(eventId, { title, description }, { new: true });
    res.json(updatedEvent);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// Delete an event (Faculty)
export const deleteEvent = async (req, res) => {
  try {
    const { eventId } = req.params;
    await Event.findByIdAndDelete(eventId);
    res.status(200).json({ message: "Event deleted" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
