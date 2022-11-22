const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    minlength: 6,
    maxlength: 1024,
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
    maxlength: 1024,
  },
  roles: [
    {
      type: String,
      required: true,
    },
  ],
  mitham: {
    type: String,
    required: true,
  },
  gush: {
    type: String,
    required: true,
  },
  helka: {
    type: String,
    required: true,
  },
});

const User = mongoose.model("users", userSchema);
module.exports = { User };
