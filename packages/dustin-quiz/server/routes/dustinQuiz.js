'use strict';

var quizzes = require('../controllers/quizzies');

module.exports = function(DustinQuiz, app, auth) {
    app.route('/quizzies').get(quizzes.all);
    //app.route('/quizzes/:quizId').get(quizzes.show);

    // Finish with setting up the articleId param
    //app.param('quizId', quizzes.quiz);
};
