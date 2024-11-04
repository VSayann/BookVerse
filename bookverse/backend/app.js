const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors = require('cors');
const clubRoutes = require('./routes/clubRoutes');

dotenv.config();

const app = express();

// Middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

// Routes
app.use('/api/clubs', clubRoutes);

module.exports = app;