const { validateSignUp, hashPassword, signToken } = require('../../utils');
const { addUser, checkEmail, checkUsername } = require('../../database/queries');

const signUp = async (req, res) => {
  console.log(req.body);
  try {
    const { username, email, password } = req.body;
    const { error } = validateSignUp(username, email, password);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    const user = await checkUsername(username);
    if (user.rows.length > 0) {
      return res.status(400).json({ error: 'Username already exists' });
    }

    const emailUser = await checkEmail(email);
    if (emailUser.rows.length > 0) {
      return res.status(400).json({ error: 'Email already exists' });
    }

    const hashedPassword = await hashPassword(password);

    const { rows } = await addUser(username, email, hashedPassword);

    const token = await signToken(rows[0].id);

    return res.status(201).json({ token });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = signUp;
