const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const connectDB = require('./config/db');

 dotenv.config();

 const app = express();

 app.use(bodyParser.json());
app.use('/api/auth', authRoutes);

 connectDB();

 const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
