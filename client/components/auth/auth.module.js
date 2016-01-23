'use strict';

angular.module('projectArriendocanchasApp.auth', [
  'projectArriendocanchasApp.constants',
  'projectArriendocanchasApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
