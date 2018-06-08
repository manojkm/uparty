// TODO
// https://github.com/freshjones/meteorapp/blob/6e700d76fbfd7a7a2f5f6f0daa83ed92a73b327d/client/lib/helpers/user-helpers.js,
// https://github.com/xiplias/styring/blob/master/client/helpers/handlebar.js
// https://gist.github.com/danharper/1755604
// https://github.com/doowb/octobox.js/blob/master/app/helpers/notifications.js
// https://github.com/chian88/course_260/blob/master/trello3/public/javascripts/handlebars_utility.js
// https://tutorialzine.com/2015/01/learn-handlebars-in-10-minutes


module.exports.register = function (Handlebars, options) {
    'use strict';

    Handlebars.registerHelper('replaceStr', function (haystack, needle, replacement) {
        if (haystack && needle) {
            return haystack.replace(needle, replacement);
        } else {
            return '';
        }
    });

//
// TODO
// ======================================================
// Usage: {{{modalFooter 'insert'}}}
    Handlebars.registerHelper('modalFooter', function (type, text) {
        var buttonType = type === "insert" || type === "update" ? "submit" : "button";
        return '<div class="modal-footer"><button type="button" class="btn btn-default" data-dismiss="modal">Close</button><button type="' + buttonType + '" class="btn btn-primary ' + type + '">' + text + '</button></div>';
    });

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

//
// BUTTONS
// ======================================================
// Usage: {{#btn "primary"}}Primary{{/btn}}
    Handlebars.registerHelper('btn', function (context, options) {
        return '<button type="button" class="btn btn-' + context + '">' + options.fn(this) + '</button>';
    });

// Usage: {{#btn_list data.btn}} <button type="button" class="{{class}}">{{text}}</button>{{/btn_list}}
    Handlebars.registerHelper('btn_list', function (context, options) {
        var html = "";
        for (var i = 0, j = context.length; i < j; i++) {
            html += options.fn(context[i]);
        }
        return html;
    });

//
// CARD
// ======================================================

    // Card wrapper
    Handlebars.registerHelper('card', function (options) {
        var content = options.fn(this);
        return '<div class="card">' + content + '</div>';
    });

    // Handlebars.registerHelper('cardtest', function (context, options) {
    //     context = context || '';
    //     var content = options.fn(this);
    //     if (context == '') {
    //         return '<div class="card">' + content + '</div>';
    //     }
    //     else {
    //         return '<div class="card" id="' + context + '">' + content + '</div>';
    //     }
    // });

    // Card header
    Handlebars.registerHelper('card_header', function (context) {
        return '<div class="card-header"><h6 class="card-title">' + context + '</h6><div class="card__actions window ml-auto">' +
            '<a href="#" class="card__actions-item" data-card="collapse"><i class="fa fa-chevron-up"></i></a>' +
            '<a href="#" class="card__actions-item" data-card="fullscreen"><i class="fa fa-expand"></i></a>' +
            '<a href="#" class="card__actions-item" data-card="close"><i class="fa fa-times"></i></a></div></div>';
    });

    // Card body
    Handlebars.registerHelper('card_body', function (options) {
        var content = options.fn(this);
        return '<div class="card-body">' + content + '</div>';
    });

};