const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const clubRoutes = require('./routes/clubRoutes');
const authRoutes = require('./routes/authRoutes');

dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(express.static(path.join(__dirname, '..', 'src')));
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

app.use('/api/clubs', clubRoutes);
app.use('/api/auth', authRoutes);
  app.use('/api/auth', (req, res, next) => {
    console.log('authRoutes middleware called');
    authRoutes(req, res, next);
  });
module.exports = app;
