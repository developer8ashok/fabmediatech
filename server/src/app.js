const express = require('express');
const cors = require('cors');
const app = express();

const { sequelize } = require('../src/model/index');

require('dotenv').config();

app.use(cors());
app.use(express.json());

app.use('/api/auth', require('../src/route/auth.route'));
app.use('/api/resellers', require('../src/route/reseller.route'));

sequelize.sync().then(() => {
  console.log('Database synced');
});

module.exports = app;
