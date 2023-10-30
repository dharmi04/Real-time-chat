const express = require('express');
const dotenv = require("dotenv");
const mongoose= require('mongoose');

// Define the chats array
const { chats } = require("./data/data");

const app = express();
dotenv.config();

app.get('/', (req, res) => {
    res.send("API Running");
});
app.get('/api/chat', (req, res) => {
    res.send(chats);
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});

