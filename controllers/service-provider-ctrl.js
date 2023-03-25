'use strict';
const { ServiceProviderSrv } = require('../services');

class ServiceProviderCtrl {
    static async getMany(req, res) {
        const { query } = req;
        if (!query.latitude || !query.longitude) {
            throw new CustomError({
                type: 'badRequest',
                message: 'invalid params',
                field: !query.latitude ? query.latitude : query.longitude,
            });
        }

        const data = await ServiceProviderSrv.readMany(query);

        return res.ok({ data });
    }
}

module.exports = {
    ServiceProviderCtrl,
};
