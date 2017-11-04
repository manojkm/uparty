module.exports = {
    css_target: {
        options: {
            csslintrc: '.csslintrc',
            import: 2
        },
        // src: ['<%= site.dev_assets %>/css/*.css']
        src: ['<%= site.dev_assets %>/css/<%=site.name %>.min.css']
    }
};
