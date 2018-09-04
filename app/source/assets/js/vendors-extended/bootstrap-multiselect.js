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

});
