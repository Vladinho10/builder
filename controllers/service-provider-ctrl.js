'use strict';
const { ServiceProviderSrv } = require('../services');

class ServiceProviderCtrl {
    static async getOne(req, res) {
        return res.send({ eva: 'Green' });
    }

    static async getMany(req, res) {
        return res.send({ eva: 'Green' });
    }

    static async post(req, res) {

    }

    static async putOne(req, res) {

    }

    static async deleteOne(req, res) {

    }
}

module.exports = {
    ServiceProviderCtrl,
};
