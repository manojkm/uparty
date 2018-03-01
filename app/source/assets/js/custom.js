'use strict';
if (typeof jQuery === 'undefined') {
    throw new Error('Theme\'s JavaScript requires jQuery');
}


var appMaster = {

    _body: $('body'),
    _logo: $('.sidebar__brand__logo'),
    _side_nav: $('.sidebar__nav, .sidebar__footer-nav'),
    _side_item: $('.sidebar__list > .sidebar__item'),
    _aside: $("[data-aside='show']"),
    _mini: $("[data-side='mini']"),
    _hide: $("[data-side='hide']"),
    _overlay: $('.overlay'),
    _tooltip: $("[data-toggle='tooltip']"),
    _popover: $("[data-toggle='popover']"),
    _textarea_counter: $("[data-toggle='counter']"),
    _formctrl: $('.form-control'),
    _card_close: $("[data-card='close']"),
    _card_collapse: $("[data-card='collapse']"),
    _card_fullscreen: $("[data-card='fullscreen']"),


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
            // appMaster._stopMetisMenu();
        });

        $(appMaster._mini).on('click', function (event) {
            event.preventDefault();
            $(this).toggleClass('collapsed');
            appMaster._body.toggleClass('sidebar-mini').removeClass('aside-is-open');
            appMaster._aside.addClass('collapsed');
            // appMaster._stopMetisMenu();
            appMaster._changeLogo();
        });

        $(appMaster._side_item).on('mouseover', function () {
            $(this).addClass("show");
        }).on('mouseout', function () {
            $(this).removeClass('show');
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

    aside: function () {

        var asideisOpen = false;

        appMaster._aside.on('click', function (event) {
            event.preventDefault();
            $(this).toggleClass('collapsed');
            // Adapted from https://codepen.io/j_holtslander/pen/XmpMEp TODO, nice adaption, so pls learn and correct the above methods
            if (asideisOpen == false) {
                appMaster._body.addClass('aside-is-open sidebar-mini');
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
            $(elem).find('.progress-bar').css({width: $percent + '%'}).text("Step " + $current + " of " + $total);
        }

        function addBootstrap(elem, index) {
            var $this = $(elem);
            // $this.children('.steps').find('ul li').addClass('nav-item').find('a').addClass('nav-link');
            $this.children('.actions').find('a').addClass('btn btn-primary');
        }

        $("#wizard").steps({
            /* Appearance */
            headerTag: "h3",
            bodyTag: "section",
            transitionEffect: "fade",
            transitionEffectSpeed: 500,
            autoFocus: true,
            titleTemplate: '<span class="number">#index#.</span> #title#',
            loadingTemplate: '<span class="spinner"></span> #text#',

            onInit: function (event, currentIndex) {
                updateProgress(this, currentIndex);
                addBootstrap(this, currentIndex);
            },

            onStepChanging: function (event, currentIndex, newIndex) {
                updateProgress(this, newIndex);
                return true;
            },
            onStepChanged: function (event, currentIndex, priorIndex) {
                // $('.steps .current').siblings().children().removeClass('active');
                // $('.steps .current a').addClass('active');
            },

            onFinished: function (event, currentIndex) {
                alert("Submitted!");
            },
        });

        $("#wizard-vertical").steps({
            headerTag: "h3",
            bodyTag: "section",
            transitionEffect: "fade",
            transitionEffectSpeed: 500,
            autoFocus: true,
            titleTemplate: '<span class="number">#index#.</span> #title#',
            loadingTemplate: '<span class="spinner"></span> #text#',
            stepsOrientation: "vertical",
            onInit: function (event, currentIndex) {
                updateProgress(this, currentIndex);
                addBootstrap(this, currentIndex);
            },
            onStepChanging: function (event, currentIndex, newIndex) {
                updateProgress(this, newIndex);
                return true;
            },
            onStepChanged: function (event, currentIndex, priorIndex) {
            },

            onFinished: function (event, currentIndex) {
                alert("Submitted!");
            },
        });

        $("#wizard-tab").steps({
            headerTag: "h3",
            bodyTag: "section",
            transitionEffect: "slideLeft",
            enableFinishButton: true,
            enablePagination: true,
            enableAllSteps: true,
            titleTemplate: "#title#",
            cssClass: "tabcontrol"
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

    }


};

var Pluggin = {
    metismenu: function metismenu(element) {
        if ($.fn.metisMenu) {
            $(element).metisMenu();

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
    appMaster.smart_wizard();
});


// TODO, just visit view-source:http://jaybabani.com/complete-admin/v4.2/preview/assets/js/scripts.js