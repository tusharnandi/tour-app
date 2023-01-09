angular.
  module('photoDetailModule').
  component('photoDetail', {
    templateUrl: 'photo-detail/photo-detail.template.html',
    controller: ['$http','$routeParams',
      function PhotoDetailController($http,$routeParams) {
        var self = this;
        $http.get('phones/' + $routeParams.photoId + '.json').then(function(response) {
          self.photo = response.data;
        });
      }
    ]
  });
