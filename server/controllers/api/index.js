const express = require('express');
const robot = require('./robot.controller');

const apiRouter = express.Router();

apiRouter.post("/forward", robot.forward);

apiRouter.post("/backward", robot.backward);

apiRouter.post("/left", robot.left);

apiRouter.post("/right", robot.right);

apiRouter.post("/picture", robot.picture);

apiRouter.post('/stream', robot.stream);

module.exports = apiRouter;