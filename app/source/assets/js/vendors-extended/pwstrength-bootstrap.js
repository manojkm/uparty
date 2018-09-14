// ================================================================================================
// File Name: pwstrength-bootstrap.js
// Description: Initialize Bootstrap Password Strength plugin
// ----------------------------------------------------------------------------------------------
// Item Name: xxx - Responsive Admin Theme
// Version: 1.2
// Author: MANOJ
// Author URL: http://www.themeforest.net/user/xxx
// ================================================================================================

$(document).ready(function () {
    'use strict';


    // Default
    $('#pwstrength-1').pwstrength({
        ui: {
            progressExtraCssClasses: 'pwstrength-progress progress-sm'
        }
    });

    // Inside progress bar
    $('#pwstrength-2').pwstrength({
        ui: {
            progressExtraCssClasses: 'pwstrength-progress progress-lg',
            showVerdictsInsideProgressBar: true
        }
    });

    // Show errors
    $('#pwstrength-3').pwstrength({
        ui: {
            progressExtraCssClasses: 'pwstrength-progress progress-sm',
            useVerdictCssClass: true,
            showErrors: true
        }
    });

    // hide/show password
    $(".icon-wrapper").click(function () {
        $(".toggle-password").toggleClass("icon-eye icon-options");
        var input = $($(".toggle-password").attr("toggle"));
        if (input.attr("type") == "password") {
            input.attr("type", "text");
        } else {
            input.attr("type", "password");
        }
    });


    // With visibility toggle
    $('#pwstrength-4').pwstrength({
        ui: {
            container: "#pwd-container",
            viewports: {
                progress: "#pwstrength_viewport_progress",
                verdict: "#pwstrength_viewport_verdict",
                errors: "#pwstrength_viewport_errors",
                score: "#pwstrength_viewport_score"
            },
            progressExtraCssClasses: 'pwstrength-progress progress-sm',
            useVerdictCssClass: true,
            showErrors: true,
            showScore: false
        }
    });

    // Show Popover
    $('#pwstrength-5').pwstrength({
        ui: {
            progressExtraCssClasses: 'pwstrength-progress progress-sm',
            showPopover: true,
            // showErrors: true
        }
    });

    // Show border status
    $('#pwstrength-6').pwstrength({
        ui: {
            showStatus: true,
            showProgressBar: false,
        }
    });


});
