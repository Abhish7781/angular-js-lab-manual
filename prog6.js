var app = angular.module('myApp', []);
app.controller('myController', function ($scope) {
 
// Default tasks
 $scope.tasks = [
 { name: 'Attend Class'},
 { name: 'Complete Assignment'},
 { name: 'Study for CIE'}
 ];
 $scope.newTaskName = ' ';
 $scope.editingTask = null;
 $scope.editedTaskName = ' ';
 $scope.addTask = function () {
 if ($scope.newTaskName) {
 $scope.tasks.push({ name: $scope.newTaskName });
 $scope.newTaskName = ' ';
 }
 };
 $scope.editTask = function (task) {
 $scope.editingTask = task;
 $scope.editedTaskName = task.name;
 };
 $scope.saveTask = function () {
 if ($scope.editingTask) {
 $scope.editingTask.name = $scope.editedTaskName;
 $scope.cancelEdit();
 }
 };
 $scope.cancelEdit = function () {
 $scope.editingTask = null;
 $scope.editedTaskName = '';
};
$scope.deleteTask = function (task) {
var index = $scope.tasks.indexOf(task);
if (index !== -1) {
$scope.tasks.splice(index, 1);
}
};
});
