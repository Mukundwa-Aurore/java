const express = require("express");
const router = express.Router();
const Stats = require("../models/Stats");

router.get("/:userId", async (req, res) => {
  const stats = await Stats.findOne({ user_id: req.params.userId });
  res.json(stats);
});

module.exports = router;
