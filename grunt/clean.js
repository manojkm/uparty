// Clean your /dist folder
'use strict';
module.exports = function (grunt) {

    return {   // dist: ['<%= site.dist %>'],
        // js: ['<%= site.dist_assets %>/js'],
        // css: ['<%= site.dist_assets %>/css'],
        // html: ['<%= site.dist %>/*.html'],
        // img: ['<%= site.dist_img %>'],

        dev: [grunt.getPath('dest') + '**/*', grunt.getPath('tmp') + '.sass-cache/**/*', '!'+ grunt.getPath('dest') + '.{git,gitignore,gitkeep}']
    };
};