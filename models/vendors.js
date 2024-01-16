const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); 
const user = require('./user')

const Vendor = sequelize.define('Vendors', {
  VendorId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  UserId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: user, 
      key: 'userid',
    },
  },
  DateCreated: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  CompanyName: {
    type: DataTypes.STRING(100),
    allowNull: true,
  },
  MailingAddress1: {
    type: DataTypes.STRING(100),
    allowNull: true,
  },
  MailingAddress2: {
    type: DataTypes.STRING(100),
    allowNull: true,
  },
  MailingCity: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  MailingState: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  MailingZip: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  ReorderContact: {
    type: DataTypes.STRING(100),
    allowNull: true,
  },
  Active: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
  Notes: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  Phone: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  IntegrationId: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  DateModified: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  Email: {
    type: DataTypes.STRING(75),
    allowNull: true,
  },
  Website: {
    type: DataTypes.STRING(100),
    allowNull: true,
  },
  QuickbooksId: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  QuickbooksSyncDate: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  QuickbooksSyncToken: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  QuickBookDesktopID: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  QuickBooksDesktopSyncDate: {
    type: DataTypes.DATE,
    allowNull: true,
  },
});

module.exports = Vendor;
