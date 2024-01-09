const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); 
const User = require('./user');

const Leads = sequelize.define('Leads', {
  LeadsId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  UserId: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references:{
      model:User,
      key:'userid'
    }
  },
  AccountType: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  ProjectName: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  IsOpportunity: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  CreatedDate: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  CreatedBy: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  UpdatedDate: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  UpdatedBy: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Leads;
