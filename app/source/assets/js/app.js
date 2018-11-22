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
    _sidebarFixed: $('.sidebar-fixed'),
    _sidebarBrand: $('.sidebar .sidebar__brand'),
    _sidebarNav: $('.sidebar nav.sidebar__nav'),
    _sidebarList: $('.sidebar .sidebar__list'),
    _sidebarFooter: $('.sidebar .sidebar-footer'),
    _sidebarFooterNav: $('.sidebar .sidebar-footer nav.sidebar-footer__nav'),
    _sidebarItem: $('.sidebar__list > .sidebar__item'),
    _sidebarHide: $("[data-toggle='sidebar']"),
    _sidebarMini: $("[data-toggle='sidebar-mini']"),
    _sidebarSlimScroll: true,
    _sidebarIsOpen: false,
    _sidebarMiniIsOpen: false,
    _exitSidebarPopOutMenuConfig: null,
    _navbarFixed: $('.header-fixed'),
    _navbarSlimScroll: true,
    _navbarToggler: $(".navbar-toggler"),
    _navbarCollapse: $('.navbar-collapse'),
    _navbarCollapsibleContentIs: false,
    _navbarMaxHeightIs: false,
    _aside: $("[data-toggle='aside']"),
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
    _wSize: $(window).width(),


    // This requires you to load the slimScroll plugin in every page before app.js
    slimScroll: function (fixedElement, slimScrollElement, options, styleAttributes) {

        // Adapted from https://github.com/ludusrusso/pp-robot-2018/blob/master/server_ws/src/laser_bot_battle/scripts/static/js/app.js

        // function set_slimscroll() {}

        // Make sure there is fixed-element
        if (!$(fixedElement).length) {
            if (typeof $.fn.slimScroll != 'undefined') {
                $(slimScrollElement).slimScroll({destroy: true}).height("auto");
            }
            return;
        } else if (typeof $.fn.slimScroll == 'undefined') {
            throw new Error('Please install slimScroll plugin! https://github.com/rochal/jQuery-slimScroll');
        }

        // Enable slimScroll for the fixed-element
        if (typeof $.fn.slimScroll != 'undefined') {

            // Destroy if it exists
            $(slimScrollElement).slimScroll({destroy: true}).height("auto");

            // Initialize slimScroll
            $(slimScrollElement).each(function () {

                /*var $self = $(this), $slimResize;

                 $self.slimScroll(options);

                 $(window).on('resize', function () {
                 clearTimeout($slimResize);
                 $slimResize = setTimeout(function () {$self.slimScroll(options);}, 500);
                 });*/

                var $self = $(this);
                $self.slimScroll(options).parent().css(JSON.parse(JSON.stringify(styleAttributes)));
            });

        }

        // Execute on load
        // set_slimscroll();

    },

    navbar: function () {
        // Enable navbar toggle
        $(appMaster._navbarToggler).on('click', function (e) {
            // e.preventDefault();
            // if($(appMaster._navbarCollapse).css('display') !== 'none'){
            // if (appMaster._navbarCollapsibleContentIs) {
            var $this = $(this);
            if ($this.hasClass('clicked')) {
                // Adapted from https://stackoverflow.com/questions/6330431/jquery-bind-double-click-and-single-click-separately
                // alert("Double click");
                e.preventDefault(); //don't do anything
            }
            else if (!$this.hasClass('clicked') && $this.hasClass('collapsed')) {
                $this.addClass('clicked');
                appMaster._navbarCollapsibleContentIs = true;
                if (appMaster._sidebarIsOpen) {
                    $(appMaster._sidebarHide).click();
                }
                if (appMaster._asideIsOpen) {
                    $(appMaster._aside).click();
                }

                // Make sure there is fixed-element
                if ($(appMaster._navbarFixed).length) {
                    appMaster._fixNavbarMaxHeight();
                }

                setTimeout(function () {
                    $this.removeClass('clicked');
                }, 500);

                console.log("Navbar collapsible content is", appMaster._navbarCollapsibleContentIs);
                Cookies.set('navbarCollapseContentIs', appMaster._navbarCollapsibleContentIs);
            }
            else if (!$this.hasClass('clicked') && !$this.hasClass('collapsed')) {
                $this.addClass('clicked');
                if (appMaster._navbarSlimScroll) {
                    appMaster._exitNavbarSlimScroll();
                }
                if (appMaster._navbarMaxHeightIs) {
                    appMaster._navbarMaxHeightIs = false;
                    console.log('Navbar max-height is', appMaster._navbarMaxHeightIs);
                }

                appMaster._navbarCollapsibleContentIs = false;
                console.log("Navbar collapsible content is", appMaster._navbarCollapsibleContentIs);
                Cookies.set('navbarCollapseContentIs', appMaster._navbarCollapsibleContentIs);

                setTimeout(function () {
                    $this.removeClass('clicked');
                }, 500);
            }
        });
    },

    // Add scrollbar to the navbar collapsible element
    _fixNavbarMaxHeight: function () {
        if (appMaster._navbarCollapsibleContentIs) {
            setTimeout((function () {
                var maxHeight = $(appMaster._navbarCollapse).eq(0).css('max-height');
                maxHeight = maxHeight.split('px')[0]; //remove px
                // alert(maxHeight);

                var currHeight = $(appMaster._navbarCollapse)[0].scrollHeight;
                // alert(currHeight);

                if (currHeight >= maxHeight) {
                    appMaster._navbarMaxHeightIs = true;
                    if (appMaster._navbarSlimScroll) {
                        appMaster._fixedNavbarSlimScroll();
                    } else {
                        $(appMaster._navbarCollapse).css('overflow-y', 'auto');
                    }
                    console.log("Navbar max-height is", appMaster._navbarMaxHeightIs);

                } else if (currHeight <= maxHeight) {
                    appMaster._navbarMaxHeightIs = false;
                    if (appMaster._navbarSlimScroll) {
                        appMaster._exitNavbarSlimScroll();
                    } else {
                        $(appMaster._navbarCollapse).css('overflow', '');
                    }
                    console.log('Navbar max-height is', appMaster._navbarMaxHeightIs);
                }
            }), 500);
        }
    },

    // Add slimScroll to fixed navbar collapsible element
    _fixedNavbarSlimScroll: function () {
        setTimeout((function () {
            var options = {
                height: '100%',
                width: '100%',
                distance: '0',
                size: '5px',
                railOpacity: 0.3,
                position: 'right',
                touchScrollStep: 50,
                alwaysVisible: false
            };

            appMaster.slimScroll($(appMaster._navbarFixed), $(appMaster._navbarCollapse), options);
        }), 0);
    },

    // Remove slimScroll from fixed navbar layout
    _exitNavbarSlimScroll: function () {
        setTimeout((function () {
            $(appMaster._navbarCollapse).slimScroll({destroy: true}).removeAttr("style");
        }), 0); // Destroy if slimScroll exists
    },


    sidebar: function () {

        // Enable sidebar toggle
        $(appMaster._sidebarHide).on('click', function (e) {
            e.preventDefault();
            if (appMaster._sidebarIsOpen) {
                $(this).removeClass('collapsed');
                appMaster._body.removeClass('sidebar-is-open').addClass('sidebar-is-closed');
                appMaster._sidebarIsOpen = false;
                if (!appMaster._asideIsOpen && appMaster._overlayIsOpen) {
                    appMaster._toggleOverlay();
                }
                appMaster._stopMetisMenu([appMaster._sidebarFooterNav]);
                console.log("Sidebar is", appMaster._sidebarIsOpen);
                Cookies.set('sidebarIs', appMaster._sidebarIsOpen);
            }
            else {
                $(this).addClass('collapsed');
                appMaster._body.removeClass('sidebar-is-closed').addClass('sidebar-is-open');
                appMaster._sidebarIsOpen = true;
                if ($(window).width() <= 767 && !appMaster._overlayIsOpen && !appMaster._sidebarMiniIsOpen) {
                    appMaster._toggleOverlay();
                }
                if (appMaster._navbarCollapsibleContentIs) {
                    $(appMaster._navbarToggler).click();
                }
                if (appMaster._asideIsOpen) {
                    $(appMaster._aside).click();
                }
                console.log('Sidebar is', appMaster._sidebarIsOpen);
                Cookies.set('sidebarIs', appMaster._sidebarIsOpen);
            }
        });

        // Enable sidebar mini toggle
        $(appMaster._sidebarMini).on('click', function (e) {
            e.preventDefault();
            if (appMaster._sidebarMiniIsOpen) {
                $(this).removeClass('collapsed');
                appMaster._body.removeClass('sidebar-mini');
                appMaster._changeLogo();
                appMaster._resetSidebarPopOutMenu();
                appMaster._sidebarMiniIsOpen = false;
                if ($(window).width() <= 767 && appMaster._sidebarIsOpen && !appMaster._overlayIsOpen && !appMaster._asideIsOpen) {
                    appMaster._toggleOverlay();
                }
                console.log("Sidebar mini is", appMaster._sidebarMiniIsOpen);
                Cookies.set('sidebarMiniIs', appMaster._sidebarMiniIsOpen);
            }
            else {
                $(this).addClass('collapsed');
                appMaster._body.addClass('sidebar-mini');
                appMaster._changeLogo();
                appMaster._sidebarMiniIsOpen = true;
                if ($(window).width() <= 767 && appMaster._overlayIsOpen && !appMaster._asideIsOpen) {
                    appMaster._toggleOverlay();
                }
                appMaster._stopMetisMenu(appMaster._sidebarFooterNav);
                console.log("Sidebar mini is", appMaster._sidebarMiniIsOpen);
                Cookies.set('sidebarMiniIs', appMaster._sidebarMiniIsOpen);
            }
        });

        // Add slimScroll to fixed sidebar layout
        if (appMaster._sidebarSlimScroll) {
            appMaster._fixedSidebarScroll();
            $(window).on('resize', function () {
                appMaster._fixedSidebarScroll();
            });
        }

        // Scroll to currently active menu on page load if data-scroll-to-active is true
        function scrollToActive() {
            if ($(appMaster._sidebarNav).data('scroll-to-active') === true && $(appMaster._sidebarFixed).length) {
                var position;
                if ($(appMaster._sidebarNav).find('li.active').parents('li').length > 0) {
                    position = $(appMaster._sidebarNav).find('li.active').parents('li').last().position();
                }
                else {
                    position = $(appMaster._sidebarNav).find('li.active').position();
                }

                // var fromTop = position.top - sidebar_brand_height;

                setTimeout(function () {
                    // Scroll smoothly to the correct element
                    $(appMaster._sidebarNav).stop().animate({scrollTop: position.top}, 500);
                    $(appMaster._sidebarNav).data('scroll-to-active', 'false');
                }, 500);
            }
        }

        scrollToActive();

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

    _fixedSidebarScroll: function () {
        var sidebar_brand_height = ($(appMaster._sidebarBrand).length) ? $(appMaster._sidebarBrand).height() : 0;
        var sidebar_footer_height = ($(appMaster._sidebarFooter).length) ? $(appMaster._sidebarFooter).height() : 0;
        var options = {
            //color: "rgba(0,0,0,0.8)",
            //height: 'auto',
            //height: '100%',
            height: ($(window).height() - sidebar_brand_height - sidebar_footer_height) + "px",
            distance: '0',
            size: '5px',
            railOpacity: 0.3,
            position: 'right',
            touchScrollStep: 50,
            alwaysVisible: false,
            allowPageScroll: false
        };

        appMaster.slimScroll($(appMaster._sidebarFixed), $(appMaster._sidebarNav), options);
    },

    _exitSidebarScroll: function () {
    },

    responsive: function () {

        function fixResponsive() {
            var vw = $(window).width(); // Viewport Width

            if (vw <= 767) {
                appMaster._body.addClass('sidebar-mobile sidebar-is-closed');

                if (appMaster._sidebarIsOpen) {
                    $(appMaster._sidebarHide).click();
                }

                if (appMaster._sidebarMiniIsOpen) {
                    $(appMaster._sidebarMini).click();
                }

                if (appMaster._asideIsOpen) {
                    $(appMaster._aside).click();
                }

            } else {
                appMaster._body.removeClass('sidebar-mobile');
                if (!appMaster._sidebarIsOpen) {
                    $(appMaster._sidebarHide).click();
                }
            }

            if (vw >= 768 && vw <= 991) {
                if (!appMaster._sidebarMiniIsOpen) {
                    $(appMaster._sidebarMini).click();
                }
            }

            if (vw >= 992) {
                if (appMaster._sidebarMiniIsOpen) {
                    // $(appMaster._sidebarMini).click();
                }
            }
        }

        // Execute on load
        fixResponsive();

        // Execute on resize
        $(window).on('resize', function () {
            fixResponsive()
        });

    },

    sidebarPopOutMenu: function () {

        // Get the animate in class
        var animate_in = $(appMaster._sidebar).data('animate-in');
        var animate_in_class = (appMaster._isValid(animate_in)) ? '' + animate_in : '';

        // Get the animate out class
        var animate_out = $(appMaster._sidebar).data('animate-out');
        var animate_out_class = (appMaster._isValid(animate_out)) ? '' + animate_out : '';

        $('.navigation-main').on('mouseenter', 'li.sidebar__item', function () {

            // Get the target list item
            var $listItem = $(this);

            if (appMaster._sidebarMiniIsOpen && appMaster._sidebar.hasClass('popout')) {

                // Stop metisMenu opening the menu for the particular list
                $(this).children('a').attr('aria-disabled', 'true');

                // Reset popout menu if mouse moves between list items, otherwise it leaves the previous one.
                appMaster._resetSidebarPopOutMenu();

                // Clone and adjustments
                var listTemplate = $listItem.clone();
                $('> a.sidebar__link > span.sidebar__link-icon', listTemplate).remove();
                $('> a.sidebar__link', listTemplate).removeAttr("aria-disabled");
                $(listTemplate).addClass('show');

                if ($listItem.hasClass('has-child')) {
                    $('> a.sidebar__link', listTemplate).attr('aria-expanded', 'true');
                    $('> ul.sidebar__child', listTemplate).removeAttr("style");
                    $(listTemplate).addClass("active"); // Required by metisMenu for parent li element to open by default
                }

                // Position
                var fromTop;
                var calcFromTop = function () {
                    var scrollTop = $(window).scrollTop(), divOffset = $listItem.offset().top;
                    fromTop = (divOffset - scrollTop);
                };

                // Fix the position if there is no class .sidebar-fixed
                if (!$(appMaster._sidebarFixed).length) {
                    // Adapted from https://stackoverflow.com/questions/12502769/how-to-get-the-div-top-position-value-while-scrolling
                    calcFromTop();
                }
                else {
                    // Fix the position to accommodate for the height of the sidebar brand
                    // fromTop = sidebar_brand_height + $listItem.position().top;
                    fromTop = $listItem.offset().top - $(window).scrollTop(); // Get the offset top of the list item and position it w.r.t window
                }

                // Calculate max height
                var menuTop;
                var winHeight;
                var popOutMenuHeight = '';

                var calcMaxHeight = function () {
                    menuTop = fromTop;
                    winHeight = $(window).height() - $(appMaster._header).height();
                    popOutMenuHeight = winHeight - menuTop + $listItem.height() - 20;
                };

                if ($listItem.hasClass('has-child') && $listItem.hasClass('sidebar__item')) {
                    calcMaxHeight();
                }

                // Create wrapper for popout menu
                var iDiv = document.createElement("div");
                iDiv.id = 'menu-popout-wrap';
                iDiv.className = animate_in_class;
                $(appMaster._sidebarNav).append(iDiv);

                // Now create UL and append to the wrapper
                var iUl = document.createElement('ul');
                iUl.id = 'menu-popout';
                iUl.className = 'sidebar__list sidebar__list-popout metismenu';

                var iWrap = document.getElementById(iDiv.id);
                $(iWrap).css({'position': 'fixed', 'top': fromTop, 'max-height': popOutMenuHeight}).append(iUl);

                // Append the whole list template onto the UL
                var popOut = document.getElementById(iUl.id);
                $(popOut).css({'max-height': popOutMenuHeight}).append(listTemplate);

                // Initialize plugins
                if ($listItem.hasClass('has-child') && $listItem.hasClass('sidebar__item')) {

                    // Initialize metisMenu to popout menu
                    $(popOut).metisMenu({
                        parentTrigger: '.has-child'
                    });

                    // Initialize slimScroll to popout menu
                    if (appMaster._sidebarSlimScroll) {
                        var options = {
                            height: '',
                            width: '',
                            distance: '0',
                            size: '5px',
                            railOpacity: 0.3,
                            position: 'right',
                            touchScrollStep: 50,
                            alwaysVisible: false,
                            allowPageScroll: false
                        };
                        appMaster.slimScroll($(iWrap), $(popOut), options);
                    }
                }

                // Set an active class on hover
                $listItem.addClass('show');

                // Workaround to move fixed popout menu when page scrolls and adjusting max-height when window resize.
                $(window).on('scroll resize', function () {
                    if ($listItem.hasClass('show')) {
                        calcFromTop();
                        calcMaxHeight();
                        if (!$(appMaster._sidebarFixed).length) {
                            $(iWrap).css({'top': fromTop});
                        }
                        $(iWrap).stop().animate({'max-height': popOutMenuHeight}, 0);
                        $(popOut).stop().animate({'max-height': popOutMenuHeight}, 0);
                    }
                });
            }

        }).on('mouseleave', 'li.sidebar__item', function () {
            var $listItem = $(this);
            if (appMaster._sidebarMiniIsOpen && appMaster._sidebar.hasClass('popout')) {
                $listItem.children('a').removeAttr("aria-disabled"); // So the metisMenu can open the menu for the particular list
            }
        }).on('click', 'li.sidebar__item', function (e) {
        });

        // Exit popout menu if mouse leaves sidebar navigation
        $(appMaster._sidebarNav).on('mouseleave', function () {
            if (appMaster._sidebarMiniIsOpen && appMaster._sidebar.hasClass('popout')) {
                appMaster._exitSidebarPopOutMenu(animate_in_class, animate_out_class);
            }
        });

        // Prevent the popout menu exit function to run
        $(appMaster._sidebarNav).on('mouseenter', function () {
            if (appMaster._sidebarMiniIsOpen && appMaster._sidebar.hasClass('popout')) {
                return clearTimeout(appMaster._exitSidebarPopOutMenuConfig);
            }
        });

        // To debug: jQuery('.sidebar__list > li:nth-child(10)').trigger('mouseenter')
    },

    _resetSidebarPopOutMenu: function () {
        $("ul#menu-popout").slimScroll({destroy: true}); // Destroy if slimScroll exists
        $(appMaster._sidebarNav).children('#menu-popout-wrap').remove(); // Remove wrapper for popout menu
        $('.navigation-main li.sidebar__item.show').removeClass('show'); // Remove class .show from list item
    },

    _exitSidebarPopOutMenu: function ($animate_in_class, $animate_out_class) {

        // Exit popout menu with certain time period
        return appMaster._exitSidebarPopOutMenuConfig = setTimeout((function () {

            // Destroy if slimScroll exists and remove inline style
            $("ul#menu-popout").slimScroll({destroy: true}).removeAttr("style");

            // Remove wrapper for popout menu
            $(appMaster._sidebarNav).children('#menu-popout-wrap').removeClass($animate_in_class).addClass($animate_out_class).fadeToggle(500, 'swing', function () {
                this.remove();
            });

            // Remove class .show from list item
            $('.navigation-main li.sidebar__item.show').removeClass('show');

        }), 500);
    },

    /* Manage Cookie */
    handleCookie: function () {
        // Adapted from https://github.com/saleco/blg/blob/master/src/main/webapp/assets/admin/js/demo.js

        if (typeof Cookies != 'undefined') {

            // Check cookie for sidebar mini setting
            if (Cookies.get('sidebarMiniIs') == 'true' && !appMaster._sidebarMiniIsOpen) {
                $(appMaster._sidebarMini).click();
            }

            // TODO useful later
            // Adapted from https://github.com/nelug/ControlDePlanilla/blob/master/app/assets/js/plugins/apps.js
            // Check the current cookie value
            // If the cookie is empty or set to not active, then add page_sidebar_minimize
            /*if ($.cookie('page_sidebar_minimize') == "undefined" || $.cookie('page_sidebar_minimize') == "not_active") {
             }*/
            // If the cookie was already set to active then remove it
            /*else {}*/

        } else {
            throw new Error('Please install JavaScript Cookie plugin! https://github.com/js-cookie/js-cookie');
        }
    },

    aside: function () {
        var sidebarMiniIsOpenedByAside = false;
        appMaster._aside.on('click', function (event) {
            event.preventDefault();
            // Adapted from https://codepen.io/j_holtslander/pen/XmpMEp TODO, nice adaption, so pls learn and correct the above methods
            if (appMaster._asideIsOpen) {
                $(this).addClass('collapsed');
                appMaster._body.removeClass('aside-is-open').addClass('aside-is-closed');
                appMaster._asideIsOpen = false;

                if (appMaster._overlayIsOpen) {
                    appMaster._toggleOverlay();
                }

                if (sidebarMiniIsOpenedByAside) {
                    $(appMaster._sidebarMini).click();
                    sidebarMiniIsOpenedByAside = false;
                    console.log("Sidebar mini by aside is", sidebarMiniIsOpenedByAside);
                }

                console.log("Aside is", appMaster._asideIsOpen);
                Cookies.set('Aside', appMaster._asideIsOpen);
            }
            else {
                $(this).removeClass('collapsed');
                appMaster._body.removeClass('aside-is-closed').addClass('aside-is-open');
                appMaster._asideIsOpen = true;
                if (!appMaster._overlayIsOpen) {
                    appMaster._toggleOverlay();
                }

                if (appMaster._navbarCollapsibleContentIs) {
                    $(appMaster._navbarToggler).click();
                }

                if (!appMaster._sidebarMiniIsOpen) {
                    $(appMaster._sidebarMini).click();
                    sidebarMiniIsOpenedByAside = true;
                    console.log("Sidebar mini by aside is", sidebarMiniIsOpenedByAside);
                }

                console.log('Aside is', appMaster._asideIsOpen);
                Cookies.set('Aside', appMaster._asideIsOpen);
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

            if (appMaster._overlayIsOpen) {
                appMaster._toggleOverlay();
            }

            if ($(window).width() <= 767 && appMaster._sidebarIsOpen) {
                $(appMaster._sidebarHide).click();
            }

            if (appMaster._asideIsOpen) {
                $(appMaster._aside).click();
            }

        });
    },

    _toggleOverlay: function () {
        //Adapted from https://codepen.io/vdecree/pen/ZYMpKz

        // if opened is true, then we will want to close the overlay as it will mean its already visible.
        if (appMaster._overlayIsOpen) {
            appMaster._overlayIsOpen = false;
            $(appMaster._overlay).fadeOut(250, function () {
                $(this).hide();
                console.log("Overlay is", appMaster._overlayIsOpen);
            });
        }
        // if false, then we want to open the overlay.
        else {
            appMaster._overlayIsOpen = true;
            $(appMaster._overlay).fadeIn(250, function () {
                $(this).show();
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

        // Add scrollbar to the navbar collapsible element 'a.card__actions-item:not([data-card=fullscreen])'
        $('.navbar-nav:not(.no-collapse) > .dropdown').on('hide.bs.dropdown show.bs.dropdown', function (e) {
            // Make sure there is fixed-element
            if ($(appMaster._navbarFixed).length && appMaster._navbarCollapsibleContentIs) {
                appMaster._fixNavbarMaxHeight();
            }
        });

        $('.navbar-nav.no-collapse > .dropdown').on('show.bs.dropdown', function (e) {

            var $dropdown = $(this);

            setTimeout(function () {
                if ($(appMaster._navbarFixed).length && appMaster._navbarCollapsibleContentIs && !appMaster._navbarMaxHeightIs) {

                    // Calculate max height
                    var menuTopD;
                    var winHeightD;
                    var popOutMenuHeightD = '';

                    var calcMaxHeight = function () {
                        menuTopD = $dropdown.offset().top - $(window).scrollTop();
                        winHeightD = $(window).height();
                        popOutMenuHeightD = winHeightD - menuTopD - $dropdown.height() - 10;
                    };

                    calcMaxHeight();

                    if (appMaster._navbarSlimScroll) {
                        appMaster._fixedNavbarDropdownSlimScroll($dropdown.find('.dropdown-menu').first());
                        $dropdown.find('.dropdown-menu').first().css({'max-height': popOutMenuHeightD, 'position': 'static'});
                    } else {
                        $dropdown.find('.dropdown-menu').first().css({'max-height': popOutMenuHeightD, 'overflow-y': 'auto'});
                    }
                }

            }, 500);

        });

        $('.navbar-nav.no-collapse > .dropdown').on('hide.bs.dropdown', function (e) {
            $(this).find('.dropdown-menu').first().css({'max-height': '', 'overflow-y': ''});
        });

        // Add fade animation to dropdown
        $('.dropdown').on('show.bs.dropdown', function (e) {
            $(this).find('.dropdown-menu').first().stop(true, true).fadeIn(300);  // fade fadeOut(), fadeIn()
        });
        $('.dropdown').on('hide.bs.dropdown', function (e) {
            $(this).find('.dropdown-menu').first().stop(true, true).fadeOut(200);
        });

        // Sub menu
        $('.dropdown-menu a.dropdown-toggle').on('click', function (e) {

            if (!$(this).next().hasClass('show')) {
                $(this).parents('.dropdown-menu').first().find('.show').removeClass("show").prev('.dropdown-toggle').toggleClass('active');
            }

            var $subMenu = $(this).next(".dropdown-menu");
            $subMenu.toggleClass('show').prev('.dropdown-toggle').toggleClass('active');
            // $(this).toggleClass('active');

            // Close all open sub-menu when top level menu item (grand-parent) is clicked
            $(this).parents('li.dropdown.show').on('hidden.bs.dropdown', function (e) {
                $('.dropdown.has-child .show').removeClass("show");
                $('.dropdown-menu a.dropdown-toggle').removeClass("active");
            });

            return false;
        });
    },



    _fixedNavbarDropdownSlimScroll: function (slimScrollElement) {
        setTimeout((function () {
            var options = {
                height: '',
                width: '',
                distance: '0',
                size: '5px',
                railOpacity: 0.3,
                position: 'right',
                touchScrollStep: 50,
                alwaysVisible: false
            };

            var styleAttributes = {
                'position': 'absolute',
                'z-index': '1000',
            };

            appMaster.slimScroll($(appMaster._navbarFixed), $(slimScrollElement), options, styleAttributes);
        }), 0);
    },


    tooltip: function () {
        $(appMaster._tooltip).each(function () {

            var animate = $(this).data('animate');
            var color = $(this).data('color');

            var color_selector = (appMaster._isValid(color)) ? ' ' + 'tooltip-' + color : '';
            var animate_selector = (appMaster._isValid(animate)) ? ' ' + animate : '';

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

    fullscreen: function () {
        // Todo Implement, filter this github.. found lot of templates in these folders...  https://github.com/swalt-wahyu/theme/blob/master/backend/Rock/assets/js/layout.js
        $('.fullscreen-toggle').click(function () {
            if (!document.fullscreenElement &&    // alternative standard method
                !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {  // current working methods
                if (document.documentElement.requestFullscreen) {
                    document.documentElement.requestFullscreen();
                } else if (document.documentElement.msRequestFullscreen) {
                    document.documentElement.msRequestFullscreen();
                } else if (document.documentElement.mozRequestFullScreen) {
                    document.documentElement.mozRequestFullScreen();
                } else if (document.documentElement.webkitRequestFullscreen) {
                    document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
                }
                $('> i', this).removeClass('icon-size-fullscreen').addClass('icon-size-actual');
            } else {
                if (document.exitFullscreen) {
                    document.exitFullscreen();
                } else if (document.msExitFullscreen) {
                    document.msExitFullscreen();
                } else if (document.mozCancelFullScreen) {
                    document.mozCancelFullScreen();
                } else if (document.webkitExitFullscreen) {
                    document.webkitExitFullscreen();
                }
                $('> i', this).addClass('icon-size-fullscreen').removeClass('icon-size-actual');
            }
        });


    },

    _isValid: function (str) {
        return typeof str != 'undefined' && str != '' && typeof str.data == 'undefined';
    },

    popover: function () {
        //TODO close button https://jsfiddle.net/vivekkupadhyay/bdkbq5sd/10/
        $(appMaster._popover).each(function () {


            var animate = $(this).data('animate');
            var color = $(this).data('color');

            var color_selector = (appMaster._isValid(color)) ? ' ' + 'popover-' + color : '';
            var animate_selector = (appMaster._isValid(animate)) ? ' ' + animate : '';

            $(this).popover({
                template: '<div class="popover' + color_selector + animate_selector + '" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
            });
        });
    },

    textareaCounter: function () {
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

    inputGroupFocus: function () {

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

    numberSpinner: function () {
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

    setFooterHeight: function () {
        function set_heights() {
            var footerHeight = $('.master-footer').height();
            $('.content__inner-wrap').css('padding-bottom', footerHeight + 'px');
        }

        // Execute on load
        set_heights();

        // Execute on resize
        $(window).on('resize', function () {
            set_heights()
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

    backToTop: function () {
        // TODO work on this later perfectly
        // Adapted from https://github.com/nelug/ControlDePlanilla/blob/master/app/assets/js/plugins/apps.js
        $('#back-top').hide();
        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                $('#back-top').addClass('d-block animated fadeInUp');
            } else {
                $('#back-top').removeClass('d-block animated fadeInUp');
            }
        });

        // scroll body to 0px on click
        $('#back-top').click(function () {

            $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });
    }

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
    appMaster.slimScroll();
    appMaster.sidebar();
    appMaster.responsive();
    appMaster.navbar();
    appMaster.handleCookie();
    // appMaster.update();
    appMaster.sidebarPopOutMenu();
    appMaster.overlay();
    appMaster.dropdown();
    appMaster.aside();
    appMaster.fullscreen();
    appMaster.tooltip();
    appMaster.popover();
    appMaster.inputGroupFocus();
    appMaster.card();
    appMaster.textareaCounter();
    appMaster.numberSpinner();
    appMaster.setFooterHeight();
    appMaster.expandCollapse();
    appMaster.backToTop();


});


// TODO, just visit view-source:http://jaybabani.com/complete-admin/v4.2/preview/assets/js/scripts.js