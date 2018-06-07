// TODO https://github.com/freshjones/meteorapp/blob/6e700d76fbfd7a7a2f5f6f0daa83ed92a73b327d/client/lib/helpers/user-helpers.js,
// https://github.com/xiplias/styring/blob/master/client/helpers/handlebar.js


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
    Handlebars.registerHelper('btn', function (context, options) {
        return '<button type="button" class="btn btn-' + context + '">' + options.fn(this) + '</button>';
    });

    // Usage: {{#btn_list data.btn}} <button type="button" class="{{class}}">{{text}}</button>{{/btn_list}}
    Handlebars.registerHelper('btn_list', function (context, options) {
        var ret = "";
        for (var i = 0, j = context.length; i < j; i++) {
            ret = ret + options.fn(context[i]);
        }
        return ret;
    });

    Handlebars.registerHelper('card', function (context, options) {
        var content = options.fn(this);
        return '<div class="card" id="' + context + '">' + content + '</div>';
    });

    Handlebars.registerHelper('card_header', function (title) {
        return '<div class="card-header"><h6 class="card-title">' + title + '</h6><div class="card__actions window ml-auto">' +
            '<a href="#" class="card__actions-item" data-card="collapse"><i class="fa fa-chevron-up"></i></a>' +
            '<a href="#" class="card__actions-item" data-card="fullscreen"><i class="fa fa-expand"></i></a>' +
            '<a href="#" class="card__actions-item" data-card="close"><i class="fa fa-times"></i></a></div></div>';
    });

    Handlebars.registerHelper('card_body', function (options) {
        var content = options.fn(this);
        return ' <div class="card-body">' + content + '</div>';
    });

};