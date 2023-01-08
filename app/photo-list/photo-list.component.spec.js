describe('photoList', function () {

    // Load the module that contains the `phoneList` component before each test
    beforeEach(module('tourApp'));

    // Test the controller
    describe('PhotoListController', function () {
        var ctrl;

        
        beforeEach(inject(function ($componentController) {
            ctrl = $componentController('photoList');
        }));

        //Case 1:
        it('should create a `photos` model with 3 photos', function () {
            expect(ctrl.photos.length).toBe(3);
        });

        //Case 2:
        it('should set a default value for the `orderProp` model', function () {
            expect(ctrl.orderProp).toBe('age');
        });

    });

});