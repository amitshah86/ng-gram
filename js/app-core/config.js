let config = function($stateProvider, $urlRouterProvider) {
  
  // If no route matches, go to home route
  $urlRouterProvider.otherwise('/');

  // Set up some States
  $stateProvider
    // Main Root State
    // It is an abstract state because we want a nice way to 
    // manage our layout that will be on all child states
    .state('root', {
      abstract: true,
      templateUrl: 'templates/app-layout/layout.tpl.html'
    })
    // Home State
    .state('root.home', {
      url: '/',
      // Use Controller as Syntax
      controller: 'HomeController as vm',
      templateUrl: 'templates/app-layout/home.tpl.html'
    })
        // Add Athlete
    .state('root.addAthlete', {
      url: '/athletes/add',
      controller: 'ImagesAddController as vm',
      templateUrl: 'templates/app-images/images.add.tpl.html'
    });
};

config.$inject = ['$stateProvider', '$urlRouterProvider'];

export default config;