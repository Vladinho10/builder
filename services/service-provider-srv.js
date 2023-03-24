'use strict';
const { ServiceProvider } = require('../dal/models');
const haversine = require('haversine');

class ServiceProviderSrv {
    static async readMany(start, sort) {
        if (!start.latitude || !start.longitude) {
            throw new CustomError({
                message: 'invalid params',
            });
        }
        const locations = await ServiceProvider.findAll({ raw: true });
        const distances = [];
        for (const location of locations) {
            const end = {
                latitude: location.latitude,
                longitude: location.longitude,

            };

            const distance = haversine(start, end, { unit: 'meter' });
            distances.push({
                distance,
                location,
            });
        }

        return  sort === 'desc'
            ? distances.sort((one, two) => two.distance - one.distance)
            : distances.sort((one, two) =>  one.distance - two.distance);
    }
}

module.exports = {
    ServiceProviderSrv,
};
