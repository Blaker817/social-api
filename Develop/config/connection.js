require('dotenv').config();

const Sequelize = require('sequelize');

const sequelize =  new Sequelize(process.env.DB,process.env.DBUSER, process.env.PW, {
    host: 'localhost',
    dialect: 'mysql',
    dialectOptions: {
      decimalNumbers: true,
    },
  });

module.exports = sequelize;
