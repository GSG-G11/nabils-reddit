const pool = require('../../config/connection');

const getPosts = () => pool.query({
  text: 'SELECT * FROM posts',
  values: [],
});

module.exports = getPosts;
