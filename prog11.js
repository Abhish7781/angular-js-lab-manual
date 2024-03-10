angular.module('myApp', [])
.controller('StudentController', function($scope) {
    $scope.students = [
      { name: "Ganesh", cgpa: 3.6 },
      { name: "Karthik", cgpa: 3.9 },
      { name: "Saathvik", cgpa: 4.5 },
      { name: "Likith", cgpa: 4.1 }
    ];
  });