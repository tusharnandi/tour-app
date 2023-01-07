describe('photoList', function () {

    // Load the module that contains the `phoneList` component before each test
    beforeEach(module('tourApp'));

    // Test the controller
    describe('PhotoListController', function () {

        it('should create a `photos` model with 3 photos', inject(function ($componentController) {
            var ctrl = $componentController('photoList');

            expect(ctrl.photos.length).toBe(3);
        }));

    });

});