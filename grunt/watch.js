module.exports = {
    options: {
        spawn: false,
        debounceDelay: 250,
    },

    sass_css: {
        files: ['<%= site.src_assets %>/scss/**/*.scss', '<%= site.src_assets %>/css/**/*.css'],
        tasks: ['concurrent:task_css'],
    },

    js: {
        files: ['<%= site.src_assets %>/js/*.js'],
        tasks: ['concurrent:task_js'],
    },

    html: {
        files: ['<%= site.src %>/templates/{,*/}*.{md,hbs,yml}'],
        tasks: ['concurrent:task_html']
    },


    images: {
        files: ['<%= site.src_assets %>/img/**/*.{png,jpg,gif}'],
        tasks: ['concurrent:task_img'],
    },

    wp_theme_php_flies: {
        files: ['<%= site.dev %>/**/*.php'],
        tasks: ['concurrent:task_wp_theme_php_flies']
    },


};
