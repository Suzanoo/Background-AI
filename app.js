// https://github.com/bradtraversy/nodejs-openai-image
const path = require('path');
const express = require('express');
const dotenv = require('dotenv').config();

const routes = require('./server/routes/routes');

// Express app
const app = express();

// Enable body parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// serve client side
app.use(express.static(path.join(__dirname, 'public')));

// ROUTES
app.use('/openai', routes);

// PORT
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log('[INFO] listening on port 5000');
});

// Page: http://localhost:5000/
// End point: http://localhost:5000/openai/img-gen
