'use strict';

angular.module('mean.dustin-quiz').controller('DustinQuizController', ['$scope', 'Global', 'DustinQuiz',
    function($scope, Global, DustinQuiz) {
        $scope.global = Global;
        $scope.package = {
            name: 'dustin-quiz'
        };
        DustinQuiz.query(function(quizzies) {
            $scope.quizzies = quizzies;
        });
    }
]);
