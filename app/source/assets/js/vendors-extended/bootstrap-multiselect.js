// ================================================================================================
// File Name: bootstrap-multiselect.js
// Description: Initialize Bootstrap Multiselect plugin from CDN!
//              https://cdnjs.com/libraries/bootstrap-multiselect'
// ----------------------------------------------------------------------------------------------
// Item Name: xxx - Responsive Admin Theme
// Version: 1.2
// Author: MANOJ
// Author URL: http://www.themeforest.net/user/xxx
// ================================================================================================

$(document).ready(function () {
    'use strict';

    $('#bs-multiselect-1,#bs-multiselect-2,#bs-multiselect-3').multiselect(
        {
            buttonClass: 'btn btn-outline-primary',
            templates: {
                ul: '<ul class="multiselect-container dropdown-menu extended"></ul>',
            }
        }
    );

    $('#bs-multiselect-4').multiselect({
        enableClickableOptGroups: true,
        enableFiltering: true,
        includeSelectAllOption: true,
       // buttonWidth: '100%',
        maxHeight: 400,
        dropUp: true,
        buttonClass: 'btn btn-outline-primary',
        templates: {
            ul: '<ul class="multiselect-container dropdown-menu extended"></ul>',
            filter: '<li class="multiselect-item filter"><div class="input-group input-group-sm"><div class="input-group-prepend"><span class="input-group-text"><i class="icon-magnifier"></i></span></div><input class="form-control multiselect-search" type="text"></div></li>',
            filterClearBtn: '<div class="input-group-append"><button class="btn btn-light multiselect-clear-filter" type="button"><i class="icon-close"></i></button></div>',
        }
    });

    $('#bs-multiselect-5').multiselect({
        enableClickableOptGroups: true,
        enableCollapsibleOptGroups: true,
        collapseOptGroupsByDefault: true,
        enableFiltering: true,
        // buttonWidth: '100%',
        maxHeight: 400,
        dropUp: true,
        buttonClass: 'btn btn-outline-primary',
        templates: {
            ul: '<ul class="multiselect-container dropdown-menu extended"></ul>',
            filter: '<li class="multiselect-item filter"><div class="input-group input-group-sm"><div class="input-group-prepend"><span class="input-group-text"><i class="icon-magnifier"></i></span></div><input class="form-control multiselect-search" type="text"></div></li>',
            filterClearBtn: '<div class="input-group-append"><button class="btn btn-light multiselect-clear-filter" type="button"><i class="icon-close"></i></button></div>',
        }
    });

});
