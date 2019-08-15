const app = angular.module('MyApp', []);

app.controller('AuthController', ['$http', function($http){
    const controller = this;
    this.createUser = function(){
        $http({
            method:"POST",
            url:'/users',
            data: {
                username: this.username,
                password: this.password
            }
        }).then(function(response){
            console.log(response);
        },function(){
            console.log('error');
        })
    }
    this.logIn = function(){
        $http({
            method:'POST',
            url:'/sessions',
            data: {
                username: this.username,
                password: this.password
            }
        }).then(function(response){
            console.log(response);
        },function(error){
            console.log(error);
        })
    }
    this.goApp = function(){
        $http({
            method:'GET',
            url:'/app'
        }).then(function(response){
            controller.loggedInUsername = response.data.username;
        },function(){
            console.log('error');
        })
    }
}])
