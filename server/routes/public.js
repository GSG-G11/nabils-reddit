const router = require('express').Router();

const {
  getUserId,
  addPostController,
  deletePostController,
  homePostsController,
  userPostsController,
  getUserIdForPost,
} = require('../controllers');
const auth = require('../middleware');

router.get('/username/:id', getUserIdForPost);
router.get('/home', homePostsController);
router.get('/user/:id', userPostsController);
router.use(auth);
router.get('/check-login', getUserId);
router.post('/add-post', addPostController);
router.delete('/delete-post/:id', deletePostController);

module.exports = router;
