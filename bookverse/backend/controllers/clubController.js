const Club = require('../models/Club');

exports.getAllClubs = async (req, res) => {
    try {
        const clubs = await Club.findAll();
        res.status(200).json(clubs);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.createClub = async (req, res) => {
    const { name, description, category } = req.body;

    try {
        const newClub = await Club.create({
            name,
            description,
            category,
        });
        res.status(201).json(newClub);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
