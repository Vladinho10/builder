'use strict';
const fs = require('fs');
const path = require('path');
const { Sequelize } = require('sequelize');
const { dbOptions } = require('../../configs');
const sequelize = new Sequelize(dbOptions.database, dbOptions.username, dbOptions.password, dbOptions);
const basename = path.basename(__filename);
const db = {};

fs.readdirSync(__dirname)
    .filter(file => file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js')
    .forEach(file => {
        const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
        db[model.name] = model;
    });

for (const dbKey in db) {
    if (db[dbKey].associate) {
        db[dbKey].associate(db);
    }

    if (db[dbKey].addScopes) {
        db[dbKey].addScopes(db);
    }
}
db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
