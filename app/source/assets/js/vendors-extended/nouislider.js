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

    var sliderColorVerticalOne = document.getElementById('sliderColorVerticalOne');
    var sliderColorVerticalTwo = document.getElementById('sliderColorVerticalTwo');
    var sliderColorVerticalThree = document.getElementById('sliderColorVerticalThree');
    var sliderColorVerticalFour = document.getElementById('sliderColorVerticalFour');
    var sliderColorVerticalFive = document.getElementById('sliderColorVerticalFive');

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

    noUiSlider.create(sliderColorVerticalOne, {
        start: 70,
        orientation: 'vertical',
        direction: 'rtl',
        connect: [true, false],
        range: {
            min: 0,
            max: 100
        }
    });
    noUiSlider.create(sliderColorVerticalTwo, {
        start: 50,
        orientation: 'vertical',
        direction: 'rtl',
        connect: [true, false],
        range: {
            min: 0,
            max: 100
        }
    });
    noUiSlider.create(sliderColorVerticalThree, {
        start: 70,
        orientation: 'vertical',
        direction: 'rtl',
        connect: [true, false],
        range: {
            min: 0,
            max: 100
        }
    });
    noUiSlider.create(sliderColorVerticalFour, {
        start: 30,
        orientation: 'vertical',
        direction: 'rtl',
        connect: [true, false],
        range: {
            min: 0,
            max: 100
        }
    });
    noUiSlider.create(sliderColorVerticalFive, {
        start: 20,
        orientation: 'vertical',
        direction: 'rtl',
        connect: [true, false],
        range: {
            min: 0,
            max: 100
        }
    });
});
