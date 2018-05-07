// ================================================================================================
// File Name: toastr.js
// Description: Initialize Toastr plugin
// ----------------------------------------------------------------------------------------------
// Item Name: xxx - Responsive Admin Theme
// Version: 1.2
// Author: MANOJ
// Author URL: http://www.themeforest.net/user/xxx
// ================================================================================================

$(document).ready(function () {
    'use strict';

// Success Type
    $('#type-success').on('click', function () {
        toastr.success('Have fun storming the castle!', 'Miracle Max Says');
    });

    // Info Type
    $('#type-info').on('click', function () {
        toastr.info('We do have the Kapua suite available.', 'Turtle Bay Resort');
    });

    // Warning Type
    $('#type-warning').on('click', function () {
        toastr.warning('My name is Inigo Montoya. You killed my father, prepare to die!');
    });

    // Error Type
    $('#type-error').on('click', function () {
        toastr.error('I do not think that word means what you think it means.', 'Inconceivable!');
    });


    // Position Top Left
    $('#position-top-left').on('click', function () {
        toastr.info('I do not think that word means what you think it means.', 'Top Left!', {positionClass: 'toast-top-left'});
    });

    // Position Top Center
    $('#position-top-center').on('click', function () {
        toastr.info('I do not think that word means what you think it means.', 'Top Center!', {positionClass: 'toast-top-center'});
    });

    // Position Top Right
    $('#position-top-right').on('click', function () {
        toastr.info('I do not think that word means what you think it means.', 'Top Right!', {positionClass: 'toast-top-right'});
    });

    // Position Top Full Width
    $('#position-top-full').on('click', function () {
        toastr.info('I do not think that word means what you think it means.', 'Top Full Width!', {positionClass: 'toast-top-full-width'});
    });

    // Position Bottom Left
    $('#position-bottom-left').on('click', function () {
        toastr.info('I do not think that word means what you think it means.', 'Bottom Left!', {positionClass: 'toast-bottom-left'});
    });

    // Position Bottom Center
    $('#position-bottom-center').on('click', function () {
        toastr.info('I do not think that word means what you think it means.', 'Bottom Center!', {positionClass: 'toast-bottom-center'});
    });

    // Position Bottom Right
    $('#position-bottom-right').on('click', function () {
        toastr.info('I do not think that word means what you think it means.', 'Bottom Right!', {positionClass: 'toast-bottom-right'});
    });

    // Position Bottom Full Width
    $('#position-bottom-full').on('click', function () {
        toastr.info('I do not think that word means what you think it means.', 'Bottom Full Width!', {positionClass: 'toast-bottom-full-width'});
    });

    // Text Notification
    $('#text-notification').on('click', function () {
        toastr.info('Have fun storming the castle!');
    });

    // Close Button
    $('#close-button').on('click', function () {
        toastr.success('Have fun storming the castle!', 'With Close Button', {"closeButton": true});
    });

    // Progress Bar
    $('#progress-bar').on('click', function () {
        toastr.success('Have fun storming the castle!', 'Progress Bar', {"progressBar": true});
    });

    // Clear Toast Button
    $('#clear-toast-btn').on('click', function () {
        toastr.error('Clear itself?<br /><br /><button type="button" class="btn btn-primary">Yes</button>', 'Clear Toast Button');
    });
});
