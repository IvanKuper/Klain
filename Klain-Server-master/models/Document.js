const mongoose = require("mongoose");

const documentSchema = new mongoose.Schema({
  id: {
    type: Number,
  },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
  },
  name: {
    type: String,
    required: true,
    minlength: 2,
  },
  desc: {
    type: String,
    required: true,
    minlength: 2,
  },
});

const Document = mongoose.model("documents", documentSchema);
module.exports = { Document };
