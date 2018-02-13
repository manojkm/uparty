module.exports = {

    options: {
        min: true,
        // prefix:'../',
        // relative: true,
        addRootSlash: false,
        // ignorePath: 'node_modules/'
    },

    vendors_dependencies: {
        files: {
            '<%= site.src_partialsdir %>/head.hbs': ['<%= vendorInjector.css %>','bower.json'],
            '<%= site.src_partialsdir %>/footer-scripts.hbs': ['<%= vendorInjector.js %>','bower.json']
        }
    }

};
