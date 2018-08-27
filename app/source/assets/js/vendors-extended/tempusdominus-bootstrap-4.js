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

        // Date and time picker
        $('#datetimepicker1').datetimepicker();

        // Time only
        $('#datetimepicker3').datetimepicker({
            format: 'LT'
        });

        // Date only
        $('#datetimepicker4').datetimepicker({
            format: 'L'
        });

        // No Icon (input field only)
        $('#datetimepicker5').datetimepicker();

        // Enabled/Disabled Dates
        $('#datetimepicker6').datetimepicker({
            defaultDate: "08/22/2018",
            disabledDates: [
                "08/10/2018 00:53",
                "08/11/2018 00:53",
                "08/12/2018 00:53",
                "08/13/2018 00:53",
                "08/14/2018 00:53",
                "08/15/2018 00:53",
            ]
        });

        // Linked Pickers
        $('#datetimepicker7').datetimepicker();
        $('#datetimepicker8').datetimepicker({
            useCurrent: false
        });
        $("#datetimepicker7").on("change.datetimepicker", function (e) {
            $('#datetimepicker8').datetimepicker('minDate', e.date);
        });
        $("#datetimepicker8").on("change.datetimepicker", function (e) {
            $('#datetimepicker7').datetimepicker('maxDate', e.date);
        });

        // View Mode
        $('#datetimepicker10').datetimepicker({
            viewMode: 'years'
        });

        // Min View Mode
        $('#datetimepicker11').datetimepicker({
            viewMode: 'years',
            format: 'MM/YYYY'
        });

        // Disabled days of the week
        $('#datetimepicker12').datetimepicker({
            daysOfWeekDisabled: [0, 6]
        });

        // Inline
        $('#datetimepicker13').datetimepicker({
            inline: true,
            sideBySide: true
        });


        //
        // $('#test-to-inspect').datetimepicker({
        //     focusOnShow: false,
        //     ignoreReadonly: true
        // }).on('dp.show', function (e) {
        //     $(e.target).on('mousedown', function (e) {
        //         $(e.target).data("DateTimePicker").hide();
        //         e.preventDefault();
        //     });
        // }).on('dp.hide', function (e) {
        //     $(e.target).off('mousedown');
        // });

    }
    else {
        throw new Error('Please install Tempus Dominus Bootstrap 4 Datetime Picker plugin! https://github.com/tempusdominus/bootstrap-4');
    }

});
