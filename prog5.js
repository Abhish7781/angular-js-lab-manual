var app = angular.module('myApp', []);
app.controller('myController', function ($scope) {
 // Default student details
 $scope.students = [
 { name: 'Akshaya', cgpa: 8.8 },
 { name: 'Krishna Patel', cgpa: 7.2 },
 { name: 'Johnson', cgpa: 6.5 },
 { name: 'Safwan', cgpa: 7.5},
 { name: 'Zeenath', cgpa: 8.5}
 ];
 });
