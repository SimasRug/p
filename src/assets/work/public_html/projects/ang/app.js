var app = angular.module('app', ['ngAnimate']);

app.service("getUsers", function($http) {
  return {
    data: function(){
      return $http.get("https://randomuser.me/api/?results=18");
    }
  }
});

app.controller('populateUsers', function($scope, getUsers) {
  getUsers.data().then(function(response) {
    $scope.userResults = response.data.results;
  });
});

app.directive('dirPerson',function(){
		return {
			templateUrl: 'person-dir.html'
		}
	});
