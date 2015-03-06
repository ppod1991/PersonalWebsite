'use strict';

// Declare app level module which depends on filters, and services
angular.module('personalApp.config',['ngRoute'])

app.config(['$routeProvider',
    function($routeProvider) {

        $routeProvider
            .when('/',{templateUrl:'../public/views/main.html'})
            .when('/matchflare',{templateUrl:'../public/views/matchflare.html'})
            .when('/diial',{templateUrl:'../public/views/diial.html'})
            .when('/taste',{templateUrl:'../public/views/taste.html'})
            .when('/snake',{templateUrl:'../public/views/snake.html'})
            .when('/septoplasty',{templateUrl:'../public/views/septoplasty.html'})
            .otherwise(       { redirectTo: '/' });
    }]);