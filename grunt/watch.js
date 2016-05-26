module.exports = {

    assemble: {
        files: ['<%= site.src %>/templates/{,*/}*.{md,hbs,yml}'],
        tasks: ['assemble']
    },

    css: {
        files: ['<%= site.src_assets %>/scss/*.scss', '<%= site.src_assets %>/css/**/*.css'],
        tasks: ['sass', 'autoprefixer', 'cssmin', 'usebanner:css'],
        options: {
            spawn: false,
        }
    },

    scripts: {
        files: ['<%= site.src_assets %>/js/*.js'],
        tasks: ['concat', 'uglify', 'usebanner:js'],
        options: {
            spawn: false,
        }
    },

    images: {
        files: ['<%= site.src_assets %>/img/**/*.{png,jpg,gif}'],
        tasks: ['imagemin'],
        options: {
            spawn: false,
        }
    },



};
