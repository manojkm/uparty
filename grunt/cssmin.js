module.exports = function (grunt) {

    return {
        options: {
            mode: 'gzip',
            report: 'min',
            shorthandCompacting: false,
            roundingPrecision: -1,
            keepSpecialComments: 0,
            sourceMap:false,
            nonull: true //to warn if a given file is missing or invalid
        },

        minify: {
            files: grunt.cssMinTasks
        }

    }
};
