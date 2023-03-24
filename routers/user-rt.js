'use strict';
const userRt = require('express').Router();
const { UserCtrl } = require('../controllers');

userRt.get('/v1/users/ejs', UserCtrl.showEjs);
userRt.get('/v1/users/:_id', UserCtrl.getOne);
userRt.get('/v1/users', UserCtrl.getMany);
userRt.post('/v1/users', UserCtrl.post);
userRt.put('/v1/users/:_id', UserCtrl.putOne);
userRt.delete('/v1/users/:_id', UserCtrl.removeOne);
userRt.put('/v1/users/', UserCtrl.putMany);
userRt.patch('/v1/users', UserCtrl.removeMany);

module.exports = userRt;
