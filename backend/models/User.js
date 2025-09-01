const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  role: { type: String, enum: ["owner", "tenant"], required: true },
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  contactNumber: { type: String, required: true },
  alternateContact: String,
  aadhaarNumber: { type: String, unique: true },
  propertyProof: String, 
  propertyPurchaseDate: Date,
  password: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);
