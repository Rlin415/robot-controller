(function() {

  angular.module('ww.robot')
    .factory('robotService', robotService);

  function robotService($http) {

    return {
      forward,
      backward,
      left,
      right,
      picture
    };

    function forward() {
      return $http.post('/api/forward');
    }

    function backward() {
      return $http.post('api/backward');
    }

    function left() {
      return $http.post('api/left');
    }

    function right() {
      return $http.post('api/right');
    }

    function picture() {
      return $http.post('api/picture');
    }

  }

}());