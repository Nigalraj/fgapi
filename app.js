const express = require('express');
const bodyParser = require('body-parser');
const db = require('./config/database');
const usersRoutes = require('./routes/usersRoutes');
const leadsRoutes = require('./routes/leadsRoutes');
const estimatesRoutes = require('./routes/estimatesRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use('/api/users', usersRoutes);
app.use('/api/leads', leadsRoutes); 
app.use('/api/estimates', estimatesRoutes);

db.sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Unable to connect to the database:', error);
  });
