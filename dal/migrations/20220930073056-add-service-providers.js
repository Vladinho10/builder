'use strict';

module.exports = {
    async up(queryInterface, DataTypes) {
        await queryInterface.createTable('serviceProviders', {
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
        });
    },

    async down(queryInterface) {
        await queryInterface.dropTable('serviceProviders');
    },
};
