// ================================================================================================
// File Name: bootstrap-datepicker.js
// Description: Initialize bootstrap-datepicker plugin
// ----------------------------------------------------------------------------------------------
// Item Name: xxx - Responsive Admin Theme
// Version: 1.2
// Author: MANOJ
// Author URL: http://www.themeforest.net/user/xxx
// ================================================================================================

$(document).ready(function () {
    'use strict';
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

        $('.date-picker_5').datepicker({
            format: 'mm-dd-yyyy'
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
});
