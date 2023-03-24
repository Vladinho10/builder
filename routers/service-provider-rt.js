'use strict';
const serviceProviderRt = require('express').Router();

const { ServiceProviderCtrl } = require('../controllers');

serviceProviderRt.get('/v1/service-providers/:_id', ServiceProviderCtrl.getOne);
serviceProviderRt.get('/v1/service-providers', ServiceProviderCtrl.getMany);
serviceProviderRt.post('/v1/service-providers', ServiceProviderCtrl.post);
serviceProviderRt.put('/v1/service-providers/:_id', ServiceProviderCtrl.putOne);
serviceProviderRt.delete('/v1/service-providers/:_id', ServiceProviderCtrl.deleteOne);

module.exports = serviceProviderRt;
