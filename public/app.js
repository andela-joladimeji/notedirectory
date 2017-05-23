var app = angular.module('notedirectory', ['ui.router'])

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'views/home.html',
      controller: 'noteCtrl'
    })
    .state('createnote', {
      url: '/create-note',
      templateUrl: 'views/create-note.html',
      controller: 'noteCtrl'
    })
    .state('viewByLabel', {
      url: '/view-by-label',
      templateUrl: 'views/view-by-label.html',
      controller: 'noteCtrl'
    })
  $urlRouterProvider.otherwise('/');

}]);

