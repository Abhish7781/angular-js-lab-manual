var app = angular.module('myapp',[]);
app.controller('logincontroller', function($scope){
    $scope.user={username:'',password:''};

    $scope.isloggedin=false;
    $scope.login=function(){
        $scope.isloggedin=true;
    };
});