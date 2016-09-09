const express = require('express');
const robot = require('./robot.controller');
const fs = require('fs');
const path = require('path');

const apiRouter = express.Router();

apiRouter.post("/forward", robot.forward);

apiRouter.post("/backward", robot.backward);

apiRouter.post("/left", robot.left);

apiRouter.post("/right", robot.right);

apiRouter.post("/picture", robot.picture);

// apiRouter.get("/images", (req, res) => {
//   fs.createReadStream(path.join(__dirname, "images/cam.jpg")).pipe(res);
// });

module.exports = apiRouter;