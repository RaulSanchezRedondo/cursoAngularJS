describe("Parking Http Facade Specification", function () {
  var parkingHttpFacade, $httpBackend, mockedCars;

  beforeEach(module("parking"));
  
  beforeEach(inject(function (_parkingHttpFacade_, _$httpBackend_) {
    parkingHttpFacade = _parkingHttpFacade_;
    $httpBackend = _$httpBackend_;
    mockedCars = buildMockedCars();
  }));

  it("Should get the parked cars", function () {
    $httpBackend.whenGET("/cars").respond(function (method, url, data, headers) {
      return [200, mockedCars.getCars(), {}];
    });
    parkingHttpFacade.getCars().success(function (data, status) {
      expect(data).toEqual(mockedCars.getCars());
      expect(status).toBe(200);
    });
    $httpBackend.flush();
  });

  it("Should get a parked car", function () {
    $httpBackend.whenGET("/cars/1").respond(function (method, url, data, headers) {
      return [200, mockedCars.getCar(1), {}];
    });
    parkingHttpFacade.getCar(1).success(function (data, status) {
      expect(data).toEqual(mockedCars.getCar(1));
      expect(status).toBe(200);
    });
    $httpBackend.flush();
  });

  it("Should save a parked car", function () {
    var car = {
      plate: "AAA9977",
      color: "Green"
    };
    $httpBackend.whenPOST("/cars").respond(function (method, url, data, headers) {
      var id = mockedCars.saveCar(angular.fromJson(data));
      return [201, mockedCars.getCar(id), {}];
    });
    parkingHttpFacade.saveCar(car).success(function (data, status) {
      expect(car).toEqual(data);
      expect(status).toBe(201);
      expect(mockedCars.getNumberOfCars()).toBe(3);
    });
    $httpBackend.flush();
  });

  it("Should update a parked car with id=1", function () {
    var car = {
      plate: "AAA9977",
      color: "Red"
    };
    $httpBackend.whenPUT("/cars/1").respond(function (method, url, data, headers) {
      mockedCars.updateCar(1, angular.fromJson(data));
      return [204, "", {}];
    });
    parkingHttpFacade.updateCar(1, car).success(function (data, status) {
      expect(car).toEqual(mockedCars.getCar(1));
      expect(data).toBe("");
      expect(status).toBe(204);
    });
    $httpBackend.flush();
  });

  it("Should delete a parked car", function () {
    $httpBackend.whenDELETE("/cars/1").respond(function (method, url, data, headers) {
      mockedCars.deleteCar(1);
      return [204, "", {}];
    });
    parkingHttpFacade.deleteCar(1).success(function (data, status) {
      expect(data).toBe("");
      expect(status).toBe(204);
      expect(mockedCars.getNumberOfCars()).toBe(1);
    });
    $httpBackend.flush();
  });
});