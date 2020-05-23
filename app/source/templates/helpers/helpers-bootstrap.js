// TODO
// https://github.com/freshjones/meteorapp/blob/6e700d76fbfd7a7a2f5f6f0daa83ed92a73b327d/client/lib/helpers/user-helpers.js,
// https://github.com/xiplias/styring/blob/master/client/helpers/handlebar.js
// https://gist.github.com/danharper/1755604
// https://github.com/doowb/octobox.js/blob/master/app/helpers/notifications.js
// https://github.com/chian88/course_260/blob/master/trello3/public/javascripts/handlebars_utility.js
// https://tutorialzine.com/2015/01/learn-handlebars-in-10-minutes
// https://github.com/chapmanu/cascade-assets/tree/development/subprojects/degrees-and-programs/source/static/app/assemble/helpers
// https://github.com/BarkleyREI/Front-End-Coding-Standards/blob/7843e8ad0be388b457c8fb1b0a97679591047b8b/app/assemble/helpers/helpers.js
// https://github.com/guimarin/orion/blob/b4c34568a4363da240052a419e794bd3c54e4a3b/client/helpers.js


module.exports.register = function (Handlebars, options) {
  'use strict';

//
// VALIDATOR
// ======================================================
  function isValid(str) {
    return typeof str != 'undefined' && str != '' && typeof str.data == 'undefined';
  }

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

// Basic alerts
// Usage {{#alert "primary"}}Alert{{/alert}}
  Handlebars.registerHelper("alert", function (context, options) {
    var content = '<div class="alert alert-' + context + '" role="alert">' + options.fn(this) + '</div>';
    return new Handlebars.SafeString(content);
  });

// Dismissable alerts
// Usage {{#alert_dismiss "primary"}}Alert{{/alert_dismiss}}
  Handlebars.registerHelper("alert_dismiss", function (context, options) {
    var content = '<div class="alert alert-' + context + ' alert-dismissible fade show" role="alert">' + options.fn(this) + '</div>';
    return new Handlebars.SafeString(content);
  });

//
// BOOTSTRAP BADGES
// ======================================================

// Badges
// Usage {{#badge "primary"}}Alert{{/badge}}
  Handlebars.registerHelper("badge", function (modifier, exCl, options) {


    var class_selector = (isValid(exCl)) ? ' ' + exCl : '';

    var content = '<span class="badge ' + modifier + class_selector + '">' + options.fn(this) + '</span>';
    return new Handlebars.SafeString(content);
  });

// Link badges
// Usage {{#badge-link "primary"}}Alert{{/badge-link}}
  Handlebars.registerHelper("badge-link", function (href, modifier, exCl, options) {


    var class_selector = (isValid(exCl)) ? ' ' + exCl : '';
    var href_selector = (isValid(href)) ? href : '#';

    var content = '<a href="' + href_selector + '" class="badge ' + modifier + class_selector + '">' + options.fn(this) + '</a>';
    return new Handlebars.SafeString(content);
  });

//
// BOOTSTRAP BREADCRUMB
// ======================================================

// Usage {{#breadcrumb "myClass" "myId"}}<li class="breadcrumb-item"><a href="#">Home</a></li>{{/breadcrumb}}
  Handlebars.registerHelper("breadcrumb", function (cl, id, options) {


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
// Usage: {{#card}}{{/card}}
  Handlebars.registerHelper('card', function (options) {
    var content = options.fn(this);
    return '<div class="card">' + content + '</div>';
  });

// Card with id and class
// Usage: {{#card_has 'class' 'id'}}{{/card_has}}
  Handlebars.registerHelper('card_has', function (cl, id, options) {

    var id_selector = (isValid(id)) ? 'id="' + id + '"' : '';
    var class_selector = (isValid(cl)) ? 'class="card' + ' ' + cl + '"' : 'class="card"';
    var content = options.fn(this);

    return '<div ' + class_selector + ' ' + id_selector + '>' + content + '</div>';
  });

// Card title
// Usage: {{{card_title 'Title'}}}
  Handlebars.registerHelper('card_title', function (context) {
    var content = '<h5 class="card-title">' + context + '</h5>';
    return new Handlebars.SafeString(content);
  });

// Card with title and subtitle
// Usage: {{{card_title_has_subtitle 'Title' 'Subtitle'}}}
  Handlebars.registerHelper('card_title_has_subtitle', function (title, subtitle) {
    var content = '<h5 class="card-title">' + title + '</h5> <h6 class="card-subtitle mb-2 text-muted">' + subtitle + '</h6>';
    return new Handlebars.SafeString(content);
  });

// Card header
// Usage: {{{card_header 'Title'}}}
  Handlebars.registerHelper('card_header', function (title) {
    return '<div class="card-header"><h5 class="card-title">' + title + '</h5><div class="card__actions window ml-auto">' +
      '<a href="#" class="card__actions-item" data-card="collapse"><i class="ti ti-angle-up"></i></a>' +
      '<a href="#" class="card__actions-item" data-card="fullscreen"><i class="ti ti-fullscreen"></i></a>' +
      '<a href="#" class="card__actions-item" data-card="close"><i class="ti ti-close"></i></a></div></div>';
  });

// Card header with subtitle
// Usage: {{{card_header_has_subtitle 'Title' 'Subtitle'}}}
  Handlebars.registerHelper('card_header_has_subtitle', function (title, subtitle) {
    return '<div class="card-header"><h5 class="card-title">' + title + '<small class="card-subtitle text-muted"> ' + subtitle + '</small></h5><div class="card__actions window ml-auto">' +
      '<a href="#" class="card__actions-item" data-card="collapse"><i class="ti ti-angle-up"></i></a>' +
      '<a href="#" class="card__actions-item" data-card="fullscreen"><i class="ti ti-fullscreen"></i></a>' +
      '<a href="#" class="card__actions-item" data-card="close"><i class="ti ti-close"></i></a></div></div>';
  });

// Card body
  Handlebars.registerHelper('card_body', function (options) {
    var content = options.fn(this);
    return new Handlebars.SafeString('<div class="card-body">' + content + '</div>');
  });

// Card body with class
  Handlebars.registerHelper('card_body_has', function (cl, id, options) {

    var id_selector = (isValid(id)) ? 'id="' + id + '"' : '';
    var class_selector = (isValid(cl)) ? 'class="card-body' + ' ' + cl + '"' : 'class="card-body"';
    var content = options.fn(this);

    return '<div ' + class_selector + ' ' + id_selector + '>' + content + '</div>';
  });

//
// BOOTSTRAP MODAL
// ======================================================

  Handlebars.registerHelper('modal', function (cl, id, cl_modal_dialog, options) {
    var class_selector = (Handlebars.Utils.isEmpty(cl)) ? '' : ' ' + cl;
    var cl_modal_selector = (Handlebars.Utils.isEmpty(cl_modal_dialog)) ? '' : ' ' + cl_modal_dialog;
    var id_selector = (Handlebars.Utils.isEmpty(id)) ? '' : id;
    var content = options.fn(this);
    return '<div class="modal fade' + class_selector + '" id="' + id_selector + '" tabindex="-1" role="dialog" aria-labelledby="' + id_selector + 'Label" aria-hidden="true">' +
      '<div class="modal-dialog' + cl_modal_selector + '" role="document">' +
      '<div class="modal-content">' + content + '</div></div></div>';
  });

  Handlebars.registerHelper('modal_header', function (title) {
    return '<div class="modal-header"><h5 class="modal-title">' + title + '</h5><button type="button" class="close" data-dismiss="modal" aria-label="Close"><ion-icon aria-hidden="true" name="close-outline"></ion-icon></button></div>';
  });

  Handlebars.registerHelper('modal_body', function (cl, options) {
    var class_selector = (Handlebars.Utils.isEmpty(cl)) ? '' : ' ' + cl;
    var content = '<div class="modal-body' + class_selector + '">' + options.fn(this) + '</div>';
    return new Handlebars.SafeString(content);
  });

  Handlebars.registerHelper('modal_footer', function (btn_type, text, btn_class) {
    var buttonType = btn_type === "insert" || btn_type === "update" ? "submit" : "button";
    return '<div class="modal-footer bg-light-opacity-5"><button type="button" class="btn btn-outline-' + btn_class + '" data-dismiss="modal">Close</button><button type="' + buttonType + '" class="btn btn-' + btn_class + '">' + text + '</button></div>';
  });

  Handlebars.registerHelper('modal_footer_soft', function (type, text, btn_class) {
    var buttonType = type === "insert" || type === "update" ? "submit" : "button";
    return '<div class="modal-footer justify-content-center"><button type="button" class="btn btn-link btn-' + btn_class + '" data-dismiss="modal">Close</button><button type="' + buttonType + '" class="btn btn-' + btn_class + '">' + text + '</button></div>';
  });

  Handlebars.registerHelper('modal_footer_simple', function (type) {
    return '<div class="modal-footer"><button type="button" class="btn btn-light" data-dismiss="modal">Close</button></div>';
  });

//
// BOOTSTRAP MEDIA OBJECT
// ======================================================

// Media
// Usage: {{#media}}{{/media}}
  Handlebars.registerHelper('media', function (options) {
    var content = options.fn(this);
    return new Handlebars.SafeString('<div class="media">' + content + '</div>');
  });

// Media with id & class
// Usage: {{#media_has 'class' 'id'}}{{/media_has}}
  Handlebars.registerHelper('media_has', function (cl, id, options) {
    var id_selector = (isValid(id)) ? 'id="' + id + '"' : '';
    var class_selector = (isValid(cl)) ? 'class="media' + ' ' + cl + '"' : 'class="media"';
    var content = options.fn(this);
    return '<div ' + class_selector + ' ' + id_selector + '>' + content + '</div>';
  });

// Media body
// Usage: {{#media_body}}{{/media_body}}
  Handlebars.registerHelper('media_body', function (options) {
    var content = options.fn(this);
    return new Handlebars.SafeString('<div class="media-body">' + content + '</div>');
  });

// Media body with id and class
// Usage: {{#media_body_has 'class' 'id'}}{{/media_body_has}}
  Handlebars.registerHelper('media_body_has', function (cl, id, options) {
    var id_selector = (isValid(id)) ? 'id="' + id + '"' : '';
    var class_selector = (isValid(cl)) ? 'class="media-body' + ' ' + cl + '"' : 'class="media-body"';
    var content = options.fn(this);
    return '<div ' + class_selector + ' ' + id_selector + '>' + content + '</div>';
  });

//
// AVATARS
// ======================================================

// Avatar
// Usage: {{#avatar_has 'modifier' 'class'}}{{/avatar_has}}
  Handlebars.registerHelper('avatar_has', function (modifier, cl, options) {
    var class_selector = (isValid(cl)) ? ' ' + cl : '';
    var modifier_selector = (isValid(modifier)) ? ' ' + modifier : '';
    var content = '<div class="avatar' + modifier_selector + class_selector + '">' + options.fn(this) + '</div>';
    return new Handlebars.SafeString(content);
  });

  // Usage: {{#avatar_link_has 'modifier' 'class'}}{{/avatar_link_has}}
  Handlebars.registerHelper('avatar_link_has', function (modifier, cl, options) {
    var class_selector = (isValid(cl)) ? ' ' + cl : '';
    var modifier_selector = (isValid(modifier)) ? ' ' + modifier : '';
    var content = '<a href="#" class="avatar' + modifier_selector + class_selector + '">' + options.fn(this) + '</a>';
    return new Handlebars.SafeString(content);
  });

// Avatar image
// Usage: {{#avatar_img 'class'}}{{/avatar_img}}
  Handlebars.registerHelper('avatar_img', function (cl, options) {
    var class_selector = (isValid(cl)) ? ' ' + cl : '';
    var content = '<div class="avatar__content avatar-img' + class_selector + '">' + options.fn(this) + '</div>';
    return new Handlebars.SafeString(content);
  });

// Avatar character
// Usage: {{#avatar_char 'class' 'DS'}}{{/avatar_char}}
  Handlebars.registerHelper('avatar_char', function (cl, initial, options) {
    // var initial_selector = (isValid(initial)) ? 'data-initial="' + initial + '"' : '';
    var initial_selector = (Handlebars.Utils.isEmpty(initial)) ? '' : 'data-initial="' + initial + '"';
    var class_selector = (isValid(cl)) ? ' ' + cl : '';
    var content = '<div class="avatar__content avatar-char' + class_selector + '" ' + initial_selector + '>' + options.fn(this) + '</div>';
    return new Handlebars.SafeString(content);
  });

// Avatar stack
// Usage: {{#avatar_stack 'class'}}{{/avatar_stack}}
  Handlebars.registerHelper('avatar_stack', function (cl, options) {
    var class_selector = (isValid(cl)) ? ' ' + cl : '';
    var content = '<div class="avatar-stack' + class_selector + '">' + options.fn(this) + '</div>';
    return new Handlebars.SafeString(content);
  });

// Avatar badge
// Usage: {{#avatar_badge 'class'}}{{/avatar_badge}}
  Handlebars.registerHelper('avatar_badge', function (cl, options) {
    var class_selector = (isValid(cl)) ? ' ' + cl : '';
    var content = '<div class="avatar__badge' + class_selector + '">' + options.fn(this) + '</div>';
    return new Handlebars.SafeString(content);
  });

//
// LIST GROUP
// ======================================================

// List group
// Usage: {{#list-group 'class'}}{{/list-group}}
  Handlebars.registerHelper('list-group', function (cl, options) {
    var class_selector = (Handlebars.Utils.isEmpty(cl)) ? '' : ' ' + cl;
    var content = '<ul class="list-group' + class_selector + '">' + options.fn(this) + '</ul>';
    return new Handlebars.SafeString(content);
  });

// List group item
// Usage: {{#list-group-item 'class'}}{{/list-group-item}}
  Handlebars.registerHelper('list-group-item', function (cl, options) {
    var class_selector = (Handlebars.Utils.isEmpty(cl)) ? '' : ' ' + cl;
    var content = '<li class="list-group-item' + class_selector + '">' + options.fn(this) + '</li>';
    return new Handlebars.SafeString(content);
  });

// List group item action
// Usage: {{#list-group-item-action 'class'}}{{/list-group-item-action}}
  Handlebars.registerHelper('list-group-item-action', function (cl, options) {
    var class_selector = (Handlebars.Utils.isEmpty(cl)) ? '' : ' ' + cl;
    var content = '<a href="#" class="list-group-item list-group-item-action' + class_selector + '">' + options.fn(this) + '</a>';
    return new Handlebars.SafeString(content);
  });


};
