// ================================================================================================
// File Name: summernote.js
// Description: Initialize Summernote plugin
// ----------------------------------------------------------------------------------------------
// Item Name: xxx - Responsive Admin Theme
// Version: 1.2
// Author: MANOJ
// Author URL: http://www.themeforest.net/user/xxx
// ================================================================================================

$(document).ready(function () {
    'use strict';
    if (window.summernote) {

        $('#summernote').summernote({
            height: 350,                 // set editor height
            minHeight: null,             // set minimum height of editor
            maxHeight: null,             // set maximum height of editor
            focus: false                 // set focus to editable area after initializing summernote
        });

        $('.inline-editor').summernote({
            airMode: true
        });

    }
    else {
        throw new Error('Please install Summernote plugin from CDN! https://summernote.org/getting-started/#installation');
    }
});
