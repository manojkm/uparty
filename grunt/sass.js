'use strict';
module.exports = function (grunt) {

    var optionsGruntContribSass = {
        loadPath: [
            require('node-bourbon').includePaths,
            '<%= site.node_dir %>/bootstrap/scss'
        ],
        sourcemap: (isProd) ? 'none' : 'auto',
        cacheLocation: '<%= site.tmp %>/.sass-cache',
        noCache: (isProd) ? true : false, // TODO, check this later, as im not sure.
        sourceComments: false,
        trace: true,
        precision: 6,
        style: (isProd) ? 'compressed' : 'expanded'
        // style: grunt.fabConfig.sassCompress ? 'compressed' : 'expanded' - TODO https://github.com/BuzzingPixelFabricator/buzzing-pixel-fabricator/blob/18f23f7b20d4312dad1d27e77df6551819029702/src/grunt/sassConfig.js
    };

    var optionsGruntSass = {
        includePaths: [
            require('node-bourbon').includePaths,
            '<%= site.node_dir %>/bootstrap/scss'
        ],
        banner: '<%= meta.banner %>',
        // outDir: grunt.importPaths,
        // outFile: 'nyco-patterns-default.css',
        // sourceMap: (isProd) ? false : true,
        sourceMapEmbed :  (isProd) ? false : true,
        cacheLocation: '<%= site.tmp %>/.sass-cache',
        sourceComments: false,
        outputStyle: (isProd) ? 'compressed' : 'compact' // 'expanded' causes newline error in csslint task.
    };

    return {
        options: optionsGruntSass,

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
