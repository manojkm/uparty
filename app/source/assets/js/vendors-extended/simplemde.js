// ================================================================================================
// File Name: simplemde.js
// Description: Initialize SimpleMDE plugin
// ----------------------------------------------------------------------------------------------
// Item Name: xxx - Responsive Admin Theme
// Version: 1.2
// Author: MANOJ
// Author URL: http://www.themeforest.net/user/xxx
// ================================================================================================

$(document).ready(function () {
    'use strict';

    if (window.SimpleMDE) {
        var simplemde = new SimpleMDE({element: $("#myEditor")[0]});
    }
    else {
        throw new Error('Please install SimpleMDE plugin from jsDelivr! https://github.com/sparksuite/simplemde-markdown-editor/');
    }
});
