require('dotenv').config();

const { Sequelize } = require('sequelize');

// Optional: Logging to verify


const sequelize = new Sequelize(
  "railway", 
  "root",
  "YqimCkuiJptaSWnfYTPAPxJWLKcoPyoM",
  {
    host: "metro.proxy.rlwy.net",
    port: 38722,
    dialect: 'mysql',
    logging: false,
  }
);

module.exports = sequelize;
