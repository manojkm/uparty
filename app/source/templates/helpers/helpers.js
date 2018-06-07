module.exports.register = function (Handlebars, options) {
    'use strict';

    Handlebars.registerHelper('replaceStr', function (haystack, needle, replacement) {
        if (haystack && needle) {
            return haystack.replace(needle, replacement);
        } else {
            return '';
        }
    });

    // Usage:
    // {#list data.nav}}<a href="{{url}}">{{title}}</a>{{/list}}
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

    // Usage: {{#btn "primary"}}Primary{{/btn}}
    Handlebars.registerHelper('btn', function (name, options) {
        return '<button type="button" class="btn btn-' + name + '">' + options.fn(this) + '</button>';
    });

    // Usage: {{#btn_list data.btn}} <button type="button" class="{{class}} btn-raised">{{text}}</button>{{/btn_list}}
    Handlebars.registerHelper('btn_list', function (context, options) {
        var ret = "";
        for (var i = 0, j = context.length; i < j; i++) {
            ret = ret + options.fn(context[i]);
        }
        return ret;
    });


};