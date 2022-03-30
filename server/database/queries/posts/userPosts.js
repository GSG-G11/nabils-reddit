const pool = require('../../config/connection');

const getPostsOfUser = (id) => pool.query({
  text: 'SELECT * FROM posts WHERE user_id = $1',
  values: [id],
});

module.exports = getPostsOfUser;
