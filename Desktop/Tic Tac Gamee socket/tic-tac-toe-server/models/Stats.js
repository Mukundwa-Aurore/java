const { DataTypes } = require('sequelize');
const sequelize = require('../utils/database');

const Stats = sequelize.define('Stats', {
  username: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  wins: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  losses: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  draws: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
});

module.exports = Stats;
