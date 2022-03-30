const {
  addPost, deletePost, getUserPosts, homePosts,
} = require('../database/queries');

const userPostsController = async (req, res) => {
  try {
    const { rows } = await getUserPosts(req.params.id);
    res.status(200).json({ status: 'success', rows });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const homePostsController = async (req, res) => {
  try {
    const { rows } = await homePosts();
    res.status(200).json({ status: 'success', rows });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const addPostController = async (req, res) => {
  try {
    req.body.id = req.user;
    console.log(req.body);
    const { rows } = await addPost(req.body);
    res.status(201).json({ status: 'success', rows });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deletePostController = async (req, res) => {
  try {
    const { rows } = await deletePost(req.params.id);
    res.status(200).json({ status: 'success', rows });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  userPostsController,
  homePostsController,
  addPostController,
  deletePostController,
};
