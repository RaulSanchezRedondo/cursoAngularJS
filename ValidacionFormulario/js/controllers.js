parking.controller("parkingCtrl", function ($scope, $filter) {
  $scope.appTitle = $filter("uppercase")("[Packt] Parking");
   
  $scope.cars = [];
        
  $scope.colors = ["Blanco", "Negro", "Azul", "Rojo", "Amarillo"];
   
  $scope.park = function (car) {
    car.entrance = new Date();
    $scope.cars.push(car);
    delete $scope.car;
  };
});