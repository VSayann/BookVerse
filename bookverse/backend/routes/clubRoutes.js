const express = require('express');
const router = express.Router();
const clubController = require('../controllers/clubController');

router.get('/', clubController.getAllClubs);

router.post('/', clubController.createClub);

module.exports = router;
