// ================================================================================================
// File Name: app.js
// Description: Template related app JS.
// ----------------------------------------------------------------------------------------------
// Item Name: xxx - Responsive Admin Theme
// Version: 1.2
// Author: MANOJ
// Author URL: http://www.themeforest.net/user/xxx
// ================================================================================================

'use strict';
if (typeof jQuery === 'undefined') {
    throw new Error('Theme\'s JavaScript requires jQuery');
}

var appMaster = {

    _body: $('body'),
    _logo: $('.sidebar__brand__logo'),

    _sidebar_nav: $('.sidebar nav.sidebar__nav'),
    _sidebar_footer_nav: $('.sidebar .sidebar-footer nav.sidebar-footer__nav'),
    _sidebar_item: $('.sidebar__list > .sidebar__item'),

    _side_mini: $("[data-side='mini']"),
    _sidebarMiniIsOpen: false,

    _side_hide: $("[data-side='hide']"),

    _aside: $("[data-aside='show']"),
    _asideIsOpen: false,

    _overlay: $('.overlay'),
    _overlayIsOpen: false,

    _tooltip: $("[data-toggle='tooltip']"),
    _popover: $("[data-toggle='popover']"),
    _textarea_counter: $("[data-toggle='counter']"),
    _formctrl: $('.form-control'),
    _card_close: $("[data-card='close']"),
    _card_collapse: $("[data-card='collapse']"),
    _card_fullscreen: $("[data-card='fullscreen']"),


    manualScroller: {

        obj: null,

        init: function() {
            this.obj = new PerfectScrollbar('.sidebar__nav', {
                suppressScrollX: true,
                wheelSpeed: 2,
                wheelPropagation: true,
                minScrollbarLength: 20
            });

            this.obj.update();
        },

        update: function() {
            // Scroll to currently active menu on page load if data-scroll-to-active is true
            if ($('.sidebar__nav').data('scroll-to-active') === true) {
                var position;
                var topbar = $(".sidebar__brand").height();
                if ($(".sidebar__nav").find('li.active').parents('li').length > 0) {
                    position = $(".sidebar__nav").find('li.active').parents('li').last().position();
                }
                else {
                    position = $(".sidebar__nav").find('li.active').position();
                }

                // var height = position.top - topbar;

                setTimeout(function () {
                    //$('.sidebar__nav').scrollTop(position.top);
                    $('.sidebar__nav').stop().animate({scrollTop: position.top}, 300);
                    $('.sidebar__nav').data('scroll-to-active', 'false');
                }, 300);
            }
            this.obj.update();
        },


    },

    update: function (){
        this.manualScroller.update();
    },


    responsive: function () {

        function set_sidebar() {
            $(window).width() < 768 ? appMaster._body.removeClass('sidebar-mini sidebar-is-open').addClass('sidebar-is-closed sidebar-mobile') : appMaster._body.addClass('sidebar-is-open').removeClass('sidebar-is-closed sidebar-mobile');
            // appMaster.manualScroller.init()
        }

        set_sidebar();
        $(window).resize(function () {
            set_sidebar();
        });

    },

    ffffffff: function () {
        var menuObj = this;


        $('body').on('DOMNodeInserted', '#menu-popout-clone', function () {
            $(this).metisMenu();
            // https://stackoverflow.com/questions/29972399/initialising-select2-created-dynamically
        });

        $('.navigation-main').on('mouseenter', 'li', function() {
            //alert("I am an alert box!");
            var $this = $(this);

            $('.hover', '.navigation-main').removeClass('hover');

            if( appMaster._body.hasClass('sidebar-mini')){

                $('.sidebar__nav').children('span.sidebar__link-title').remove();
                $('.sidebar__nav').children('a.menu-title').remove();
                $('.sidebar__nav').children('ul.menu-popout').remove();

                // Title
                var menuTitle = $this.clone(), tempTitle, tempLink;
                //var menuTitle = $this.find('span.sidebar__link-title').clone(), tempTitle, tempLink;

                if(!$this.hasClass('has-child') ){
                    tempTitle = $this.find('span.sidebar__link-title').text();
                    tempLink = $this.children('a').attr('href');
                    if(tempTitle !== ''){
                        menuTitle = $("<a>");
                        menuTitle.attr("href", tempLink);
                        menuTitle.attr("title", tempTitle);
                        menuTitle.text(tempTitle);
                        menuTitle.addClass("menu-title");
                    }
                }

                var fromTop;

                if($this.css( "border-top" )){
                    fromTop = $this.position().top + parseInt($this.css( "border-top" ), 10);
                }
                else{
                    fromTop = $this.position().top;
                }

                $('#menu-popout-clone').css({ position:'fixed', top: fromTop}).append(menuTitle);


                //if(appMaster._body.data('menu') !== 'vertical-compact-menu'){
                   /* menuTitle.appendTo('.sidebar__nav').css({
                        position:'fixed',
                        top : fromTop,
                    });*/
                //}

                // Content
                if($this.hasClass('has-child') && $this.hasClass('sidebar__item')) {
                    var menuContent = $this.children('ul:first');
                    menuObj.adjustSubmenu($this);
                }

            }

            $this.addClass('hover');

        }).on('mouseleave', 'li', function() {
           //$(this).removeClass('hover');
        });

        $('.sidebar__nav').on('mouseleave', function(){
            if( appMaster._body.hasClass('sidebar-mini') ){
                $('.sidebar__nav').children('span.sidebar__link-title').remove();
                $('.sidebar__nav').children('a.menu-title').remove();
                $('.sidebar__nav').children('ul.menu-popout').remove();
                $('.hover', '.navigation-main').removeClass('hover');
            }
        });

        // If list item has sub menu items then prevent redirection.
        $('.sidebar__list .sidebar__item.has-child > a').on('click',function(e){
            e.preventDefault();
        });

    },


    adjustSubmenu: function ( $menuItem ) {
        //alert("I am an alert box!");

        var menuHeaderHeight, menutop, topPos, winHeight,
            bottomOffset, subMenuHeight, popOutMenuHeight, borderWidth, scroll_theme,
            $submenu = $menuItem.children('ul:first'),
            ul = $submenu.clone(true);

        menuHeaderHeight = $('.sidebar__brand').height();
        menutop          = $menuItem.position().top;
        winHeight        = $(window).height() - $('.master-header').height();
        borderWidth      = 0;
        subMenuHeight    = $submenu.height();

        if(parseInt($menuItem.css( "border-top" ),10) > 0){
            borderWidth = parseInt($menuItem.css( "border-top" ),10);
        }

        popOutMenuHeight = winHeight - menutop - $menuItem.height() - 30;
        // scroll_theme     = ($('.main-menu').hasClass('menu-dark')) ? 'light' : 'dark';

        topPos = menutop + $menuItem.height() + borderWidth;

        //ul.removeAttr('class aria-expanded').attr({ 'data-plugin': "metismenu"}).addClass('sidebar__list metismenu list-unstyled menu-popout').appendTo('.sidebar__nav').css({
        ul.addClass('menu-popout').appendTo('.sidebar__nav').css({
            'top' : topPos,
            'position' : 'fixed',
            'max-height': popOutMenuHeight
        });

        //$('#menu-popout-clone').css({ 'position':'fixed', 'top': topPos, 'max-height': popOutMenuHeight}).append(ul);


        // for bug jQuery('.sidebar__list > li:nth-child(3)').trigger('mouseenter')

        // $('.main-menu-content > ul.menu-content').perfectScrollbar({
        //     theme:scroll_theme,
        // });
    },


    sidebar: function () {

        $(appMaster._side_hide).on('click', function (event) {
            event.preventDefault();
            $(this).toggleClass('collapsed');
            // appMaster._body.removeClass('sidebar-mini aside-is-open').toggleClass('sidebar-is-open sidebar-is-closed');
            appMaster._body.toggleClass('sidebar-is-open sidebar-is-closed');

            if (appMaster._asideIsOpen) {
                $(appMaster._aside).click();
            }
            if (appMaster._sidebarMiniIsOpen) {
                //$(appMaster._side_mini).click();
            }
            appMaster._stopMetisMenu([appMaster._sidebar_nav, appMaster._sidebar_footer_nav]);
        });

        $(appMaster._side_mini).on('click', function (event) {
            event.preventDefault();
            if (appMaster._sidebarMiniIsOpen) {
                $(this).removeClass('collapsed');
                appMaster._body.removeClass('sidebar-mini');
                appMaster._sidebarMiniIsOpen = false;
                console.log("Sidebar mini is", appMaster._sidebarMiniIsOpen);

            }
            else {
                $(this).addClass('collapsed');
                appMaster._body.addClass('sidebar-mini');
                appMaster._changeLogo();
                appMaster._sidebarMiniIsOpen = true;
                appMaster._stopMetisMenu(appMaster._sidebar_footer_nav);
                console.log("Sidebar mini is", appMaster._sidebarMiniIsOpen);
            }

        });

        function set_sidebar_mini_hover() {
            var removeShow = null;
            $(appMaster._sidebar_item).hover(function () {
                //Adapted from https://codepen.io/vivianong/pen/DzimH
                if (appMaster._sidebarMiniIsOpen) {
                    var $t;
                    $t = $(this);
                    appMaster._sidebar_item.removeClass('show');
                    $t.addClass('show');
                    if (!appMaster._overlayIsOpen) {
                        appMaster._toggleOverlay();
                    }
                    return clearInterval(removeShow);
                }

            }, function () {
                if (appMaster._sidebarMiniIsOpen) {
                    var $t;
                    $t = $(this);
                    return removeShow = setTimeout((function () {
                        $t.removeClass('show');
                        if (appMaster._overlayIsOpen && !appMaster._asideIsOpen) {
                            return $(appMaster._overlay).click();
                        }

                    }), 1000);
                }

            });
        }

        set_sidebar_mini_hover();

        //
        // $('.sidebar nav.sidebar__nav .sidebar__item.has-child a').on('click', function () {
        //     // alert("I am an alert box!");
        //     appMaster.manualScroller.update()
        // });


    },
    aside: function () {
        var sidebarMiniIsOpenedByAside = false;
        appMaster._aside.on('click', function (event) {
            event.preventDefault();
            // Adapted from https://codepen.io/j_holtslander/pen/XmpMEp TODO, nice adaption, so pls learn and correct the above methods
            if (appMaster._asideIsOpen) {
                $(this).addClass('collapsed');
                appMaster._body.removeClass('aside-is-open');
                appMaster._toggleOverlay();

                if (sidebarMiniIsOpenedByAside) {
                    $(appMaster._side_mini).click();
                    sidebarMiniIsOpenedByAside = false;
                    console.log("Sidebar mini by aside is", sidebarMiniIsOpenedByAside);
                }

                appMaster._asideIsOpen = false;
                console.log("Aside is", appMaster._asideIsOpen);
            }
            else {
                $(this).removeClass('collapsed');
                appMaster._body.addClass('aside-is-open');
                if (!appMaster._sidebarMiniIsOpen) {
                    $(appMaster._side_mini).click();
                    sidebarMiniIsOpenedByAside = true;
                    console.log("Sidebar mini by aside is", sidebarMiniIsOpenedByAside);
                }
                appMaster._toggleOverlay();
                appMaster._asideIsOpen = true;
                console.log("Aside is", appMaster._asideIsOpen);
            }
            // appMaster._stopMetisMenu();
        });
    },

    card: function () {
        $(appMaster._card_close).on('click', function (event) {
            event.preventDefault();
            // $(this).closest(".card").hide("slow");
            // $(this).closest(".card").fadeOut();
            $(this).closest(".card").addClass('animated fadeOut').animate({
                height: 0,
                opacity: 0,
                margin: 0,
                padding: 0
            }).fadeToggle(500, "swing", function () {
                this.remove();
            });

            // $(this).closest(".card").animate({
            //     height: 0,
            //     opacity: 0,
            //     margin: 0,
            //     padding: 0
            // }, 'slow', function(){
            //     $(this).hide();
            // });

        });

        $(appMaster._card_collapse).on('click', function (event) {
            event.preventDefault();

            var $this = $(this);
            if (!$this.hasClass('card-collapsed')) {
                $this.parents('.card').find('.card-body, .card-footer').slideUp();
                $this.addClass('card-collapsed');
                $this.find('i').removeClass('fa fa-chevron-up').addClass('fa fa-chevron-down');
            } else {
                $this.parents('.card').find('.card-body, .card-footer').slideDown();
                $this.removeClass('card-collapsed');
                $this.find('i').removeClass('fa fa-chevron-down').addClass('fa fa-chevron-up');
            }
        });

        $(appMaster._card_fullscreen).on('click', function (event) {
            event.preventDefault();
            var $this = $(this);

            if (!$this.hasClass('fullscreen-enabled')) {
                $this.parents('.card').addClass('card-fullscreen animated fadeIn');
                $this.parents('.card').find('.card-body').slideDown();
                $this.addClass('fullscreen-enabled');
                $this.find('i').removeClass('fa fa-expand').addClass('fa fa-compress');
                // $this.parents('.card').find("[data-card=close], [data-card=collapse], [data-toggle=dropdown]").addClass('d-none');
                $this.parents('.card').find('.card__actions').children('a.card__actions-item:not([data-card=fullscreen])').addClass('d-none');
            } else {
                $this.parents('.card').removeClass('card-fullscreen animated fadeIn');
                $this.removeClass('fullscreen-enabled');
                $this.find('i').removeClass('fa fa-compress').addClass('fa fa-expand');
                // $this.parents('.card').find("[data-card=close], [data-card=collapse], [data-toggle=dropdown]").removeClass('d-none');
                $this.parents('.card').find('.card__actions').children('a.card__actions-item').removeClass('d-none');
            }


            // if ($this.children('i').hasClass('fa-expand'))
            // {
            //     $this.children('i').removeClass('fa-expand');
            //     $this.children('i').addClass('fa-compress');
            // }
            // else if ($this.children('i').hasClass('fa-compress'))
            // {
            //     $this.children('i').removeClass('fa-compress');
            //     $this.children('i').addClass('fa-expand');
            // }
            // $(this).closest('.card').toggleClass('card-fullscreen animated fadeIn');

        });


    },

    overlay: function () {
        $(appMaster._overlay).click(function () {

            if (appMaster._asideIsOpen) {
                $(appMaster._aside).click();
            }

            if (appMaster._sidebarMiniIsOpen) {
                appMaster._sidebar_item.removeClass('show');
            }
            appMaster._toggleOverlay();
        });
    },

    _toggleOverlay: function () {
        //Adapted from https://codepen.io/vdecree/pen/ZYMpKz

        // if opened is true, then we will want to close the overlay as it will mean its already visible.
        if (appMaster._overlayIsOpen) {
            $(appMaster._overlay).fadeOut(250, function () {
                $(this).hide();
                appMaster._overlayIsOpen = false;
                console.log("Overlay is", appMaster._overlayIsOpen);
            });
        }
        // if false, then we want to open the overlay.
        else {
            $(appMaster._overlay).fadeIn(250, function () {
                $(this).show();
                appMaster._overlayIsOpen = true;
                console.log("Overlay is", appMaster._overlayIsOpen);
            });
        }

    },

    _stopMetisMenu: function (hide_element) {
        $(hide_element).each(function () {
            $(this).find('li').removeClass('active')
        });
        $(hide_element).each(function () {
            $(this).find('a').attr('aria-expanded', false)
        });
        $(hide_element).each(function () {
            $(this).find('ul.collapse').removeClass('in').attr('aria-expanded', false)
        });
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
        $('.dropdown').on('show.bs.dropdown', function (e) {
            $(this).find('.dropdown-menu').first().stop(true, true).slideDown(300);  // fade fadeOut(), fadeIn()

        });

        $('.dropdown').on('hide.bs.dropdown', function (e) {
            $(this).find('.dropdown-menu').first().stop(true, true).slideUp(200);
        });

        // Sub menu

        $('.dropdown-menu a.dropdown-toggle').on('click', function (e) {

            if (!$(this).next().hasClass('show')) {
                $(this).parents('.dropdown-menu').first().find('.show').removeClass("show").prev('.dropdown-toggle').toggleClass('active');
            }

            var $subMenu = $(this).next(".dropdown-menu");
            $subMenu.toggleClass('show').prev('.dropdown-toggle').toggleClass('active');
            // $(this).toggleClass('active');

            $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function (e) {
                $('.dropdown-submenu .show').removeClass("show");
                $('.dropdown-menu a.dropdown-toggle').removeClass("active");
            });

            return false;
        });
    },

    tooltip: function () {
        $(appMaster._tooltip).each(function () {
            function isValid(str) {
                return typeof str != 'undefined' && str != '' && typeof str.data == 'undefined';
            }

            var animate = $(this).data('animate');
            var color = $(this).data('color');

            var color_selector = (isValid(color)) ? ' ' + 'tooltip-' + color : '';
            var animate_selector = (isValid(animate)) ? ' ' + animate : '';

            $(this).tooltip({
                template: '<div class="tooltip' + color_selector + animate_selector + '" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
            });
        });

        $(appMaster._tooltip).click(function () {
            if ($(this).hasClass("manual")) {
                $(this).tooltip("show");
            }
        });

        $(appMaster._tooltip).mouseout(function () {
            if ($(this).hasClass("manual")) {
                $(this).tooltip("hide");
            }
        });

        $(appMaster._tooltip).click(function () {
            if ($(this).hasClass("template")) {
                console.log('<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>')
            }
        });

    },


    popover: function () {
        //TODO close button https://jsfiddle.net/vivekkupadhyay/bdkbq5sd/10/
        $(appMaster._popover).each(function () {
            function isValid(str) {
                return typeof str != 'undefined' && str != '' && typeof str.data == 'undefined';
            }

            var animate = $(this).data('animate');
            var color = $(this).data('color');

            var color_selector = (isValid(color)) ? ' ' + 'popover-' + color : '';
            var animate_selector = (isValid(animate)) ? ' ' + animate : '';

            $(this).popover({
                template: '<div class="popover' + color_selector + animate_selector + '" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
            });
        });
    },

    textarea_counter: function () {
        $(appMaster._textarea_counter).keyup(function () {
            var a = 125,
                b = $(this).val().length;
            if (b >= a) $(".character-remaining").text(" You have reached the limit");
            else {
                var c = a - b;
                $(".character-remaining").text(c + " characters left")
            }
        });
    },

    input_group_focus: function () {

        $(appMaster._formctrl).on('mouseover', function () {
            $(this).parent('.input-group').addClass("input-group-hover");
        }).on('mouseout', function () {
            $(this).parent(".input-group").removeClass("input-group-hover");
        }).on('focus', function () {
            $(this).parent('.input-group').addClass("input-group-focus");
        }).on('blur', function () {
            $(this).parent('.input-group').removeClass("input-group-focus");
        });
    },

    number_spinner: function () {
        // Adapted from https://bootsnipp.com/snippets/featured/bootstrap-number-spinner-on-click-hold
        var action;
        $(".number-spinner button").on('touchstart mousedown', function (e) {
            e.preventDefault();
            var btn = $(this);
            var input = btn.closest('.number-spinner').find('input');
            btn.closest('.number-spinner').find('button').prop("disabled", false);

            if (btn.attr('data-action') == 'increment') {
                action = setInterval(function () {
                    if (input.attr('max') == undefined || parseInt(input.val()) < parseInt(input.attr('max'))) {
                        input.val(parseInt(input.val()) + 1);
                    } else {
                        btn.prop("disabled", true);
                        clearInterval(action);
                    }
                }, 50);
            } else if (btn.attr('data-action') == 'decrement') {
                action = setInterval(function () {
                    if (input.attr('min') == undefined || parseInt(input.val()) > parseInt(input.attr('min'))) {
                        input.val(parseInt(input.val()) - 1);
                    } else {
                        btn.prop("disabled", true);
                        clearInterval(action);
                    }
                }, 50);
            }
        }).on('touchend mouseup', function (e) {
            e.preventDefault(); // TODO not sure if this needed here..
            clearInterval(action);
        }).on('touchcancel mouseout', function (e) {
            e.preventDefault(); // TODO not sure if this needed here..
            // Added to stop spinning when mouse leaves the button
            clearInterval(action);
        });

    },

    set_footer_height: function () {

        function set_heights() {
            var footerHeight = $('.master-footer').height();
            $('.content__inner-wrap').css('padding-bottom', footerHeight + 'px');
        }

        set_heights();

        $(window).resize(function () {
            set_heights();
        });

    },

    expandCollapse: function () {
        $('.expand_all').on('click', function (e) {
            e.preventDefault();
            $('#accordion-expand-collapse').find('.panel-collapse').collapse('show');
        });

        $('.collapse_all').on('click', function (e) {
            e.preventDefault();
            $('#accordion-expand-collapse').find('.panel-collapse').collapse('hide');
        });
    },

    metisMenu: function () {
        if ($.fn.metisMenu) {
            $('.metistest').metisMenu(
                {
                    parentTrigger: '.has-child' // bootstrap 4

                }
            );

        } else {
            throw new Error('Please install metisMenu plugin! https://github.com/onokumus/metisMenu');
        }
    },



};

var Pluggin = {
    metismenu: function metismenu(element) {
        if ($.fn.metisMenu) {
            $(element).metisMenu(
                {
                    parentTrigger: '.has-child' // bootstrap 4

                }
            );

        } else {
            throw new Error('Please install metisMenu plugin! https://github.com/onokumus/metisMenu');
        }
    },
    dropzone: function dropzone(element) {
        if (typeof dropzone == 'undefined') {
            throw new Error('Please install Dropzone plugin! https://github.com/enyo/dropzone/');
        }
    },

    autosize: function (element) {
        if (window.autosize !== undefined) {
            autosize($(element));
        } else {
            throw new Error('Please install autosize plugin! http://www.jacklmoore.com/autosize/');
        }
    },

};

$(document).on("app.plugin", function () {
    $("[data-plugin]").each(function () {
        Pluggin[$(this).attr("data-plugin")](this);
        // console.log($(this));
        // console.log(this);
    });

}).trigger("app.plugin");


//----------------------------------*\
// Initialize respective scripts
//----------------------------------*/

$(document).ready(function () {
    appMaster.responsive();
    appMaster.sidebar();
    // appMaster.update();
    appMaster.ffffffff();
    appMaster.metisMenu();
    appMaster.overlay();
    appMaster.dropdown();
    appMaster.aside();
    appMaster.tooltip();
    appMaster.popover();
    appMaster.input_group_focus();
    appMaster.card();
    appMaster.textarea_counter();
    appMaster.number_spinner();
    appMaster.set_footer_height();
    appMaster.expandCollapse();
});


// TODO, just visit view-source:http://jaybabani.com/complete-admin/v4.2/preview/assets/js/scripts.js