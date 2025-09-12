import Request from '../models/Request.js';
import User from '../models/User.js';
import Club from '../models/Club.js';

// Create a join request
export const createRequest = async (req, res) => {
  try {
    const { studentId, clubId } = req.body;
    // Prevent duplicate requests
    const existing = await Request.findOne({ studentId, clubId, status: 'pending' });
    if (existing) return res.status(400).json({ message: 'Request already exists' });
    const request = await Request.create({ studentId, clubId });
    res.status(201).json(request);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all requests for a club
export const getClubRequests = async (req, res) => {
  try {
    const { clubId } = req.query;
    const requests = await Request.find({ clubId }).populate('studentId', 'name email');
    res.json(requests);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update request status (accept/reject)
export const updateRequestStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    if (!['accepted', 'rejected'].includes(status)) {
      return res.status(400).json({ message: 'Invalid status' });
    }
    const request = await Request.findByIdAndUpdate(id, { status }, { new: true });
    res.json(request);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
