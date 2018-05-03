'use strict';
module.exports = function (grunt) {

    var node_dir = grunt.site.node_dir;
    var vendor_dir = grunt.site.vendor_dir;

    return {

        options: {
            min:  (isProd) ? true : false,
            // relative: true,
            // prefix:'<%= site.vendor_dir %>/',
            // postfix : '?v=<%= now %>',
            // Adapted from https://github.com/yangqw/pb-com/blob/786251274086194f5d87565d2145157afcebc6cd/Gruntfile.js
            // Adapted from https://github.com/AIOrc/aiofwapp/blob/ccf5e6a4b6bd53a76cc1c40a4fed22ce282493c5/Gruntfile.js
             transform: function(filePath) {
             if (/^.*\.css$/.test(filePath)) {
             filePath = filePath.replace(node_dir, vendor_dir);
             return '<link rel="stylesheet" href="' + filePath + '">';
             } else if (/^.*\.js$/.test(filePath)){
             filePath = filePath.replace(node_dir,vendor_dir);
             return '<script src="' + filePath + '"></script>';
             }
             },
            addRootSlash: false, // strips leading '/' from path files
            ignorePath: ['<%= site.dev %>/'] // strips ' app/development/' from the urls of files
        },

        vendor_css_js_global: {
            options: {
                starttag:'<!-- BEGIN GLOBAL VENDORS :{{ext}} -->',
                endtag:'<!-- END GLOBAL VENDORS :{{ext}} -->'
            },

            files: { // <%= vI %> File is located at /app/source/data/vendor-injector.json
                '<%= site.src_partialsdir %>/head.hbs': [ '<%= vI.css_js_global %>', '<%= vI.chosen %>'],
                '<%= site.src_partialsdir %>/footer-scripts.hbs': ['<%= vI.css_js_global %>','<%= vI.chosen %>']
            }
        },

        /*  vendor_css_js_pageLevel: {
         options: {
         starttag:'<!-- BEGIN PAGE LEVEL VENDORS :{{ext}} -->',
         endtag:'<!-- END PAGE LEVEL VENDORS :{{ext}} -->'
         },

         files: {
         '<%= site.dev %>/head.hbs': ['<%= vendorInjector.css_js_global %>','bower.json'],
         }
         }*/
    };



};
