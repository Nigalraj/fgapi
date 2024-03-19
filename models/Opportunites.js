const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); 

const Opportunity = sequelize.define('Opportunity', {
    OpportunityId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    CompanyId: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    CustomerId: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    DateCreated: {
        type: DataTypes.DATE,
        allowNull: true
    },
    CreatedBy: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    CompanyName: {
        type: DataTypes.STRING(100),
        allowNull: true
    },
    FirstName: {
        type: DataTypes.STRING(100),
        allowNull: true
    },
    LastName: {
        type: DataTypes.STRING(100),
        allowNull: true
    },
    Address1: {
        type: DataTypes.STRING(150),
        allowNull: true
    },
    Address2: {
        type: DataTypes.STRING(150),
        allowNull: true
    },
    City: {
        type: DataTypes.STRING(100),
        allowNull: true
    },
    State: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    Zip: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    Phone: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    Email: {
        type: DataTypes.STRING(100),
        allowNull: true
    },
    IsCustomer: {
        type: DataTypes.BOOLEAN,
        allowNull: true
    },
    IsExpired: {
        type: DataTypes.BOOLEAN,
        allowNull: true
    },
    BidExpirationDate: {
        type: DataTypes.DATEONLY,
        allowNull: true
    },
    Notes: {
        type: DataTypes.STRING(500),
        allowNull: true
    },
    UserId: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    Action: {
        type: DataTypes.STRING(250),
        allowNull: true
    },
    PhoneWork: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    PhoneCell: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    PhoneHome: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    Website: {
        type: DataTypes.STRING(100),
        allowNull: true
    },
    ConfidenceLevel: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    ReminderFrequency: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    LastReminded: {
        type: DataTypes.DATE,
        allowNull: true
    },
    LeadSource: {
        type: DataTypes.STRING(100),
        allowNull: true
    },
    Type: {
        type: DataTypes.STRING(100),
        allowNull: true
    },
    Name: {
        type: DataTypes.STRING(250),
        allowNull: true
    },
    Status: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    Reason: {
        type: DataTypes.STRING(200),
        allowNull: true
    },
    ProjectId: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    CommercialAccount: {
        type: DataTypes.BOOLEAN,
        allowNull: true
    },
    BillingAddress1: {
        type: DataTypes.STRING(150),
        allowNull: true
    },
    BillingAddress2: {
        type: DataTypes.STRING(150),
        allowNull: true
    },
    BillingCity: {
        type: DataTypes.STRING(100),
        allowNull: true
    },
    BillingState: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    BillingZip: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    Archived: {
        type: DataTypes.BOOLEAN,
        allowNull: true
    },
    DateModified: {
        type: DataTypes.DATE,
        allowNull: true
    },
    ModifiedBy: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    ReferralSource: {
        type: DataTypes.STRING(100),
        allowNull: true
    },
    BillingSameAsPhysical: {
        type: DataTypes.BOOLEAN,
        allowNull: true
    },
    ServicesRequested: {
        type: DataTypes.STRING(2500),
        allowNull: true
    },
    ServicesInstalled: {
        type: DataTypes.STRING(2500),
        allowNull: true
    },
    Longitude: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    Latitude: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    LocationId: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    Converted: {
        type: DataTypes.BOOLEAN,
        allowNull: true
    },
    ConvertedDate: {
        type: DataTypes.DATE,
        allowNull: true
    },
    BidDate: {
        type: DataTypes.DATEONLY,
        allowNull: true
    },
    BidTime: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    ProjectName: {
        type: DataTypes.STRING(100),
        allowNull: true
    },
    Terms: {
        type: DataTypes.STRING(50),
        allowNull: true
    }
})

module.exports = Opportunity;