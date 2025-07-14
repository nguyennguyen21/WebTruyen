// models/user.js
const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const User = sequelize.define('User', {
    IdUser: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    Username: {
        type: DataTypes.STRING(255),
        allowNull: false,
        unique: true,
    },
    Email: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true,
    },
    Phone: {
        type: DataTypes.STRING(10),
        allowNull: false,
        unique: true,
    },
    PassWords: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    Roles: {
        type: DataTypes.ENUM('admin', 'user'),
        defaultValue: 'user',
    },
    CreatedAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
}, {
    tableName: 'users',
    timestamps: false,
});

module.exports = User;