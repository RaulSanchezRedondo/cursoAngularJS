var buildMockedCars = function () {
  var _cars = [
    {
      plate: "AAA9999", 
      color: "Blue"
    }, 
    {
      plate: "AAA9988", 
      color: "White"
    }
  ];

  var _getCars = function () {
    return _cars;
  };

  var _getCar = function (id) {
    return _cars[_id(id)];
  };

  var _saveCar = function (car) {
    return _cars.push(car);
  };

  var _updateCar = function (id, car) {
    _cars[_id(id)] = car;
  }

  var _deleteCar = function (id) {
    _cars.splice(_id(id), 1);
  };

  var _getNumberOfCars = function () {
    return _cars.length;
  }

  var _id = function (id) {
    return id - 1;
  };

  return {
    getCars: _getCars,
    getCar: _getCar,
    saveCar: _saveCar,
    updateCar: _updateCar,
    deleteCar: _deleteCar,
    getNumberOfCars: _getNumberOfCars
  };
};