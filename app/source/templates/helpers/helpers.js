module.exports.register = function (Handlebars, options) {
    'use strict';

    Handlebars.registerHelper('replaceStr', function (haystack, needle, replacement) {
        if (haystack && needle) {
            return haystack.replace(needle, replacement);
        } else {
            return '';
        }
    });
    Handlebars.registerHelper('list', function(context, options) {
        var ret = "<ul>";

        for(var i=0, j=context.length; i<j; i++) {
            ret = ret + "<li>" + options.fn(context[i]) + "</li>";
        }

        return ret + "</ul>";
    });

    Handlebars.registerHelper("greeting", function() {
        return new Handlebars.SafeString("Hello World");
    });

    Handlebars.registerHelper("button", function(type, copy) {
        return new Handlebars.SafeString('<button class="' + type + '">' + copy + '</button>');
    });

};