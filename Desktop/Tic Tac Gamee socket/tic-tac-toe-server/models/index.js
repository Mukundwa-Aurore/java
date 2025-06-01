
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("tic_tac_toe", "postgres", " ", {
  host: "localhost",
  dialect: "postgres",
});

module.exports = sequelize;
