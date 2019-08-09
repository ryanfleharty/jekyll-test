const app = angular.module('MyApp', []);

app.controller('MyController', ['$http', function($http){
    const controller = this;
    this.indexOfEditFormToShow = null;
    this.createTodo = function(){
        $http({
            method:'POST',
            url:'/todos',
            data: {
                description:this.description,
                complete:this.complete
            }
        }).then(function(response){
            controller.getTodos();
        })
    }
    this.toggleTodoComplete = function(todo){
        let newCompleteValue;
        if(todo.complete === true){
            newCompleteValue = false;
        } else {
            newCompleteValue = true;
        }

        $http({
            method:'PUT',
            url: '/todos/' + todo._id,
            data: {
                description: todo.description,
                complete: newCompleteValue
            }
        }).then(function(response){
            controller.getTodos();
        }, function(err){
            console.log(err);
        });
    }
    this.editTodo = function(todo){
        $http({
            method:'PUT',
            url:'/todos/' + todo._id,
            data: {
                description: this.updatedDescription,
                complete: todo.complete
            }
        }).then(function(response){
            controller.getTodos();
        },function(err){

        });
    }
    this.deleteTodo = function(todo){
        $http({
            method:'DELETE',
            url: '/todos/' + todo._id
        }).then(
            function(response){
                controller.getTodos();
            },
            function(){

            }
        );
    }
    this.getTodos = function(){
        $http({
            method:'GET',
            url:'/todos'
        }).then(function(response){
            controller.todos = response.data;
            // console.log(controller);
        })
    }
    this.getTodos();
}]);
