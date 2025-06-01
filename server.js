const express = require('express');
const cors = require('cors');
require('dotenv').config();

const connectDb = require('./config/db');
const menuRoutes = require('./routes/menuRoutes');
const orderRoutes = require('./routes/orderRoutes'); 

const app = express();


app.use(cors());
app.use(express.json());

connectDb();

app.use('/api/menu', menuRoutes);
app.use('/api/orders', orderRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
