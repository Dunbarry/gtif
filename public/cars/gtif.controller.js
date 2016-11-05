angular.module('movieApp')
.controller('gtifController', function ($scope, $http, $location) {
  $scope.cars = [{
    id: 0,
    driver: 'Ryan Dunbar',
    seats: 4,
    riders: 0,
    imageUrl: 'https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAjfAAAAJDY5MjRlMDhmLWFhMWItNDdlOS1iNTE1LTA4YWQ4Y2ZlYzZiNA.jpg'
  }]
})
