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

    _sidebar_nav: $('.sidebar__nav, .sidebar__footer-nav'),
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


    responsive: function () {

        function set_sidebar() {
            $(window).width() < 768 ? appMaster._body.removeClass('sidebar-mini sidebar-is-open').addClass('sidebar-is-closed sidebar-mobile') : appMaster._body.addClass('sidebar-is-open').removeClass('sidebar-is-closed sidebar-mobile');
        }

        set_sidebar();

        $(window).resize(function () {
            set_sidebar();
        });

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
                $(appMaster._side_mini).click();
            }
            appMaster._stopMetisMenu();
        });

        $(appMaster._side_mini).on('click', function (event) {
            event.preventDefault();
            if (appMaster._sidebarMiniIsOpen) {
                $(this).removeClass('collapsed');
                appMaster._body.removeClass('sidebar-mini sidebar-mini-full');
                appMaster._sidebarMiniIsOpen = false;
                console.log("Sidebar mini is", appMaster._sidebarMiniIsOpen);

            }
            else {
                $(this).addClass('collapsed');
                appMaster._body.addClass('sidebar-mini sidebar-mini-full');
                appMaster._changeLogo();
                appMaster._sidebarMiniIsOpen = true;
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
            $(appMaster._overlay).fadeOut(250,function () {
                $(this).hide();
                appMaster._overlayIsOpen = false;
                console.log("Overlay is", appMaster._overlayIsOpen);
            });
        }
        // if false, then we want to open the overlay.
        else {
            $(appMaster._overlay).fadeIn(250,function () {
                $(this).show();
                appMaster._overlayIsOpen = true;
                console.log("Overlay is", appMaster._overlayIsOpen);
            });
        }

    },

    _stopMetisMenu: function () {
        $(appMaster._sidebar_nav).find('li').removeClass('active');
        $(appMaster._sidebar_nav).find('a').attr('aria-expanded', false);
        $(appMaster._sidebar_nav).find('ul.collapse').removeClass('in').attr('aria-expanded', false);
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
            var animate = $(this).data('animate');
            var color = $(this).data('color');
            $(this).tooltip({
                template: '<div class="tooltip tooltip-' + color + ' ' + animate + '" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
            });
        });
    },


    popover: function () {
        //TODO close button https://jsfiddle.net/vivekkupadhyay/bdkbq5sd/10/
        $(appMaster._popover).each(function () {
            var color = $(this).data('color');
            $(this).popover({
                template: '<div class="popover popover-' + color + '" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
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

    /* Plugins */
    multi_select: function () {
        if ($.fn.multiSelect) {
            $(".multi-select, #public-methods").multiSelect();

            $('.ms-searchable').multiSelect({
                selectableHeader: "<input type='text' class='form-control search-input mb-1' autocomplete='off' placeholder='search...'>",
                selectionHeader: "<input type='text' class='form-control search-input mb-1' autocomplete='off' placeholder='search...'>",
                afterInit: function (ms) {
                    var that = this,
                        $selectableSearch = that.$selectableUl.prev(),
                        $selectionSearch = that.$selectionUl.prev(),
                        selectableSearchString = '#' + that.$container.attr('id') + ' .ms-elem-selectable:not(.ms-selected)',
                        selectionSearchString = '#' + that.$container.attr('id') + ' .ms-elem-selection.ms-selected';

                    that.qs1 = $selectableSearch.quicksearch(selectableSearchString)
                        .on('keydown', function (e) {
                            if (e.which === 40) {
                                that.$selectableUl.focus();
                                return false;
                            }
                        });

                    that.qs2 = $selectionSearch.quicksearch(selectionSearchString)
                        .on('keydown', function (e) {
                            if (e.which == 40) {
                                that.$selectionUl.focus();
                                return false;
                            }
                        });
                },
                afterSelect: function () {
                    this.qs1.cache();
                    this.qs2.cache();
                },
                afterDeselect: function () {
                    this.qs1.cache();
                    this.qs2.cache();
                }
            });

            $('#select-all').click(function () {
                $('#public-methods').multiSelect('select_all');
                return false;
            });
            $('#deselect-all').click(function () {
                $('#public-methods').multiSelect('deselect_all');
                return false;
            });
            $('#refresh').on('click', function () {
                $('#public-methods').multiSelect('refresh');
                return false;
            });

            var arr = [];

            for (var i = 0; i < 100; i++) {
                arr[i] = 'elem_' + (i + 1);
            }

            $('#select-100').click(function () {
                $('#public-methods').multiSelect('select', arr);
                return false;
            });
            $('#deselect-100').click(function () {
                $('#public-methods').multiSelect('deselect', arr);
                return false;
            });

            $('#add-option').on('click', function () {
                $('#public-methods').multiSelect('addOption', {value: 42, text: 'test 42', index: 0});
                return false;
            });

            $(".ms-container").append('<i class="fas fa-exchange-alt"></i>');


        }
        else {
            throw new Error('Please install multi-select plugin! https://github.com/lou/multi-select/');
        }
    },

    chosen: function chosen(element) {
        if ($.fn.chosen) {
            // $(element).chosen({width: "100%"});
            $(".chosen-drop").addClass('animated fadeIn');
            var config = {
                '.chosen-select': {width: '100%'},
                '.chosen-select-deselect': {allow_single_deselect: true, width: '100%'},
                '.chosen-select-no-single': {disable_search_threshold: 10, width: '100%'},
                '.chosen-select-no-results': {no_results_text: 'Oops, nothing found!', width: '100%'},
                '.chosen-select-rtl': {rtl: true, width: '100%'},
                '.chosen-select-width': {width: '100%'}
            };
            for (var selector in config) {
                $(selector).chosen(config[selector]);
            }

        } else {
            throw new Error('Please install Chosen plugin! https://github.com/harvesthq/chosen');
        }
    },

    datepicker: function () {
        if ($.fn.datepicker) {

            $('.date-picker').datepicker({
                todayBtn: "linked",
                autoclose: true,
                todayHighlight: true,
                calendarWeeks: true,
                forceParse: false
            });

            $('.date-picker_2').datepicker({
                startView: 1,
                todayBtn: "linked",
                keyboardNavigation: false,
                forceParse: false,
                autoclose: true,
                format: "dd/mm/yyyy"
            });

            $('.date-picker_3').datepicker({
                startView: 2,
                todayBtn: "linked",
                keyboardNavigation: false,
                forceParse: false,
                autoclose: true
            });

            $('.date-picker_4').datepicker({
                minViewMode: 1,
                keyboardNavigation: false,
                forceParse: false,
                autoclose: true,
                todayHighlight: true
            });

            $('.date-range-picker').datepicker({
                keyboardNavigation: false,
                forceParse: false,
                autoclose: true
            });
        }

        else {
            throw new Error('Please install bootstrap-datepicker plugin! https://github.com/uxsolutions/bootstrap-datepicker');
        }
    },

    wizard_step: function () {

        //update progress
        function updateProgress(elem, index) {
            var $total = $(elem).find('.steps ul li').length;
            var $current = index + 1;
            var $percent = ($current / $total) * 100;
            $(elem).find('.progress-bar').css({width: $percent + '%'}).text($percent + " % ");
            $(elem).find('.step-label').text("Step " + $current + " of " + $total);

        }

        function addBootstrap(elem, index) {
            var $this = $(elem);
            $this.children('.actions').find('a').addClass('btn btn-primary');
        }

        // Arrow form wizard
        $("#arrow-form-wizard").steps({
            /* Appearance */
            headerTag: "h3",
            bodyTag: "section",
            transitionEffect: "fade",
            transitionEffectSpeed: 500,
            autoFocus: true,
            titleTemplate: '<span class="step">#index#.&nbsp;</span>&nbsp;#title#',
            cssClass: "wizard arrow-wizard",

            /* Labels */
            labels: {
                finish: "SUBMIT <i class='icon-check'></i>",
                next: "NEXT  <i class='icon-arrow-right'></i>",
                previous: "<i class='icon-arrow-left'></i>BACK",
            },

            onInit: function (event, currentIndex) {
                updateProgress(this, currentIndex);
                addBootstrap(this, currentIndex);
            },

            onStepChanging: function (event, currentIndex, newIndex) {
                return true;
            },

            onStepChanged: function (event, currentIndex, priorIndex) {
                updateProgress(this, currentIndex);
            },

            onFinished: function (event, currentIndex) {
                alert("Submitted!");
            }
        });

        // Arrow form vertical wizard
        $("#arrow-form-wizard-vertical").steps({
            /* Appearance */
            headerTag: "h3",
            bodyTag: "section",
            transitionEffect: "fade",
            transitionEffectSpeed: 500,
            autoFocus: true,
            titleTemplate: '<span class="step">#index#.&nbsp;</span>&nbsp;#title#',
            cssClass: "wizard arrow-wizard",
            stepsOrientation: "vertical",

            /* Labels */
            labels: {
                finish: "SUBMIT <i class='icon-check'></i>",
                next: "NEXT  <i class='icon-arrow-right'></i>",
                previous: "<i class='icon-arrow-left'></i>BACK",
            },

            onInit: function (event, currentIndex) {
                updateProgress(this, currentIndex);
                addBootstrap(this, currentIndex);
            },

            onStepChanging: function (event, currentIndex, newIndex) {
                return true;
            },

            onStepChanged: function (event, currentIndex, priorIndex) {
                updateProgress(this, currentIndex);
            },

            onFinished: function (event, currentIndex) {
                alert("Submitted!");
            }
        });

        // Pills form wizard
        $("#pills-form-wizard").steps({
            /* Appearance */
            headerTag: "h3",
            bodyTag: "section",
            transitionEffect: "fade",
            transitionEffectSpeed: 500,
            autoFocus: true,
            titleTemplate: '<span class="step">#index#.&nbsp;</span>&nbsp;#title#',
            cssClass: "wizard pills-wizard",

            /* Labels */
            labels: {
                finish: "SUBMIT <i class='icon-check'></i>",
                next: "NEXT  <i class='icon-arrow-right'></i>",
                previous: "<i class='icon-arrow-left'></i>BACK",
            },

            onInit: function (event, currentIndex) {
                updateProgress(this, currentIndex);
                addBootstrap(this, currentIndex);
            },

            onStepChanging: function (event, currentIndex, newIndex) {
                return true;
            },

            onStepChanged: function (event, currentIndex, priorIndex) {
                updateProgress(this, currentIndex);
            },

            onFinished: function (event, currentIndex) {
                alert("Submitted!");
            }
        });

        // Pills form vertical wizard
        $("#pills-form-wizard-vertical").steps({
            /* Appearance */
            headerTag: "h3",
            bodyTag: "section",
            transitionEffect: "fade",
            transitionEffectSpeed: 500,
            autoFocus: true,
            titleTemplate: '<span class="step">#index#.&nbsp;</span>&nbsp;#title#',
            cssClass: "wizard pills-wizard",
            stepsOrientation: "vertical",

            /* Labels */
            labels: {
                finish: "SUBMIT <i class='icon-check'></i>",
                next: "NEXT  <i class='icon-arrow-right'></i>",
                previous: "<i class='icon-arrow-left'></i>BACK",
            },

            onInit: function (event, currentIndex) {
                updateProgress(this, currentIndex);
                addBootstrap(this, currentIndex);
            },

            onStepChanging: function (event, currentIndex, newIndex) {
                return true;
            },

            onStepChanged: function (event, currentIndex, priorIndex) {
                updateProgress(this, currentIndex);
            },

            onFinished: function (event, currentIndex) {
                alert("Submitted!");
            }
        });

        // Circle form wizard
        $("#circle-form-wizard").steps({
            /* Appearance */
            headerTag: "h3",
            bodyTag: "section",
            transitionEffect: "fade",
            transitionEffectSpeed: 500,
            autoFocus: true,
            titleTemplate: '<span class="step">#index#</span><span class="step-title">#title#</span>',
            cssClass: "wizard circle-wizard",

            /* Labels */
            labels: {
                finish: "SUBMIT <i class='icon-check'></i>",
                next: "NEXT  <i class='icon-arrow-right'></i>",
                previous: "<i class='icon-arrow-left'></i>BACK"
            },

            onInit: function (event, currentIndex) {
                updateProgress(this, currentIndex);
                addBootstrap(this, currentIndex);
            },

            onStepChanging: function (event, currentIndex, newIndex) {
                return true;
            },
            onStepChanged: function (event, currentIndex, priorIndex) {
                updateProgress(this, currentIndex);
                $(this).find(".steps ul li a:eq(" + currentIndex + ") .number").addClass("animated bounceIn");
                $(this).find(".steps ul li a:eq(" + priorIndex + ") .animated").removeClass("animated bounceIn");
            },

            onFinished: function (event, currentIndex) {
                alert("Submitted!");
            }
        });

        // Circle form wizard with validation
        var form = $("#circle-form-wizard-validation").show();

        $("#circle-form-wizard-validation").steps({
            /* Appearance */
            headerTag: "h3",
            bodyTag: "section",
            transitionEffect: "fade",
            transitionEffectSpeed: 500,
            autoFocus: true,
            titleTemplate: '<span class="step">#index#</span><span class="step-title">#title#</span>',
            cssClass: "wizard circle-wizard",

            /* Labels */
            labels: {
                finish: "SUBMIT <i class='icon-check'></i>",
                next: "NEXT  <i class='icon-arrow-right'></i>",
                previous: "<i class='icon-arrow-left'></i>BACK"
            },

            onInit: function (event, currentIndex) {
                updateProgress(this, currentIndex);
                addBootstrap(this, currentIndex);
            },

            onStepChanging: function (event, currentIndex, newIndex) {

                // Always allow previous action even if the current form is not valid!
                if (currentIndex > newIndex) {
                    return true;
                }

                // Needed in some cases if the user went back (clean up)
                if (currentIndex < newIndex) {
                    // To remove error styles
                    form.find(".body:eq(" + newIndex + ") label.invalid-feedback").remove();
                    form.find(".body:eq(" + newIndex + ") .is-invalid").removeClass("is-invalid");
                }

                // Disable validation on fields that are disabled or hidden.
                form.validate().settings.ignore = ":disabled,:hidden";

                // Start validation; Prevent going forward if false
                return form.valid();

            },
            onStepChanged: function (event, currentIndex, priorIndex) {
                updateProgress(this, currentIndex);
                $(this).find(".steps ul li a:eq(" + currentIndex + ") .number").addClass("animated bounceIn");
                $(this).find(".steps ul li a:eq(" + priorIndex + ") .animated").removeClass("animated bounceIn");
            },

            onFinishing: function (event, currentIndex) {
                // Disable validation on fields that are disabled.
                // At this point it's recommended to do an overall check (mean ignoring only disabled fields)
                form.validate().settings.ignore = ":disabled";

                // Start validation; Prevent form submission if false
                return form.valid();
            },

            onFinished: function (event, currentIndex) {
                // Submit form input
                form.submit();
            }

        }).validate({  // Initialize validation
            validClass: 'is-valid',
            errorClass: 'is-invalid',
            errorPlacement: function (error, element) {
                // Add the `invalid-feedback` class to the error element
                error.addClass("invalid-feedback");

                // element.before(error);

                if (element.attr("type") == "radio" || element.attr("type") == "checkbox") {
                    error.appendTo(element.parent("div"));
                } else {
                    error.insertAfter(element)
                }

            },

            highlight: function (element, errorClass, validClass) {
                // $( element ).addClass( errorClass ).removeClass(validClass);
                $(element).addClass(errorClass);
            },
            unhighlight: function (element, errorClass, validClass) {
                // $( element ).addClass(validClass).removeClass(errorClass);
                $(element).removeClass(errorClass);
            },

            rules: {
                email: {email: true},
                confirm: {
                    equalTo: "#password-eg3"
                }

            }
        });

        // Circle form vertical wizard
        $("#circle-form-wizard-vertical").steps({
            /* Appearance */
            headerTag: "h3",
            bodyTag: "section",
            transitionEffect: "fade",
            transitionEffectSpeed: 500,
            autoFocus: true,
            titleTemplate: '<span class="step">#index#</span><span class="step-title">#title#</span>',
            cssClass: "wizard circle-wizard",
            stepsOrientation: "vertical",

            /* Labels */
            labels: {
                finish: "SUBMIT <i class='icon-check'></i>",
                next: "NEXT  <i class='icon-arrow-right'></i>",
                previous: "<i class='icon-arrow-left'></i>BACK"
            },

            onInit: function (event, currentIndex) {
                updateProgress(this, currentIndex);
                addBootstrap(this, currentIndex);
            },

            onStepChanging: function (event, currentIndex, newIndex) {
                return true;
            },
            onStepChanged: function (event, currentIndex, priorIndex) {
                updateProgress(this, currentIndex);
                $(this).find(".steps ul li a:eq(" + currentIndex + ") .number").addClass("animated bounceIn");
                $(this).find(".steps ul li a:eq(" + priorIndex + ") .animated").removeClass("animated bounceIn");
            },

            onFinished: function (event, currentIndex) {
                alert("Submitted!");
            }
        });

        // Tab wizard
        $("#tab-wizard").steps({
            headerTag: "h3",
            bodyTag: "section",
            transitionEffect: "fade",
            enableFinishButton: true,
            enablePagination: true,
            enableAllSteps: true,
            titleTemplate: "#title#",
            cssClass: "wizard tab-wizard",

            /* Labels */
            labels: {
                finish: "FINISH",
                next: "NEXT  <i class='icon-arrow-right'></i>",
                previous: "<i class='icon-arrow-left'></i>BACK"
            },

            onInit: function (event, currentIndex) {
                addBootstrap(this, currentIndex);
            }

        });

        // Arrow wizard
        $("#arrow-wizard").steps({
            /* Appearance */
            headerTag: "h3",
            bodyTag: "section",
            transitionEffect: "fade",
            transitionEffectSpeed: 500,
            autoFocus: true,
            titleTemplate: '#title#',
            cssClass: "wizard arrow-wizard",

            /* Labels */
            labels: {
                finish: "FINISH",
                next: "NEXT  <i class='icon-arrow-right'></i>",
                previous: "<i class='icon-arrow-left'></i>BACK"
            },

            onInit: function (event, currentIndex) {
                addBootstrap(this, currentIndex);
            }

        });

        // Arrow vertical wizard
        $("#arrow-wizard-vertical").steps({
            /* Appearance */
            headerTag: "h3",
            bodyTag: "section",
            transitionEffect: "fade",
            transitionEffectSpeed: 500,
            autoFocus: true,
            titleTemplate: '#title#',
            cssClass: "wizard arrow-wizard",
            stepsOrientation: "vertical",

            /* Labels */
            labels: {
                finish: "FINISH",
                next: "NEXT  <i class='icon-arrow-right'></i>",
                previous: "<i class='icon-arrow-left'></i>BACK"
            },

            onInit: function (event, currentIndex) {
                addBootstrap(this, currentIndex);
            }

        });

        // Pills wizard
        $("#pills-wizard").steps({
            /* Appearance */
            headerTag: "h3",
            bodyTag: "section",
            transitionEffect: "fade",
            transitionEffectSpeed: 500,
            autoFocus: true,
            titleTemplate: '#title#',
            cssClass: "wizard pills-wizard",

            /* Labels */
            labels: {
                finish: "FINISH <i class='icon-check'></i>",
                next: "NEXT  <i class='icon-arrow-right'></i>",
                previous: "<i class='icon-arrow-left'></i>BACK",
            },

            onInit: function (event, currentIndex) {
                addBootstrap(this, currentIndex);
            }

        });

        // Pills vertical wizard
        $("#pills-wizard-vertical").steps({
            /* Appearance */
            headerTag: "h3",
            bodyTag: "section",
            transitionEffect: "fade",
            transitionEffectSpeed: 500,
            autoFocus: true,
            titleTemplate: '#title#',
            cssClass: "wizard pills-wizard",
            stepsOrientation: "vertical",

            /* Labels */
            labels: {
                finish: "FINISH <i class='icon-check'></i>",
                next: "NEXT  <i class='icon-arrow-right'></i>",
                previous: "<i class='icon-arrow-left'></i>BACK",
            },

            onInit: function (event, currentIndex) {
                addBootstrap(this, currentIndex);
            }

        });

        // Circle wizard
        $("#circle-wizard").steps({
            /* Appearance */
            headerTag: "h3",
            bodyTag: "section",
            transitionEffect: "fade",
            transitionEffectSpeed: 500,
            autoFocus: true,
            titleTemplate: '<span class="step">#index#</span><span class="step-title">#title#</span>',
            cssClass: "wizard circle-wizard",

            /* Labels */
            labels: {
                finish: "FINISH",
                next: "NEXT  <i class='icon-arrow-right'></i>",
                previous: "<i class='icon-arrow-left'></i>BACK"
            },

            onInit: function (event, currentIndex) {
                addBootstrap(this, currentIndex);

                $(this).find('.step-title').each(function () {
                    var $this = $(this);
                    if ($this.siblings('span.step').length > 0) {
                        $this.siblings('span.step').empty();
                        $this.children('.step-icon').appendTo($this.siblings('span.step'));
                    }
                });
            }

        });

        // Circle vertical wizard
        $("#circle-wizard-vertical").steps({
            /* Appearance */
            headerTag: "h3",
            bodyTag: "section",
            transitionEffect: "fade",
            transitionEffectSpeed: 500,
            autoFocus: true,
            titleTemplate: '<span class="step">#index#</span><span class="step-title">#title#</span>',
            cssClass: "wizard circle-wizard",
            stepsOrientation: "vertical",

            /* Labels */
            labels: {
                finish: "FINISH",
                next: "NEXT  <i class='icon-arrow-right'></i>",
                previous: "<i class='icon-arrow-left'></i>BACK"
            },

            onInit: function (event, currentIndex) {
                addBootstrap(this, currentIndex);
                $(this).find('.step-title').each(function () {
                    var $this = $(this);
                    if ($this.siblings('span.step').length > 0) {
                        $this.siblings('span.step').empty();
                        $this.children('.step-icon').appendTo($this.siblings('span.step'));
                    }
                });
            }

        });

    },

    number_spinner: function () {

        var action;
        $(".number-spinner button").mousedown(function () {
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
        }).mouseup(function () {
            clearInterval(action);
        });

    },

    form_repeater: function () {

        if ($.fn.repeater) {

            // Default
            $('.repeater-default').repeater({
                show: function () {
                    $(this).slideDown();
                },
                hide: function (remove) {
                    $(this).slideUp(remove);
                }
            });

            // Custom Show / Hide Configurations
            $('.file-repeater').repeater({
                show: function () {
                    $(this).slideDown();
                },
                hide: function (remove) {
                    if (confirm('Are you sure you want to remove this item?')) {
                        $(this).slideUp(remove);
                    }
                }
            });

        } else {
            throw new Error('Please install Jquery Repeater plugin! https://github.com/DubFriend/jquery.repeater');
        }
    },

    max_length: function () {

        if ($.fn.maxlength) {
            // Default usage
            $('.basic-maxlength').maxlength({
                warningClass: "badge badge-success pointed arrow-top",
                limitReachedClass: "badge badge-danger  pointed arrow-top",
            });

            // Change the threshold value
            $('.threshold-maxlength').maxlength({
                threshold: 10,
                warningClass: "badge badge-success  pointed arrow-top",
                limitReachedClass: "badge badge-danger pointed arrow-top",
            });

            // AlwaysShow
            $('.always-show-maxlength').maxlength({
                alwaysShow: true,
                warningClass: "badge badge-success  pointed arrow-top",
                limitReachedClass: "badge badge-danger  pointed arrow-top",
            });

            // Change Badge Color using warningClass & limitReachedClass
            $('.badge-maxlength').maxlength({
                warningClass: "badge badge-info  pointed arrow-top",
                limitReachedClass: "badge badge-warning  pointed arrow-top"
            });

            // Change Badge Format
            $('.badge-text-maxlength').maxlength({
                alwaysShow: true,
                separator: ' of ',
                preText: 'You have ',
                postText: ' chars remaining.',
                validate: true,
                warningClass: "badge badge-success pointed arrow-top",
                limitReachedClass: "badge badge-danger  pointed arrow-top",
            });


            // Position
            $('.position-maxlength').maxlength({
                alwaysShow: true,
                warningClass: "badge badge-success pointed arrow-bottom",
                limitReachedClass: "badge badge-danger pointed arrow-bottom",
                placement: 'top'
                // Options : top, bottom, left or right
                //  bottom-right, top-right, top-left, bottom-left and centered-right.
            });

            $('.position-corner-maxlength').maxlength({
                alwaysShow: true,
                warningClass: "badge badge-success pointed arrow-right",
                limitReachedClass: "badge badge-danger  pointed arrow-right",
                placement: 'top-left'
                //  bottom-right, top-right, top-left, bottom-left and centered-right.
            });

            $('.position-inside-maxlength').maxlength({
                alwaysShow: true,
                warningClass: "badge badge-success pointed arrow-left",
                limitReachedClass: "badge badge-danger  pointed arrow-left",
                placement: 'centered-right'
                // Option : centered-right.
            });

            $('.featured-maxlength').maxlength({
                alwaysShow: true,
                threshold: 10,
                warningClass: "badge badge-info  pointed arrow-bottom",
                limitReachedClass: "badge badge-warning  pointed arrow-bottom",
                placement: 'top',
                message: 'Used %charsTyped% of %charsTotal% chars.'
            });

            // Teatarea Maxlength
            $('.textarea-maxlength').maxlength({
                alwaysShow: true,
                warningClass: "badge badge-success pointed arrow-top",
                limitReachedClass: "badge badge-danger pointed arrow-top",
            });

        } else {
            throw new Error('Please install Bootstrap Maxlength plugin! https://github.com/mimo84/bootstrap-maxlength/');
        }
    },

    raty: function () {
        if ($.fn.raty) {
            $.fn.raty.defaults.path = "assets/img/",
                $("#default-star-rating").raty(),
                $("#saved-rating").raty({score: 3}),
                $("#no-of-stars").raty({number: 10}),
                $("#read-only-stars").raty({readOnly: true, score: 3}),
                $("#space-star").raty({space: false}),
                $("#single-star").raty({single: true}),
                $("#half-star").raty({half: !0}),
                $("#custom-icon-heart").raty(
                    {
                        starOff: "fas fa-heart mr-1 text-muted",
                        starOn: "fas fa-heart mr-1 text-danger",
                        starType: "i",
                        score: 3
                    }
                ),
                $("#icon-range").raty({
                    iconRange: [
                        {range: 1, on: "fas fa-cloud mr-1 text-primary", off: "fas fa-cloud mr-1"},
                        {range: 2, on: "fas fa-bolt mr-1 text-primary", off: "fas fa-bolt mr-1"},
                        {range: 3, on: "fas fa-sun mr-1 text-primary", off: "fas fa-sun mr-1"},
                        {range: 4, on: "fas fa-tint mr-1 text-primary", off: "fas fa-tint mr-1"},
                        {range: 5, on: "fas fa-snowflake mr-1 text-primary", off: "fas fa-snowflake mr-1"}],
                    starType: "i"
                }),
                $("#cancel-star").raty({cancel: true})
        }
        else {
            throw new Error('Please install Raty plugin! https://github.com/wbotelhos/raty');
        }
    },

    jquery_validation_example: function () {

        jQuery.validator.addMethod("zipcodeUS", function (value, element) {
            return this.optional(element) || /\d{5}-\d{4}$|^\d{5}$/.test(value)
        }, "The specified US ZIP Code is invalid");

        jQuery.validator.addMethod('onecheck', function (value, ele) {
            return $("input:checked").length >= 1;
        }, 'Please Select Atleast One CheckBox')


        //Advanced validation
        $("#signupForm").validate({

            validClass: 'is-valid',
            errorClass: 'is-invalid',
            //TODO https://stackoverflow.com/questions/4381476/jquery-tooltip-to-display-validator-messages
            errorPlacement: function (error, element) {
                // Add the `invalid-feedback` class to the error element
                error.addClass("invalid-feedback");
                if (element.attr("type") == "radio" || element.attr("type") == "checkbox") {
                    error.appendTo(element.parents().find('div:first'));
                } else {
                    error.insertAfter(element)
                }
            },

            highlight: function (element, errorClass, validClass) {
                // $( element ).addClass( errorClass ).removeClass(validClass);
                $(element).addClass(errorClass);
            },
            unhighlight: function (element, errorClass, validClass) {
                // $( element ).addClass(validClass).removeClass(errorClass);
                $(element).removeClass(errorClass);
            },

            rules: {
                username: {
                    minlength: 4
                },
                password: {
                    minlength: 6
                },
                confirm_password: {
                    minlength: 6,
                    equalTo: "#password"
                },
                email: {
                    email: true
                },
                zip: {
                    zipcodeUS: true
                },
                role: {
                    onecheck: true
                },
                agree: "required"
            },
            messages: {
                firstname: "Please enter your firstname",
                lastname: "Please enter your lastname",
                username: {
                    required: "Please enter a username",
                    minlength: "Your username must consist of at least 4 characters"
                },
                password: {
                    required: "Please provide a password",
                    minlength: "Your password must be at least 6 characters long"
                },
                confirm_password: {
                    required: "Please provide a password",
                    minlength: "Your password must be at least 6 characters long",
                    equalTo: "Please enter the same password as above"
                },
                zip: {
                    required: "Please enter your zip code!"
                },
                city: "Please enter your city",
                role: "You must select at least one!",
                state: "Please select your state",
                email: "Please enter a valid email address",
                agree: "Please accept our policy"
            },

            submitHandler: function (form) {
                alert("This is a valid form!");
            }
        });

        //Advanced validation with tooltip
        $("#signupFormTooltip").validate({

            showErrors: function (errorMap, errorList) {

                // Clean up any tooltips for valid elements
                $.each(this.validElements(), function (index, element) {
                    var $element = $(element);

                    $element.data("title", "") // Clear the title - there is no error associated anymore
                        .removeClass("is-invalid")
                        .tooltip("dispose");
                });

                // Create new tooltips for invalid elements
                $.each(errorList, function (index, error) {
                    var $element = $(error.element);

                    $element.tooltip("dispose") // Destroy any pre-existing tooltip so we can repopulate with new tooltip content
                        .data("title", error.message)
                        .addClass("is-invalid")
                        .tooltip({
                            // Position of the tooltip on top, bottom, left or the right side of the element:
                            placement: "top",
                            template: '<div class="tooltip tooltip-danger" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',

                        }); // Create a new tooltip based on the error messsage we just set in the title
                });
            },

            highlight: function (element, errorClass, validClass) {
                // $( element ).addClass( errorClass ).removeClass(validClass);
                $(element).addClass(errorClass);
            },
            unhighlight: function (element, errorClass, validClass) {
                // $( element ).addClass(validClass).removeClass(errorClass);
                $(element).removeClass(errorClass);
            },

            rules: {
                username: {
                    minlength: 4
                },
                password: {
                    minlength: 6
                },
                confirm_password: {
                    minlength: 6,
                    equalTo: "#password-5"
                },
                email: {
                    email: true
                },
                zip: {
                    zipcodeUS: true
                },
                agree: "required"
            },
            messages: {
                firstname: "Please enter your firstname",
                lastname: "Please enter your lastname",
                username: {
                    required: "Please enter a username",
                    minlength: "Your username must consist of at least 4 characters"
                },
                password: {
                    required: "Please provide a password",
                    minlength: "Your password must be at least 6 characters long"
                },
                confirm_password: {
                    required: "Please provide a password",
                    minlength: "Your password must be at least 6 characters long",
                    equalTo: "Please enter the same password as above"
                },
                zip: {
                    required: "Please enter your zip code!"
                },
                city: "Please enter your city",
                state: "Please select your state",
                email: "Please enter a valid email address",
                agree: "Please accept our policy"
            },

            submitHandler: function (form) {
                alert("This is a valid form!");
            }
        });

        // On clicking reset button, every error should be cleared
        $('.clearform').on('click', function () {
            $("#signupForm").validate().resetForm();  // clear out the validation errors
        });

    },

    set_footer_height: function () {

        function set_heights() {
            var footerHeight = $('.master-footer').height();
            $('.content__wrap').css('padding-bottom', footerHeight + 'px');
        }

        set_heights();

        $(window).resize(function () {
            set_heights();
        });

    },

    slider: function () {

        var verticalSlider = document.getElementById('sliderVertical');
        var sliderRegular = document.getElementById('sliderRegular');
        var sliderRegularValueElement = document.getElementById('sliderRegularValue');

        var sliderMultipleHandles = document.getElementById('sliderMultipleHandles');
        var sliderMultipleHandlesValueElement = document.getElementById('sliderMultipleHandlesValueElement');

        var sliderColorVerticalOne = document.getElementById('sliderColorVerticalOne');
        var sliderColorVerticalTwo = document.getElementById('sliderColorVerticalTwo');
        var sliderColorVerticalThree = document.getElementById('sliderColorVerticalThree');
        var sliderColorVerticalFour = document.getElementById('sliderColorVerticalFour');
        var sliderColorVerticalFive = document.getElementById('sliderColorVerticalFive');

        var sliderTooltips = document.getElementById('sliderTooltips');
        var sliderPips = document.getElementById('sliderPips');

        var sliderColor = document.getElementsByClassName('sliderColor');

        noUiSlider.create(sliderRegular, {
            start: 50,
            connect: [true, false],
            range: {
                min: 0,
                max: 100
            }
        });

        sliderRegular.noUiSlider.on('update', function (values, handle) {
            sliderRegularValueElement.innerHTML = values[handle];
        });

        noUiSlider.create(sliderMultipleHandles, {
            start: [25, 75],
            connect: true,
            range: {
                min: 0,
                max: 100
            }
        });

        sliderMultipleHandles.noUiSlider.on('update', function (values, handle) {
            sliderMultipleHandlesValueElement.innerHTML = values[handle];
        });

        noUiSlider.create(sliderTooltips, {
            start: [10, 90],
            tooltips: [true, true],
            connect: true,
            range: {
                min: 0,
                max: 100
            }
        });


        noUiSlider.create(sliderPips, {
            start: [25, 75],
            tooltips: [true, true],
            connect: true,
            range: {
                'min': 0,
                'max': 100
            },
            pips: {
                mode: 'positions',
                values: [0, 25, 50, 75, 100],
                density: 5
            }
        });

        noUiSlider.create(verticalSlider, {
            start: [25, 75],
            orientation: 'vertical',
            direction: 'rtl',
            tooltips: [true, true],
            connect: true,
            range: {
                'min': 0,
                'max': 100
            },
            pips: {
                mode: 'positions',
                values: [0, 25, 50, 75, 100],
                density: 5
            }
        });

        $(sliderColor).each(function (i, val) {
            noUiSlider.create(sliderColor[i], {
                start: 50,
                connect: [true, false],
                range: {
                    min: 0,
                    max: 100
                }
            });
        });

        noUiSlider.create(sliderColorVerticalOne, {
            start: 70,
            orientation: 'vertical',
            direction: 'rtl',
            connect: [true, false],
            range: {
                min: 0,
                max: 100
            }
        });
        noUiSlider.create(sliderColorVerticalTwo, {
            start: 50,
            orientation: 'vertical',
            direction: 'rtl',
            connect: [true, false],
            range: {
                min: 0,
                max: 100
            }
        });
        noUiSlider.create(sliderColorVerticalThree, {
            start: 70,
            orientation: 'vertical',
            direction: 'rtl',
            connect: [true, false],
            range: {
                min: 0,
                max: 100
            }
        });
        noUiSlider.create(sliderColorVerticalFour, {
            start: 30,
            orientation: 'vertical',
            direction: 'rtl',
            connect: [true, false],
            range: {
                min: 0,
                max: 100
            }
        });
        noUiSlider.create(sliderColorVerticalFive, {
            start: 20,
            orientation: 'vertical',
            direction: 'rtl',
            connect: [true, false],
            range: {
                min: 0,
                max: 100
            }
        });


        // if ($.fn.noUiSlider) {
        //
        // } else {
        //     throw new Error('Please install noUiSlider plugin! https://github.com/leongersen/noUiSlider/');
        // }
    },


    expand_collapse: function () {
        $('.expand_all').on('click', function (e) {
            e.preventDefault();
            $('#accordion-exp-collapse').find('.multi-collapse').collapse('show');
        });

        $('.collapse_all').on('click', function (e) {
            e.preventDefault();
            $('#accordion-exp-collapse').find('.multi-collapse').collapse('hide');
        });
    },

    toastr: function () {
        // Success Type
        $('#type-success').on('click', function () {
            toastr.success('Have fun storming the castle!', 'Miracle Max Says');
        });

        // Info Type
        $('#type-info').on('click', function () {
            toastr.info('We do have the Kapua suite available.', 'Turtle Bay Resort');
        });

        // Warning Type
        $('#type-warning').on('click', function () {
            toastr.warning('My name is Inigo Montoya. You killed my father, prepare to die!');
        });

        // Error Type
        $('#type-error').on('click', function () {
            toastr.error('I do not think that word means what you think it means.', 'Inconceivable!');
        });


        // Position Top Left
        $('#position-top-left').on('click', function () {
            toastr.info('I do not think that word means what you think it means.', 'Top Left!', {positionClass: 'toast-top-left'});
        });

        // Position Top Center
        $('#position-top-center').on('click', function () {
            toastr.info('I do not think that word means what you think it means.', 'Top Center!', {positionClass: 'toast-top-center'});
        });

        // Position Top Right
        $('#position-top-right').on('click', function () {
            toastr.info('I do not think that word means what you think it means.', 'Top Right!', {positionClass: 'toast-top-right'});
        });

        // Position Top Full Width
        $('#position-top-full').on('click', function () {
            toastr.info('I do not think that word means what you think it means.', 'Top Full Width!', {positionClass: 'toast-top-full-width'});
        });

        // Position Bottom Left
        $('#position-bottom-left').on('click', function () {
            toastr.info('I do not think that word means what you think it means.', 'Bottom Left!', {positionClass: 'toast-bottom-left'});
        });

        // Position Bottom Center
        $('#position-bottom-center').on('click', function () {
            toastr.info('I do not think that word means what you think it means.', 'Bottom Center!', {positionClass: 'toast-bottom-center'});
        });

        // Position Bottom Right
        $('#position-bottom-right').on('click', function () {
            toastr.info('I do not think that word means what you think it means.', 'Bottom Right!', {positionClass: 'toast-bottom-right'});
        });

        // Position Bottom Full Width
        $('#position-bottom-full').on('click', function () {
            toastr.info('I do not think that word means what you think it means.', 'Bottom Full Width!', {positionClass: 'toast-bottom-full-width'});
        });

        // Text Notification
        $('#text-notification').on('click', function () {
            toastr.info('Have fun storming the castle!');
        });

        // Close Button
        $('#close-button').on('click', function () {
            toastr.success('Have fun storming the castle!', 'With Close Button', {"closeButton": true});
        });

        // Progress Bar
        $('#progress-bar').on('click', function () {
            toastr.success('Have fun storming the castle!', 'Progress Bar', {"progressBar": true});
        });

        // Clear Toast Button
        $('#clear-toast-btn').on('click', function () {
            toastr.error('Clear itself?<br /><br /><button type="button" class="btn btn-primary">Yes</button>', 'Clear Toast Button');
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
    appMaster.responsive();
    appMaster.sidebar();
    appMaster.overlay();
    appMaster.dropdown();
    appMaster.aside();
    appMaster.tooltip();
    appMaster.popover();
    appMaster.input_group_focus();
    appMaster.card();
    appMaster.textarea_counter();
    appMaster.multi_select();
    appMaster.chosen();
    appMaster.datepicker();
    appMaster.number_spinner();
    appMaster.wizard_step();
    appMaster.form_repeater();
    appMaster.max_length();
    appMaster.jquery_validation_example();
    appMaster.set_footer_height();
    appMaster.slider();
    appMaster.raty();
    appMaster.expand_collapse();
    appMaster.toastr();
});


// TODO, just visit view-source:http://jaybabani.com/complete-admin/v4.2/preview/assets/js/scripts.js