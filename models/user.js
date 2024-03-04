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
  Companyname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique:true
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
    allowNull: true,
  },
  isActive: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
  isAdmin: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
  isDeleted: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
  RoleId: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  UpdatedBy: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  CreateDate: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  UpdateDate: {
    type: DataTypes.DATE,
    allowNull: true,
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