const { verify } = require('jsonwebtoken');
require('env2')('.env');

module.exports = (token) => new Promise((resolve, reject) => {
  verify(token, process.env.SECRET, (err, decoded) => {
    if (err) {
      return reject(err);
    }
    return resolve(decoded);
  });
});
