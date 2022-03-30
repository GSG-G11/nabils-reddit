const pool = require('../../config/connection');

const checkEmail = (email) => pool.query({
  text: 'SELECT * FROM users WHERE email = $1',
  values: [email],
});

module.exports = checkEmail;
