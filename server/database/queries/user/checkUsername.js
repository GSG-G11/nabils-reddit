const pool = require('../../config/connection');

const checkUsername = (username) => pool.query({
  text: 'SELECT * FROM users WHERE username = $1',
  values: [username],
});

module.exports = checkUsername;
