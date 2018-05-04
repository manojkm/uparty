'use strict';
module.exports = function (grunt) {

    return {
        options: {

            includePaths: [
                require('node-bourbon').includePaths,
                '<%= site.node_dir %>/bootstrap/scss'
            ],
            sourceMap: (isProd) ? false : true,
            cacheLocation: '<%= site.tmp %>/.sass-cache',
            sourceComments: false,
            outputStyle: (isProd) ? 'compressed' : 'compact' // 'expanded' causes newline error in csslint task.
            // style: grunt.fabConfig.sassCompress ? 'compressed' : 'expanded' - TODO https://github.com/BuzzingPixelFabricator/buzzing-pixel-fabricator/blob/18f23f7b20d4312dad1d27e77df6551819029702/src/grunt/sassConfig.js
        },

        main: {
            files: grunt.sassMainFiles
        },

        pages: {
            files: grunt.sassPagesTasks
        },

        vendors_extended: {
            files: grunt.sassVendorsExtTasks
        },

        /*
         bootstrap: {
         files: {
         '<%= taskVarsConfig.sass_files.bootstrap.dest %>': '<%= taskVarsConfig.sass_files.bootstrap.src %>'
         }
         },
         */

    };

};
