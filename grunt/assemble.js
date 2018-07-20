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
                    name: 'cards',
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

            package: '<%= package %>',
            data: grunt.getPath('data', true) + '**/*.{json,yml}',
            assets: grunt.getPath('assets', false, true),
            img: grunt.getPath('img'),
            script: grunt.getPath('js'),
            root: grunt.getPath('root'),
            vendors: grunt.getPath('vendors').replace('assets/', ''),
            activeTheme: '<%= activeThemeDir %>',
            dest: grunt.getPath('dest'),
            helpers: grunt.getPath('helpers', true) + '**/*.js',

            // Templates
            partials: grunt.getPath('partials', true) + '**/*.hbs',
            layoutdir: grunt.getPath('layouts', true),
            layout: 'master'
        },

        main: {
            options: {
                // postprocess: require('injector'),
                production: (isProd) ? true : false, // http://assemble.io/docs/Options.html
            },
            files: [{
                expand: true,
                cwd: grunt.getPath('pages', true),
                src: ['**/*.{hbs,md}'],
                dest: grunt.getPath('dest')
            }]
        }/*,

        rtl: {
            options: {
                layout: 'master',
                rtl: true
            },
            files: [{
                expand: true,
                cwd: grunt.getPath('pages', true),
                src: ['**!/!*.hbs'],
                 dest: grunt.getPath('dest') + 'rtl'
            }]
        }*/
    };

};
