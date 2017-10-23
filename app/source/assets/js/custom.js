'use strict';
if (typeof jQuery === 'undefined') {
    throw new Error('Theme\'s JavaScript requires jQuery');
}

var appMaster = {

    _body: $('body'),
    _logo: $('.sidebar__brand__logo'),
    _aside: $("[data-aside='show']"),
    _mini: $("[data-side='mini']"),

    responsive: function () {
        $(window).width() < 768 ? appMaster._body.removeClass('sidebar-mini sidebar-is-open').addClass('sidebar-is-closed') : appMaster._body.addClass('sidebar-is-open').removeClass('sidebar-is-closed');
    },


    sidebar: function () {

        $("[data-side='hide']").on('click', function (event) {
            event.preventDefault();
            $(this).toggleClass('collapsed');
            appMaster._body.removeClass('sidebar-mini aside-is-open').toggleClass('sidebar-is-open sidebar-is-closed');
            appMaster._aside.addClass('collapsed');
            appMaster._mini.removeClass('collapsed');
            appMaster._stopMetisMenu();
        });

        $("[data-side='mini']").on('click', function (event) {
            event.preventDefault();
            $(this).toggleClass('collapsed');
            appMaster._body.toggleClass('sidebar-mini').removeClass('aside-is-open');
            appMaster._aside.addClass('collapsed');
            appMaster._stopMetisMenu();
            appMaster._changeLogo();
        });

    },

    aside: function () {
        appMaster._aside.on('click', function (event) {
            event.preventDefault();
            $(this).toggleClass('collapsed');

            if (appMaster._body.hasClass('sidebar-mini') || appMaster._body.hasClass('sidebar-is-closed')) {
                appMaster._body.toggleClass('aside-is-open');
            }

            else if (!appMaster._body.hasClass('sidebar-mini') || !appMaster._body.hasClass('sidebar-is-open')) {
                appMaster._body.toggleClass('aside-is-open sidebar-mini');
            }

            appMaster._stopMetisMenu();
        });
    },


    _stopMetisMenu: function () {
        $('.sidebar__nav').find('li').removeClass('active');
        $('.sidebar__nav').find('a').attr('aria-expanded', false);
        // $('.sidebar__nav').find('a').removeClass('has-arrow');
        $('.sidebar__nav').find('ul.collapse').removeClass('in').attr('aria-expanded', false);
    },

    _changeLogo: function () {
        appMaster._body.hasClass("sidebar-mini") ? appMaster._logo.attr('src', appMaster._logo.data('collapse')) : appMaster._logo.attr('src', appMaster._logo.data('expand'));
    },

    dropdown: function () {
        $(".dropdown").hover(
            function () {
                $('.dropdown-menu', this).not('.in .dropdown-menu').stop(true, true).slideDown("400");
                $(this).toggleClass('open');
            },
            function () {
                $('.dropdown-menu', this).not('.in .dropdown-menu').stop(true, true).slideUp("400");
                $(this).toggleClass('open');
            }
        );
    }
};


var Pluggin = {
    metismenu: function metismenu(element) {
        if ($.fn.metisMenu) {
            $(element).metisMenu();
        } else {
            throw new Error('First install metisMenu plugin! https://github.com/onokumus/metisMenu');
        }
    },

};

$(document).on("app.plugin", function () {
    $("[data-plugin]").each(function () {
        Pluggin[$(this).attr("data-plugin")](this);
    });

}).trigger("app.plugin");


$(document).ready(function () {
    appMaster.responsive();
    appMaster.sidebar();
    appMaster.dropdown();
    appMaster.aside();
});