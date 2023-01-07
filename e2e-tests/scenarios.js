'use strict';

// AngularJS E2E Testing Guide:
// https://docs.angularjs.org/guide/e2e-testing

describe('Tour App', function() {

    describe('photoList', function () {

        //////////
        beforeEach(function () {
            browser.get('index.html');
        });

        it('should filter the photo list as a user types into the search box', function () {

            var photoList = element.all(by.repeater('photo in $ctrl.photos'));

            var query = element(by.model('$ctrl.query'));

            expect(photoList.count()).toBe(3);

            query.sendKeys('nexus');
            expect(photoList.count()).toBe(1);

            query.clear();
            query.sendKeys('motorola');
            expect(photoList.count()).toBe(2);


        });

        //////////
    });
  
});
