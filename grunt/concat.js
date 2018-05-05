'use strict';
module.exports = function (grunt) {

    return {
        options: {
            banner: "'use strict';\n" + '<%= meta.banner %>',
            stripBanners: {
                block: true,
                line: true
            },
            separator: '\n/* --------------- */\n',
            process: function(src, filepath) { // Replace all 'use strict' statements in the code with a single one at the
                return '// Source: ' + filepath + '\n' +
                    src.replace(/(^|\n)[ \t]*('use strict'|"use strict");?\s*/g, '$1');
            },
            nonull: true //to warn if a given file is missing or invalid
        },

        main: {
            src: ['<%= site.src_js %>/app.js', '<%= site.src_js %>/custom.js'],
            dest: '<%= site.dev_js %>/<%=site.name %>.js'
        }
    };

};