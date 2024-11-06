const express = require('express');
const router = express.Router();
const clubController = require('../controllers/clubController');

router.get('/', clubController.getAllClubs);

router.post('/', clubController.createClub);

router.get('/', (req, res) => {
  res.send('Liste des clubs');
});

module.exports = router;

module.exports = router;
