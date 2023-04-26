const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true, text: true },
  userId: { type: String, required: true, unique: true},
  settings: {
    useDarkMode: Boolean,
    language: String
  },
  contact: {
    email: String
  }
});

module.exports = mongoose.model("users", userSchema);

//db.transactions.getIndexes()
//db.transactions.find().limit(1)
//show collections
//db.changelog.deleteOne({fileName:'20230426025641-transactions.js'})
// db.users.countDocuments()