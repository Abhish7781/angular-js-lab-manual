angular.module('employeeApp', []).controller('employeeController', function($scope) {
    $scope.employees = [
        { name: 'diya', salary: 50000 },
        { name: 'swedel', salary: 60000 },
        { name: 'prerana', salary: 70000 },
        { name: 'bhatta', salary: 75000 },
        { name: 'MS Dhoni', salary: 8000000}
    ];
 
    $scope.filteredemployees = $scope.employees;
 
    $scope.searchemployees = function() {
        $scope.filteredemployees = $scope.employees.filter(function(employee) {
            return (
                (employee.name.toLowerCase().includes($scope.searchname.toLowerCase()) ||
                    !$scope.searchname) &&
                (employee.salary == $scope.searchsalary || !$scope.searchsalary)
            );
        });
    };
});
