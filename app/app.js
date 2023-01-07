// Define the `tourApp` module
var phonecatApp = angular.module('tourApp', []);

// Define the `PhotoListController` controller on the `tourApp` module
phonecatApp.controller('PhotoListController', function PhotoListController($scope) {
  $scope.photos = [
    {
      name: 'Nexus S',
      snippet: 'Fast just got faster with Nexus S.'
    }, {
      name: 'Motorola XOOM™ with Wi-Fi',
      snippet: 'The Next, Next Generation tablet.'
    }, {
      name: 'MOTOROLA XOOM™',
      snippet: 'The Next, Next Generation tablet.'
    }
  ];
});