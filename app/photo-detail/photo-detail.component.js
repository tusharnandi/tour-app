angular.
  module('photoDetailModule').
  component('photoDetail', {
    template: 'TBD: Detail view for <span>{{$ctrl.photoId}}</span>',
    controller: ['$routeParams',
      function PhotoDetailController($routeParams) {
        this.photoId = $routeParams.photoId;
      }
    ]
  });
