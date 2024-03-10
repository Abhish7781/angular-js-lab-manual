angular.module('userApp',[]).controller('userController',function($scope) {
    $scope.users = [
        { name: 'Abhishek', email: 'abhishekab7781@gmail.com'},
        { name: 'thushar', email: 'urshithaCherugoli@gmail.com'}
    ];
    $scope.newUser = {};
    $scope.createUser = function() {
        $scope.users.push($scope.newUser);
        $scope.newUser ={};
    };
    $scope.editUser = function(user) {
        $scope.editedUser = user;
    };
    $scope.updateUser = function() {
        $scope.editedUser = {};
    };
    $scope.deleteUser = function(user) {
        $scope.users.splice($scope.users.indexOf(user),1);
    };
});