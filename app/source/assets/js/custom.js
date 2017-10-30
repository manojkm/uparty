'use strict';
if (typeof jQuery === 'undefined') {
    throw new Error('Theme\'s JavaScript requires jQuery');
}


var appMaster = {

    _body: $('body'),
    _logo: $('.sidebar__brand__logo'),
    _side_nav: $('.sidebar__nav , .sidebar__footer-nav'),
    _aside: $("[data-aside='show']"),
    _mini: $("[data-side='mini']"),
    _hide: $("[data-side='hide']"),
    _overlay: $('.overlay'),
    _tooltip:$("[data-toggle='tooltip']"),

    responsive: function () {
        $(window).width() < 768 ? appMaster._body.removeClass('sidebar-mini sidebar-is-open').addClass('sidebar-is-closed') : appMaster._body.addClass('sidebar-is-open').removeClass('sidebar-is-closed');
    },


    sidebar: function () {

        $(appMaster._hide).on('click', function (event) {
            event.preventDefault();
            $(this).toggleClass('collapsed');
            appMaster._body.removeClass('sidebar-mini aside-is-open').toggleClass('sidebar-is-open sidebar-is-closed');
            appMaster._aside.addClass('collapsed');
            appMaster._mini.removeClass('collapsed');
            appMaster._stopMetisMenu();
        });

        $(appMaster._mini).on('click', function (event) {
            event.preventDefault();
            $(this).toggleClass('collapsed');
            appMaster._body.toggleClass('sidebar-mini').removeClass('aside-is-open');
            appMaster._aside.addClass('collapsed');
            appMaster._stopMetisMenu();
            appMaster._changeLogo();
        });

    },

    aside: function () {

        var asideisOpen = false;

        appMaster._aside.on('click', function (event) {
            event.preventDefault();
            $(this).toggleClass('collapsed');
            // Adapted from https://codepen.io/j_holtslander/pen/XmpMEp TODO, nice adaption, so pls learn and correct the above methods
            if (asideisOpen == false) {
                appMaster._body.addClass('aside-is-open sidebar-mini' );
                appMaster._mini.addClass('collapsed');
                appMaster._overlay.show();
                asideisOpen = true;
            }
            else {
                appMaster._body.removeClass('aside-is-open sidebar-mini');
                appMaster._mini.removeClass('collapsed');
                appMaster._overlay.hide();
                asideisOpen = false;
            }

            /*    $(this).toggleClass('collapsed');
             if (appMaster._body.hasClass('sidebar-mini') || appMaster._body.hasClass('sidebar-is-closed')) {
             appMaster._body.toggleClass('aside-is-open');
             }

             else if (!appMaster._body.hasClass('sidebar-mini') || !appMaster._body.hasClass('sidebar-is-open')) {
             appMaster._body.toggleClass('aside-is-open sidebar-mini');
             appMaster._mini.addClass('collapsed');
             }*/
            appMaster._stopMetisMenu();
        });
    },


    _stopMetisMenu: function () {
        $(appMaster._side_nav).find('li').removeClass('active');
        $(appMaster._side_nav).find('a').attr('aria-expanded', false);
        $(appMaster._side_nav).find('ul.collapse').removeClass('in').attr('aria-expanded', false);
    },

    _changeLogo: function () {
        appMaster._body.hasClass("sidebar-mini") ? appMaster._logo.attr('src', appMaster._logo.data('collapse')) : appMaster._logo.attr('src', appMaster._logo.data('expand'));
    },

    dropdown: function () {

        // On HOver
       /* $(".dropdown").hover(
            function () {
                $('.dropdown-menu', this).not('.in .dropdown-menu').stop(true, true).slideDown("400");
                $(this).toggleClass('open');
            },
            function () {
                $('.dropdown-menu', this).not('.in .dropdown-menu').stop(true, true).slideUp("400");
                $(this).toggleClass('open');
            }
        );*/

        // On click Adapted from https://codepen.io/adammacias/pen/dozPVQ
        $('.dropdown').on('show.bs.dropdown', function(e){
            $(this).find('.dropdown-menu').first().stop(true, true).slideDown(300);

        });

        $('.dropdown').on('hide.bs.dropdown', function(e){
            $(this).find('.dropdown-menu').first().stop(true, true).slideUp(200);
        });

        // Sub menu

        $('.dropdown-menu a.dropdown-toggle').on('click', function(e) {

            if (!$(this).next().hasClass('show')) {
                $(this).parents('.dropdown-menu').first().find('.show').removeClass("show").prev('.dropdown-toggle').toggleClass('active');
            }


            var $subMenu = $(this).next(".dropdown-menu");
            $subMenu.toggleClass('show').prev('.dropdown-toggle').toggleClass('active');
            // $(this).toggleClass('active');

            $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function(e) {
                $('.dropdown-submenu .show').removeClass("show");
                $('.dropdown-menu a.dropdown-toggle').removeClass("active");
            });

            return false;
        });
    },

    tooltip: function () {
        $(appMaster._tooltip).tooltip({ trigger: "hover" });
        $(appMaster._tooltip).on('click', function () {
            $(this).tooltip('hide');
        });
    }


};


var Pluggin = {
    metismenu: function metismenu(element) {
        if ($.fn.metisMenu) {
            $(element).metisMenu();
        } else {
            throw new Error('First install metisMenu plugin! https://github.com/onokumus/metisMenu');
        }
    }

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
    appMaster.tooltip();
});


