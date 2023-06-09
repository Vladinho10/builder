'use strict';

module.exports = {
    async up(queryInterface, DataTypes) {
        await queryInterface.createTable('users', {
            id: {
                allowNull: false,
                primaryKey: true,
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
            },
            age: {
                type: DataTypes.INTEGER,
            },
            name: {
                type: DataTypes.STRING,
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
        await queryInterface.dropTable('users');
    },
};
