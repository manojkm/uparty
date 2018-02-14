module.exports = {

    options: {
        min: true,
        prefix:'<%= site.vendor_dir %>/',
        // relative: true,
        addRootSlash: false,
        ignorePath: '<%= site.node_dir %>/'
    },

    vendor_dependencies: {
        files: {
            '<%= site.src_partialsdir %>/head.hbs': ['<%= vendorInjector.css %>','bower.json'],
            '<%= site.src_partialsdir %>/footer-scripts.hbs': ['<%= vendorInjector.js %>','bower.json']
        }
    }

};
