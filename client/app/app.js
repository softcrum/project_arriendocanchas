'use strict';

angular.module('projectArriendocanchasApp', [
  'projectArriendocanchasApp.auth',
  'projectArriendocanchasApp.admin',
  'projectArriendocanchasApp.constants',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'btford.socket-io',
  'ui.router',
  'validation.match'
])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  });
