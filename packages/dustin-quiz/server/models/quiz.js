'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


/**
 * Quiz Schema
 */
var QuizSchema = new Schema({
    created: {
        type: Date,
        default: Date.now
    },
    name: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        trim: true
    },
    questions: [{
        type: Schema.ObjectId,
        ref: 'QuizQuestion'
    }]
});

/**
 * Validations
 */

/**
 * Statics
 */

mongoose.model('Quiz', QuizSchema);
