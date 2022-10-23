const express = require('express');
const userRouter = require('./users.router');


function apiRouter(app){

    const router = express.Router();
    app.use('/api/pimenton', router);
    router.use('/users', userRouter);
}

module.exports = apiRouter;