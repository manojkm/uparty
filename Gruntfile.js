/**
 * Project Name
 * ========================================================================
 * Gruntfile.js
 * @version   1.0 | June 23rd 2016
 * Copyright (c) 2016 @author Manoj KM, Contributors
 * ======================================================================== */

'use strict';

module.exports = function(grunt) {
    var fs = require('fs');
    var path = require('path');


    //options
    var concatOpts = {};
    var minifyOpts = {};
    var jadeFiles = {};
    var stylusFiles = {};
    var importPaths = [];
    var sassFiles = {};

    var dirs = {
        src: 'app/source/assets/scss/themes',
        dest: 'app/development/assets'
    };

    function prepareSassFiles(page) {
        var files = fs.readdirSync(dirs.src + '/' + page);
        files = files.filter(function(element, index, array) {
            if (path.extname(element) == '.scss') return true;
            return false;
        });

        files = files.map(function(file) {
            return dirs.src + '/' + page + '/' + file;
        });

        sassFiles[dirs.dest + '/styles/' + page + '.css' ] = files.join('');
    }

    var pages = fs.readdirSync('./app/source/assets/scss/themes/');
    pages.forEach(function(page) {
        if (page == 'layout') return;

        // concatOpts[page] = {
        //     src: ['<%= dirs.src %>' + page + '/*.js'],
        //     dest: '<%= dirs.dest %>/javascript/' + page + '.js'
        // };
        //
        // minifyOpts[page] = {
        //     src: ['<%= dirs.dest %>/javascript/' + page + '.js'],
        //     dest: '<%= dirs.dest %>/javascript/' + page + '.min.js'
        // };

        // jadeFiles['<%= dirs.dest %>/' + page + '.html'] = ['<%= dirs.src %>/' + page + '/*.jade'];
        // stylusFiles['<%= dirs.dest %>/styles/' + page + '.css' ] = '<%= dirs.src %>/' + page + '/*.styl';
        // sassFiles['<%= dirs.dest %>/css/' + page + '.css' ] = '<%= dirs.src %>/' + page + '/*.scss';

        prepareSassFiles(page);

        // importPaths.push(dirs.src + '/' + page);
    });

    //Makes it available to exec tasks
    grunt.sassFiles = sassFiles;

    require('time-grunt')(grunt); //Display the elapsed execution time of grunt tasks
    //require('load-grunt-tasks')(grunt); // Load multiple grunt tasks listed in your package.json
    require('load-grunt-config')(grunt, {

        jitGrunt: {
            // here you can pass options to jit-grunt (or just jitGrunt: true)
            staticMappings: {
                // here you can specify static mappings, for example:
                usebanner: 'grunt-banner',
                sprite: 'grunt-spritesmith',
                scsslint: 'grunt-scss-lint'
            }
        },

        // path to task.js files, defaults to grunt dir.
        configPath: path.join(process.cwd(), 'grunt'),
        // ...
        data: { //data passed into config.  Can use with <%= test %>

            site: grunt.file.readYAML('_config.yml'),
            jsCombPath: grunt.file.readJSON('app/source/data/jscomb.json'),
            taskVarsConfig: grunt.file.readJSON('app/source/data/task-vars-config.json'),
            cssCombPath: grunt.file.readJSON('app/source/data/csscomb.json'),
            vendorInjector: grunt.file.readJSON('app/source/data/vendor-injector.json'),

            meta: {
                /**
                 * Project banner
                 * Dynamically appended to CSS/JS files
                 * Inherits text from package.json
                 */
                banner: '/**\n' +
                    '* <%=site.title %> - <%=site.name %> v<%= site.version %>\n' +
                    '* Author : <%= site.author.name %> \n' +
                    '* Copyright <%= grunt.template.today("yyyy-mm-dd") %>\n' +
                    '* Licensed under <%= site.license.type %> (<%= site.license.url %>)\n' +
                    '*/\n',
            },

        },

    });

};
