'use strict';
module.exports = function (grunt) {

    return {
        options: {
            banner: '<%= meta.banner %>',
            stripBanners: true,
            separator: ';',
            nonull: true //to warn if a given file is missing or invalid
        },

        main: {
            src: ['<%= site.src_js %>/app.js', '<%= site.src_js %>/custom.js'],
            dest: '<%= site.dev_js %>/<%=site.name %>.js'
        }
    };

};