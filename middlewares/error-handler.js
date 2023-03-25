'use strict';
const { general: { oftenUseCodes } } = require('../constants');

// eslint-disable-next-line no-unused-vars
module.exports = function (err, req, res, next) {
    logger.error({ errMessage: err.message });
    const body =  err.response && err.response.body;
    logger.error('err.response.body', body);

    if (err) {
        let errorResponse = [];
        const errors  = typeof err === 'string' ? err : err.errors;

        if (err.name === 'CustomError') {
            errorResponse.push({
                field: err.field,
                message: err.message,
            });
        } else {
            err.type = 'unprocessableEntity';

            if (err.name === 'ValidationError') {
                for (const item in errors) {
                    const error = errors[item];
                    let message = '';

                    if (error.kind === 'user defined') {
                        ({ message } = error);
                    } else {
                        message = error.kind;
                    }

                    errorResponse.push({
                        field: error.path,
                        message,
                    });
                }
            }

            if (err.name === 'MongoError') {
                const [, field = ''] = err.message.split('index: ');
                const [, message = ''] = err.message.split(err.code);

                if (field && message) {
                    errorResponse.push({
                        field: field.slice(0, field.lastIndexOf('_')),
                        message: message.slice(0, message.lastIndexOf('error')).trim(),
                    });
                }
            }

            if (err.name === 'CastError') {
                errorResponse.push({
                    field: err.path,
                    message: err.message,
                });
            }

            if (err.name === 'MulterError') {
                errorResponse.push({
                    field: err.field,
                    message: err.message,
                });
            }

            if (err.name === 'Error') {
                if (body && body.errors) {
                    errorResponse = [...errorResponse, ...body.errors];
                } else if (body && body.detail) {
                    const [mess] = body.detail.split('. Use ');
                    errorResponse.push({
                        message: mess,
                    });
                } else {
                    errorResponse.push({
                        field: err.field,
                        message: err.message,
                    });
                }
            }
        }

        return  Object.keys(oftenUseCodes).includes(err.type) && errorResponse.length > 0
            ? res[err.type]({ errors: errorResponse })
            : res.internalServerError({ errors: [{ message: 'Something went wrong' }] });
    }
};
