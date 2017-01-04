console.log('IN JS');

var myApp = angular.module('myApp', []);

myApp.controller('LaunchpadController',['$scope', function( $scope ){
  console.log('In NG');
  $scope.favoritePoems = [];
  $scope.getPoemName = function (){
    var poem = {
      poem: $scope.poemName,
      author: $scope.authorName
    };//end song object
    $scope.favoritePoems.push (poem);
    console.log('favorite song array',   $scope.favoritePoems);
    $scope.poemName = '';
    $scope.authorName = '';
  };//end get song name
}]);//end my app controller
