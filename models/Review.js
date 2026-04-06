const mongoose = require("mongoose");

const ReviewSchema = new mongoose.Schema({
  movieName: {
    type: String,
    required: true
  },
  reviewText: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5
  },
  username: {         
    type: String,
    required: true
  },
  userEmail: {
    type: String,
    default: ""   // 👈 not required anymore
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Review", ReviewSchema);
