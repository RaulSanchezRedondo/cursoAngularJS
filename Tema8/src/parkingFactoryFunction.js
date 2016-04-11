var parkingFactoryFunction = function () {
  var _calculateTicket = function (car) {
    var departHour = car.depart.getHours();
    var entranceHour = car.entrance.getHours();
    var parkingPeriod = departHour - entranceHour;
    var parkingPrice = parkingPeriod * 10;
    return {
      period: parkingPeriod,
      price: parkingPrice
    };
  };

  return {
    calculateTicket: _calculateTicket
  };
};