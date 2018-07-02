'use strict';
module.exports = function (grunt) {

    var partials = grunt.getPath('partials', true);
    var dest = grunt.getPath('dest');

    var vendors_files = function (isGlobal, isPageLevel) {
        var files = {};

        if (isGlobal) {
            files[partials + 'head.hbs'] = ['<%= vI.css_js_global %>'];
            files[partials + 'footer-scripts.hbs'] = ['<%= vI.css_js_global %>'];
            return files;
        }

        if (isPageLevel) {
            files[dest + 'wizard.html'] = ['<%= vI.steps %>', '<%= vI.validate %>'];
            files[dest + 'form-wizard.html'] = ['<%= vI.steps %>', '<%= vI.validate %>'];
            files[dest + 'form-validation.html'] = ['<%= vI.validate %>'];
            files[dest + 'form-repeater.html'] = ['<%= vI.repeater %>'];
            files[dest + 'advanced-form-elements.html'] = [
                '<%= vI.maxlength %>',
                '<%= vI.raty %>',
                '<%= vI.nouislider %>',
                '<%= vI.toastr %>',
                '<%= vI.datepicker %>',
                '<%= vI.chosen %>',
                '<%= vI.multiSelect %>',
                '<%= vI.mask %>',
                '<%= vI.dropzone %>'
            ];
            files[dest + 'form-elements-transparent.html'] = ['<%= vI.autosize %>'];
            files[dest + 'form-elements.html'] = ['<%= vI.autosize %>'];
            files[dest + 'cards.html'] = ['<%= vI.raty %>'];

            return files;
        }

    };

    return {
        options: {
            min: (isProd) ? true : false,
            // relative: true,
            // prefix: grunt.getPath('vendors'),
            // postfix : '?v=<%= now %>',
            // Adapted from https://github.com/yangqw/pb-com/blob/786251274086194f5d87565d2145157afcebc6cd/Gruntfile.js
            // Adapted from https://github.com/AIOrc/aiofwapp/blob/ccf5e6a4b6bd53a76cc1c40a4fed22ce282493c5/Gruntfile.js
            transform: function (filePath) {
                if (/^.*\.css$/.test(filePath)) {
                    filePath = filePath.replace(grunt.getPath('node'), grunt.getPath('vendors'));
                    return '<link rel="stylesheet" href="' + filePath + '">';
                } else if (/^.*\.js$/.test(filePath)) {
                    filePath = filePath.replace(grunt.getPath('node'), grunt.getPath('vendors'));
                    return '<script src="' + filePath + '"></script>';
                }
            },
            /* lineEnding: '\r\n',
             sort: function (a, b) {
             if (a.length > b.length) {
             return 1;
             } else {
             return -1;
             }
             },*/
            addRootSlash: false, // strips leading '/' from path files
            ignorePath: [grunt.getPath('dest')] // strips ' app/build/' from the urls of files
        },

        vendors_global: {
            options: {
                starttag: '<!-- BEGIN GLOBAL VENDORS :{{ext}} -->',
                endtag: '<!-- END GLOBAL VENDORS :{{ext}} -->'
            },
            files: vendors_files(true)
        },

        vendors_pageLevel: {
            options: {
                starttag: '<!-- BEGIN PAGE LEVEL VENDORS AND ITS EXTENSIONS :{{ext}} -->',
                endtag: '<!-- END PAGE LEVEL VENDORS AND ITS EXTENSIONS :{{ext}} -->'
            },
            files: vendors_files(false, true)
        }
    };
};