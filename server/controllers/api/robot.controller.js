const exec = require('child_process').exec;

module.exports = {
  forward,
  backward,
  left,
  right,
  picture
};

function forward(req, res) {
  console.log('hit forward api');
  exec('sudo python ../goforward.py', (err, stdout, stderr) => {
    if (err) console.error(err);
  });
  console.log('send forward command to robot');
  res.sendStatus(200);
}

function backward(req, res) {
  console.log('hit backward api');
  exec('sudo python ../gobackward.py', (err, stdout, stderr) => {
    if (err) console.error(err);
  });
  console.log('send backward command to robot');
  res.sendStatus(200);
}

function left(req, res) {
  console.log('hit left api');
  exec('sudo python ../turnleft.py', (err, stdout, stderr) => {
    if (err) console.error(err);
  });
  console.log('send left command to robot');
  res.sendStatus(200);
}

function right(req, res) {
  console.log('hit right api');
  exec('sudo python ../turnright.py', (err, stdout, stderr) => {
    if (err) console.error(err);
    console.log('returned: ', stdout);
    res.sendStatus(200);
  })
}

function picture(req, res) {
  console.log('hit picture api');
  exec('sudo python ../dropboxp.py', (err, stdout, stderr) => {
    if (err) console.error(err);
    console.log('returned: ', stdout);
    res.sendStatus(200);
  });
}