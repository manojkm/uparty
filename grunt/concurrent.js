'use strict';
module.exports = function (grunt) {

    return {
        options: {
            logConcurrentOutput: true
        },

        watch: ['watch:sass', 'watch:js', 'watch:images', 'watch:fonts', 'watch:html'],

        task_sass: [
            ['task_css_dev', 'notify:css']
        ],

        task_js: [
            ['task_js_dev', 'notify:js']
        ],

        task_img: [
            ['newer:copy:images', 'newer:sprite', 'notify:img']
        ],

        task_fonts: [
            ['copy:fonts', 'notify:fonts']
        ],

        task_html: [
            ['task_html_dev', 'notify:html']
        ]

    };
};
