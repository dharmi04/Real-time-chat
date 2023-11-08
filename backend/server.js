const express = require('express');
const dotenv = require("dotenv");
const mongoose= require('mongoose');
const connectDB = require('./config/db');
const userRoutes = require("./routes/userRoutes");
const {notFound, errorHandler} = require('./middlewares/errorMiddleware')




const app = express();
connectDB()

app.use(express.json)
dotenv.config();

app.use('/api/user', userRoutes)

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});

