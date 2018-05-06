'use strict';
module.exports = function (grunt) {

    return {
        options: {
            spawn: false,
            debounceDelay: 250,
            interrupt: true
        },

        sass: {
            files: ['<%= site.src_scss %>/**/*.scss'],
            tasks: ['concurrent:task_sass']
        },

        js: {
            files: ['<%= site.src_js %>/**/*.js'],
            tasks: ['concurrent:task_js']
        },

        images: {
            files: ['<%= site.src_img %>/**/*.{png,jpg,gif,ico,svg}'],
            tasks: ['concurrent:task_img']
        },

        fonts: {
            files: ['<%= site.src_fonts %>/**'],
            tasks: ['concurrent:task_fonts']
        },

        html: {
            files: ['<%= site.src_templates %>/{,*/}*.{md,hbs,yml,js}'],
            tasks: ['concurrent:task_html']
        }

    };

};
