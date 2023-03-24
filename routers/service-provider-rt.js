'use strict';
const serviceProviderRt = require('express').Router();

const { ServiceProviderCtrl } = require('../controllers');

serviceProviderRt.get('/v1/service-providers', ServiceProviderCtrl.getMany);

module.exports = serviceProviderRt;
