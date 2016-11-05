angular.module('gtifApp', ['ngRoute'])
.config(function ($routeProvider, $locationProvider) {
  $routeProvider
  .when('/', {
    templateUrl: '/cars/gtif.template.html',
    controller: 'gtif'
  })
})
