// models/User.js
const { DataTypes } = require('sequelize');
const sequelize = require('../dbconnection/connection');
const {isEmail} = require('validator')
const FB = sequelize.define('Facebook', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: {
      name: 'usernameUnique',
      msg: 'Username already exists.',
    },
    validate: {
      notEmpty: {
        msg: 'Please enter a username.',
      },
    },
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: {
      name: 'emailUnique',
      msg: 'Email already exists.',
    },
    validate: {
      notEmpty: {
        msg: 'Please enter an email.',
      },
      isEmail: {
        msg: 'Please enter a valid email address.',
      },
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: 'Please enter a password.',
      },
    },
  },
});

module.exports = FB;