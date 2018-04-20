module.exports = {

    options: {
        min: true,
        prefix:'<%= site.vendor_dir %>/',
        /* Adapated from https://github.com/yangqw/pb-com/blob/786251274086194f5d87565d2145157afcebc6cd/Gruntfile.js*/
       /* transform: function(filePath) {
            if (/^.*\.css$/.test(filePath)) {
                filePath = filePath.replace('/'+destinationFolder, '');
                return '<link rel="stylesheet" href="' + filePath + '">';
            } else if (/^.*\.js$/.test(filePath)){
                filePath = filePath.replace('/'+destinationFolder, '');
                return '<script src="' + filePath + '"></script>';
            }
        },*/

        addRootSlash: false, // strips leading '/' from path files
        ignorePath: '<%= site.node_dir %>/' // strips 'node_modules/' from the urls of files
    },

    vendor_css_js_global: {
        options: {
            starttag:'<!-- BEGIN VENDOR :{{ext}} -->',
            endtag:'<!-- END VENDOR :{{ext}} -->',
        },

        files: { // <%= vendorInjector %> File is located at /app/source/data/vendor-injector.json
            '<%= site.src_partialsdir %>/head.hbs': ['<%= vendorInjector.css_js_global %>','bower.json'],
            '<%= site.src_partialsdir %>/footer-scripts.hbs': ['<%= vendorInjector.css_js_global %>','bower.json']
        }
    },

 /*   vendor_css_js_pageLevel: {
        options: {
            starttag:'<!-- BEGIN PAGE LEVEL VENDOR :{{ext}} -->',
            endtag:'<!-- END PAGE LEVEL VENDOR :{{ext}} -->'
        },

        files: {
            // paths are up to your project structure
        }
    }*/


};
