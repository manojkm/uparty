/*!
 * Cribbb Gruntfile
 * http://cribbb.com
 * @author Philip Brown

 */

'use strict';

module.exports = function(grunt) {

    var path = require('path');

    require('time-grunt')(grunt); //Display the elapsed execution time of grunt tasks
    //require('load-grunt-tasks')(grunt); // Load multiple grunt tasks listed in your package.json
    require('load-grunt-config')(grunt, {

            configPath: path.join(process.cwd(), 'grunt'),

            // ...
            data: {

                // Project metadata
                site: grunt.file.readYAML('_config.yml'),

                meta: {
                    banner: '/**\n' +
                        '* My Awesome Project - <%=site.name %> v<%= site.version %>\n' +
                        '* Author : <%= site.author.name %> \n' +
                        '* Copyright <%= grunt.template.today("yyyy-mm-dd") %>\n' +
                        '* Licensed under <%= site.license.type %> (<%= site.license.url %>)\n' +
                        '*/\n',
                },


            },
            // ...
        }


    );

    //grunt.registerTask('default', ['browserSync','sass','autoprefixer','jade', 'uglify','watch']);
    //grunt.registerTask('start', ['browserSync', 'watch',]);

};
