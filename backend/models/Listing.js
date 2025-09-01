const mongoose = require("mongoose");

const listingSchema = new mongoose.Schema({
  ownerId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  houseNumber: String,
  tower: String,
  floor: String,
  contact: String,
  email: String,
  images: [String],
  videos: [String],
  floorArea: String,
  bhk: String,
  rent: {
    amount: Number,
    deposit: Number,
    maintenance: Number
  },
  furnishing: { type: String, enum: ["furnished", "semi-furnished", "unfurnished"] },
  directionFacing: String,
  status: { type: String, enum: ["available", "occupied"], default: "available" }
}, { timestamps: true });

module.exports = mongoose.model("Listing", listingSchema);
