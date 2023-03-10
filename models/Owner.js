import mongoose from "mongoose";

const OwnerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      min: 2,
      max: 50,
    },
    email: {
      type: String,
      required: true,
      max: 50,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 5,
    },
    deviceid: {
      type: String,
      default: ""
    },
    phone: {
      type: String,
    },
    cpswd: {
      type: String,
    },
  },
);
// OwnerSchema.inde
const Owner = mongoose.model("Owner", OwnerSchema);
export default Owner;

