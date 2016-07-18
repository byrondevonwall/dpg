dpg.controller('availCtrl', ['$scope', '$location', '$http',  function($scope, $location, $http){

  //------------map code is here----------------//

  //set center of gmap
  var durham = new google.maps.LatLng(35.9940, -78.8986);

  //set map options
  var mapOptions = {
    zoom: 13,
    center: durham,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };

  //initialize the map!
  var map = new google.maps.Map(document.getElementById('avail-map'), mapOptions);

  //declare marker location vars!
  var dowdLoc = new google.maps.LatLng(36.000636, -78.886947);
  var juniperLoc = new google.maps.LatLng(35.99862,	-78.88616);

  //add markers!
  var dowdMarker = new google.maps.Marker({
    position: dowdLoc
  });

  var juniperMarker = new google.maps.Marker({
    position: juniperLoc
  })

  //render markers!!!
  dowdMarker.setMap(map);
  juniperMarker.setMap(map)

  //function to attach infowindow to markers!!
  function attachMessage(marker, message, filter){
    var infowindow = new google.maps.InfoWindow({
      content: message
    });

    marker.addListener('mouseover', function(){
      infowindow.open(marker.get('map'), marker);
      $scope.changeFilter(filter)
      console.log(filter)
    });

    marker.addListener('mouseout', function(){
      infowindow.close(marker.get('map'), marker)
    })
  }

  $scope.filters = {name:'709 Dowd'}


  $scope.changeFilter = function(fil){
    $scope.filters = {};
    $scope.filters.name = fil;
    $scope.$apply()
  }

  //attach property info to infowindows!!!
  var dowdMessage = '<div class="infowindowheader">709 Dowd St., Durham, NC 27701</div>';
  var dowdFilter = '709 Dowd';

  var juniperMessage = '<div class="infowindowheader">804 Juniper St., Durham, NC 27701</div>';
  var juniperFilter = '804 Juniper';
  //attach infowindows!!
  attachMessage(dowdMarker, dowdMessage, dowdFilter);
  attachMessage(juniperMarker, juniperMessage, juniperFilter);


//-------------------carousel/listing code is here-------------------//
// each carousel needs its own currindex
$scope.myInterval = 7000;
$scope.noWrapSlides = false;
$scope.active = 0;
var currIndex = 0;
var currIndex1 = 0
// var slides = $scope.slides;

//array with object for each property listing
$scope.props = [
  {id: 1, name: '709 Dowd St.', addr: 'Durham, NC 27701', desc:
  'Five Bedrooms, 2 Baths, Great Location', price: '$1550/mo', slides:[{id: currIndex++, img:'./assets/img/media/image30.png', text:'Exterior'}, {id: currIndex++, img:'./assets/img/media/image29.png', text:'Kitchen'}, {id: currIndex++, img:'./assets/img/media/image32.png', text: 'Living Area'}]},

  {id: 2, name: '804 Juniper St.', addr: 'Durham, NC 27701', desc: '2 bedrooms, one bath, great location', price:'$850/mo', slides:[{id: currIndex1++, img: './assets/img/media/image8.png', text: 'Exterior'},{id: currIndex1++, img:'./assets/img/media/image12.png', text: 'Not the real interior, obvs'}]}
  ];

  // $scope.slides = prop.slides;

//------------------mailer code is here-------------------------------//

//modal variables
mailerShow = false;


$scope.sendEmail = function(name){
  var user, email, to, subject, msg, from;
  from = 'rentalinquiry@durhampropertygroup.com'
  user = $('#avail-contact-name').val();
  email = $('#avail-contact-email').val();
  to = 'info@durhampropertygroup.com';
  subject = 'Inquiry re: '+ name + ' from ' + $('#avail-contact-name').val() + ' ( ' + $('#avail-contact-email').val() + ' )';
  msg = $('#avail-contact-message').val();


  // console.log(user, email, to, subject, msg)

  if(user && email && name && msg !=''){
    $.get("http://localhost:3002/send", {from: from, user:  user, email: email, to : to, subject : subject, msg : msg}, function(data){
    if(data=='sent'){
      console.log('message sent');
      $('#avail-contact-name').val('');
      $('#avail-contact-email').val('');
      $('#avail-contact-message').val('');
      $('.message-sent').show();
    }
    });
  }
  else{
    $('.message-error').show();
  }

};

$scope.closeConfirmation = function(){
  $('.message-sent').hide();
};

$scope.closeMsgError = function(){
  $('.message-error').hide();
}

}]);//end of controller
