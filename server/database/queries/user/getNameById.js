const pool = require('../../config/connection');

const getId = (id) => pool.query({
  text: 'SELECT username FROM users WHERE id = $1',
  values: [id],
});

module.exports = getId;
