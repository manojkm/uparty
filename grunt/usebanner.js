module.exports = {

    css: {
        options: {
            position: 'top',
            banner: '<%= meta.banner %>',
            linebreak: true
        },

        files: {
            src: ['<%= site.dev_assets %>/css/**/<%=site.name %>.min.css']
        }

    },

    js: {
        options: {
            position: 'top',
            banner: '<%= meta.banner %>',
            linebreak: true
        },

        files: {
            src: ['<%= site.dev_assets %>/js/<%=site.name %>.min.js']
        }
    }
};
