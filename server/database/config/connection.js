/* eslint-disable camelcase */
const { Pool } = require('pg');
require('env2')('.env');

let bd_URL = '';
let ssl = false;
switch (process.env.NODE_ENV) {
  case 'production':
    bd_URL = process.env.DATABASE_URL;
    ssl = { rejectUnauthorized: false };
    break;
  default:
    bd_URL = process.env.DEV_DB;
    break;
}

module.exports = new Pool({
  connectionString: bd_URL,
  ssl,
});
