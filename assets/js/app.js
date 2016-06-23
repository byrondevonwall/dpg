var dpg = angular.module('dpg', ['ui.bootstrap', 'ngRoute', 'ngAnimate', 'ngTouch']);

dpg.config(function($routeProvider){
  $routeProvider
    .when('/landing', {
      templateUrl : './views/landing.html',
      controller : ''
    })
    .when('/available', {
      templateUrl : './views/available.html',
      controller : 'availCtrl'
    })
    .when('/services', {
      templateUrl : './views/payrent.html',
      controller : 'servicesCtrl'
    })
    .when('/contact', {
      templateUrl : './views/contact.html',
      controller : 'contactCtrl'
    })
    .when('/about', {
      templateUrl : './views/about.html',
      controller : 'aboutCtrl'
    })
    .otherwise('/landing', {
      templateUrl : './views/landing.html',
      controller : ''
    });
});//end routing config
