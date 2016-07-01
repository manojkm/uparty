module.exports = {
    css: {
        options: {
            title: 'CSS task complete', // optional
            message: 'compass, copy, autoprefixer and cssmin finished running', //required
        }
    },
    js: {
        options: {
            title: 'JS task complete', // optional
            message: 'concat, bower concat, uglify , wiredep and copy:vendor finished running', //required
        }
    },
    img: {
        options: {
            title: 'IMAGE task complete', // optional
            message: 'imagemin finished running', //required
        }
    },

    banner: {
        options: {
            title: 'BANNER task complete', // optional
            message: 'usebanner finished running', //required
        }
    },

    html: {
        options: {
            title: 'HTML task complete', // optional
            message: 'assemble and prettify finished running', //required
        }
    },

    copy: {
        options: {
            title: 'COPY task complete', // optional
            message: 'copy finished running', //required
        }
    },


};
