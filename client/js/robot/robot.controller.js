(function() {

  angular.module('ww.robot')
    .controller('RobotController', RobotController);

  function RobotController(robotService) {
    let robotVm = this;

    robotVm.forward = forward;
    robotVm.backward = backward;
    robotVm.left = left;
    robotVm.right = right;
    robotVm.picture = picture;
    robotVm.clicked = false;

    function forward() {
      console.log('moving forward');
      robotService.forward()
        .then(() => {
          console.log('forward success');
        });
    }

    function backward() {
      console.log('moving backward');
      robotService.backward()
        .then(() => {
          console.log('backward success');
        });
    }

    function left() {
      console.log('moving left');
      robotService.left()
        .then(() => {
          console.log('left click success');
        });
    }

    function right() {
      console.log('moving right');
      robotService.right()
        .then(() => {
          console.log('right click success');
        });
    }

    function picture() {
      console.log('snapped picture');
      robotVm.clicked = true;
      robotService.picture()
        .then(() => {
          robotVm.clicked = false;
          console.log('picture success');
          location.reload();
        })
        .catch((err) => console.error(err));
    }

  }

})();