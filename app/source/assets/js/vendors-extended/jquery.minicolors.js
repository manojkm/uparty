// ================================================================================================
// File Name: jquery.minicolors.js
// Description: Initialize jquery minicolors plugin
// ----------------------------------------------------------------------------------------------
// Item Name: xxx - Responsive Admin Theme
// Version: 1.2
// Author: MANOJ
// Author URL: http://www.themeforest.net/user/xxx
// ================================================================================================

$(document).ready(function () {
    'use strict';
    if ($.fn.minicolors) {

        $.minicolors.defaults = $.extend($.minicolors.defaults, {
            changeDelay: 200,
            letterCase: 'uppercase',
            theme: 'bootstrap'
        });

        $('#minicolors-hue, #text-field').minicolors({
            control: 'hue'
        });

        $('#minicolors-brightness').minicolors({
            control: 'brightness',
            position: 'top right'
        });

        $('#minicolors-saturation').minicolors({
            control: 'saturation',
            position: 'top right'
        });

        $('#minicolors-wheel').minicolors({
            control: 'wheel',
            opacity: true
        });

        $('#minicolors-hidden').minicolors();

        $('#minicolors-inline').minicolors({
            inline: true
        });

        $('#minicolors-rgb').minicolors({
            format: 'rgb'
        });

        $('#minicolors-rgba').minicolors({
            format: 'rgb',
            opacity: true
        });

    }
    else {
        throw new Error('Please install jquery minicolors plugin! https://github.com/claviska/jquery-minicolors');
    }
});
