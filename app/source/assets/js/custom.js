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

  // _ps: $('.sidebar'),
  _body: $('body'),

  responsive: function responsive() {
    $(window).width() < 768 ? Side._body.removeClass('sidebar-mini sidebar-opened').addClass('sidebar-closed') : Side._body.addClass('sidebar-opened').removeClass('sidebar-closed');
  },

  hide: function hide(element) {
    $(element).on('click', function (event) {
      event.preventDefault();
      Side._body.toggleClass('sidebar-opened sidebar-closed');
      Side._stopMetisMenu();
    });
  },

  mini: function mini(element) {
    $(element).on('click', function (event) {
      event.preventDefault();
      Side._body.toggleClass('sidebar-mini');
      Side._stopMetisMenu();
    });
  },

  _stopMetisMenu: function _stopMetisMenu() {
    $('.sidebar__nav').find('li').removeClass('active');
    $('.sidebar__nav').find('a').attr('aria-expanded', false);
     // $('.sidebar__nav').find('a').removeClass('has-arrow');
    $('.sidebar__nav').find('ul.collapse').removeClass('in').attr('aria-expanded', false);
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
