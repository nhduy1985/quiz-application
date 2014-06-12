'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var DustinQuiz = new Module('dustin-quiz');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
DustinQuiz.register(function(app, auth, database) {

    //We enable routing. By default the Package Object is passed to the routes
    DustinQuiz.routes(app, auth, database);

    //We are adding a link to the main menu for all authenticated users
    /*DustinQuiz.menus.add({
        title: 'dustinQuiz example page',
        link: 'dustinQuiz example page',
        roles: ['authenticated'],
        menu: 'main'
    });
    */
    DustinQuiz.menus.add({
        title: 'Quizzies',
        link: 'quizzies list',
        menu: 'main'
    });

    /**
    //Uncomment to use. Requires meanio@0.3.7 or above
    // Save settings with callback
    // Use this for saving data from administration pages
    DustinQuiz.settings({
        'someSetting': 'some value'
    }, function(err, settings) {
        //you now have the settings object
    });

    // Another save settings example this time with no callback
    // This writes over the last settings.
    DustinQuiz.settings({
        'anotherSettings': 'some value'
    });

    // Get settings. Retrieves latest saved settigns
    DustinQuiz.settings(function(err, settings) {
        //you now have the settings object
    });
    */

    return DustinQuiz;
});
