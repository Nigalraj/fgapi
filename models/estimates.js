const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); 
const Lead = require('./leads');
const User = require('./user');
const EstimateStatus = require('../enum/status');

const Estimates = sequelize.define('Estimates', {
  EstimateId: {
    type: DataTypes.STRING,
    primaryKey: true,
    allowNull: false,
  },
  UserId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references:{
      model:User, 
      key:'userid'
    }
  },
  LeadsId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references:{
      model:Lead,
      key:'LeadsId'
    }
  },
  DateCreated: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  Name: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  LineItemIds: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  CustomerAccepted: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
  Notes: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  LocationId: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  DefaultEstimate: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
    defaultValue:false
  },
  Type: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  number: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  status: {
    type: DataTypes.ENUM(...Object.values(EstimateStatus)),
    allowNull: true,
    validate: {
      isIn: {
        args: [Object.values(EstimateStatus)],
        msg: 'Invalid status value',
      },
    },
  },
  DateModified: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  FinePrint: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  StartDate: {
    type: DataTypes.DATEONLY,
    allowNull: true,
  },
  ChangeOrder: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
    defaultValue:false
  },
  ReadyForWorker: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
    defaultValue:false
  },
  Duration: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  SingerName: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  SignerTitle: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  SignerSignature: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  SignatureStyle: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  DateSigned: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  Locked: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
    defaultValue: false
  },
  Dead: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
  CreatedBy: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  HidePhaseTotal: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
  DisplayDiscountAmountOnPrintable: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
  DateCustomerAccepted: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  HideEstimateTotal: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
  DepositAmount: {
    type: DataTypes.DECIMAL(18, 2),
    allowNull: true,
  },
  DepositAmountUnit: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  DepositNote: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  Amount: {
    type: DataTypes.DECIMAL(18, 2),
    allowNull: true,
  },
  PaidDate: {
    type: DataTypes.DATEONLY,
    allowNull: true,
  },
  PayavaultId: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  PaymentMethodPreview: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  PayavaultLocationId: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  Token: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

module.exports = Estimates;
