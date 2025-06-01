const express = require("express");
const router = express.Router();
const Game = require("../models/Game");

router.get("/history/:userId", async (req, res) => {
  const games = await Game.find({
    $or: [{ player1_id: req.params.userId }, { player2_id: req.params.userId }],
  });
  res.json(games);
});

router.get("/:gameId", async (req, res) => {
  const game = await Game.findById(req.params.gameId);
  res.json(game);
});

module.exports = router;
