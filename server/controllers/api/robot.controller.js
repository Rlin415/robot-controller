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
    console.log('returned: ', stdout);
    res.sendStatus(200);
  })
}

function backward(req, res) {
  exec('sudo python ../gobackward.py', (err, stdout, stderr) => {
    if (err) console.error(err);
    console.log('returned: ', stdout);
    res.sendStatus(200);
  })
}

function left(req, res) {
  exec('sudo python ../turnleft.py', (err, stdout, stderr) => {
    if (err) console.error(err);
    console.log('returned: ', stdout);
    res.sendStatus(200);
  })
}

function right(req, res) {
  exec('sudo python ../turnright.py', (err, stdout, stderr) => {
    if (err) console.error(err);
    console.log('returned: ', stdout);
    res.sendStatus(200);
  })
}

function picture(req, res) {
  console.log('hit picture api');
  exec('sudo pkill uv4l', (err, stdout, stderr) => {
    if (err) console.error(err);
    setTimeout(() => {
      exec('sudo raspistill -vf -o cam.jpg', (err, stdout, stderr) => {
        if (err) console.error(err);
        setTimeout(() => {
          exec('sudo uv4l -nopreview --auto-video_nr --driver raspicam --encoding mjpeg --width 640 --height 480 --framerate 20 --server-option ' + '--port=9090' + ' --server-option ' + '--max-queued-connections=30' + ' --server-option ' + '--max-streams=25' + ' --server-option ' + '--max-threads=29' + ' --vf', (err, stdout, stdinn) => {
            if (err) console.error(err);
            exec('sudo python ../picturetext.py', (err, stdout, stderr) => {
              if (err) console.error(err);
              console.log('returned: ', stdout);
              res.sendStatus(200);
            })
          });
        }, 5000);
      });
    }, 1000);
  });
}