const { getusernameById } = require('../database/queries');

const getUserIdForPost = async (req, res) => {
  const { rows } = await getusernameById(req.params.id);
  res.status(200).json({
    username: rows[0].username,
  });
};

module.exports = getUserIdForPost;
