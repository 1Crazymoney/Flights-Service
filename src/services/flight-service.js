const { StatusCodes } = require('http-status-codes');

const AppError = require('../Utils/errors/app-error');
const { FlightRepository } = require('../repositories');

const flightRepository = new FlightRepository();

async function createFlight(data) {
    try {
        const flight = await flightRepository.create(data);
        return flight;
    } catch (error) {
        console.error("Error details:", error);
        if (error.name == 'SequelizeValidationError') {
            let explanation = [];
            error.errors.forEach((err) => {
                explanation.push(err.message)
            })
            throw new AppError(explanation, StatusCodes.BAD_REQUEST);
        }
        throw new AppError('Cannot create a new flight object', StatusCodes.INTERNAL_SERVER_ERROR);

    }

}

module.exports = {
    createFlight
}