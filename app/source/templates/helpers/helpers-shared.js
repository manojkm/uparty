module.exports.register = function (Handlebars, options, params) {
    'use strict';

    var path = require('path');
    var getExt = function (str) {
        var extname = path.extname(str);
        if (extname) {
            str = extname;
        }
        if (str[0] === ".") {
            str = str.substring(1);
        }
        return str;
    };

//
// Replaces part of a string with a string.
// ======================================================

    Handlebars.registerHelper('replaceStr', function (haystack, needle, replacement) {
        if (haystack && needle) {
            return haystack.replace(needle, replacement);
        } else {
            return '';
        }
    });

    Handlebars.registerHelper('createLink', function (path) {
        if (path) {
            var baseurl = params.assemble.options.root;
            var dest = params.assemble.options.dest;
            // return path.replace('app/build/', '').replace('.html', '');
            return path.replace(dest, baseurl);
        }
        else {
            return '';
        }
    });

//
// GENERATE CDN URL
// ======================================================
// Adapted from https://github.com/tawja/twj-website-base/tree/master/src/main/webapp/frontend/helpers
    Handlebars.registerHelper("helper-cdn", function (context) {
        if (!Array.isArray(context)) {
            context = [context];
        }
        return new Handlebars.SafeString(context.map(function (item) {
            var ext = getExt(item);
            var js = '<script src="' + item + '"></script>';
            var css = '<link rel="stylesheet" href="' + item + '"/>';
            switch (ext) {
                case "js":
                    return js;
                case "css":
                    return css;
                default:
                    return js;
            }
        }).join("\n"));
    });

//
// TODO
// ======================================================
// Usage: {#list data.nav}}<a href="{{url}}">{{title}}</a>{{/list}}
    Handlebars.registerHelper('list', function (context, options) {
        var ret = "<ul>";
        for (var i = 0, j = context.length; i < j; i++) {
            ret = ret + "<li>" + options.fn(context[i]) + "</li>";
        }
        return ret + "</ul>";
    });

// Usage: {{ greeting }}
    Handlebars.registerHelper("greeting", function () {
        return new Handlebars.SafeString("Hello World");
    });


    // Usage  {{{testtest "See more..." href="#" class="story"}}}
    Handlebars.registerHelper('testtest', function (text, options) {
        var attrs = [];

        for (var prop in options.hash) {
            attrs.push(
                Handlebars.escapeExpression(prop) + '="'
                + Handlebars.escapeExpression(options.hash[prop]) + '"');
        }

        return new Handlebars.SafeString(
            "<a " + attrs.join(" ") + ">" + Handlebars.escapeExpression(text) + "</a>"
        );
    });


//
// IMAGE PLACEHOLDER
// ======================================================
// Usage: {{img_placeholder '300' '200' '300x200' }}
    Handlebars.registerHelper('img_placeholder', function (w, h, text) {
        function isValid(str) {
            return typeof str != 'undefined' && str != '' && typeof str.data == 'undefined';
        }

        var width = (isValid(w)) ? w : '300';
        var height = (isValid(h)) ? 'x' + h : '';
        var content = (isValid(text)) ? '?text=' + encodeURI(text) : '';

        var url = 'http://placehold.it/' + width + height + content;

        return new Handlebars.SafeString('<img src="' + url + '" alt="Placeholder Image" />')

    });

//
// PLACEHOLDER LOREM IPSUM TEXT
// ======================================================

    Handlebars.registerHelper('placeholder-lorem-lng', function () {
        var content = '<span class="placeholder small">This is actually text. Unbelievable, I know…  For proper styling, just remove <code>.placeholder</code>. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using. </span>';
        return new Handlebars.SafeString(content);
    });

    Handlebars.registerHelper('placeholder-lorem-sht', function () {
        var content = '<span class="placeholder small">This is actually text. Unbelievable, I know…  For proper styling, just remove <code>.placeholder</code>. Some quick example text to build on the card title and make up the bulk of the card\'s content.</span>';
        return new Handlebars.SafeString(content);
    });

//
// GENERATE LINK WITH BASEURL SPECIFIED IN ASSEMBLE TASK
// ======================================================
// Adapted from "corsaire-chaparral.org" source
    Handlebars.registerHelper('link', function (url) {

        var baseurl = params.assemble.options.root;

        var combo = baseurl + url;
        // Trim trailing 'index.html' at the end of the string
        combo = combo.replace(/(index.html)$/g, '');

        return new Handlebars.SafeString(combo);
    });

//
// CHECK STRING
// ======================================================
  Handlebars.registerHelper('ifEquals', function(arg1, arg2, options) {
    return (arg1 == arg2) ? options.fn(this) : options.inverse(this);
  });

//
// LIMIT ARRAY
// ======================================================
// limit an array to a maximum of elements (from the start)

  Handlebars.registerHelper('limit', function (arr, limit) {
    if (!Array.isArray(arr)) { return []; }
    return arr.slice(0, limit);
  });


//
// MISC
// ======================================================
// Device spacing that sets display: none; on xl and up screens.
    Handlebars.registerHelper('spacer-xl-max', function () {
        var content = '<p class="spacer10 d-xl-none"></p>';
        return new Handlebars.SafeString(content);
    });

// Common spacing used between UI elements for consistency.
    Handlebars.registerHelper('spacer-common', function () {
        var content = '<p class="spacer10"></p>';
        return new Handlebars.SafeString(content);
    });

// Easily clear floats by adding .clearfix to the parent element.
  Handlebars.registerHelper('clearfix', function () {
    var content = '<div class="clearfix"></div>';
    return new Handlebars.SafeString(content);
  });

};


