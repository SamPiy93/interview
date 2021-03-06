angular.module('chatApp').
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider
        .when('/chats/:id',{
            templateUrl:'/assets/app/components/chat/chat.view.html',
            controller: 'ChatController'
        })
        .when('/profile/:id',{
            templateUrl:'/assets/app/components/profile/profile.view.html',
            controller: 'ProfileController'
        })
        .otherwise({redirectTo: '/'});
}]);
