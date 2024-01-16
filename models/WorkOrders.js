const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); 
const User = require('./user');
const Lead = require('./leads');

const WorkOrders = sequelize.define('WorkOrders', {
  WorkOrdersId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  UserId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: 'userid',
    },
  },
  LeadsId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Lead,
      key: 'LeadsId',
    },
  },
  DateCreated: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  Name: {
    type: DataTypes.STRING(250),
    allowNull: true,
  },
  LineItemIds: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  Owner: {
    type: DataTypes.STRING(150),
    allowNull: true,
  },
  CompletedDate: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  Notes: {
    type: DataTypes.TEXT, 
    allowNull: true,
  },
  Scheduled: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
  LocationId: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  Type: {
    type: DataTypes.STRING(70),
    allowNull: true,
  },
  Number: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  Status: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  StatusHistory: {
    type: DataTypes.TEXT, 
    allowNull: true,
  },
  NotifySalesman: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
  NotifyAccounting: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
  LaborAmount: {
    type: DataTypes.DECIMAL(18, 2),
    allowNull: true,
  },
  PartialWorkOrder: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
  DisplayLaborAmount: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
  DateModified: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  CreatedBy: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  LaborAmountType: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  AllowInvoiceBeforeComplete: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
  TentativeDate: {
    type: DataTypes.DATEONLY,
    allowNull: true,
  },
  HourlyOnlyLaborCost: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
});

module.exports = WorkOrders;
