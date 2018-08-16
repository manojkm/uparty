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
            placeholderClass: 'list-group-item ph-class',
            hoverClass: 'sort-hover-move',
            //handle: '.handle',
            //cursor: 'move',
            //opacity: 0.4,
        });

        sortable('.sortable-handle', {
            forcePlaceholderSize: true,
            placeholderClass: 'list-group-item ph-class',
            //hoverClass: 'sort-hover-move',
            handle: '.handle-drag',
            //cursor: 'move',
            //opacity: 0.4,
        });

        sortable('#sortable-c1', {
            forcePlaceholderSize: true,
            acceptFrom: '#sortable-c2,#sortable-c1',
            placeholderClass: 'list-group-item ph-class',
            hoverClass: 'sort-hover-move',
        });

        sortable('#sortable-c2', {
            forcePlaceholderSize: true,
            acceptFrom: '#sortable-c1,#sortable-c2',
            placeholderClass: 'list-group-item ph-class',
            hoverClass: 'sort-hover-move',
        });

    } else {
        throw new Error('Please install html5sortable plugin! https://github.com/lukasoppermann/html5sortable');
    }
});
