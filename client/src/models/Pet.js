import mongoose from "mongoose";

const petSchema = new mongoose.Schema({
  name: String,
  image: String,
  description: String,
  adopted: Boolean
});

export default mongoose.model("Pet", petSchema);
