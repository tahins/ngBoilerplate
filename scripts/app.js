'use strict';

/**
 * @ngdoc overview
 * @name yeomanApp
 * @description
 * # yeomanApp
 *
 * Main module of the application.
 */
var appModule = angular
  .module('yeomanApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'pascalprecht.translate'
  ])
  .controller('AppCtrl', ['$scope', '$rootScope', '$translate', '$cookies',
    function ($scope, $rootScope, $translate, $cookies) {
    $rootScope.title = 'Home';
    $rootScope.tab = 0;
    $rootScope.isEn = true;
    
    $rootScope.setTab = function (tabId) {
        $rootScope.tab = tabId;
    };

    $rootScope.isSet = function (tabId) {
        return $rootScope.tab === tabId;
    };

    $scope.switchLang = function (langKey) {
      if (langKey === "en") $rootScope.isEn = true; 
      else $rootScope.isEn = false;

      $cookies.langKey = langKey;
      $translate.use($cookies.langKey);
    };

    if ($cookies.langKey === "" || $cookies.langKey === undefined) $scope.switchLang('en');
    $scope.switchLang($cookies.langKey);
    
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }]);

  appModule.config(['$routeProvider', '$locationProvider', '$translateProvider',
    function($routeProvider, $locationProvider, $translateProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        title: 'Home | TohoBill'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        title: 'About | TohoBill'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl',
        title: 'Contact | TohoBill'
      })
      .otherwise({
        redirectTo: '/'
      });

      $translateProvider.useStaticFilesLoader({
        prefix: 'languages/',
        suffix: '.json'
      });

      // $translateProvider.preferredLanguage($cookies.langKey);
      // $translateProvider.useLocalStorage();

      if(window.history && window.history.pushState){
        $locationProvider.html5Mode(true);
      }
  }]);
