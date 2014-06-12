'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


/**
 * Quiz Question Schema
 */
var QuizQuestionSchema = new Schema({
    created: {
        type: Date,
        default: Date.now
    },
    name: {
        type: String,
        required: true,
        trim: true
    },
    content: {
        type: String,
        trim: true,
        required: true
    },
    choices: [{
        type: String,
        required: true
    }],
    answer: {
        type: String,
        trim: true,
        required: true
    }
});

/**
 * Validations
 */

/**
 * Statics
 */

mongoose.model('QuizQuestion', QuizQuestionSchema);
