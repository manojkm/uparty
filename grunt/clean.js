// Clean your destination folder
'use strict';
module.exports = function (grunt) {

    return {
        dest: [grunt.getPath('dest') + '**/*', grunt.getPath('tmp') + '.sass-cache/**/*', '!' + grunt.getPath('dest') + '.{git,gitignore,gitkeep}']
    };
};