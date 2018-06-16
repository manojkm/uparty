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


    // Usage  {{{testtest "See more..." href="#" class="story"}}}
    Handlebars.registerHelper('testtest', function(text, options) {
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
};