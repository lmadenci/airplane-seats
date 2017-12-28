var app = angular.module('lolaSeats', []);

// filter thru the seat data.
// will need to do this for
// - cabin
// - seat order (orderby), based on letter and number (create columns) with aisles in mind
// - vacancy


// Setup the filter by cabin type
app.filter("cabinFilter", [function()
{
  return function(seats, cabinName){
    var cabinSeats = [];
    /*if (cabin == 0) {
      cabinName='First';
    }*/
    console.log(cabinName);
    angular.forEach(seats, function(seat){
      console.log(seat);
      console.log(seats);
      console.log(seats[0]);

      if (seat.class == cabinName) {
        cabinSeats.push(seat)
      }


    });
    return cabinSeats;
  };
}]);


// create a seat directive with all info
app.directive("seatSpecs", function(){
return {
  restrict: 'A',
  templateUrl: 'seat-specs.html'
       };
});


app.controller('RootController', ['$scope', '$http', function($scope, $http)
{
  var self = this;

  // load data
  self.seatList = [];
  $http.get('data/seats.json')

  .success(function(data) {
    // add each seat in data to list
    for (seat in data) {
      self.seatList.push(data[seat]);
    }
  })
  .error(function(err) {
    console.error('Repos error', err);
  });


}]);







/*
// Task:
// Seats have a cabin class (first, business, coach),
// a row (1, 2 etc.), and a letter assignment. They can
// be occupied, available or selected (only 1 should be
// selectable at a time - in the wireframe, that's the
// green one). The aisle in a cabin class is determined
// by a missing letter in the seats (i.e. a, b, d, e - ‘c’
// is missing, that’s where the aisle is). Cabin classes
// should be programmatically generated to support any
// number of rows / columns.
*/


// 1. Organize data -- do we need to do this separately or just map?
// 2. visually indicate states of seats to data
// 3. all user to select

// map the seats --- need to go thru data to determine number of rows and columns

// show all seats (as boxes)
// // if occupied, display as unselectable (not included in list we are working with)
// // if available, display with 2 states: normal, and 0 or 1 seats selected


/*
{
    "class": "Economy", // First // Business
    "seat": "A", // - J
    "row": 39,
    "occupied": true,
    "premium": false,
    "overWing": false
},


 a b / d e
 a b / d e
 a b / d e
 a b / d e
 a b / d e
 a b / d e
 a b / d e
 a b / d e
 a b / d e
 a b / d e
 a b / d e
 a b / d e
 a b / d e
 a b / d e



*/
