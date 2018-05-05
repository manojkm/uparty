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

    var argv = require('minimist')(process.argv.slice(2));
    global.isProd = (argv.isProd) ? true : false;

    if (isProd) {
        console.log('Build state is PRODUCTION');
    }
    if (!isProd) {
        console.log('Build state is DEVELOPMENT');
    }

    var dirs = {
        src: 'app/source/assets/scss',
        dest: 'app/development/assets'
    };

    // var build_state = 'prod';

    // Retrieve active theme name from scss file
    const sassExtract = require('sass-extract');
    const rendered = sassExtract.renderSync({
        file: dirs.src + '/themes/config/_config.scss'
    }, {plugins: ['serialize']});

    var activeTheme = rendered.vars.global.$activeTheme.value;
    var sassMainFiles = {};
    var sassPagesTasks = {};
    var sassVendorsExtTasks = {};
    var cssMinTasks = {};
    var importPaths = [];

    if (!grunt.file.exists('./' + dirs.src + '/themes/' + 'theme-' + activeTheme)) {
        grunt.fail.fatal('>> Theme ' + activeTheme + ' not found');
    }

    function prepareSassThemeFiles(theme) {
        var files = fs.readdirSync(dirs.src + '/themes/' + theme);
        files = files.filter(function (element, index, array) {
            if (path.extname(element) === '.scss') {
                return true;
            }
            else {
                return false;
            }
        });

        files = files.map(function (file) {
            return dirs.src + '/themes/' + theme + '/' + file;
        });

        sassMainFiles[dirs.dest + '/' + theme + '/' + pkg.name + '.css'] = files.join('');
    }

    function prepareSassMainFiles(theme) {
        sassMainFiles[dirs.dest + '/' + theme + '/' + pkg.name + '.css'] = dirs.src + '/' + 'app.scss';
    }

    var themes = fs.readdirSync('./' + dirs.src + '/themes/');
    themes.forEach(function (theme) {
        if (theme === 'config') {
            return;
        }

        if (theme === 'theme-' + activeTheme) {
            console.log('Active theme: ' + activeTheme);

            sassPagesTasks = [{
                expand: true,
                cwd: dirs.src + '/pages/',
                src: ['**/*.{sass,scss}', '!**/_*'], // take sass files & ignore partials
                dest: dirs.dest + '/' + theme + '/' + 'pages',
                ext: '.css',
                extDot: 'last'
            }];

            sassVendorsExtTasks = [{
                expand: true,
                cwd: dirs.src + '/vendors-extended/',
                src: ['**/*.{sass,scss}', '!**/_*'], // take sass files & ignore partials
                dest: dirs.dest + '/' + theme + '/' + 'vendors-extended',
                ext: '.css',
                extDot: 'last'
            }];

            // prepareSassThemeFiles(theme);
            prepareSassMainFiles(theme);

            cssMinTasks = [{
                expand: true,
                cwd: dirs.dest + '/' + theme + '/',
                src: ['**/*.css', '!**/*.min.css'],
                dest: dirs.dest + '/' + theme + '/',
                ext: '.min.css'
            }];

            importPaths.push(dirs.dest + '/' + theme + '/');
        }
    });

    console.log('Import Paths are: ' + importPaths);

    // Makes it available to exec tasks
    grunt.sassMainFiles = sassMainFiles;
    grunt.sassPagesTasks = sassPagesTasks;
    grunt.sassVendorsExtTasks = sassVendorsExtTasks;
    grunt.importPaths = importPaths;
    grunt.activeTheme = activeTheme;
    grunt.cssMinTasks = cssMinTasks;
    grunt.site = site;


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

            site: site,
            now: new Date().toISOString().replace(/(-|:|T)/g, "_"),
            activeThemeDir: 'theme-' + grunt.activeTheme,
            jsCombPath: grunt.file.readJSON('app/source/data/jscomb.json'),
            taskVarsConfig: grunt.file.readJSON('app/source/data/task-vars-config.json'),
            cssCombPath: grunt.file.readJSON('app/source/data/csscomb.json'),
            vI: grunt.file.readJSON('app/source/data/vendor-injector.json'),

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

};
