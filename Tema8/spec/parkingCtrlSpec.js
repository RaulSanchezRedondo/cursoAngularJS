describe("Parking Controller Specification", function () {
  var $scope;
  
  beforeEach(module("parking"));
   
  beforeEach(inject(function ($controller, $rootScope) {
    $scope = $rootScope.$new();
    $controller("parkingCtrl", {
      $scope: $scope
    });
  }));

  it("The title of the application should be [Packt] Parking", function () {
    var expectedAppTitle = "[Packt] Parking";
    expect($scope.appTitle).toBe(expectedAppTitle);
  });

  it("The available colors should be white, black, blue, red and silver", function () {
    var expectedColors = ["White", "Black", "Blue", "Red", "Silver"];
    expect($scope.colors).toEqual(expectedColors);
  });

  it("The car should be parked", function () {
    $scope.car = {
      plate: "AAAA9999",
      color: "Blue"
    };
    $scope.park($scope.car);
    expect($scope.cars.length).toBe(1);
    expect($scope.car).toBeUndefined();
  });
});