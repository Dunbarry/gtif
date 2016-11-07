
(function () {

  'use strict';

  angular
    .module('app')
    .controller('HomeController', HomeController)

  HomeController.$inject = ['authService', 'carService'];
  // HomeController.$inject = ['cars'];

  function HomeController (authService, carService) {
    var vm = this
    vm.authService = authService

    authService.getProfileDeferred().then(function (profile) {
      vm.profile = profile;
      carService.user = profile
      console.log('Here',carService.user)
    });
  }
}());
