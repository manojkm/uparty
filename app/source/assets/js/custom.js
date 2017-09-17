/**
 * chl - Bootstrap 3 Based Admin Toolkit
 * @version v0.1.1
 * @author onokumus
 */
'use strict';

if (typeof jQuery === 'undefined') {
  throw new Error('Theme\'s JavaScript requires jQuery');
}
 
  
var Side = {

  _ps: $('.app-side'),
  _body: $('body'),

  responsive: function responsive() {
    $(window).width() < 768 ? Side._body.removeClass('app-side-mini app-side-opened').addClass('app-side-closed') : Side._body.addClass('app-side-opened').removeClass('app-side-closed');

    if (Side._body.hasClass('page-fixed') & !Side._body.hasClass('app-side-expand-on-hover')) {
      Side._body.removeClass('app-side-mini');
    }
  },

  collapse: function collapse(element) {
    $(element).on('click', function (event) {
      event.preventDefault();
      Side._body.toggleClass('app-side-opened app-side-closed');
      Side._stopMetisMenu();
    });
  },

  mini: function mini(element) {
    $(element).on('click', function (event) {
      event.preventDefault();
      Side._body.toggleClass('app-side-mini');
      Side._stopMetisMenu();
    });
  },

  _stopMetisMenu: function _stopMetisMenu() {
    $('.side-nav').find('li').removeClass('active');
    $('.side-nav').find('a').attr('aria-expanded', false);
    $('.side-nav').find('ul.collapse').removeClass('in').attr('aria-expanded', false);
  }

};

$(document).on("chl.side", function () {
  Side.responsive();
  $("[data-side]").each(function () {
    Side[$(this).attr("data-side")](this);
  });
}).trigger("chl.side");

  
var Pluggin = {
  metismenu: function metismenu(element) {
    if ($.fn.metisMenu) {
      $(element).metisMenu();
    } else {
      throw new Error('First install metisMenu plugin! https://github.com/onokumus/metisMenu');
    }
  },
 
};

$(document).on("chl.plugin", function () {

  if ($('.ps').length) {
    Pluggin.perfectscrollbar($('.ps'));
  }

  $("[data-plugin]").each(function () {
    Pluggin[$(this).attr("data-plugin")](this);
  });
}).trigger("chl.plugin");
