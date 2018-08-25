// ================================================================================================
// File Name: tempusdominus-bootstrap-4.js
// Description: Initialize Tempus Dominus Bootstrap 4 Datetime Picker plugin
// ----------------------------------------------------------------------------------------------
// Item Name: xxx - Responsive Admin Theme
// Version: 1.2
// Author: MANOJ
// Author URL: http://www.themeforest.net/user/xxx
// ================================================================================================

$(document).ready(function () {
    'use strict';
    if ($.fn.datetimepicker) {
        $.fn.datetimepicker.Constructor.Default = $.extend({}, $.fn.datetimepicker.Constructor.Default, {
            icons: {
                time: 'far fa-clock',
                date: 'far fa-calendar',
                up: 'fas fa-arrow-up',
                down: 'fas fa-arrow-down',
                previous: 'fas fa-chevron-left',
                next: 'fas fa-chevron-right',
                today: 'far fa-calendar-check',
                clear: 'far fa-trash',
                close: 'fas fa-times'
            }, locale: 'es'
        });

        $('#datetimepicker13').datetimepicker({
            inline: true,
            sideBySide: true
        });

        // $('#datetimepicker1').datetimepicker({
        //     ignoreReadonly: true,
        //     allowInputToggle: true
        // });

        $('#datetimepicker1').datetimepicker({
            focusOnShow: false,
            ignoreReadonly: true
        }).on('dp.show', function (e) {
            $(e.target).on('mousedown', function (e) {
                $(e.target).data("DateTimePicker").hide();
                e.preventDefault();
            });
        }).on('dp.hide', function (e) {
            $(e.target).off('mousedown');
        });

    }
    else {
        throw new Error('Please install bootstrap-datepicker plugin! https://github.com/uxsolutions/bootstrap-datepicker');
    }

});
