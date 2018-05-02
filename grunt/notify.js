module.exports = {

    options: {
        enabled: true,
        max_jshint_notifications: 5, // maximum number of notifications from jshint output
        title: 'Project Name', // defaults to the name in package.json, or will use project directory's name
        success: false, // whether successful grunt executions should be notified automatically
        duration: 3 // the duration of notification in seconds, for `notify-send only
    },


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
