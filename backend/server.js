const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const authRoutes = require("./routes/authRoutes");
const listingRoutes = require("./routes/listingRoutes");
const queueRoutes = require("./routes/queueRoutes");

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use("/auth", authRoutes);
app.use("/owner/listings", listingRoutes);
app.use("/owner/queues", queueRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => app.listen(process.env.PORT, () => console.log(`✅ Backend running on http://localhost:${process.env.PORT}`)))
  .catch(err => console.error(err));
