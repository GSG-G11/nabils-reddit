const { sign } = require('jsonwebtoken');
require('env2')('.env');

module.exports = (id) => new Promise((resolve, reject) => {
  sign({ id }, process.env.SECRET, (err, token) => {
    if (err) {
      return reject(err);
    }
    return resolve(token);
  });
});
