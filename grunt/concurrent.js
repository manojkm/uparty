module.exports = {

    watch: ['watch:html', 'watch:sass_css', 'watch:js', 'watch:images'],
    // watch_dev: ['watch:assemble_dev', 'watch:css', 'watch:js', 'watch:images'],

    task_css: [
        ['sass:dev', 'newer:copy:css', 'newer:csslint', 'newer:autoprefixer', 'newer:cssmin', 'notify:css']
    ],

    task_js: [
        ['newer:copy:js', 'newer:concat', 'newer:jshint', 'newer:uglify', 'notify:js']
    ],

    task_html: [
        ['newer:assemble', 'newer:htmlhint', 'newer:prettify', 'notify:html']
    ],

    task_img: [
        ['newer:imagemin', 'newer:sprite', 'notify:img']
    ],

    options: { logConcurrentOutput: true }
};
