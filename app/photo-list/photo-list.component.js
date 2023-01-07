// Register `phoneList` component, along with its associated controller and template
angular.
    module('photoListModule').
    component('photoList', {  // This name is what AngularJS uses to match to the `<phone-list>` element.
        templateUrl: 'photo-list/photo-list.template.html',

        controller: function PhotoListController() {
            this.photos = [
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
        }
    });