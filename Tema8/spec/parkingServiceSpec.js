describe("Parking Service Specification", function () {
  var parkingService;

  beforeEach(module("parking"));
  
  beforeEach(inject(function (_parkingService_) {
    parkingService = _parkingService_;
  }));

  it("Should calculate the ticket for a car that arrives any day at 08:00 and departs in the same day at 16:00", function () {
    var car = {place: "AAA9988", color: "Blue"};
    car.entrance = new Date(1401620400000);
    car.depart = new Date(1401649200000);
    var ticket = parkingService.calculateTicket(car);
    expect(ticket.period).toBe(8);
    expect(ticket.price).toBe(80);
  });
});