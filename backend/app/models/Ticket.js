// ORM:
const { DataTypes } = require('sequelize');
const database = require('#services/db.service');

const Ticket = database.define(
    'Ticket',
    {
        ticketId: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,

        },
        patientName: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        priority: {
            type: DataTypes.STRING(80),
            allowNull: true
        },
        patientNumber: {
            type: DataTypes.STRING(80),
            allowNull: false,
        },
        department: {
            type: DataTypes.STRING(80),
            allowNull: true,
        },
        issueContext: {
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
Ticket.associate = (models) => {
    models.Ticket.belongsTo(models.Room, {
        foreignKey: "RoomId",
        as: 'room'
    });
}

// Instance methods:

// Instance methods\

module.exports = Ticket;
