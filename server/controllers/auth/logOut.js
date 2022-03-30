const logout = (req, res) => {
  res.clearCookie('access').json({ status: 'success' });
};
module.exports = logout;
