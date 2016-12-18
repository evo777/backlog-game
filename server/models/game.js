const mongoose = require('mongoose');


const GameSchema = new mongoose.Schema({
  name: String,
  platform: String,
  estimatedProgress: Number,
  playTime: Number
  review: Number
});


module.exports = mongoose.model('Game', GameSchema);