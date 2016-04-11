parking.factory("parkingHttpFacade", function ($http) {
  var _getCars = function () {
    return $http.get("/cars");
  };

  var _getCar = function (id) {
    return $http.get("/cars/" + id);
  };

  var _saveCar = function (car) {
    return $http.post("/cars", car);
  };

  var _updateCar = function (id, car) {
    return $http.put("/cars/" + id, car);
  };

  var _deleteCar = function (id) {
    return $http.delete("/cars/" + id);
  };


  return {
    getCars: _getCars,
    getCar: _getCar,
    saveCar: _saveCar,
    updateCar: _updateCar,
    deleteCar: _deleteCar
  };
});