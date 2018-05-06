'use strict';
module.exports = function (grunt) {

    return {
        options: {

            collections: [
                {
                    name: 'components',
                    sortby: 'posted',
                    sortorder: 'descending'
                },
                {
                    name: 'dashboard',
                    sortby: 'posted',
                    sortorder: 'descending'
                },
                {
                    name: 'icons',
                    sortby: 'posted',
                    sortorder: 'descending'
                },
                {
                    name: 'forms',
                    sortby: 'posted',
                    sortorder: 'descending'
                }],

            flatten: true,
            layoutext: '.hbs',

            // Metadata
            site: '<%= site %>',
            data: grunt.getPath('data', true) + '**/*.{json,yml}',
            assets: grunt.getPath('assets', false, true),
            activeTheme: '<%= activeThemeDir %>',

            // Templates
            partials: grunt.getPath('partials', true) + '**/*.hbs',
            layoutdir: grunt.getPath('layouts', true),
            layout: 'master',

            // Extensions
            helpers: grunt.getPath('helpers', true) + '**/*.js'
        },

        main: {
            options: {
                // postprocess: require('injector'),
                production: (isProd) ? true : false // http://assemble.io/docs/Options.html
            },
            files: [{
                expand: true,
                cwd: grunt.getPath('pages', true),
                src: ['**/*.hbs'],
                dest: grunt.getPath('dest')
            }]
        },


        // rtl: {
        //     options: {
        //         layout: 'default',
        //         rtl: true
        //     },
        //     files: [{
        //         expand: true,
        //         cwd: '<%= site.src_pages %>',
        //         src: ['**/*.hbs'],
        //         dest: '<%= site.dev %>/rtl'
        //     }]
        // }
    };

};
