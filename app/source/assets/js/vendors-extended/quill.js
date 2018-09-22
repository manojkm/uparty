// ================================================================================================
// File Name: quill.js
// Description: Initialize Quill plugin
// ----------------------------------------------------------------------------------------------
// Item Name: xxx - Responsive Admin Theme
// Version: 1.2
// Author: MANOJ
// Author URL: http://www.themeforest.net/user/xxx
// ================================================================================================

$(document).ready(function () {
    'use strict';

    if (window.Quill){

        var editor = new Quill('#quill-editor', {
            modules: {
                toolbar: '#quill-toolbar'
            },
            placeholder: 'Type something',
            theme: 'snow'
        });

        var bubbleEditor = new Quill('#quill-bubble-editor', {
            placeholder: 'Compose an epic and then select a text to reveal the toolbar...',
            theme: 'bubble'
        });

    }
    else {
        throw new Error('Please install quilljs plugin from CDN! https://quilljs.com/docs/download/');
    }
});
