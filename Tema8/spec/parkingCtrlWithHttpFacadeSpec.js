describe("Parking Controller With Parking Http Facade Specification", function () {
  var $scope, $httpBackend, mockedCars;
  
  beforeEach(module("parking"));
   
  beforeEach(inject(function ($controller, $rootScope, _$httpBackend_) {
    $scope = $rootScope.$new();
    $controller("parkingCtrlWithParkingHttpFacade", {
      $scope: $scope
    });
    $httpBackend = _$httpBackend_;
    mockedCars = buildMockedCars();
  }));

  it("The cars should be retrieved", function () {
    $httpBackend.whenGET("/cars").respond(function (method, url, data, headers) {
      return [200, mockedCars.getCars(), {}];
    });
    $httpBackend.flush();
    expect($scope.cars.length).toBe(2);
  });

  it("The user should be authenticated", function () {
    $httpBackend.whenGET("/cars").respond(function (method, url, data, headers) {
      return [401, mockedCars.getCars(), {}];
    });
    $httpBackend.flush();
    expect($scope.message).toBe("You must be authenticated!");
  });

  it("Something should went wrong!", function () {
    $httpBackend.whenGET("/cars").respond(function (method, url, data, headers) {
      return [500, mockedCars.getCars(), {}];
    });
    $httpBackend.flush();
    expect($scope.message).toBe("Something went wrong!");
  });

  it("The car should be parked", function () {
    $httpBackend.whenGET("/cars").respond(function (method, url, data, headers) {
      return [200, mockedCars.getCars(), {}];
    });
    $httpBackend.whenPOST("/cars").respond(function (method, url, data, headers) {
      var id = mockedCars.saveCar(angular.fromJson(data));
      return [201, mockedCars.getCar(id), {}];
    });
    $scope.car = {
      plate: "AAAA9977",
      color: "Blue"
    };
    $scope.park($scope.car);
    $httpBackend.flush();
    expect($scope.cars.length).toBe(3);
    expect($scope.car).toBeUndefined();
    expect($scope.message).toBe("The car was parked successfully!");
  });
});