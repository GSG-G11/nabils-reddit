const apiRouter = require('express').Router();

const { signUp } = require('../controllers');

apiRouter.post('/signup', signUp);

module.exports = apiRouter;
