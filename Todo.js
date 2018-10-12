var app = angular.module ('todo', []); 

 
 

app.directive('ngBlur', function (){ 

 
 

return function (scope, elem, attrs) { 

 
 

console.log(elem); 

console.log(attrs); 

 
 

elem.bind ('blur', function () { 

 
 

$scope.$apply(attrs.ngBlur); 

}) 

} 

}) 

 
 

app.controller('todocontroller', function ($scope, filterFilter) {  

$scope.statusFilter = {}; 

$scope.remaining =0; 

$scope.todos = [ 

{ 

name: 'incomplete',  

completed: false  

 
 

}, 

{ 

name: 'completed', 

completed: true 

 
 

} 

 
 

]; 

 
 

$scope.$watch ('todos', function() { 

 
 

$scope.remaining = filter.filterFilter($scope.todos, {completed:false}).length;  

/*Denna räknar antalt items (todos) som är skapade, räknar:  

equivelent with false;. räknar de som inte är klara*/ 

$scope.allChecked = !$scope.remaining; //ser till att alla blir markerade.  

}, true) 

 
 
 
 

$scope.removetodo = function (index) { 

 
 

$scope.todos.splice(index, 1); 

} 

$scope.addTodo = function() { 

 
 
 

$scope.todos.push({ 

 
 

name : $scope.newtodo, 

completed : false 

}); 

 
 

$scope.newtodo = ''; 

 
 

} 

 
 

$scope.editTodo = function(todo){ 

 
 

todo.editing = true; 

 
 

} 

 
 
 

//Den här checkar alla todos som finns och markerar dem com klara.  

 
 

$scope.checkAllTodo = function (allChecked) { 

$scope.todos.forEach(function(todo){ 

 
 

todo.completed = allChecked; 

}) 

} 

} 

); 

 
 

 