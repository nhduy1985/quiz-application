'use strict';

angular.module('mean.dustin-quiz').factory('DustinQuiz', ['$resource',
	function($resource) {
		console.log('load resource');
		return $resource('quizzies/:quizId', {
			articleId: '@_id'
		}, {
			update: {
				method: 'PUT'
			}
		});
	}
]);