angular.module('gtifApp', ['ngRoute'])
.config(function ($routeProvider, $locationProvider) {
  $routeProvider
  .when('/', {
    templateUrl: '/gtif/cars.template.html',
    controller: 'cars'
  })
})
