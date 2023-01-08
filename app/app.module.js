// Define the `tourApp` module
angular.module('tourApp', [
    'ngRoute',
    // ...which depends on the `photoListModule` module
    'photoListModule',
    'photoDetailModule'
]);
