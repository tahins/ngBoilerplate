'use strict';

/**
 * @ngdoc function
 * @name yeomanApp.controller:ContactCtrl
 * @description
 * # ContactCtrl
 * Controller of the yeomanApp
 */
angular.module('yeomanApp')
  .controller('ContactCtrl', function ($scope, $route, $rootScope) {
  	$rootScope.title = $route.current.title;
  	$rootScope.setTab(3);

    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
