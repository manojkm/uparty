// Clean your /dist folder
module.exports = {

    // dist: ['<%= site.dist %>'],
    // js: ['<%= site.dist_assets %>/js'],
    // css: ['<%= site.dist_assets %>/css'],
    // html: ['<%= site.dist %>/*.html'],
    // img: ['<%= site.dist_img %>'],

    dev: ['<%= site.dev %>/**/*', '!<%= site.dev %>/.{git,gitignore,gitkeep}'],
    // env: ['<%= site.env %>/**/*', '!<%= site.env %>/.{git,gitignore,gitkeep}'],

};
