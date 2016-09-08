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
    robotVm.stream = stream;

    function forward() {
      robotService.forward();
    }

    function backward() {
      robotService.backward();
    }

    function left() {
      robotService.left();
    }

    function right() {
      robotService.right();
    }

    function picture() {
      robotService.picture();
    }

    function stream() {
      robotService.stream();
    }
  }

})();