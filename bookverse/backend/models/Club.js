const sequelize = require('../config/db');
const { DataTypes } = require('sequelize');

const Club = sequelize.define('Club', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    category: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    likes: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
    }
});

module.exports = Club;
