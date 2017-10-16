/**
 * chl - Bootstrap 3 Based Admin Toolkit
 * @version v0.1.1
 * @author onokumus
 */
'use strict';

var appMaster = {

    _body: $('body'),
    _logo: $('.sidebar__brand__logo'),

    responsive: function() {
        $(window).width() < 768 ? appMaster._body.removeClass('sidebar-mini sidebar-is-open').addClass('sidebar-is-closed') : appMaster._body.addClass('sidebar-is-open').removeClass('sidebar-is-closed');
    },


    sidebar: function(){

        $('#sidebar-hide').on('click', function (event) {
            event.preventDefault();
            appMaster._body.toggleClass('sidebar-is-open sidebar-is-closed');
            appMaster._stopMetisMenu();
        });

        $('#sidebar-mini').on('click', function (event) {
            event.preventDefault();
            appMaster._body.toggleClass('sidebar-mini');
            appMaster._stopMetisMenu();
            appMaster._changeLogo();
        });


    },

    _stopMetisMenu: function(){
        $('.sidebar__nav').find('li').removeClass('active');
        $('.sidebar__nav').find('a').attr('aria-expanded', false);
        // $('.sidebar__nav').find('a').removeClass('has-arrow');
        $('.sidebar__nav').find('ul.collapse').removeClass('in').attr('aria-expanded', false);
    },

    _changeLogo: function(){
        appMaster._body.hasClass("sidebar-mini") ? appMaster._logo.attr('src', appMaster._logo.data('collapse')) : appMaster._logo.attr('src', appMaster._logo.data('expand'));
    },

    dropdown: function(){
        $(".dropdown").hover(
            function() {
                $('.dropdown-menu', this).not('.in .dropdown-menu').stop(true,true).slideDown("400");
                $(this).toggleClass('open');
            },
            function() {
                $('.dropdown-menu', this).not('.in .dropdown-menu').stop(true,true).slideUp("400");
                $(this).toggleClass('open');
            }
        );
    }
}


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




$(document).ready(function() {
    appMaster.responsive();
});