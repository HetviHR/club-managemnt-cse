import mongoose from "mongoose";

const clubSchema = new mongoose.Schema({
  name: { type: String, required: true },
  clubId: { type: mongoose.Schema.Types.ObjectId, required: true },
  description: { type: String, required: true },
});

export default mongoose.model("Club", clubSchema);
