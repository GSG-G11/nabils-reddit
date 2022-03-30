const pool = require('../../config/connection');

const addUser = (username, email, password) => pool.query({
  text: 'INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING * ;',
  values: [username, email, password],
});

module.exports = addUser;
