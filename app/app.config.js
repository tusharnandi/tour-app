angular.
  module('tourApp').
  config(['$routeProvider',
    function config($routeProvider) {
      $routeProvider.
        when('/photos', {
          template: '<photo-list></photo-list>'
        }).
        when('/photos/:photoId', {
          template: '<photo-detail></photo-detail>'
        }).
        otherwise('/photos');
    }
  ]);