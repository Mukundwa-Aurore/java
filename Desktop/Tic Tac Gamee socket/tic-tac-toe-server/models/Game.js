const { DataTypes } = require('sequelize');
const sequelize = require('../utils/database');

const Game = sequelize.define('Game', {
  playerX: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  playerO: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  board: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: false,
    defaultValue: Array(9).fill(null),
  },
  winner: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

module.exports = Game;
