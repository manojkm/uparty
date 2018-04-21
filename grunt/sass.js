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
        // loadPath: require('node-bourbon').includePaths,
        loadPath:[
            require('node-bourbon').includePaths,
            '<%= site.node_dir %>/bootstrap/scss'
        ],

        precision: 6,
        sourcemap: 'auto',
        style: 'expanded',
        trace: true
    },

    main: {
        files: {
            '<%= site.dev_assets %>/css/<%=site.name %>.css': '<%= site.src_assets %>/scss/app.scss',
            '<%= site.dev_assets %>/css/bootstrap-extended/bootstrap.css': '<%= site.src_assets %>/scss/bootstrap-extended/index.scss'
        }
    },

    pages: {
        files: [{
            expand: true,
            cwd: '<%= site.src_assets %>/scss/pages/',
            src: ['**/*.scss', '!**/_*.scss'],
            dest: '<%= site.dev_assets %>/css/pages/',
            ext: '.css'
        }]
    },

    vendors: {
        files: [{
            expand: true,
            cwd: '<%= site.src_assets %>/scss/vendors-extensions/',
            src: ['**/*.scss', '!**/_*.scss'],
            dest: '<%= site.dev_assets %>/css/vendors/',
            ext: '.css'
        }]
    }

};
