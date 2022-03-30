const { getusernameById } = require('../database/queries');

// eslint-disable-next-line no-unused-vars
const getUserId = async (req, res, next) => {
  const { rows } = await getusernameById(req.user);
  res.status(200).json({
    status: 'success',
    user: req.user,
    username: rows[0].username,
  });
};

module.exports = getUserId;
