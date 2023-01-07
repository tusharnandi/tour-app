// Register `phoneList` component, along with its associated controller and template
angular.
    module('tourApp').
    component('photoList', {  // This name is what AngularJS uses to match to the `<phone-list>` element.
        template:
            '<ul class="list-group">' +
            '<li ng-repeat="photo in $ctrl.photos" class="list-group-item">' +
            '<span>{{photo.name}}</span>' +
            '<p>{{photo.snippet}}</p>' +
            '</li>' +
            '</ul>',
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