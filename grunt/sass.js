module.exports = {

    // Enable the below if you are using grunt-sass
    /* options: {
     lineNumbers: true,
     includePaths:[
     require('node-bourbon').includePaths,
     '<%= site.node_dir %>/bootstrap/scss',
     ],
     sourceMap: true,
     outputStyle: 'expanded' //Values: nested, expanded, compact, compressed

     },
     */

    // Enable the below if you are using grunt-contrib-sass
    options: {
        loadPath: [
            require('node-bourbon').includePaths,
            '<%= site.node_dir %>/bootstrap/scss'
        ],
        sourcemap: 'auto',
        trace: true,
        precision: 6,
    },

    // `grunt sass:dev`
    dev: {
        options: {
            style: 'nested' // Values: nested, expanded, compact, compressed
        },

        main: {
            files: '<%= taskVarsConfig.sass_main_files %>'
        },

        bootstrap: {
            files: '<%= taskVarsConfig.sass_bootstrap_files %>'
        },

        pages: {
            files: [{
                expand: true,
                cwd: '<%= taskVarsConfig.sass_pages_src_dir %>',
                src: ['**/*.scss', '!**/_*.scss'],
                dest: '<%= taskVarsConfig.sass_pages_dest_dir %>',
                ext: '.css'
            }]
        },

        vendors_extensions: {
            files: [{
                expand: true,
                cwd: '<%= taskVarsConfig.sass_vendors_ext_src_dir %>',
                src: ['**/*.scss', '!**/_*.scss'],
                dest: '<%= taskVarsConfig.sass_vendors_ext_dest_dir %>',
                ext: '.css'
            }]
        }
    },

    // `grunt sass:prod`
    prod: {
        options: {
            style: 'compressed', // Values: nested, expanded, compact, compressed
            sourcemap: 'none'
        },

        main: {
            files: '<%= taskVarsConfig.sass_main_files %>'
        },

        bootstrap: {
            files: '<%= taskVarsConfig.sass_bootstrap_files %>'
        },

        pages: {
            files: [{
                expand: true,
                cwd: '<%= taskVarsConfig.sass_pages_src_dir %>',
                src: ['**/*.scss', '!**/_*.scss'],
                dest: '<%= taskVarsConfig.sass_pages_dest_dir %>',
                ext: '.css'
            }]
        },

        vendors_extensions: {
            files: [{
                expand: true,
                cwd: '<%= taskVarsConfig.sass_vendors_ext_src_dir %>',
                src: ['**/*.scss', '!**/_*.scss'],
                dest: '<%= taskVarsConfig.sass_vendors_ext_dest_dir %>',
                ext: '.css'
            }]
        }
    }

};
