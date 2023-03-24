'use strict';
const { ServiceProviderSrv } = require('../services');

class ServiceProviderCtrl {
    static async getMany(req, res) {
        const data = await ServiceProviderSrv.readMany(req.query, req.query.sort);

        return res.ok({ data });
    }
}

module.exports = {
    ServiceProviderCtrl,
};
