const apiRouter = require('express').Router();

const { signUp, logIn, logOut } = require('../controllers');

apiRouter.post('/signup', signUp);
apiRouter.post('/login', logIn);
apiRouter.get('/logout', logOut);

module.exports = apiRouter;
