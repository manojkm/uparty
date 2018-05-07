'use strict';
module.exports = function (grunt) {

    return {
        css: {
            options: {
                position: 'top',
                banner: '<%= meta.banner %>',
                linebreak: true
            },

            files: {
                // src: [grunt.importPaths + '/<%=site.name %>.min.css']
                src: [grunt.importPaths + '**/*.css']
            }
        }/*,
         js: {
         options: {
         position: 'top',
         banner: '<%= meta.banner %>',
         linebreak: true
         },

         files: {
         src: [grunt.getPath('js', false, true) + '<%= package.name %>.min.js']
         }
         }*/

    };

};
