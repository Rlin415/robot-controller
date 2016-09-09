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
        .then(() => {
          robotVm.clicked = false
          console.log('forward success');
        });
    }

    function backward() {
      robotVm.clicked = true;
      robotService.backward()
        .then(() => {
          robotVm.clicked = false
          console.log('backward success');
        });
    }

    function left() {
      robotVm.clicked = true;
      robotService.left()
        .then(() => {
          robotVm.clicked = false
          console.log('left click success');
        });
    }

    function right() {
      robotVm.clicked = true;
      robotService.right()
        .then(() => {
          robotVm.clicked = false
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
        })
        .catch((err) => console.error(err));
    }

  }

})();