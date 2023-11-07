const express = require('express');
const dotenv = require("dotenv");
const mongoose= require('mongoose');
const connectDB = require('./config/db');
const userRoutes = require("./outes/userRoutes");


// Define the chats array
const { chats } = require("./data/data");


const app = express();
connectDB()
dotenv.config();

app.use('/api/user', userRoutes)

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});

