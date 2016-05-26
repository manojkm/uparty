module.exports = {
    css: ['sass', 'autoprefixer', 'cssmin', 'usebanner:css'],
    js: ['concat', 'uglify', 'usebanner:js'],
    img: ['imagemin'],
    html: ['assemble'],
    options: { logConcurrentOutput: true }
};
