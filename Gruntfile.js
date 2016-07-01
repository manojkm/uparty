/**
 * Project Name
 * ========================================================================
 * Gruntfile.js
 * @version   1.0 | June 23rd 2016
 * Copyright (c) 2016 @author Manoj KM, Contributors
 * ======================================================================== */

'use strict';

module.exports = function(grunt) {

    var path = require('path');

    require('time-grunt')(grunt); //Display the elapsed execution time of grunt tasks
    //require('load-grunt-tasks')(grunt); // Load multiple grunt tasks listed in your package.json
    require('load-grunt-config')(grunt, {

        jitGrunt: {
            // here you can pass options to jit-grunt (or just jitGrunt: true)
            staticMappings: {
                // here you can specify static mappings, for example:
                usebanner: 'grunt-banner',
                sprite: 'grunt-spritesmith'
            }
        },


        configPath: path.join(process.cwd(), 'grunt'),
        // ...
        data: { //data passed into config.  Can use with <%= test %>

            site: grunt.file.readYAML('_config.yml'),
            jsCombPath: grunt.file.readJSON('app/source/jscomb.json'),
            cssCombPath: grunt.file.readJSON('app/source/csscomb.json'),

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
