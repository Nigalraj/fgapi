const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); 

const Customer = sequelize.define('Customer', {
    Id: {
      type: DataTypes.STRING(50),
      primaryKey: true,
      allowNull: false
    },
    CompanyId: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    DateCreated: {
      type: DataTypes.DATE,
      allowNull: true
    },
    CustomerType: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    AccountType: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    FirstName:{
        type: DataTypes.STRING(50),
        allowNull:true
    },
    LastName:{
        type: DataTypes.STRING(50),
        allowNull:true
    },
    Phone:{
        type: DataTypes.STRING(50),
        allowNull:true
    },
    Email:{
        type: DataTypes.STRING(100),
        allowNull:true
    },
    CompanyName:{
        type: DataTypes.STRING(100),
        allowNull:true
    },
    PhysicalAddress1:{
        type: DataTypes.STRING(100),
        allowNull:true
    },
    PhysicalAddress2:{
        type: DataTypes.STRING(100),
        allowNull:true
    },
    PhysicalCity:{
        type: DataTypes.STRING(100),
        allowNull:true
    },
    PhysicalState:{
        type: DataTypes.STRING(100),
        allowNull:true
    },
    PhysicalZip:{
        type: DataTypes.STRING(50),
        allowNull:true
    },
    BillingAddress1:{
        type: DataTypes.STRING(100),
        allowNull:true
    },
    BillingAddress2:{
        type: DataTypes.STRING(100),
        allowNull:true
    },
    BillingCity:{
        type: DataTypes.STRING(50),
        allowNull:true
    },
    BillingState:{
        type: DataTypes.STRING(50),
        allowNull:true
    },
    BillingZip:{
        type: DataTypes.STRING(50),
        allowNull:true
    },
    LeadSource:{
        type: DataTypes.STRING(50),
        allowNull:true
    },
    MasterAccount:{
        type: DataTypes.BOOLEAN,
        allowNull:true
    },
    Active:{
        type: DataTypes.BOOLEAN,
        allowNull:true
    },
    Notes:{
        type: DataTypes.STRING(150),
        allowNull:true
    },
    CustomField1:{
        type: DataTypes.STRING(500),
        allowNull:true
    },
    CustomField2:{
        type: DataTypes.STRING(500),
        allowNull:true
    },
    CustomField3:{
        type: DataTypes.STRING(500),
        allowNull:true
    },
    CustomField4:{
        type: DataTypes.STRING(500),
        allowNull:true
    },
    CustomField5:{
        type: DataTypes.STRING(500),
        allowNull:true
    },
    Fax:{
        type: DataTypes.STRING(50),
        allowNull:true
    },
    Mobile:{
        type: DataTypes.STRING(50),
        allowNull:true
    },
    Salesman:{
        type: DataTypes.STRING(150),
        allowNull:true
    },
    PreferredInvoiceMethod:{
        type: DataTypes.STRING(50),
        allowNull:true
    },
    PhysicalCounty:{
        type: DataTypes.STRING(75),
        allowNull:true
    },
    Website:{
        type: DataTypes.STRING(100),
        allowNull:true
    },
    Discount:{
        type: DataTypes.DECIMAL(18, 2),
        allowNull:true
    },
    CreatedBy:{
        type: DataTypes.STRING(50),
        allowNull:true
    },
    HouseAccount:{
        type: DataTypes.BOOLEAN,
        allowNull:true
    },
    CreditHold:{
        type: DataTypes.BOOLEAN,
        allowNull:true
    },
    DoNotQuote:{
        type: DataTypes.BOOLEAN,
        allowNull:true
    },
    Number: {
        type: DataTypes.INTEGER,
        
    },
    DateModified:{
        type: DataTypes.DATE
    },
    AllowSms: DataTypes.BOOLEAN,
    CreditBalance: DataTypes.DECIMAL(18, 2),
    OptOutSmsMessages: DataTypes.BOOLEAN,
    OptOutOfReminders: DataTypes.BOOLEAN,
    PendingCreditApproval: DataTypes.BOOLEAN,
    BillingDepartmentEmail: DataTypes.STRING(75),
    PhoneWork: DataTypes.STRING(50),
    QuickbooksId: DataTypes.STRING(50),
    QuickbooksSyncDate: DataTypes.DATE,
    QuickbooksSyncToken: DataTypes.STRING(50),
    Latitude: DataTypes.STRING(50),
    Longitude: DataTypes.STRING(50),
    DisplayName: DataTypes.STRING(100),
    PayaVaultId: DataTypes.STRING(50),
    PaymentMethodPreview: DataTypes.STRING(100),
    PayaVaultLocationId: DataTypes.STRING(50),
    Token: DataTypes.STRING(50),
    OptOutEstimateReminders: DataTypes.BOOLEAN,
    QuickBookDesktopID: DataTypes.STRING(50),
    QuickBooksDesktopSyncDate: DataTypes.DATE,
    AccountTypeId: DataTypes.STRING(50)
  })

  module.exports = Customer;
