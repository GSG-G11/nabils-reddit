const {
  addUser, checkEmail, checkUsername, getusernameById,
} = require('./user');
const {
  homePosts, getUserPosts, addPost, deletePost,
} = require('./posts');

module.exports = {
  addUser,
  checkEmail,
  checkUsername,
  homePosts,
  getUserPosts,
  addPost,
  deletePost,
  getusernameById,
};
