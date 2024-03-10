var app = angular.module('myApp', []);
 
app.controller('ItemController', function ($scope) {
    // Default items
    $scope.items = [
        { name: 'Apple' },
        { name: 'Banana' },
        { name: 'Orange' }
    ];
 
    $scope.newItemName = "";
 
    $scope.addItem = function () {
        if ($scope.newItemName) {
            $scope.items.push({ name: $scope.newItemName });
            $scope.newItemName = "";
        }
    };
 
    $scope.removeItem = function (item) {
        var index = $scope.items.indexOf(item);
        if (index !== -1) {
            $scope.items.splice(index, 1);
        }
    };
});