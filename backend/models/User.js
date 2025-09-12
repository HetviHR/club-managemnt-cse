import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    enum: ["student", "faculty", "hod"],
    required: true
  },
  clubId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Club",
    // This will be required for faculty and hods, but not students.
    // The backend logic will handle this validation.
  },
});

export default mongoose.model("User", userSchema);
