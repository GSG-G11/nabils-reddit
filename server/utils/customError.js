const customError = (message, status) => {
  const anError = new Error(message);
  anError.status = status;
  return anError;
};
module.exports = customError;
