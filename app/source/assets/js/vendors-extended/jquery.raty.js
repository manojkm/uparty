// ================================================================================================
// File Name: jquery.raty.js
// Description: Initialize bootstrap maxlength plugin
// ----------------------------------------------------------------------------------------------
// Item Name: xxx - Responsive Admin Theme
// Version: 1.2
// Author: MANOJ
// Author URL: http://www.themeforest.net/user/xxx
// ================================================================================================

$(document).ready(function () {
    'use strict';
    if ($.fn.raty) {
        $.fn.raty.defaults.path = "/assets/img/",
            $("#default-star-rating").raty(),
            $("#saved-rating").raty({score: 3}),
            $("#no-of-stars").raty({number: 10}),
            $("#read-only-stars").raty({readOnly: true, score: 3}),
            $("#space-star").raty({space: false}),
            $("#single-star").raty({single: true}),
            $("#half-star").raty({half: !0}),
            $("#custom-icon-heart").raty(
                {
                    starOff: "fas fa-heart mr-1 text-muted",
                    starOn: "fas fa-heart mr-1 text-danger",
                    starType: "i",
                    score: 3
                }
            ),
            $("#icon-range").raty({
                iconRange: [
                    {range: 1, on: "fas fa-cloud mr-1 text-primary", off: "fas fa-cloud mr-1"},
                    {range: 2, on: "fas fa-bolt mr-1 text-primary", off: "fas fa-bolt mr-1"},
                    {range: 3, on: "fas fa-sun mr-1 text-primary", off: "fas fa-sun mr-1"},
                    {range: 4, on: "fas fa-tint mr-1 text-primary", off: "fas fa-tint mr-1"},
                    {range: 5, on: "fas fa-snowflake mr-1 text-primary", off: "fas fa-snowflake mr-1"}],
                starType: "i"
            }),
            $("#cancel-star").raty({cancel: true})
    }
    else {
        throw new Error('Please install Raty plugin! https://github.com/wbotelhos/raty');
    }
});
