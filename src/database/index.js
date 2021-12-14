const Sequelize = require('sequelize');
const dbConfig = require('../config/database.js');

const User = require('../models/user');
const Address = require('../models/address');


const conection = new Sequelize(dbConfig);

User.init(conection);
Address.init(conection);

Address.associate(conection.models);
User.associate(conection.models);

module.exports = conection;
