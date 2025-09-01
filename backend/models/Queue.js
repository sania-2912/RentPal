const mongoose = require("mongoose");

const queueSchema = new mongoose.Schema({
  listingId: { type: mongoose.Schema.Types.ObjectId, ref: "Listing", required: true },
  tenants: [
    {
      tenantId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
      joinedAt: { type: Date, default: Date.now }
    }
  ]
});

module.exports = mongoose.model("Queue", queueSchema);
