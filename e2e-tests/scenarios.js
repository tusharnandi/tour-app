'use strict';

// AngularJS E2E Testing Guide:
// https://docs.angularjs.org/guide/e2e-testing

describe('Tour App', function() {

    //Case 4
    it('should redirect `index.html` to `index.html#!/photos', function() {
        browser.get('index.html');
        expect(browser.getCurrentUrl()).toContain('index.html#!/photos');
      });


    describe('View: Photo list', function () {

        //////////
        beforeEach(function () {
            browser.get('index.html#!/phones');
        });

        it('should filter the photo list as a user types into the search box', function () {

            var photoList = element.all(by.repeater('photo in $ctrl.photos'));

            var query = element(by.model('$ctrl.query'));

            expect(photoList.count()).toBe(20);

            query.sendKeys('nexus');
            expect(photoList.count()).toBe(1);

            query.clear();
            query.sendKeys('motorola');
            expect(photoList.count()).toBe(8);


        });

        //////////

        //Case 2
        it('should be possible to control photo order via the drop-down menu', function () {
            var queryField = element(by.model('$ctrl.query'));
            var orderSelect = element(by.model('$ctrl.orderProp'));
            var nameOption = orderSelect.element(by.css('option[value="name"]'));
            var photoNameColumn = element.all(by.repeater('photo in $ctrl.photos').column('photo.name'));

            function getNames() {
                return photoNameColumn.map(function (elem) {
                    return elem.getText();
                });
            }

            queryField.sendKeys('Dell');   // Let's narrow the dataset to make the assertions shorter

            expect(getNames()).toEqual([
                'Dell Streak 7',
                'Dell Venue'   
            ]);

            nameOption.click();

            expect(getNames()).toEqual([
                'Dell Streak 7',
                'Dell Venue'
            ]);
        });
        // End Case 2

        //Case 3
        it('should render phone specific links', function () {
            var query = element(by.model('$ctrl.query'));
            query.sendKeys('nexus');

            element.all(by.css('.photo-list li a')).first().click();
            expect(browser.getCurrentUrl()).toContain('index.html#!/photos/nexus-s');
        });
        //End Case 3

        


    });
  
    //Case 5
    describe('View Photo Details',function(){

        beforeEach(function(){
            browser.get('index.html#!/photos/nexus-s');
        });

        it('should display the `nexus-s` page', function() {
            expect(element(by.binding('$ctrl.photo.name')).getText()).toBe('Nexus S');
          });
        
    });
});
