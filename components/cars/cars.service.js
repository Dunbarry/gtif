
(function () {

  'use strict';

  angular
    .module('app')
    .service('carService', cars)

  function cars () {
    cars.user = {}
    cars.carTracker = 1
    cars.formHide = false
    cars.showForm = function () {
      cars.formHide = !cars.formHide
    }
    cars.cars = [
      {
        car_id:0,
        driver: 'Ryan Dunbar',
        img_url:'https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAjfAAAAJDY5MjRlMDhmLWFhMWItNDdlOS1iNTE1LTA4YWQ4Y2ZlYzZiNA.jpg',
        seats: 4,
        riders: []
      }
    ]
    cars.addCar = {
      car_id: cars.carTracker,
      driver: cars.user.nickname,
      img_url: cars.user.image,
      seats: '',
      riders: []
    }
    cars.newCar=function(seats){
      cars.cars.push(cars.addCar)
      cars.carTracker = cars.carTracker + 1
      cars.addCar= {
        car_id: cars.carTracker,
        driver: cars.user.nickname,
        img_url: cars.user.image,
        seats: '',
        riders: []
      }
    }
    return cars
    console.log(cars.cars)
  }
})()
