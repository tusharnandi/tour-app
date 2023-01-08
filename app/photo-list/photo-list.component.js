// Register `phoneList` component, along with its associated controller and template
angular.
    module('photoListModule').
    component('photoList', {  // This name is what AngularJS uses to match to the `<phone-list>` element.
        templateUrl: 'photo-list/photo-list.template.html',

        controller: ['$http', function PhotoListController($http) {

            var self = this;
            self.orderProp = 'age';

            $http.get('phones/phones.json').then(function (response) {
                self.photos = response.data;
            });
            //this.photos = [
            //    {
            //        name: 'Nexus S',
            //        snippet: 'Fast just got faster with Nexus S.',
            //        age: 3
            //    }, {
            //        name: 'MOTOROLA G62 5G',
            //        snippet: 'The Next, Next Generation 5G mobile.',
            //        age: 2
            //    }, {
            //        name: 'MOTOROLA G72',
            //        snippet: 'The Next, Next Generation 5G mobile.',
            //        age: 1
            //    }
            //];

            //this.orderProp = 'age';
        }
    ]
    });