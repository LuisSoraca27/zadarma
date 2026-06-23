require('dotenv').config({ quiet: true });

const { validateEnv } = require('./config/env');
const { startServer } = require('./server');

validateEnv();
startServer();
