ui.directive("alert", function () {
  return {
    restrict: "E",
    scope: {
      topic: "@"
    },
    replace: true,
    transclude: true,
    template: 
      "<div class='alert'>" +
        "<span class='alert-topic'>" +
          "{{topic}}" +
        "</span>" +
        "<span class='alert-description' ng-transclude>" +
        "</span>" +
      "</div>"
  };
});