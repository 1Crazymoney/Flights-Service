const {StatusCodes} = require('http-status-codes');

const {SuccessResponse,ErrorResponse} = require('../Utils/common');
const AppError = require('../Utils/errors/app-error');

function validateCreateRequest(req,res,next){
    if (!req.body.modelNumber){
        ErrorResponse.message = 'Something went wrong while creating an airplane';
        ErrorResponse.error = new AppError(['Model Number not found in the incoming request in the correct form'])
        return res
        .status(StatusCodes.BAD_REQUEST)
        .json(ErrorResponse);
        
    }
    next();
}

module.exports = {
    validateCreateRequest
}