const pool = require('../../config/connection');

const addPost = (obj) => pool.query({
  text: 'INSERT INTO posts (user_id, title, body) VALUES ($1, $2, $3) RETURNING * ;',
  values: [obj.id, obj.title, obj.body],
});

module.exports = addPost;
