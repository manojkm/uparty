module.exports = {

    // Enble the below if you are using grunt-sass
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

    // Enble the below if you are using grunt-contrib-sass
    options: {
        // loadPath: require('node-bourbon').includePaths,
        loadPath:[
            require('node-bourbon').includePaths,
            '<%= site.node_dir %>/bootstrap/scss'
        ],

        style: 'expanded'
    },

    dev: {
        files: {
            '<%= site.dev_assets %>/css/style.css': '<%= site.src_assets %>/scss/style.scss'
        }
    },

    dev2: {
        files: [{
            expand: true,
            src: ['<%= site.src_assets %>/scss/vendors-extensions/*.scss'],
            dest: '<%= site.dev_assets %>/css/vendors/',
            ext: '.css'
        }]
    }

};
