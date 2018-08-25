// ================================================================================================
// File Name: nouislider.js
// Description: Initialize noUiSlider plugin
// ----------------------------------------------------------------------------------------------
// Item Name: xxx - Responsive Admin Theme
// Version: 1.2
// Author: MANOJ
// Author URL: http://www.themeforest.net/user/xxx
// ================================================================================================

$(document).ready(function () {
    'use strict';

    var verticalSlider = document.getElementById('sliderVertical');
    var sliderRegular = document.getElementById('sliderRegular');
    var sliderRegularValueElement = document.getElementById('sliderRegularValue');

    var sliderMultipleHandles = document.getElementById('sliderMultipleHandles');
    var sliderMultipleHandlesValueElement = document.getElementById('sliderMultipleHandlesValueElement');

    var sliderColorVertical1 = document.getElementById('sliderColorVertical1');
    var sliderColorVertical2 = document.getElementById('sliderColorVertical2');
    var sliderColorVertical3 = document.getElementById('sliderColorVertical3');
    var sliderColorVertical4 = document.getElementById('sliderColorVertical4');
    var sliderColorVertical5 = document.getElementById('sliderColorVertical5');
    var sliderColorVertical6 = document.getElementById('sliderColorVertical6');
    var sliderColorVertical7 = document.getElementById('sliderColorVertical7');
    var sliderColorVertical8 = document.getElementById('sliderColorVertical8');

    var sliderTooltips = document.getElementById('sliderTooltips');
    var sliderPips = document.getElementById('sliderPips');

    var sliderColor = document.getElementsByClassName('sliderColor');

    noUiSlider.create(sliderRegular, {
        start: 50,
        connect: [true, false],
        range: {
            min: 0,
            max: 100
        }
    });

    sliderRegular.noUiSlider.on('update', function (values, handle) {
        sliderRegularValueElement.innerHTML = values[handle];
    });

    noUiSlider.create(sliderMultipleHandles, {
        start: [25, 75],
        connect: true,
        range: {
            min: 0,
            max: 100
        }
    });

    sliderMultipleHandles.noUiSlider.on('update', function (values, handle) {
        sliderMultipleHandlesValueElement.innerHTML = values[handle];
    });

    noUiSlider.create(sliderTooltips, {
        start: [10, 90],
        tooltips: [true, true],
        connect: true,
        range: {
            min: 0,
            max: 100
        }
    });


    noUiSlider.create(sliderPips, {
        start: [25, 75],
        tooltips: [true, true],
        connect: true,
        range: {
            'min': 0,
            'max': 100
        },
        pips: {
            mode: 'positions',
            values: [0, 25, 50, 75, 100],
            density: 5
        }
    });

    noUiSlider.create(verticalSlider, {
        start: [25, 75],
        orientation: 'vertical',
        direction: 'rtl',
        tooltips: [true, true],
        connect: true,
        range: {
            'min': 0,
            'max': 100
        },
        pips: {
            mode: 'positions',
            values: [0, 25, 50, 75, 100],
            density: 5
        }
    });

    $(sliderColor).each(function (i, val) {
        noUiSlider.create(sliderColor[i], {
            start: 50,
            connect: [true, false],
            range: {
                min: 0,
                max: 100
            }
        });
    });

    noUiSlider.create(sliderColorVertical1, {
        start: 80,
        orientation: 'vertical',
        direction: 'rtl',
        connect: [true, false],
        range: {
            min: 0,
            max: 100
        }
    });
    noUiSlider.create(sliderColorVertical2, {
        start: 70,
        orientation: 'vertical',
        direction: 'rtl',
        connect: [true, false],
        range: {
            min: 0,
            max: 100
        }
    });
    noUiSlider.create(sliderColorVertical3, {
        start: 60,
        orientation: 'vertical',
        direction: 'rtl',
        connect: [true, false],
        range: {
            min: 0,
            max: 100
        }
    });
    noUiSlider.create(sliderColorVertical4, {
        start: 50,
        orientation: 'vertical',
        direction: 'rtl',
        connect: [true, false],
        range: {
            min: 0,
            max: 100
        }
    });
    noUiSlider.create(sliderColorVertical5, {
        start: 40,
        orientation: 'vertical',
        direction: 'rtl',
        connect: [true, false],
        range: {
            min: 0,
            max: 100
        }
    });
    noUiSlider.create(sliderColorVertical6, {
        start: 30,
        orientation: 'vertical',
        direction: 'rtl',
        connect: [true, false],
        range: {
            min: 0,
            max: 100
        }
    });
    noUiSlider.create(sliderColorVertical7, {
        start: 20,
        orientation: 'vertical',
        direction: 'rtl',
        connect: [true, false],
        range: {
            min: 0,
            max: 100
        }
    });
    noUiSlider.create(sliderColorVertical8, {
        start: 10,
        orientation: 'vertical',
        direction: 'rtl',
        connect: [true, false],
        range: {
            min: 0,
            max: 100
        }
    });
});
