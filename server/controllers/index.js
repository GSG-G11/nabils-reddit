const { signUp, logIn, logOut } = require('./auth');
const getUserId = require('./getUserId');
const {
  addPostController,
  deletePostController,
  userPostsController,
  homePostsController,
} = require('./posts');
const getUserIdForPost = require('./whosThis');

module.exports = {
  signUp,
  logIn,
  logOut,
  getUserId,
  addPostController,
  deletePostController,
  userPostsController,
  homePostsController,
  getUserIdForPost,
};
