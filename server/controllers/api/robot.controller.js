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
  })
  res.end("success");
}

function backward(req, res) {
  exec('sudo python ../gobackward.py', (err, stdout, stderr) => {
    if (err) console.error(err);
    console.log('node version', stdout);
  })
  res.end("success");
}

function left(req, res) {
  exec('sudo python ../turnleft.py', (err, stdout, stderr) => {
    if (err) console.error(err);
    console.log('node version', stdout);
  })
  res.end("success");
}

function right(req, res) {
  exec('sudo python ../turnright.py', (err, stdout, stderr) => {
    if (err) console.error(err);
    console.log('node version', stdout);
  })
  res.end("success");
}

function picture(req, res) {
  exec('sudo python ../picturetext.py', (err, stdout, stderr) => {
    if (err) console.error(err);
    console.log('node version', stdout);
  })
  res.end("success");
}