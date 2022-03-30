const pool = require('../../config/connection');

const deletePost = (id) => pool.query({
  text: 'DELETE FROM posts where id = $1',
  values: [id],
});

module.exports = deletePost;
