import Request from "../models/Request.js";
import User from "../models/User.js";
import Club from "../models/Club.js";

// Student requests to join a club
export const createRequest = async (req, res) => {
  try {
    const { studentId, clubId } = req.body;
    const newRequest = new Request({ studentId, clubId });
    await newRequest.save();
    res.status(201).json({ message: "Request sent successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// Faculty accepts or rejects a request
export const updateRequestStatus = async (req, res) => {
  try {
    const { requestId } = req.params;
    const { status } = req.body;

    const request = await Request.findByIdAndUpdate(requestId, { status }, { new: true });
    
    // If the request is accepted, add the student to the club
    if (status === "accepted") {
      const user = await User.findById(request.studentId);
      if (user) {
        user.clubId = request.clubId;
        await user.save();
      }
    }

    res.json(request);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// HOD or Faculty views pending requests
export const getRequests = async (req, res) => {
  try {
    const requests = await Request.find({ status: "pending" }).populate('studentId').populate('clubId');
    res.json(requests);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// Get all clubs
export const getClubs = async (req, res) => {
  try {
    const clubs = await Club.find();
    res.json(clubs);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
