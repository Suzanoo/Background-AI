const express = require('express');

const { imgGenerate } = require('../controller/controller');
const routes = express.Router();

routes.post('/img-gen', imgGenerate);

module.exports = routes;
