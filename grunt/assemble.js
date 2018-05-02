// The "assemble" task
module.exports = function (grunt) {

    return {
        // Task-level options
        options: {

            collections: [
                {
                    name: 'components',
                    sortby: 'posted',
                    sortorder: 'descending'
                },
                {
                    name: 'dashboard',
                    sortby: 'posted',
                    sortorder: 'descending'
                },
                {
                    name: 'icons',
                    sortby: 'posted',
                    sortorder: 'descending'
                },
                {
                    name: 'forms',
                    sortby: 'posted',
                    sortorder: 'descending'
                }],

            flatten: true,
            layoutext: '.hbs',

            // Metadata
            site: '<%= site %>',
            data: '<%= site.src_data %>',
            assets: '<%= site.dev_assets %>',
            activeTheme: 'theme-' + grunt.activeTheme,

            // Templates
            partials: '<%= site.src_partials %>',
            layoutdir: '<%= site.src_layoutdir %>',
            layout: '<%= site.src_layout %>',

            // Extensions
            helpers: '<%= site.src_helpers %>'
        },

        main: {
            options: {
                dist: false
            },
            files: [{
                expand: true,
                cwd: '<%= site.src_pages %>',
                src: ['**/*.hbs'],
                dest: '<%= site.dev %>'
            }]
        },


        // rtl: {
        //     options: {
        //         layout: 'default',
        //         rtl: true
        //     },
        //     files: [{
        //         expand: true,
        //         cwd: '<%= site.src_pages %>',
        //         src: ['**/*.hbs'],
        //         dest: '<%= site.dev %>/rtl'
        //     }]
        // }
    }

};
