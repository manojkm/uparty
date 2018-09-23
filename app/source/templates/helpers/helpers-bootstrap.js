// TODO
// https://github.com/freshjones/meteorapp/blob/6e700d76fbfd7a7a2f5f6f0daa83ed92a73b327d/client/lib/helpers/user-helpers.js,
// https://github.com/xiplias/styring/blob/master/client/helpers/handlebar.js
// https://gist.github.com/danharper/1755604
// https://github.com/doowb/octobox.js/blob/master/app/helpers/notifications.js
// https://github.com/chian88/course_260/blob/master/trello3/public/javascripts/handlebars_utility.js
// https://tutorialzine.com/2015/01/learn-handlebars-in-10-minutes
// https://github.com/chapmanu/cascade-assets/tree/development/subprojects/degrees-and-programs/source/static/app/assemble/helpers
// https://github.com/BarkleyREI/Front-End-Coding-Standards/blob/7843e8ad0be388b457c8fb1b0a97679591047b8b/app/assemble/helpers/helpers.js


module.exports.register = function (Handlebars, options) {
    'use strict';

//
// BOOTSTRAP BUTTONS
// ======================================================
// Usage: {{#btn "primary"}}Primary{{/btn}}
    Handlebars.registerHelper('btn', function (context, options) {
        return '<button type="button" class="btn btn-' + context + '">' + options.fn(this) + '</button>';
    });

// Usage: {{#btn_disabled "primary"}}Primary{{/btn}}
    Handlebars.registerHelper('btn_disabled', function (context, options) {
        return '<button type="button" class="btn btn-' + context + '" disabled>' + options.fn(this) + '</button>';
    });

// Usage: {{#btn_list button.btn}} <button type="button" class="{{class}}">{{text}}</button>{{/btn_list}}
    Handlebars.registerHelper('btns', function (context, options) {
        var html = "";
        for (var i = 0, j = context.length; i < j; i++) {
            html += options.fn(context[i]);
        }
        return html;
    });

//
// BOOTSTRAP DROPDOWN
// ======================================================

// Dropdown wrapper
    Handlebars.registerHelper('ddw_menu_has', function (cl, options) {
        var content = options.fn(this);
        return ' <ul class="dropdown-menu ' + cl + '" aria-labelledby="navbarDropdownMenuLink">' + content + '</ul>';
    });

// Dropdown header
    Handlebars.registerHelper('ddw_header', function (context) {
        return '<li><h5 class="dropdown-header">' + context + '</h5></li>';
    });

// Dropdown divider
    Handlebars.registerHelper('ddw_divider', function () {
        return '<li><div class="dropdown-divider"></div></li>';
    });

// Dropdown items
    Handlebars.registerHelper('ddw_items', function (context, options) {
        var html = "<!-- Dropdown menu links -->";
        for (var i = 0, j = context.length; i < j; i++) {
            html += "<li>" + options.fn(context[i]) + "</li>";
        }
        return html;
    });

//
// BOOTSTRAP NAV TABS
// ======================================================

// Tabs wrapper
    Handlebars.registerHelper('tab_has', function (cl, id, context, options) {
        var html = '<ul class="nav ' + cl + '" id="' + id + '" role="tablist">';
        for (var i = 0, j = context.length; i < j; i++) {
            html = html + '<li class="nav-item">' + options.fn(context[i]) + '</li>';
        }
        return html + '</ul>';
    });

// Tab content
    Handlebars.registerHelper('tab_content_has', function (cl, id, context, options) {
        var html = '<div class="tab-content ' + cl + '" id="' + id + '" role="tablist">';
        for (var i = 0, j = context.length; i < j; i++) {
            html = html + options.fn(context[i]);
        }
        return html + '</div>';
    });

//
// BOOTSTRAP ALERT
// ======================================================

// Usage {{#alert "primary"}}Alert{{/alert}}
    Handlebars.registerHelper("alert", function (context, options) {
        var content = '<div class="alert alert-' + context + '" role="alert">' + options.fn(this) + '</div>';
        return new Handlebars.SafeString(content);
    });

//
// BOOTSTRAP BREADCRUMB
// ======================================================

// Usage {{#breadcrumb "myClass" "myId"}}<li class="breadcrumb-item"><a href="#">Home</a></li>{{/breadcrumb}}
    Handlebars.registerHelper("breadcrumb", function (cl, id, options) {

        function isValid(str) {
            return typeof str != 'undefined' && str != '' && typeof str.data == 'undefined';
        }

        var id_selector = (isValid(id)) ? 'id="' + id + '"' : '';
        var class_selector = (isValid(cl)) ? 'class="breadcrumb' + ' ' + cl + '"' : 'class="breadcrumb"';
        var content = options.fn(this);

        var html = '<nav aria-label="breadcrumb" ' + id_selector + ' role="navigation"><ol ' + class_selector + '>' + content + '</ol></nav>';
        return new Handlebars.SafeString(html);
    });

//
// BOOTSTRAP CARD
// ======================================================

    // Card wrapper
    Handlebars.registerHelper('card', function (options) {
        var content = options.fn(this);
        return '<div class="card">' + content + '</div>';
    });

    // Card wrapper with id & class
    // Usage : {{#card_has 'my-class' 'my-id'}}
    Handlebars.registerHelper('card_has', function (cl, id, options) {
        function isValid(str) {
            return typeof str != 'undefined' && str != '' && typeof str.data == 'undefined';
        }

        var id_selector = (isValid(id)) ? 'id="' + id + '"' : '';
        var class_selector = (isValid(cl)) ? 'class="card' + ' ' + cl + '"' : 'class="card"';
        var content = options.fn(this);

        return '<div ' + class_selector + ' ' + id_selector + '>' + content + '</div>';
    });

    // Card title
    Handlebars.registerHelper('card_title', function (context) {
        var content = '<h5 class="card-title">' + context + '</h5>';
        return new Handlebars.SafeString(content);
    });

    // Card subtitle
    Handlebars.registerHelper('card_title_has_subtitle', function (title, subtitle) {
        var content = '<h5 class="card-title">' + title + '</h5> <h6 class="card-subtitle mb-2 text-muted">' + subtitle + '</h6>';
        return new Handlebars.SafeString(content);
    });

    // Card header
    Handlebars.registerHelper('card_header', function (title) {
        return '<div class="card-header"><h5 class="card-title">' + title + '</h5><div class="card__actions window ml-auto">' +
            '<a href="#" class="card__actions-item" data-card="collapse"><i class="fa fa-chevron-up"></i></a>' +
            '<a href="#" class="card__actions-item" data-card="fullscreen"><i class="fa fa-expand"></i></a>' +
            '<a href="#" class="card__actions-item" data-card="close"><i class="fa fa-times"></i></a></div></div>';
    });

    // Card header
    Handlebars.registerHelper('card_header_has_subtitle', function (title, subtitle) {
        return '<div class="card-header"><h5 class="card-title">' + title + '<small class="card-subtitle text-muted"> ' + subtitle + '</small></h5><div class="card__actions window ml-auto">' +
            '<a href="#" class="card__actions-item" data-card="collapse"><i class="fa fa-chevron-up"></i></a>' +
            '<a href="#" class="card__actions-item" data-card="fullscreen"><i class="fa fa-expand"></i></a>' +
            '<a href="#" class="card__actions-item" data-card="close"><i class="fa fa-times"></i></a></div></div>';
    });

    // Card body
    Handlebars.registerHelper('card_body', function (options) {
        var content = options.fn(this);
        return new Handlebars.SafeString('<div class="card-body">' + content + '</div>');
    });

    // Card body
    Handlebars.registerHelper('card_body_has', function (cl, id, options) {
        function isValid(str) {
            return typeof str != 'undefined' && str != '' && typeof str.data == 'undefined';
        }

        var id_selector = (isValid(id)) ? 'id="' + id + '"' : '';
        var class_selector = (isValid(cl)) ? 'class="card-body' + ' ' + cl + '"' : 'class="card-body"';
        var content = options.fn(this);

        return '<div ' + class_selector + ' ' + id_selector + '>' + content + '</div>';
    });


//
// BOOTSTRAP MODAL
// ======================================================

    Handlebars.registerHelper('modal', function (cl, context, cl_modal_dialog, options) {
        var content = options.fn(this);
        return '<div class="modal ' + cl + '" id="' + context + '" tabindex="-1" role="dialog" aria-labelledby="' + context + 'Label" aria-hidden="true"><div class="modal-dialog ' + cl_modal_dialog + '" role="document"><div class="modal-content">' + content + '</div></div></div>';
    });

    Handlebars.registerHelper('modalHeader', function (title) {
        return '<div class="modal-header"><h5 class="modal-title">' + title + '</h5><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>';
    });

    Handlebars.registerHelper('modalContent', function (options) {
        var content = options.fn(this);

        return '<div class="modal-body">' + content + '</div>';
    });

    Handlebars.registerHelper('modalFooter', function (type, text, btnclass) {
        var buttonType = type === "insert" || type === "update" ? "submit" : "button";
        return '<div class="modal-footer"><button type="button" class="btn btn-light" data-dismiss="modal">Close</button><button type="' + buttonType + '" class="btn btn-' + btnclass + '">' + text + '</button></div>';
    });

    Handlebars.registerHelper('modalFooterSimple', function (type) {
        return '<div class="modal-footer"><button type="button" class="btn btn-light" data-dismiss="modal">Close</button></div>';
    });

};