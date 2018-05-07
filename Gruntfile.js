/**
 * Project Name
 * ========================================================================
 * Gruntfile.js
 * @version   1.0 | June 23rd 2016
 * Copyright (c) 2016 @author Manoj KM, Contributors
 * ======================================================================== */

'use strict';

module.exports = function (grunt) {
    var fs = require('fs');
    var path = require('path');
    var pkg = require('./package.json');
    var site = grunt.file.readYAML('_config.yml');
    var getPath = require('./config/getPath');

    var argv = require('minimist')(process.argv.slice(2));
    global.isProd = (argv.isProd) ? true : false;

    if (isProd) {
        console.log('Build state is PRODUCTION');
    }
    if (!isProd) {
        console.log('Build state is DEVELOPMENT');
    }

    // Retrieve active theme name from SCSS file
    const sassExtract = require('sass-extract');
    const rendered = sassExtract.renderSync({
        file: getPath('sass_themes', true) + 'config/_config.scss'

    }, {plugins: ['serialize']});
    var activeTheme = rendered.vars.global.$activeTheme.value;

    var sassMainFiles = {};
    var sassPagesTasks = {};
    var sassVendorsExtTasks = {};
    var cssMinTasks = {};
    var importPaths = [];

    if (!grunt.file.exists('./' + getPath('sass_themes', true) + 'theme-' + activeTheme)) {
        grunt.fail.fatal('>> Theme ' + activeTheme + ' not found');
    }

    function prepareSassThemeFiles(theme) {
        var files = fs.readdirSync(getPath('sass_themes', true) + theme);
        files = files.filter(function (element, index, array) {
            if (path.extname(element) === '.scss') {
                return true;
            }
            else {
                return false;
            }
        });

        files = files.map(function (file) {
            return getPath('sass_themes', true) + theme + '/' + file;
        });

        sassMainFiles[getPath('assets', false, true) + theme + '/' + pkg.name + '.css'] = files.join('');
    }

    function prepareSassMainFiles(theme) {
        sassMainFiles[getPath('assets', false, true) + theme + '/' + pkg.name + '.css'] = getPath('sass', true) + 'app.scss';
    }

    var themes = fs.readdirSync('./' + getPath('sass_themes', true));
    themes.forEach(function (theme) {
        if (theme === 'config') {
            return;
        }

        if (theme === 'theme-' + activeTheme) {
            console.log('Active theme: ' + activeTheme);

            sassPagesTasks = [{
                expand: true,
                cwd: getPath('sass_pages', true),
                src: ['**/*.{sass,scss}', '!**/_*'], // take sass files & ignore partials
                dest: getPath('assets', false, true) + theme + '/' + 'pages',
                ext: '.css',
                extDot: 'last'
            }];

            sassVendorsExtTasks = [{
                expand: true,
                cwd: getPath('sass_vi', true),
                src: ['**/*.{sass,scss}', '!**/_*'], // take sass files & ignore partials
                dest: getPath('assets', false, true) + theme + '/' + 'vendors-extended',
                ext: '.css',
                extDot: 'last'
            }];

            // prepareSassThemeFiles(theme);
            prepareSassMainFiles(theme);

            cssMinTasks = [{
                expand: true,
                cwd: getPath('assets', false, true) + theme + '/',
                src: ['**/*.css', '!**/*.min.css'],
                dest: getPath('assets', false, true) + theme + '/',
                ext: '.min.css'
            }];

            importPaths.push(getPath('assets', false, true) + theme + '/');
        }
    });

    console.log('Import Paths are: ' + importPaths);


    // Makes it available to exec tasks
    grunt.getPath = getPath;
    grunt.sassMainFiles = sassMainFiles;
    grunt.sassPagesTasks = sassPagesTasks;
    grunt.sassVendorsExtTasks = sassVendorsExtTasks;
    grunt.importPaths = importPaths;
    grunt.activeTheme = activeTheme;
    grunt.cssMinTasks = cssMinTasks;
    grunt.site = site;

    // Display the elapsed execution time of grunt tasks
    require('time-grunt')(grunt);

    // Loads the tasks configs and loads them
    require('load-grunt-config')(grunt, {

        // Path to task.js files, defaults to grunt dir.
        configPath: path.join(process.cwd(), 'grunt'),

        // Use jit-grunt to speed up the build process
        jitGrunt: {
            // Static mappings of file names to grunt plugins
            staticMappings: {
                usebanner: 'grunt-banner',
                sprite: 'grunt-spritesmith',
                scsslint: 'grunt-scss-lint'
            }
        },

        // Automatically execute grunt.initConfig()
        init: true,

        // data passed into config.  Can use with <%= test %>
        data: {
            site: site,
            now: new Date().toISOString().replace(/(-|:|T)/g, '_'),
            activeThemeDir: 'theme-' + grunt.activeTheme,
            //taskVarsConfig: grunt.file.readJSON('app/source/data/task-vars-config.json'),
            vI: grunt.file.readJSON(grunt.getPath('data', true) + 'vendor-injector.json'),
            extendedCSS: grunt.getPath('assets', false, true) + 'theme-' + grunt.activeTheme + '/vendors-extended',
            extendedJS: grunt.getPath('js_vi', false, true),

            meta: {
                /**
                 * Project banner
                 * Dynamically appended to CSS/JS files
                 * Inherits text from package.json
                 */
                banner: '/*!\n' +
                '* <%=site.title %> - <%=site.name %> v<%= site.version %>\n' +
                '* Author : <%= site.author.name %> \n' +
                '* Copyright <%= grunt.template.today("yyyy-mm-dd") %>\n' +
                '* Licensed under <%= site.license.type %> (<%= site.license.url %>)\n' +
                '*/\n',
            },

        },

    });

    // Adapted from https://github.com/victoriauniversity/victoria-web-toolkit/blob/master/Gruntfile.js
    grunt.registerTask('default', 'My "default" task description.', function () {
        grunt.log.writeln('grunty: Here is what you can do!' + '\n');
        grunt.log.writeln('grunt dev - to build the project for development and open a browser instance with watch, etc.');
        // grunt.log.writeln('            Also runs the watch task and opens the browser, browsersync is active.');
        grunt.log.writeln('grunt prod --isProd -  to build the project for production. --isProd needs to be passed');
        grunt.log.writeln('grunt version - Shows version number');
    });

    //  Adapted from https://github.com/tlinqu/grunt-tutorial/blob/master/Gruntfile.js
    grunt.registerTask('version', 'Shows version number', function () {
        var pkg = grunt.file.readJSON('package.json');
        console.log(pkg.name, pkg.version);
    });
};
