const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const User = sequelize.define('User', {
  userid: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  Firstname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Lastname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  PhoneNumber: {
    type: DataTypes.BIGINT,
    allowNull: false,
  },
  createdby: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  isActive: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  isAdmin: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  isDeleted: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  RoleId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  UpdatedBy: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  CreateDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  UpdateDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  AddressLine1: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  AddressLine2: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  Country: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  County: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

module.exports = User;