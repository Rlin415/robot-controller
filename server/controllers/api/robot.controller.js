const exec = require('child_process').exec;

module.exports = {
  forward,
  backward,
  left,
  right,
  picture
};

function forward(req, res) {
  exec('sudo python ../goforward.py', (err, stdout, stderr) => {
    if (err) console.error(err);
    console.log('node version', stdout);
    res.sendStatus(200)
  })
}

function backward(req, res) {
  exec('sudo python ../gobackward.py', (err, stdout, stderr) => {
    if (err) console.error(err);
    console.log('node version', stdout);
    res.sendStatus(200)
  })
}

function left(req, res) {
  exec('sudo python ../turnleft.py', (err, stdout, stderr) => {
    if (err) console.error(err);
    console.log('node version', stdout);
    res.sendStatus(200)
  })
}

function right(req, res) {
  exec('sudo python ../turnright.py', (err, stdout, stderr) => {
    if (err) console.error(err);
    console.log('node version', stdout);
    res.sendStatus(200)
  })
}

function picture(req, res) {
  exec('sudo python ../takepicture.py', (err, stdout, stderr) => {
    if (err) console.error(err);
    console.log('node version', stdout);
    res.sendStatus(200)
  })
}