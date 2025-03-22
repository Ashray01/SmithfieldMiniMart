const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
})
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

// Sample Route
app.get('/', (req, res) => {
    res.send('Smithfield Mini-Mart API is running');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
