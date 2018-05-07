// ================================================================================================
// File Name: jquery.repeater.js
// Description: Initialize jquery repeater plugin
// ----------------------------------------------------------------------------------------------
// Item Name: xxx - Responsive Admin Theme
// Version: 1.2
// Author: MANOJ
// Author URL: http://www.themeforest.net/user/xxx
// ================================================================================================

$(document).ready(function () {
    'use strict';
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
});
