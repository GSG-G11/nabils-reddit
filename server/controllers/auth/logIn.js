const {
  validateLogIn, comparePassword, signToken, customError,
} = require('../../utils');
const { checkEmail } = require('../../database/queries');
require('env2')('.env');

const logIn = async (req, res) => {
  const { email, password } = req.body;
  try {
    const { error } = await validateLogIn(req.body);
    if (error) throw customError(error.details[0].message, 400);

    const emailUser = await checkEmail(email);
    if (emailUser.rows.length === 0) throw customError("email doesn't exist", 400);

    const checkPass = await comparePassword(password, emailUser.rows[0].password);
    if (!checkPass) throw customError('Invalid password', 401);

    const token = await signToken(emailUser.rows[0].id);

    res.cookie('access', token, {
      httpOnly: true,
      expires: new Date(Date.now() + 60 * 60 * 1000),
      secure: process.env.NODE_ENV === 'production',
    });

    return res.status(200).json({ status: 'success', username: emailUser.rows[0].username });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = logIn;
