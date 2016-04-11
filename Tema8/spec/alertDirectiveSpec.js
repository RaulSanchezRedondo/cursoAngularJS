describe("Alert Directive Specification", function () {
  var element, scope;

  beforeEach(module('ui'));
  
  beforeEach(inject(function ($rootScope, $compile) {
    scope = $rootScope;    
    // Step 1 – Create the element with the directive
    element = angular.element(
      "<alert topic='Something went wrong!'>" + 
        "Please inform the plate and the color of the car" +
      "</alert>"
    );
    // Step 2 – Compile the directive
    var linkFunction = $compile(element);
    // Step 3 – Call the link function with the scope
    linkFunction(scope);
    // Step 4 – Invoke the digest cycle
    scope.$digest();
  }));
  
  it("Should compile the alert directive", function () {
    var expectedElement = 
    '<span class="alert-topic ng-binding">' + 
      'Something went wrong!' +
    '</span>' + 
    '<span class="alert-description" ng-transclude="">' + 
      '<span class="ng-scope">' +
        'Please inform the plate and the color of the car' + 
      '</span>' + 
    '</span>'
    ;
    expect(element.html()).toBe(expectedElement);  
  });
});