(function() {

  angular.module('ww.robot')
    .factory('robotService', robotService);

  function robotService($http) {

    return {
      forward,
      backward,
      left,
      right,
      picture,
      stream
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

    function stream() {
      return $http.post('api/stream');
    }

  }

}());