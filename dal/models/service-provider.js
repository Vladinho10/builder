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
        createdAt: {
            type: DataTypes.BIGINT,
        },
        updatedAt: {
            type: DataTypes.BIGINT,
        },
    },
    {
        tableName: 'serviceProviders',
        timestamps: false,
    },
);
