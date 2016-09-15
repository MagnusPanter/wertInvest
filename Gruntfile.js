module.exports = function (grunt) {
    'use strict';

    // load all grunt tasks matching the ['grunt-*', '@*/grunt-*'] patterns
    require('load-grunt-tasks')(grunt);

    // initialize with constant and put all configs in it
    grunt.initConfig(require('./config/constants'));

    var taskConfig = {
        clean: require('./config/clean'),
        express: require('./config/express')
        //sass: require('./config/sass'),
        //uglify: require('./config/uglify')
    };
    grunt.config.merge(taskConfig);

    grunt.registerTask('default', function() {
        grunt.log.write('Starting development environment!\n');
        grunt.task.run([
            'clean:build',
            //'jshint:src',
            'express:server'
        ]);
    });
};