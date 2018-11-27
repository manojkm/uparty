'use strict';
module.exports = function (grunt) {
    return {
        options: {
            noProcess: ['.DS_Store', '.gitignore', '.sass-cache', 'node_modules']
        },

        vendors: {
            files: [
                {expand: true, cwd: grunt.getPath('node') + 'metismenu', src: ['**'], dest: grunt.getPath('vendors', false, true) + 'metismenu'},
                {expand: true, cwd: grunt.getPath('node') + 'animate.css', src: ['**'], dest: grunt.getPath('vendors', false, true) + 'animate.css'},
                {expand: true, cwd: grunt.getPath('node') + 'bootstrap', src: ['**'], dest: grunt.getPath('vendors', false, true) + 'bootstrap'},
                {expand: true, cwd: grunt.getPath('node') + 'simple-line-icons', src: ['**'], dest: grunt.getPath('vendors', false, true) + 'simple-line-icons'},
                {expand: true, cwd: grunt.getPath('node') + 'jquery', src: ['**'], dest: grunt.getPath('vendors', false, true) + 'jquery'},
                {expand: true, cwd: grunt.getPath('node') + 'popper.js', src: ['**'], dest: grunt.getPath('vendors', false, true) + 'popper.js'},
                {expand: true, cwd: grunt.getPath('node') + 'chosen-js', src: ['**'], dest: grunt.getPath('vendors', false, true) + 'chosen-js'},
                {expand: true, cwd: grunt.getPath('node') + 'dropzone', src: ['**'], dest: grunt.getPath('vendors', false, true) + 'dropzone'},
                {expand: true, cwd: grunt.getPath('node') + 'multiselect', src: ['**'], dest: grunt.getPath('vendors', false, true) + 'multiselect'},
                {expand: true, cwd: grunt.getPath('node') + 'jquery.quicksearch', src: ['**'], dest: grunt.getPath('vendors', false, true) + 'jquery.quicksearch'},
                {expand: true, cwd: grunt.getPath('node') + 'bootstrap-datepicker', src: ['**'], dest: grunt.getPath('vendors', false, true) + 'bootstrap-datepicker'},
                {expand: true, cwd: grunt.getPath('node') + 'nouislider', src: ['**'], dest: grunt.getPath('vendors', false, true) + 'nouislider'},
                {expand: true, cwd: grunt.getPath('node') + 'raty-js', src: ['**'], dest: grunt.getPath('vendors', false, true) + 'raty-js'},
                {expand: true, cwd: grunt.getPath('node') + 'toastr', src: ['**'], dest: grunt.getPath('vendors', false, true) + 'toastr'},
                {expand: true, cwd: grunt.getPath('node') + 'jquery-mask-plugin', src: ['**'], dest: grunt.getPath('vendors', false, true) + 'jquery-mask-plugin'},
                {expand: true, cwd: grunt.getPath('node') + 'autosize', src: ['**'], dest: grunt.getPath('vendors', false, true) + 'autosize'},
                {expand: true, cwd: grunt.getPath('node') + 'jquery-validation', src: ['**'], dest: grunt.getPath('vendors', false, true) + 'jquery-validation'},
                {expand: true, cwd: grunt.getPath('node') + 'jquery-steps', src: ['**'], dest: grunt.getPath('vendors', false, true) + 'jquery-steps'},
                {expand: true, cwd: grunt.getPath('node') + 'jquery.repeater', src: ['**'], dest: grunt.getPath('vendors', false, true) + 'jquery.repeater'},
                {expand: true, cwd: grunt.getPath('node') + 'html5sortable', src: ['**'], dest: grunt.getPath('vendors', false, true) + 'html5sortable'},
                {expand: true, cwd: grunt.getPath('node') + 'bootstrap-maxlength', src: ['**'], dest: grunt.getPath('vendors', false, true) + 'bootstrap-maxlength'},
                {expand: true, cwd: grunt.getPath('node') + 'nestable2', src: ['**'], dest: grunt.getPath('vendors', false, true) + 'nestable2'},
                {expand: true, cwd: grunt.getPath('node') + 'tempusdominus-bootstrap-4', src: ['**'], dest: grunt.getPath('vendors', false, true) + 'tempusdominus-bootstrap-4'},
                {expand: true, cwd: grunt.getPath('node') + 'moment', src: ['**'], dest: grunt.getPath('vendors', false, true) + 'moment'},
                {expand: true, cwd: grunt.getPath('node') + 'bootstrap-wysiwyg', src: ['**'], dest: grunt.getPath('vendors', false, true) + 'bootstrap-wysiwyg'},
                {expand: true, cwd: grunt.getPath('node') + '@claviska/jquery-minicolors', src: ['**'], dest: grunt.getPath('vendors', false, true) + '@claviska/jquery-minicolors'},
                {expand: true, cwd: grunt.getPath('node') + 'typeahead.js', src: ['**'], dest: grunt.getPath('vendors', false, true) + 'typeahead.js'},
                {expand: true, cwd: grunt.getPath('node') + 'jquery-slimscroll', src: ['**'], dest: grunt.getPath('vendors', false, true) + 'jquery-slimscroll'},
                {expand: true, cwd: grunt.getPath('node') + 'js-cookie', src: ['**'], dest: grunt.getPath('vendors', false, true) + 'js-cookie'},
                {expand: true, cwd: grunt.getPath('node') + 'bootstrap-dropdown-hover', src: ['**'], dest: grunt.getPath('vendors', false, true) + 'bootstrap-dropdown-hover'}
                // TODO This guy is copying from nodemodule https://github.com/thomaspark/bootswatch/blob/master/Gruntfile.js
            ]
        },

        vendors_extended: {
            files: [
                {expand: true, cwd: grunt.getPath('js_vi', true), src: ['**/*.js'], dest: grunt.getPath('js_vi', false, true), filter: 'isFile'}
            ]
        },

        js: {
            files: [
                {expand: true, cwd: grunt.getPath('js', true), src: ['**/*.js', '!**/app.js', '!**/custom.js'], dest: grunt.getPath('js', false, true), filter: 'isFile'}
            ]
        },

        images: {
            files: [
                {expand: true, cwd: grunt.getPath('img', true), src: ['**'], dest: grunt.getPath('img', false, true), filter: 'isFile'}
            ]
        },

        fonts: {
            files: [
                {expand: true, cwd: grunt.getPath('fonts', true), src: ['**'], dest: grunt.getPath('fonts', false, true), filter: 'isFile'}
            ]
        }
    };

};
