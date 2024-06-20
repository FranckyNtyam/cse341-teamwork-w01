const route  = require('express').Router();
const professionalControl = require('../controllers/professional');

route.get('/professional', professionalControl.getData)

module.exports = route;