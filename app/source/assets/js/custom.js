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
  _logo: $('.brand-logo'),

  responsive: function responsive() {
    $(window).width() < 768 ? Side._body.removeClass('sidebar-mini sidebar-is-open').addClass('sidebar-is-closed') : Side._body.addClass('sidebar-is-open').removeClass('sidebar-is-closed');
  },

  hide: function hide(element) {
    $(element).on('click', function (event) {
      event.preventDefault();
      Side._body.toggleClass('sidebar-is-open sidebar-is-closed');
      Side._stopMetisMenu();
    });
  },

  mini: function mini(element) {
    $(element).on('click', function (event) {
    // console.log(event);
      event.preventDefault();
      Side._body.toggleClass('sidebar-mini');
      Side._stopMetisMenu();
      Side._changeLogo();
    });
  },

  _changeLogo: function __changeLogo() {

  	Side._body.hasClass("sidebar-mini") ?  Side._logo.attr('src',Side._logo.data('collapse')): Side._logo.attr('src',Side._logo.data('expand'));
  
  /* if(Side._body.hasClass("sidebar-mini")){
       Side._logo.attr('src',Side._logo.data('collapse'));
      }
      else{
       Side._logo.attr('src',Side._logo.data('expand'));
      }
*/
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
   // console.log($(this))
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
  $("[data-plugin]").each(function () {
    Pluggin[$(this).attr("data-plugin")](this);
  });
  
}).trigger("chl.plugin");
