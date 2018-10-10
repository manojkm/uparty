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
//Make sure jQuery has been loaded before app.js
if (typeof jQuery === 'undefined') {
    throw new Error('Theme\'s JavaScript requires jQuery');
}

var appMaster = {

    _body: $('body'),
    _logo: $('.sidebar__brand__logo'),
    _header: $('.master-header'),
    _sidebar: $('.sidebar'),
    _sidebarNav: $('.sidebar nav.sidebar__nav'),
    _sidebarList: $('.sidebar .sidebar__list'),
    _sidebarFooterNav: $('.sidebar .sidebar-footer nav.sidebar-footer__nav'),
    _sidebarItem: $('.sidebar__list > .sidebar__item'),
    _sideMini: $("[data-side='mini']"),
    _sidebarMiniIsOpen: false,
    _sideHide: $("[data-side='hide']"),
    _aside: $("[data-aside='show']"),
    _asideIsOpen: false,
    _overlay: $('.overlay'),
    _overlayIsOpen: false,
    _tooltip: $("[data-toggle='tooltip']"),
    _popover: $("[data-toggle='popover']"),
    _textareaCounter: $("[data-toggle='counter']"),
    _formCtrl: $('.form-control'),
    _cardClose: $("[data-card='close']"),
    _cardCollapse: $("[data-card='collapse']"),
    _cardFullscreen: $("[data-card='fullscreen']"),



    // Add slimScroll to sidebar menus
    // This requires you to load the slimScroll plugin in every page before app.js
    slimscroll: function () {

        // Adapted from https://github.com/ludusrusso/pp-robot-2018/blob/master/server_ws/src/laser_bot_battle/scripts/static/js/app.js

        function set_slimscroll() {

            // Make sure the section.app tag has the .sidebar-fixed class
            if (!$("section.app").hasClass("sidebar-fixed")) {
                if (typeof $.fn.slimScroll != 'undefined') {
                    $(".slim-scroll").slimScroll({destroy: true}).height("auto");
                }
                return;
            } else if (typeof $.fn.slimScroll == 'undefined') {
                throw new Error('Please install slimScroll plugin! https://github.com/rochal/jQuery-slimScroll');
            }

            // Enable slimScroll for fixed sidebar layout
            if (typeof $.fn.slimScroll != 'undefined') {

                // Destroy if it exists
                $(".slim-scroll").slimScroll({destroy: true}).height("auto");

                // Add slimScroll
                var sidebar_brand_height = ($('.sidebar__brand').length) ? $('.sidebar__brand').height() : 0;
                var sidebar_footer_height = ($('.sidebar-footer').length) ? $('.sidebar-footer').height() : 0;

                var options = {
                    // height: 'auto',
                    // height: ($(window).height() - sidebar_brand_height - sidebar_footer_height) + "px",
                    height: '100%',
                    distance: '0',
                    size: '5px',
                    railOpacity: 0.3,
                    position: 'right'
                };

                $('.slim-scroll').each(function(){
                    var $self = $(this), $slimResize;
                    $self.slimScroll(options);

                    $(window).on('resize', function () {
                        clearTimeout($slimResize);
                        $slimResize = setTimeout(function(){$self.slimScroll(options);}, 500);
                    });
                });


                // Scroll to currently active menu on page load if data-scroll-to-active is true
                if ($('.sidebar__nav').data('scroll-to-active') === true) {
                    var position;
                    if ($(".sidebar__nav").find('li.active').parents('li').length > 0) {
                        position = $(".sidebar__nav").find('li.active').parents('li').last().position();
                    }
                    else {
                        position = $(".sidebar__nav").find('li.active').position();
                    }

                    // var height = position.top - sidebar_brand_height;

                    setTimeout(function () {
                        //$('.sidebar__nav').scrollTop(position.top);
                        $('.sidebar__nav').stop().animate({scrollTop: position.top}, 500);
                        $('.sidebar__nav').data('scroll-to-active', 'false');
                    }, 500);
                }

            }
        }

        set_slimscroll();

        // var $slimResize = null;
        // $(window).on('resize', function () {
        //     clearTimeout($slimResize);
        //     $slimResize = setTimeout(function () {
        //         set_slimscroll();
        //     }, 500);
        // });

    },

    responsive: function () {

        function set_sidebar() {
            // $(window).width() <= 767 ? appMaster._body.removeClass('sidebar-mini sidebar-is-open').addClass('sidebar-is-closed sidebar-mobile') : appMaster._body.addClass('sidebar-is-open').removeClass('sidebar-is-closed sidebar-mobile');
            if ($(window).width() <= 767) {
                appMaster._body.removeClass('sidebar-mini sidebar-is-open').addClass('sidebar-is-closed sidebar-mobile');
                if (appMaster._sidebarMiniIsOpen) {
                    $(appMaster._sideMini).click();
                }
            } else {
                appMaster._body.addClass('sidebar-is-open').removeClass('sidebar-is-closed sidebar-mobile')
            }

            if ($(window).width() >= 768 && $(window).width() <= 991) {
                if (!appMaster._sidebarMiniIsOpen) {
                    $(appMaster._sideMini).click();
                }
            }

            if ($(window).width() >= 992) {
                if (appMaster._sidebarMiniIsOpen) {
                    $(appMaster._sideMini).click();
                }
            }
        }

        set_sidebar();

        $(window).on('resize', function () {
            set_sidebar();
        });

    },

    sidebar: function () {

        $(appMaster._sideHide).on('click', function (event) {
            event.preventDefault();
            $(this).toggleClass('collapsed');
            // appMaster._body.removeClass('sidebar-mini aside-is-open').toggleClass('sidebar-is-open sidebar-is-closed');
            appMaster._body.toggleClass('sidebar-is-open sidebar-is-closed');

            if (appMaster._asideIsOpen) {
                $(appMaster._aside).click();
            }
            if (appMaster._sidebarMiniIsOpen) {
                //$(appMaster._sideMini).click();
            }
            appMaster._stopMetisMenu([appMaster._sidebarNav, appMaster._sidebarFooterNav]);
        });

        $(appMaster._sideMini).on('click', function (event) {
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
                appMaster._stopMetisMenu(appMaster._sidebarFooterNav);
                console.log("Sidebar mini is", appMaster._sidebarMiniIsOpen);
            }

        });

        function set_sidebar_mini_hover() {
            var removeShow = null;
            $(appMaster._sidebarItem).hover(function () {
                // Adapted from https://codepen.io/vivianong/pen/DzimH
                if (appMaster._sidebarMiniIsOpen) {
                    var $t;
                    $t = $(this);
                    appMaster._sidebarItem.removeClass('show');
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

        // set_sidebar_mini_hover();

    },

    sidebar_mini_navigation: function () {

        $('.navigation-main').on('mouseenter', 'li.sidebar__item', function () {
            var $listItem = $(this);
            if (appMaster._sidebarMiniIsOpen && appMaster._sidebar.hasClass('popout')) {

                // Stop metisMenu opening the menu for the particular list
                $(this).children('a').attr("aria-disabled", "true");

                // Reset
                $("ul#menu-popout").slimScroll({destroy: true}).removeAttr("style");
                $(appMaster._sidebarNav).children('#menu-popout-wrap').remove();
                $('.show', '.navigation-main').removeClass('show');

                // Clone and adjustments
                var listTemplate = $listItem.clone();
                $('> a.sidebar__link > span.sidebar__link-icon', listTemplate).remove();
                $('> a.sidebar__link', listTemplate).removeAttr("aria-disabled");
                $(listTemplate).addClass("show");

                if ($listItem.hasClass('has-child')) {
                    $('> a.sidebar__link', listTemplate).attr('aria-expanded', 'true');
                    $('> ul.sidebar__child', listTemplate).removeAttr("style");
                    $(listTemplate).addClass("active"); // Required by metisMenu for parent li element to open by default
                }

                // Position
                var sidebar_brand_height = ($('.sidebar__brand').length) ? $('.sidebar__brand').height() : 0;

                var fromTop;
                if ($listItem.css("border-top")) {
                    fromTop = sidebar_brand_height + $listItem.position().top + parseInt($listItem.css("border-top"), 10);
                }
                else {
                    fromTop = sidebar_brand_height + $listItem.position().top;
                }

                // Calculate max height
                var menuTop;
                var winHeight;
                var popOutMenuHeight = '';

                if ($listItem.hasClass('has-child') && $listItem.hasClass('sidebar__item')) {
                    menuTop = fromTop;
                    winHeight = $(window).height() - $(appMaster._header).height();
                    popOutMenuHeight = winHeight - menuTop + $listItem.height() - 15;
                }

                // Create wrapper div for popout menu
                var iDiv = document.createElement("div");
                iDiv.id = 'menu-popout-wrap';
                iDiv.className = '';
                $(appMaster._sidebarNav).append(iDiv);

                // Now create UL and append to the wrapper
                var iUl = document.createElement('ul');
                iUl.id = 'menu-popout';
                iUl.className = 'sidebar__list sidebar__list-popout metismenu';

                var iWrap = document.getElementById(iDiv.id);
                $(iWrap).css({'position': 'fixed', 'top': fromTop, 'max-height': popOutMenuHeight}).append(iUl);

                // Then append the whole list template onto the UL
                var popOut = document.getElementById(iUl.id);
                $(popOut).css({'max-height': popOutMenuHeight}).append(listTemplate);

                if ($listItem.hasClass('has-child') && $listItem.hasClass('sidebar__item')) {

                    // Initialize metisMenu
                    $(popOut).metisMenu({
                        parentTrigger: '.has-child'
                    });

                    // Initialize slimScroll
                    $(popOut).slimScroll({
                        height: '',
                        distance: '0',
                        size: '5px',
                        railOpacity: 0.3,
                        position: 'right'
                    });
                }

                $listItem.addClass('show');
            }
        }).on('mouseleave', 'li.sidebar__item', function () {
            var $listItem = $(this);
            if (appMaster._sidebarMiniIsOpen && appMaster._sidebar.hasClass('popout')) {
                $listItem.children('a').removeAttr("aria-disabled");
            }
        }).on('click', 'li.sidebar__item', function (e) {
        });

        var removeShow = null;
        $(appMaster._sidebarNav).on('mouseenter', function () {
            if (appMaster._sidebarMiniIsOpen && appMaster._sidebar.hasClass('popout') && appMaster._body.hasClass('sidebar-mini')) {
                return clearInterval(removeShow);
            }
        });

        $(appMaster._sidebarNav).on('mouseleave', function () {
            if (appMaster._sidebarMiniIsOpen && appMaster._sidebar.hasClass('popout')) {
                return removeShow = setTimeout((function () {
                    $("ul#menu-popout").slimScroll({destroy: true}).removeAttr("style");
                    $(appMaster._sidebarNav).children('#menu-popout-wrap').remove();
                    $('.show', '.navigation-main').removeClass('show');
                }), 1000);
            }
        });

        // To debug: jQuery('.sidebar__list > li:nth-child(10)').trigger('mouseenter')
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
                    $(appMaster._sideMini).click();
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
                    $(appMaster._sideMini).click();
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
        $(appMaster._cardClose).on('click', function (event) {
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

        $(appMaster._cardCollapse).on('click', function (event) {
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

        $(appMaster._cardFullscreen).on('click', function (event) {
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
                appMaster._sidebarItem.removeClass('show');
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
        $(appMaster._textareaCounter).keyup(function () {
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

        $(appMaster._formCtrl).on('mouseover', function () {
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

    expand_collapse: function () {
        $('.expand_all').on('click', function (e) {
            e.preventDefault();
            $('#accordion-expand-collapse').find('.panel-collapse').collapse('show');
        });

        $('.collapse_all').on('click', function (e) {
            e.preventDefault();
            $('#accordion-expand-collapse').find('.panel-collapse').collapse('hide');
        });
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
    appMaster.slimscroll();
    appMaster.sidebar();
    // appMaster.update();
    appMaster.sidebar_mini_navigation();
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
    appMaster.expand_collapse();
    appMaster.responsive();
});


// TODO, just visit view-source:http://jaybabani.com/complete-admin/v4.2/preview/assets/js/scripts.js