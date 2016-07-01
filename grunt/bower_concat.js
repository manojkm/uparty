module.exports = {
    all: {
        dest: {
            'js': '<%= site.dev_assets %>/js/vendor.js',
            'css': '<%= site.dev_assets %>/css/vendor.css'
        },
        exclude: [
            'jquery',
            'bootstrap',
        ]
    }
};
