'use strict';

module.exports = (sequelize, DataTypes) => sequelize.define(
    'ServiceProvider',
    {
        id: {
            allowNull: false,
            primaryKey: true,
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
        },
        name: {
            type: DataTypes.STRING,
        },
        latitude: {
            type: DataTypes.DECIMAL,
        },
        longitude: {
            type: DataTypes.DECIMAL,
        },
    },
    {
        tableName: 'serviceProviders',
        timestamps: false,
    },
);
