'use strict';
module.exports = function (grunt) {

    return {
        options: {
            spawn: false,
            debounceDelay: 250,
            interrupt: true
        },

        sass: {
            files: [grunt.getPath('scss', true) + '**/*.scss'],
            tasks: ['concurrent:task_sass']
        },

        js: {
            files: [grunt.getPath('js', true) + '**/*.js'],
            tasks: ['concurrent:task_js']
        },

        images: {
            files: [grunt.getPath('img', true) + '**/*.{png,jpg,gif,ico,svg}'],
            tasks: ['concurrent:task_img']
        },

        fonts: {
            files: [grunt.getPath('fonts', true) + '**'],
            tasks: ['concurrent:task_fonts']
        },

        html: {
            files: [grunt.getPath('templates', true) + '{,*/}*.{md,hbs,yml,js}'],
            tasks: ['concurrent:task_html']
        }

    };

};
