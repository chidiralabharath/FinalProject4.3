// models/Player.js

const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  team: String,
  position: String
});

const Player = mongoose.model('Player', playerSchema);

module.exports = Player;
