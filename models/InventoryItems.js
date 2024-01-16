const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Vendor = require('./vendors');
const User= require('./user')

const InventoryItems = sequelize.define('InventoryItems', {
    InventoryItemId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
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
    DateCreated: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    Category: {
        type: DataTypes.STRING(100),
        allowNull: true,
    },
    Name: {
        type: DataTypes.STRING(150),
        allowNull: true,
    },
    Description: {
        type: DataTypes.STRING(300),
        allowNull: true,
    },
    Price: {
        type: DataTypes.DECIMAL(18, 2),
        allowNull: true,
    },
    Quantity: {
        type: DataTypes.DECIMAL(18, 2),
        allowNull: true,
    },
    Sku: {
        type: DataTypes.STRING(50),
        allowNull: true,
    },
    Warehouse: {
        type: DataTypes.STRING(100),
        allowNull: true,
    },
    ReorderLevel: {
        type: DataTypes.STRING(50),
        allowNull: true,
    },
    Taxable: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
    },
    Active: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: true, // Default value for Active is true
    },
    UnlimitedQuantity: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
    },
    MinimumPrice: {
        type: DataTypes.DECIMAL(18, 2),
        allowNull: true,
    },
    SurchargeExempt: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
    },
    VendorId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Vendor,
            key: 'VendorId',
        },
    },
    LowQuantity: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    Manufacturer: {
        type: DataTypes.STRING(100),
        allowNull: true,
    },
    LocationId: {
        type: DataTypes.STRING(50),
        allowNull: true,
    },
    ContingentId: {
        type: DataTypes.STRING(50),
        allowNull: true,
    },
    ContingentWorkArea: {
        type: DataTypes.STRING(100),
        allowNull: true,
    },
    NeedsManufacturerAssigned: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
    },
    Barcode: {
        type: DataTypes.STRING(75),
        allowNull: true,
    },
    Value: {
        type: DataTypes.DECIMAL(18, 2),
        allowNull: true,
    },
    CommittedQuantity: {
        type: DataTypes.DECIMAL(18, 2),
        allowNull: true,
    },
    AwaitingQuantity: {
        type: DataTypes.DECIMAL(18, 2),
        allowNull: true,
    },
    TargetQuantity: {
        type: DataTypes.DECIMAL(18, 2),
        allowNull: true,
    },
    UnitOfMeasurement: {
        type: DataTypes.STRING(50),
        allowNull: true,
    },
    Notes: {
        type: DataTypes.STRING(2000),
        allowNull: true,
    },
    DateModified: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    IntegrationId: {
        type: DataTypes.STRING(50),
        allowNull: true,
    },
    AdditionalFinePrint: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    MasterId: {
        type: DataTypes.STRING(50),
        allowNull: true,
    },
    BookPrice: {
        type: DataTypes.DECIMAL(18, 2),
        allowNull: true,
    },
});

module.exports = InventoryItems;
