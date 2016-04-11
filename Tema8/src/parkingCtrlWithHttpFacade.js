parking.controller("parkingCtrlWithParkingHttpFacade", function ($scope, parkingHttpFacade) {
  $scope.appTitle = "[Packt] Parking";
   
  $scope.colors = ["White", "Black", "Blue", "Red", "Silver"];
   
  $scope.park = function (car) {
    parkingHttpFacade.saveCar(car)
      .success(function (data, status, headers, config) {
        delete $scope.car;
        retrieveCars();
        $scope.message = "The car was parked successfully!";
      })
      .error(function (data, status, headers, config) {
        switch(status) {
          case 401: {
            $scope.message = "You must be authenticated!"
            break;
          }
          case 500: {
            $scope.message = "Something went wrong!";
            break;
          }
        }
      });
  };

  var retrieveCars = function () {
    parkingHttpFacade.getCars()
      .success(function(data, status, headers, config) {
        $scope.cars = data;
      })
     .error(function(data, status, headers, config) {
        switch(status) {
          case 401: {
            $scope.message = "You must be authenticated!"
            break;
          }
          case 500: {
            $scope.message = "Something went wrong!";
            break;
          }
        }
      });
  };

  retrieveCars();
});