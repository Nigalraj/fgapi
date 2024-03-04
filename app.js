const express = require('express');
const bodyParser = require('body-parser');
const db = require('./config/database');
const cors = require('cors')
const usersRoutes = require('./routes/usersRoutes');
const leadsRoutes = require('./routes/leadsRoutes');
const estimatesRoutes = require('./routes/estimatesRoutes');
const WorkOrdersRoutes = require('./routes/workOrderRoutes');
const VendorsRoutes = require('./routes/vendorsRoutes')
const InventoryItemsRoutes = require('./routes/inventoryItemRoutes');

const app = express();
const PORT = process.env.PORT || 3002; 

app.use(cors())
app.use(bodyParser.json());
 
app.use('/api/users', usersRoutes);
app.use('/api/leads', leadsRoutes); 
app.use('/api/estimates', estimatesRoutes);
app.use('/api/workorders', WorkOrdersRoutes); 
app.use('/api/vendors',VendorsRoutes);
app.use('/api/inventoryitems',InventoryItemsRoutes);

db.sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Unable to connect to the database:', error);
  });
