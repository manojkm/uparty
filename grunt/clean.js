// Clean your /build folder
module.exports = {

    // build: ['<%= site.build %>'],
    // js: ['<%= site.build_assets %>/js'],
    // css: ['<%= site.build_assets %>/css'],
    // html: ['<%= site.build %>/*.html'],
    // img: ['<%= site.build_img %>'],

    dist: ['<%= site.build %>/**/*', '!<%= site.build %>/.{git,gitignore}'],

};
