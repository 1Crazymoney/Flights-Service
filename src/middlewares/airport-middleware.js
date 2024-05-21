const { StatusCodes } = require('http-status-codes');

const { SuccessResponse, ErrorResponse } = require('../Utils/common');
const AppError = require('../Utils/errors/app-error');

function validateCreateRequest(req, res, next) {
    if (!req.body.name) {
        ErrorResponse.message = 'Something went wrong while creating an airport';
        ErrorResponse.error = new AppError(['Airport name not found in the incoming request in the correct form'])
        return res
            .status(StatusCodes.BAD_REQUEST)
            .json(ErrorResponse);

    }

    if (!req.body.code) {
        ErrorResponse.message = 'Something went wrong while creating an airport';
        ErrorResponse.error = new AppError(['Airport code not found in the incoming request in the correct form'])
        return res
            .status(StatusCodes.BAD_REQUEST)
            .json(ErrorResponse);

    }

    if (!req.body.cityId) {
        ErrorResponse.message = 'Something went wrong while creating an airport';
        ErrorResponse.error = new AppError(['Airport cityId not found in the incoming request in the correct form'])
        return res
            .status(StatusCodes.BAD_REQUEST)
            .json(ErrorResponse);

    }
    next();
}

module.exports = {
    validateCreateRequest
}