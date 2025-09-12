import JoinRequest from "../models/JoinRequest.js";
import User from "../models/User.js";
import Club from "../models/Club.js";

// POST /api/join-request
export const createJoinRequest = async (req, res) => {
  try {
    const { studentId, clubId } = req.body;
    if (!studentId || !clubId) return res.status(400).json({ message: "studentId and clubId are required" });

    const student = await User.findById(studentId);
    if (!student) return res.status(404).json({ message: "Student not found" });
    const club = await Club.findById(clubId);
    if (!club) return res.status(404).json({ message: "Club not found" });

    // Prevent duplicate pending request
    const exists = await JoinRequest.findOne({ studentId, clubId, status: "pending" });
    if (exists) return res.status(400).json({ message: "Request already pending" });

    const jr = await JoinRequest.create({
      studentId,
      studentName: student.name,
      clubId,
      clubName: club.name,
      status: "pending",
    });
    return res.status(201).json(jr);
  } catch (e) {
    return res.status(500).json({ message: "Server error" });
  }
};

// GET /api/join-requests/:clubId
export const getJoinRequestsByClub = async (req, res) => {
  try {
    const { clubId } = req.params;
    const requests = await JoinRequest.find({ clubId }).sort({ createdAt: -1 });
    return res.json(requests);
  } catch (e) {
    return res.status(500).json({ message: "Server error" });
  }
};

// PATCH /api/join-request/:requestId
export const updateJoinRequestStatus = async (req, res) => {
  try {
    const { requestId } = req.params;
    const { status } = req.body;
    if (!["accepted", "rejected"].includes(status)) return res.status(400).json({ message: "Invalid status" });

    const updated = await JoinRequest.findByIdAndUpdate(requestId, { status }, { new: true });
    if (!updated) return res.status(404).json({ message: "Request not found" });

    if (status === "accepted") {
      // Assign club to student
      await User.findByIdAndUpdate(updated.studentId, { clubId: updated.clubId });
    }

    return res.json(updated);
  } catch (e) {
    return res.status(500).json({ message: "Server error" });
  }
};


