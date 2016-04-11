describe("Plate Filter Specification", function () {
  var plateFilter;
  
  beforeEach(module("parking"));
  
  beforeEach(inject(function (_plateFilter_) {
    plateFilter = _plateFilter_;
  }));
  
  it("Should format the plate", function () {
    var plate = "AAA9999"
    var expectedPlate = "AAA-9999";
    expect(plateFilter(plate, "-")).toBe(expectedPlate);
  });
});