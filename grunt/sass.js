module.exports = function (grunt) {

    return {
        options: {
            cacheLocation: '.tmp/.sass-cache',
            loadPath: [
                require('node-bourbon').includePaths,
                '<%= site.node_dir %>/bootstrap/scss'
            ],
            sourcemap: grunt.isProd ? 'false' : 'true',
            // sourcemap: 'auto',
            sourceComments: false,
            trace: true,
            precision: 6,
            style: grunt.isProd ? 'compressed' : 'expanded',
            // style: grunt.fabConfig.sassCompress ? 'compressed' : 'expanded' - TODO https://github.com/BuzzingPixelFabricator/buzzing-pixel-fabricator/blob/18f23f7b20d4312dad1d27e77df6551819029702/src/grunt/sassConfig.js
            // style: 'expanded',// Values: nested, expanded, compact, compressed
            //update: true // Only compile changed files.
        },

        testMain: {
            files:  grunt.sassMainFiles
        },

        testPages: {
            files: grunt.sassPagesTasks
        },

        testVendorsExtensions: {
            files: grunt.sassVendorsExtTasks
        },

      /*  main: {
            files: {
                '<%= taskVarsConfig.sass_files.main.dest %>': '<%= taskVarsConfig.sass_files.main.src %>'
            }
        },

        bootstrap: {
            files: {
                '<%= taskVarsConfig.sass_files.bootstrap.dest %>': '<%= taskVarsConfig.sass_files.bootstrap.src %>'
            }
        },

        pages: {
            files: [{
                expand: true,
                cwd: '<%= taskVarsConfig.sass_files.pages.src %>',
                src: ['**!/!*.scss', '!**!/_*.scss'],
                dest: '<%= taskVarsConfig.sass_files.pages.dest %>',
                ext: '.css'
            }]
        },

        vendors_extensions: {
            files: [{
                expand: true,
                cwd: '<%= taskVarsConfig.sass_files.vendors_extensions.src %>',
                src: ['**!/!*.scss', '!**!/_*.scss'],
                dest: '<%= taskVarsConfig.sass_files.vendors_extensions.dest %>',
                ext: '.css'
            }]
        }*/

    }

};
