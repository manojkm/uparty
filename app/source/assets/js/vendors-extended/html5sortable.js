// ================================================================================================
// File Name: html5sortable.js
// Description: Initialize html5sortable plugin
// ----------------------------------------------------------------------------------------------
// Item Name: xxx - Responsive Admin Theme
// Version: 1.2
// Author: MANOJ
// Author URL: http://www.themeforest.net/user/xxx
// ================================================================================================

$(document).ready(function () {
    'use strict';
    if (typeof sortable !== 'undefined') {

        sortable('.sortable', {
            forcePlaceholderSize: true,
            placeholderClass: 'list-group-item list-group-item-light ph-class',
            hoverClass: 'sort-hover',
        });

    } else {
        throw new Error('Please install html5sortable plugin! https://github.com/lukasoppermann/html5sortable');
    }
});
