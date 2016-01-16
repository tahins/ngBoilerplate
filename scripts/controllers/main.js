'use strict';

/**
 * @ngdoc function
 * @name yeomanApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yeomanApp
 */
angular.module('yeomanApp')
  .controller('MainCtrl', function ($scope, $route, $rootScope) {
  	$rootScope.title = $route.current.title;
  	$rootScope.setTab(1);

    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
