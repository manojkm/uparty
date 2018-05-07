// ================================================================================================
// File Name: chosen.jquery.js
// Description: Initialize chosen jquery plugin
// ----------------------------------------------------------------------------------------------
// Item Name: xxx - Responsive Admin Theme
// Version: 1.2
// Author: MANOJ
// Author URL: http://www.themeforest.net/user/xxx
// ================================================================================================

$(document).ready(function () {
    'use strict';
    if ($.fn.chosen) {
        // $(element).chosen({width: "100%"});
        $(".chosen-drop").addClass('animated fadeIn');
        var config = {
            '.chosen-select': {width: '100%'},
            '.chosen-select-deselect': {allow_single_deselect: true, width: '100%'},
            '.chosen-select-no-single': {disable_search_threshold: 10, width: '100%'},
            '.chosen-select-no-results': {no_results_text: 'Oops, nothing found!', width: '100%'},
            '.chosen-select-rtl': {rtl: true, width: '100%'},
            '.chosen-select-width': {width: '100%'}
        };
        for (var selector in config) {
            $(selector).chosen(config[selector]);
        }

    } else {
        throw new Error('Please install Chosen plugin! https://github.com/harvesthq/chosen');
    }
});
