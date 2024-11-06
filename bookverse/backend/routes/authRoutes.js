
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt'); 
const { User } = require('../models');

router.post('/signup', async (req, res) => {
    const { username, password } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await User.create({ username, password: hashedPassword });
        res.status(201).json({ message: 'User created successfully', user: newUser });
    } catch (error) {
        res.status(500).json({ message: 'Error creating user', error });
    }
});


router.post('/signin', async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await User.findOne({ where: { username } });
        if (!user) return res.status(400).json({ message: 'User not found' });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

        res.status(200).json({ message: 'User signed in successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error signing in', error });
    }
});

router.post('/signup', async (req, res) => {
    res.status(201).json({ message: 'User created successfully' });
});

router.post('/signin', async (req, res) => {
    res.status(200).json({ message: 'User signed in successfully' });
});

module.exports = router;