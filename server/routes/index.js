const router = require('express').Router();
const apiRouter = require('./api');
const publicRouter = require('./public');

router.use('/api/v1', apiRouter);
router.use('/', publicRouter);

module.exports = router;
