'use strict';

angular.module('mean.dustin-quiz').config(['$stateProvider',
    function($stateProvider) {
        $stateProvider.state('dustinQuiz example page', {
            url: '/dustinQuiz/example',
            templateUrl: 'dustin-quiz/views/index.html'
        }).state('quizzies list', {
            url: '/quizzies',
            templateUrl: 'dustin-quiz/views/quizzies.html'
        });
    }
]);
