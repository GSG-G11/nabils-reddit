const { verifyToken, customError } = require('../utils');

const authenticateUser = async (req, res, next) => {
  try {
    if (!req.cookies.access) throw customError('Unauthorized', 401);
    const { access } = req.cookies;
    const { id } = await verifyToken(access);
    req.user = id;
    next();
  } catch (error) {
    // eslint-disable-next-line no-unused-expressions
    error.message.includes('JsonWebTokenError')
      ? next(customError(error.message, 401))
      : next(error);
  }
};

module.exports = authenticateUser;
