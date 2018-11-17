// ================================================================================================
// File Name: jquery.bootstrap-dropdown-hover.js
// Description: Initialize Bootstrap Dropdown Hover plugin
// ----------------------------------------------------------------------------------------------
// Item Name: xxx - Responsive Admin Theme
// Version: 1.2
// Author: MANOJ
// Author URL: http://www.themeforest.net/user/xxx
// ================================================================================================

$(document).ready(function () {
    'use strict';
    if ($.fn.bootstrapDropdownHover) {
        $('.dropdown-toggle[data-trigger="hover"]').bootstrapDropdownHover({});
    } else {
        throw new Error('Please install Bootstrap Dropdown Hover plugin! https://github.com/istvan-ujjmeszaros/bootstrap-dropdown-hover');
    }
});
