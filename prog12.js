var app = angular.module('myApp', []);
 
app.controller('myController', function ($scope, $filter) {
  $scope.selectedFormat = 'fullDate'; 
 
  $scope.updateDate = function () {
    var currentDate = new Date(); 
    $scope.formattedDate = $filter('date')(currentDate, $scope.selectedFormat);
  };
 
  $scope.updateDate(); 
});