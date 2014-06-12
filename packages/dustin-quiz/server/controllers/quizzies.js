'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Quiz = mongoose.model('Quiz'),
    _ = require('lodash');


/**
 * Find Quiz by id
 */
exports.Quiz = function(req, res, next, id) {    
    Quiz.load(id, function(err, Quiz) {
        if (err) return next(err);
        if (!Quiz) return next(new Error('Failed to load Quiz ' + id));
        req.Quiz = Quiz;
        next();
    });
};

/**
 * Create an Quiz
 */
exports.create = function(req, res) {
    var Quiz = new Quiz(req.body);
    Quiz.user = req.user;

    Quiz.save(function(err) {
        if (err) {
	   return res.jsonp(500,{
		error: 'Cannot save the Quiz'
            });
        }
	res.jsonp(Quiz);

    });
};

/**
 * Update an Quiz
 */
exports.update = function(req, res) {
    var Quiz = req.Quiz;

    Quiz = _.extend(Quiz, req.body);

    Quiz.save(function(err) {
        if (err) {
	    return res.jsonp(500,{
		error: 'Cannot update the Quiz'
            });
	}
	res.jsonp(Quiz);

    });
};

/**
 * Delete an Quiz
 */
exports.destroy = function(req, res) {
    var Quiz = req.Quiz;

    Quiz.remove(function(err) {
        if (err) {
	    return res.jsonp(500,{
		error: 'Cannot delete the Quiz'
            });
	}
	res.jsonp(Quiz);

    });
};

/**
 * Show an Quiz
 */
exports.show = function(req, res) {
    res.jsonp(req.Quiz);
};

/**
 * List of Quizs
 */
exports.all = function(req, res) {
    Quiz.find().exec(function(err, Quizs) {
        if (err) {
	    return res.jsonp(500,{
		error: 'Cannot list the Quizs'
            });
	}
	res.jsonp(Quizs);

    });
};
