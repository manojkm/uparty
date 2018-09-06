// ================================================================================================
// File Name: bootstrap-tagsinput.js
// Description: Initialize Bootstrap Tags Input plugin
// ----------------------------------------------------------------------------------------------
// Item Name: xxx - Responsive Admin Theme
// Version: 1.2
// Author: MANOJ
// Author URL: http://www.themeforest.net/user/xxx
// ================================================================================================

$(document).ready(function () {
    'use strict';

    setTimeout(function () {
        $('.bootstrap-tagsinput').each(function (i, e) {
            // i is a counter of the loop element
            $(e).addClass('form-control');
        });
    }, 250);


    // Categorizing tags
    var $el = $('#bs-tagsinput-1');
    $el.tagsinput({
        tagClass: function(item) {
            switch (item.continent) {
                case 'Europe'   : return 'badge badge-primary';
                case 'America'  : return 'badge badge-danger';
                case 'Australia': return 'badge badge-success';
                case 'Africa'   : return 'badge badge-info';
                case 'Asia'     : return 'badge badge-warning';
            }
        },

        itemValue: 'value',
        itemText:  'text',
    });

    $el.tagsinput('add', { value: 1,  text: 'Amsterdam',  continent: 'Europe' });
    $el.tagsinput('add', { value: 4,  text: 'Washington', continent: 'America' });
    $el.tagsinput('add', { value: 7,  text: 'Sydney',     continent: 'Australia' });
    $el.tagsinput('add', { value: 10, text: 'Beijing',    continent: 'Asia' });
    $el.tagsinput('add', { value: 13, text: 'Cairo',      continent: 'Africa' });

    // Colored tags
    $('#bs-tagsinput-2').tagsinput({ tagClass: 'badge badge-primary' });
    $('#bs-tagsinput-3').tagsinput({ tagClass: 'badge badge-secondary' });
    $('#bs-tagsinput-4').tagsinput({ tagClass: 'badge badge-success' });
    $('#bs-tagsinput-5').tagsinput({ tagClass: 'badge badge-info' });
    $('#bs-tagsinput-6').tagsinput({ tagClass: 'badge badge-warning' });
    $('#bs-tagsinput-7').tagsinput({ tagClass: 'badge badge-danger' });
    $('#bs-tagsinput-8').tagsinput({ tagClass: 'badge badge-light' });
    $('#bs-tagsinput-9').tagsinput({ tagClass: 'badge badge-dark' });

});
