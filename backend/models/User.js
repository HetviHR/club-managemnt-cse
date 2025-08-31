import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }, // plain text (for now)
  role: { type: String, enum: ["student", "admin"], default: "student" }
});

export default mongoose.model("User", userSchema);
