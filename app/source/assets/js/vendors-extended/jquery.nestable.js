// ================================================================================================
// File Name: jquery.nestable.js
// Description: Initialize Jquery Nestable plugin
// ----------------------------------------------------------------------------------------------
// Item Name: xxx - Responsive Admin Theme
// Version: 1.2
// Author: MANOJ
// Author URL: http://www.themeforest.net/user/xxx
// ================================================================================================

$(document).ready(function () {
    'use strict';

    // Used for toggle the Nestable on a button’s toggle state.
    var $expand = false;
    $('#nestable-menu').on('click', function(e)
    {
        if ($expand) {
            $expand = false;
            $('.dd-has-toggle').nestable('expandAll');
        }else {
            $expand = true;
            $('.dd-has-toggle').nestable('collapseAll');
        }
    });

    // Activate Nestable
    $('.dd').nestable();

});
