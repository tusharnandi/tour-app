describe('photoList', function () {

    // Load the module that contains the `phoneList` component before each test
    beforeEach(module('tourApp'));

    // Test the controller
    describe('PhotoListController', function () {
        var $httpBackend, ctrl;

        // The injector ignores leading and trailing underscores here (i.e. _$httpBackend_).
        // This allows us to inject a service and assign it to a variable with the same name
        // as the service while avoiding a name conflict.

        beforeEach(inject(function ($componentController, _$httpBackend_) {
            $httpBackend = _$httpBackend_;
            $httpBackend.expectGET('phones/phones.json')
                .respond([{ name: 'Nexus S' }, { name: 'Motorola DROID' }]);

            ctrl = $componentController('photoList');
        }));

        //beforeEach(inject(function ($componentController) {
        //    ctrl = $componentController('photoList');
        //}));


        it('should create a `photos` property with 2 photos fetched with `$http`', function () {
            expect(ctrl.photos).toBeUndefined();

            $httpBackend.flush();
            expect(ctrl.photos).toEqual([{ name: 'Nexus S' }, { name: 'Motorola DROID' }]);
        });

        
        ////Case 1:
        //it('should create a `photos` model with 3 photos', function () {
        //    expect(ctrl.photos.length).toBe(3);
        //});

        ////Case 2:
        //it('should set a default value for the `orderProp` model', function () {
        //    expect(ctrl.orderProp).toBe('age');
        //});

    });

});