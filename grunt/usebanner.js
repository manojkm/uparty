module.exports = {

    css: {
        options: {
            position: 'top',
            banner: '<%= meta.banner %>',
            linebreak: true
        },

        files: {
            src: ['<%= site.build_assets %>/css/<%=site.name %>.min.css']
        }

    },

    js: {
        options: {
            position: 'top',
            banner: '<%= meta.banner %>',
            linebreak: true
        },

        files: {
            src: ['<%= site.build_assets %>/js/<%=site.name %>.min.js']
        }
    }
};
