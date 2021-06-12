const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  userId: { type: String, required: true },
  settings: {
    useDarkMode: Boolean,
    language: String
  },
  contact: {
    email: String
  }
});

module.exports = mongoose.model("users", userSchema);