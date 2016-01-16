'use strict';

/**
 * @ngdoc function
 * @name yeomanApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the yeomanApp
 */
angular.module('yeomanApp')
  .controller('AboutCtrl', function ($scope, $route, $rootScope) {
  	$rootScope.title = $route.current.title;
  	$rootScope.setTab(2);

    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
