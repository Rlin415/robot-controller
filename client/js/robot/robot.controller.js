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
      robotVm.clicked = true;
      robotService.forward()
        .then(() => robotVm.clicked = false);
    }

    function backward() {
      robotVm.clicked = true;
      robotService.backward()
        .then(() => robotVm.clicked = false);
    }

    function left() {
      robotVm.clicked = true;
      robotService.left()
        .then(() => robotVm.clicked = false);
    }

    function right() {
      robotVm.clicked = true;
      robotService.right()
        .then(() => robotVm.clicked = false);
    }

    function picture() {
      console.log('snapped picture');
      robotVm.clicked = true;
      robotService.picture()
        .then(() => robotVm.clicked = false)
        .catch((err) => console.error(err));
    }

  }

})();