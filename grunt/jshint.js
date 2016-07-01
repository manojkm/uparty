module.exports = {
    options: {
        jshintrc: '.jshintrc',
        force: true, //report JSHint errors but not fail the task
    },

    js_target: {
        src: ['<%= site.dev_assets %>/js/<%=site.name %>.js']
    }
};
