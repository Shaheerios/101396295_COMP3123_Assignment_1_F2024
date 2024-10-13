const express = require('express');
const mongoose = require('mongoose');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const employeeRoutes = require('./routes/employeeRoutes');
const app = express();
const PORT = process.env.PORT || 5000;

connectDB();

app.use(express.json());
app.use('/api/v1/user', userRoutes);
app.use('/api/v1/emp', employeeRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
