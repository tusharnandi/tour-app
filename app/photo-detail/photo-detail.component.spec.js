describe('photoDetail', function() {

    // Load the module that contains the `photoDetail` component before each test
    beforeEach(module('photoDetailModule'));

    describe('photoDetailContainer',function(){
        var $httpBackend, ctrl;

        beforeEach(inject(function($componentController, _$httpBackend_, $routeParams){

            $httpBackend = _$httpBackend_;
            $httpBackend.expectGET('phones/xyz.json').respond({name: 'phone xyz'});
      
            $routeParams.photoId = 'xyz';
      
            ctrl = $componentController('photoDetail');

        }));

        //Case 1
        it('should fetch the photo details', function() {
            expect(ctrl.photo).toBeUndefined();
      
            $httpBackend.flush();
            expect(ctrl.photo).toEqual({name: 'phone xyz'});
          });
        //End Case 1

    });
});
