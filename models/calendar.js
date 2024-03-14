const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); 

const Calender = sequelize.define('Calender', {
    Id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    CompanyId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    LocationId: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    TruckId: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    CrewId: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    Type: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    TypeId: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    DateCreated: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    CreatedBy: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    Title: {
      type: DataTypes.STRING(300),
      allowNull: true,
    },
    Status: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    Date: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },
    StartTime: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },
    EndTime: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },
    Notes: {
      type: DataTypes.STRING(500),
      allowNull: true,
    },
    PercentOfWorkOrder: {
      type: DataTypes.DECIMAL(18, 2),
      allowNull: true,
    },
  });

module.exports = Calender;