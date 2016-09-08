const execFile = require('child_process').execFile;

module.exports = {
  forward,
  backward,
  left,
  right,
  picture,
  stream
};

function forward(req, res) {
  execFile('python', ['../goforward.py'], (err, stdout, stderr) => {
    if (err) console.error(err);
    console.log('node version', stdout);
    res.sendStatus(200)
  })
}

function backward(req, res) {
  execFile('node', ['--version'], (err, stdout, stderr) => {
    if (err) console.error(err);
    console.log('node version', stdout);
    res.sendStatus(200)
  })
}

function left(req, res) {
  execFile('node', ['--version'], (err, stdout, stderr) => {
    if (err) console.error(err);
    console.log('node version', stdout);
    res.sendStatus(200)
  })
}

function right(req, res) {
  execFile('node', ['--version'], (err, stdout, stderr) => {
    if (err) console.error(err);
    console.log('node version', stdout);
    res.sendStatus(200)
  })
}

function picture(req, res) {
  execFile('node', ['--version'], (err, stdout, stderr) => {
    if (err) console.error(err);
    console.log('node version', stdout);
    res.sendStatus(200)
  })
}

function stream(req, res) {
  execFile('node', ['--version'], (err, stdout, stderr) => {
    if (err) console.error(err);
    console.log('node version', stdout);
    res.sendStatus(200)
  })
}