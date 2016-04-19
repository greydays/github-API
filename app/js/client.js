const angular = require('angular');

const app = angular.module('app' , []);
app.controller('apiController', ['$http', function($http) {
    const vm = this;

  vm.user = {};
  vm.repos = {};
  vm.starredRepos = {};

  vm.getUser = function() {
    $http.get('https://api.github.com/users/greydays')
      .success(function(response){
        vm.user = response;
    });
  };

  vm.getRepos = function() {
    $http.get('https://api.github.com/users/greydays/repos')
      .success(function(response){
        vm.repos = response;
    });
  };

  vm.getStarredRepos = function() {
    $http.get('https://api.github.com/users/greydays/starred')
    .success(function(response){
        vm.starredRepos = response;
    });
  };

}]);
