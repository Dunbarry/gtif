angular
.module('app')
.controller('cars', function ($scope, $location) {
  var cars = {}
  cars.cars = []
  // cars.addCar=function(info){
  //   cars.cars.push(info)
  // }
  cars.makeNewCar = false
  cars.showForm = function () {
    cars.makeNewCar = !cars.makeNewCar
  }
  return cars
})
