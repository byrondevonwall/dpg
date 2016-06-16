dpg.controller('availCtrl', ['$scope', '$location', function($scope, $location){

  var mapOptions = {
    zoom: 12,
    center: durham,
    mapTypeId: google.maps.mapTypeId.ROADMAP
  };

  var map = new google.maps.Map(document.getElementById('avail-map'), mapOptions);


  $scope.changeInterval = 5000;
  $scope.noWrapSlides = false;
  $scope.active = 0;

  $scope.addslide = function(){
    var newWidth = 600 + slides.length + 1;
    slides.push({
      image: '/path/to/img'
    })
  }


}]);//end of controller
