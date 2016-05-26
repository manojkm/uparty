// The "assemble" task
module.exports = {
    // Task-level options
    options: {
        flatten: true,
        layoutext: '.hbs',
        assets: '<%= site.build_assets %>',

        // Metadata
        site: '<%= site %>',
        data: '<%= site.src_data %>',

        // Templates
        partials: '<%= site.src_partials %>',
        layoutdir: '<%= site.src_layoutdir %>',
        layout: '<%= site.src_layout %>',

        // Extensions
        helpers: '<%= site.src_helpers %>'
    },

    development: {
        options: {
            production: false
        },
        files: [{
            expand: true,
            cwd: '<%= site.src_pages %>',
            src: ['**/*.hbs'],
            dest: '<%= site.build %>'
        }]
    },

    production: {
        options: {
            production: true
        },
        files: [{
            expand: true,
            cwd: '<%= site.src_pages %>',
            src: ['**/*.hbs'],
            dest: '<%= site.build %>'
        }]
    },

    rtl: {
        options: {
            layout: 'default',
            rtl: true
        },
        files: [{
            expand: true,
            cwd: '<%= site.src_pages %>',
            src: ['**/*.hbs'],
            dest: '<%= site.build %>/rtl'
        }]
    }
};
