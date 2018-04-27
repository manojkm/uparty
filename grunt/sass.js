module.exports = function (grunt) {


    return {
        options: {
            loadPath: [
                require('node-bourbon').includePaths,
                '<%= site.node_dir %>/bootstrap/scss'
            ],
            sourcemap: 'auto',
            trace: true,
            precision: 6,
            style: 'nested',// Values: nested, expanded, compact, compressed
            update: true // Only compile changed files.
        },




        test: {
            files:  grunt.sassFiles
        },



        main: {
            files: {
                '<%= taskVarsConfig.sass_files.main.dest %>': '<%= taskVarsConfig.sass_files.main.src %>'
            }
        },

        bootstrap: {
            files: {
                '<%= taskVarsConfig.sass_files.bootstrap.dest %>': '<%= taskVarsConfig.sass_files.bootstrap.src %>'
            }
        },

        pages: {
            files: [{
                expand: true,
                cwd: '<%= taskVarsConfig.sass_files.pages.src %>',
                src: ['**/*.scss', '!**/_*.scss'],
                dest: '<%= taskVarsConfig.sass_files.pages.dest %>',
                ext: '.css'
            }]
        },

        vendors_extensions: {
            files: [{
                expand: true,
                cwd: '<%= taskVarsConfig.sass_files.vendors_extensions.src %>',
                src: ['**/*.scss', '!**/_*.scss'],
                dest: '<%= taskVarsConfig.sass_files.vendors_extensions.dest %>',
                ext: '.css'
            }]
        }

    }

};
