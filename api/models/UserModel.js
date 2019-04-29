import { Schema, model } from "mongoose";

const UserSchema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  team: { type: Array, required: true },
  created_at: { type: Date, default: Date.now }
});

export default model("User", UserSchema);
