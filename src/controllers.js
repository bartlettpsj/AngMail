'use strict';

// Create a module for our core AMail services
var app = angular.module('AMail', ['ngRoute'])
.config(['$routeProvider',
  function ($routeProvider) {
    $routeProvider
    .when('/', {
      controller: 'ListController',
      templateUrl: 'list.html'
    })
    .when('/view/:id', {
      controller: 'DetailController',
      templateUrl: 'detail.html'
    })
    .otherwise({
      redirectTo: '/'
    });
  }]
)
  // Set a module level value to share the messages, will be injected
.value('modmessages', [])

.controller('View1Ctrl', ['$scope', '$http',function($scope, $http) {
  $scope.paul = "Paul Stephen James Bartlett!!!";
}])

.controller('ListController', ['$scope', '$http', 'modmessages', function ($scope, $http, modmessages) {
  $scope.messages = messages;

  $http.jsonp('http://localhost:3000/products?callback=JSON_CALLBACK')
  .success(function(data, status, headers, config) {
      $scope.messages = data;
      modmessages.data = data;
  })
  .error(function(data, status, headers, config) {
    console.log('we got an error: ' + status);
  })
}])

// Get the message id from the route (parsed from the URL) and use it to // find the right message
// object.
.controller('DetailController', ['$scope', '$routeParams', 'modmessages', ($scope, $routeParams, modmessages) => {
  var id = $routeParams.id;
  var mymessages = modmessages.data;

  $scope.message  = mymessages.find(x => x.id == id);
}]);

// Some fake emails
var messages = [{
  id: 0, sender: 'jean@somecompany.com', subject: 'Hi there, old friend',
  date: 'Dec 7, 2013 12:32:00', recipients: ['greg@somecompany.com'],
  message: 'Hey, we should get together for lunch sometime and catch up.'
           + 'There are many things we should collaborate on this year.'
}, {
  id: 1, sender: 'maria@somecompany.com',
  subject: 'Where did you leave my laptop?',
  date: 'Dec 7, 2013 8:15:12', recipients: ['greg@somecompany.com'],
  message: 'I thought you were going to put it in my desk drawer.'
           + 'But it does not seem to be there.'
}, {
  id: 2, sender: 'bill@somecompany.com', subject: 'Lost python',
  date: 'Dec 6, 2013 20:35:02', recipients: ['greg@somecompany.com'],
  message: 'Nobody panic, but my pet python is missing from her cage.'
           + 'She doesnt move too fast, so just call me if you see her.'
}]; // removed a comma
