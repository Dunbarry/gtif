
(function () {

  'use strict';

  angular
    .module('app')
    .controller('HomeController', HomeController)

  HomeController.$inject = ['authService', 'carService'];
  // HomeController.$inject = ['cars'];
  var cars = cars()

  function HomeController (authService) {
    var vm = this
    vm.authService = authService

    authService.getProfileDeferred().then(function (profile, cars) {
      vm.profile = profile;
      cars.user = profile
      console.log(vm.profile)
    });
  }
}());
