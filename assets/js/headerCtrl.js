dpg.controller('headerCtrl', ['$scope', '$location', function($scope, $location){

  //go to avail properties
  $scope.avail = function(){
    $location.path('/available');
  };

  //go to pay rent
  $scope.payMe = function(){
    $location.path('/services');
  };

  //go to contact page
  $scope.contact = function(){
    $location.path('/contact');
  };

  //go to about page
  $scope.about = function(){
    $location.path('/about');
  };

}]);//end of ctrlr
