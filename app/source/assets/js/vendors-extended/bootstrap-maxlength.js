// ================================================================================================
// File Name: bootstrap-maxlength.js
// Description: Initialize bootstrap maxlength plugin
// ----------------------------------------------------------------------------------------------
// Item Name: xxx - Responsive Admin Theme
// Version: 1.2
// Author: MANOJ
// Author URL: http://www.themeforest.net/user/xxx
// ================================================================================================

$(document).ready(function () {
    'use strict';
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
});
