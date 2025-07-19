const sequelize = require('../config/dbConfig');
const User = require('./user.model');

module.exports = {
  sequelize,
  User,
};