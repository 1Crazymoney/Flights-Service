const express = require('express');

const {CityController} = require('../../controllers');
const {CityMiddlwares} = require('../../middlewares');

const router = express.Router();

// /api/v1/city POST
router
    .post('/', 
    CityMiddlwares.validateCreateRequest,
    CityController.createCity);



module.exports = router; 