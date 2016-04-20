var app = angular.module('myPortfolio',['ui.router', 'ngAnimate']);
app.config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('home', {
    templateUrl: '/routes/home/homeTmpl.html',
    // controller: 'homeCtrl',
    url: '/Home'
  })
  .state('aboutMe', {
    templateUrl: '/routes/aboutMe/aboutMeTmpl.html',
    // controller: 'aboutMeCtrl',
    url: '/aboutMe'
  })
  .state('Contact', {
    templateUrl: '/routes/Contact/ContactTmpl.html',
    // controller: 'ContactCtrl',
    url: '/Contact '
  })
  // .state('snakeGame', {
  //   templateUrl: '/routes/snakeGame/snakeTmpl.html',
  //   // controller: 'mainCtrl',
  //   url: '/snakeGame'
  // })

    $urlRouterProvider.otherwise('/Home');

});
// var animateApp = angular.module('animateApp', ['ngRoute', 'ngAnimate']);
// animateApp.controller('homeCtrl', function($scope) {
//     $scope.pageClass = 'homeTmpl';
// });
//
// // about page controller
// animateApp.controller('aboutMeCtrl', function($scope) {
//     $scope.pageClass = 'aboutMeTmpl';
// });
//
// // contact page controller
// animateApp.controller('ContactCtrl', function($scope) {
//     $scope.pageClass = 'ContactTmpl';
// });
