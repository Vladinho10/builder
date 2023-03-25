'use strict';
const { ServiceProvider } = require('../dal/models');
const haversine = require('haversine');

class ServiceProviderSrv {
    static async readMany(query) {
        const locations = await ServiceProvider.findAll({ raw: true });
        const distances = [];

        for (const location of locations) {
            distances.push({
                distance: haversine(query, {
                    latitude: location.latitude,
                    longitude: location.longitude,
                }, { unit: 'meter' }),
                location,
            });
        }

        const sortedDistances =  query.sort === 'desc'
            ? distances.sort((one, two) => two.distance - one.distance)
            : distances.sort((one, two) =>  one.distance - two.distance);
        const offset = +query.offset || 0;
        const limit = +query.limit || 10;

        return sortedDistances.slice(offset, (limit + offset));
    }
}

module.exports = {
    ServiceProviderSrv,
};
