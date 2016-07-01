module.exports = {

    options: {
        // Task-specific options go here.
        config: '.htmlprettifyrc'
    },
    html: {
        // Target-specific file lists and/or options go here.

        expand: true,
        cwd: '<%= site.dev %>',
        ext: '.html',
        src: ['*.html'],
        dest: '<%= site.dev %>/'


    }


};
