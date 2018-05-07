'use strict';
module.exports = function (grunt) {
    return {
        allFiles: [
            grunt.getPath('scss', true) + '**/*.scss'
        ],

        options: {
            bundleExec: false,
            config: '.scss-lint.yml',
            reporterOutput: 'scss-lint-report.xml',
            colorizeOutput: true,
            compact: false
        }
    };

};
