// ORM:
const { DataTypes } = require('sequelize');
const database = require('#services/db.service');

const Room = database.define(
    'Room',
    {
        roomId: {
            type: DataTypes.STRING(255),
            allowNull: false,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
        },
        name: {
            type: DataTypes.STRING(255),
            allowNull: true,
        },
    },
    {
        // Enable automatic 'createdAt' and 'updatedAt' fields.
        timestamps: true,
        // Only allow 'soft delete'
        // (set of 'deletedAt' field, insted of the real deletion).
    }
);

// Hooks:

// Hooks\

// Static methods:
Room.associate = (models) => {
    models.Room.hasMany(models.Ticket, {
        foreignKey: "RoomId",
        as: 'tickets'
    });
}

// Static methods\

// Instance methods:

// Instance methods\

module.exports = Room;
