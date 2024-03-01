// routes/playerRoutes.js

const express = require('express');
const router = express.Router();
const Player = require('../models/Player');

// Middleware to fetch player by ID
async function getPlayer(req, res, next) {
  let player;
  try {
    player = await Player.findById(req.params.id);
    if (player == null) {
      return res.status(404).json({ message: 'Player not found' });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.player = player;
  next();
}

// GET all players
router.get('/', async (req, res) => {
  try {
    const players = await Player.find();
    res.json(players);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET a specific player by ID
router.get('/:id', getPlayer, (req, res) => {
  res.json(res.player);
});

// POST a new player
router.post('/', async (req, res) => {
  const player = new Player({
    name: req.body.name,
    age: req.body.age,
    team: req.body.team,
    position: req.body.position
  });

  try {
    const newPlayer = await player.save();
    res.status(201).json(newPlayer);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update a player
router.put('/:id', getPlayer, async (req, res) => {
  if (req.body.name != null) {
    res.player.name = req.body.name;
  }
  if (req.body.age != null) {
    res.player.age = req.body.age;
  }
  if (req.body.team != null) {
    res.player.team = req.body.team;
  }
  if (req.body.position != null) {
    res.player.position = req.body.position;
  }

  try {
    const updatedPlayer = await res.player.save();
    res.json(updatedPlayer);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a player
router.delete('/:id', getPlayer, async (req, res) => {
  try {
    await res.player.remove();
    res.json({ message: 'Player deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
