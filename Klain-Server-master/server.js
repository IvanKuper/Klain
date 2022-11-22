const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const logger = require("./middlewares/logger");
const app = express();
const PORT = process.env.PORT || 8000;
const cors = require("cors");

// Importing Routes
const register = require("./routes/register");
const login = require("./routes/login");
const profile = require("./routes/profile");
const card = require("./routes/card");
const document = require("./routes/document");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger);
// Enable Cors
app.use(cors());

// EndPoints
app.use("/api/register", register);
app.use("/api/login", login);
app.use("/api/profile", profile);
app.use("/api/cards", card);
app.use("/api/documents", document);

// Connect to MongoDB
mongoose
  .connect(process.env.db, { useNewUrlParser: true })
  .then(() => console.log("Connected To MongoDB"))
  .catch(() => console.log("Cannot connect to server"));

app.listen(PORT, () => console.log("Server Connected to port" + PORT));
