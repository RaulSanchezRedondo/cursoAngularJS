module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      'lib/angular/angular.js',
      'lib/angular/angular-mocks.js',
      'src/parkingApp.js',
      'src/parkingService.js',
      'src/parkingCtrl.js',
      'src/plateFilter.js',
      'src/uiApp.js',
      'src/alertDirective.js',
      'src/mockedCarsFactoryFunction.js',
      'src/parkingHttpFacade.js',
      'src/parkingCtrlWithHttpFacade.js',
      'spec/parkingServiceSpec.js',
      'spec/parkingCtrlSpec.js',
      'spec/plateFilterSpec.js',
      'spec/alertDirectiveSpec.js',
      'spec/parkingHttpFacadeSpec.js',
      'spec/parkingCtrlWithHttpFacadeSpec.js'
    ],
    exclude: [
    ],
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    captureTimeout: 60000,
    singleRun: false
  });
};