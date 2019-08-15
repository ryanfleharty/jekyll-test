const app = angular.module('MyApp', []);

                        //spell this right   //this can be whatevs
app.controller('MyController', ['$http', function($http){
    const controller = this;
    this.createTodo = function(){
        // $.ajax({
        //     url:'/todos',
        //     data {
        //
        //     }
        // })
        $http({
            method:'POST',
            url: '/todos',
            data: {
                description: this.description,
                complete: this.complete
            }
        }).then(
            function(response){
                controller.getTodos();
            },
            function(err){}
        )
    }

    this.getTodos = function(){
        $http({
            method:'GET',
            url:'/todos'
        }).then(function(response){
            controller.todos = response.data;
        },function(){

        })
    }

    this.getTodos();
}]);
