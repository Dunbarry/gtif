(function () {

  'use strict';

  angular
    .module('app')
    .controller('HomeController', HomeController);

  HomeController.$inject = ['authService', cars];

  function HomeController (authService) {
    var vm = this
    vm.authService = authService

    authService.getProfileDeferred().then(function (profile) {
      vm.profile = profile;
      console.log(vm.profile)
    });
  }
}());
