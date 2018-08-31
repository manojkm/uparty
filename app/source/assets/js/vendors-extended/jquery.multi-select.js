// ================================================================================================
// File Name: jquery.multi-select.js
// Description: Initialize jquery multi select plugin
// ----------------------------------------------------------------------------------------------
// Item Name: xxx - Responsive Admin Theme
// Version: 1.2
// Author: MANOJ
// Author URL: http://www.themeforest.net/user/xxx
// ================================================================================================

$(document).ready(function () {
    'use strict';
    if ($.fn.multiSelect) {
        $(".multi-select, #public-methods").multiSelect();


        $('#custom-headers').multiSelect({
            selectableHeader: "<div class='py-2 text-center'><h5>Selectable items header</h5></div>",
            selectionHeader: "<div class='py-2 text-center'><h5>Selection items header</h5></div>",
            selectableFooter: "<div class='py-2 text-center'><h6>Selectable footer</h6></div>",
            selectionFooter: "<div class='py-2 text-center'><h6>Selection footer</h6></div>"
        });

        $('.ms-searchable').multiSelect({
            selectableHeader: "<input type='text' class='form-control search-input mb-1' autocomplete='off' placeholder='search...'>",
            selectionHeader: "<input type='text' class='form-control search-input mb-1' autocomplete='off' placeholder='search...'>",
            afterInit: function (ms) {
                var that = this,
                    $selectableSearch = that.$selectableUl.prev(),
                    $selectionSearch = that.$selectionUl.prev(),
                    selectableSearchString = '#' + that.$container.attr('id') + ' .ms-elem-selectable:not(.ms-selected)',
                    selectionSearchString = '#' + that.$container.attr('id') + ' .ms-elem-selection.ms-selected';

                that.qs1 = $selectableSearch.quicksearch(selectableSearchString)
                    .on('keydown', function (e) {
                        if (e.which === 40) {
                            that.$selectableUl.focus();
                            return false;
                        }
                    });

                that.qs2 = $selectionSearch.quicksearch(selectionSearchString)
                    .on('keydown', function (e) {
                        if (e.which == 40) {
                            that.$selectionUl.focus();
                            return false;
                        }
                    });
            },
            afterSelect: function () {
                this.qs1.cache();
                this.qs2.cache();
            },
            afterDeselect: function () {
                this.qs1.cache();
                this.qs2.cache();
            }
        });

        $('#select-all').click(function () {
            $('#public-methods').multiSelect('select_all');
            return false;
        });
        $('#deselect-all').click(function () {
            $('#public-methods').multiSelect('deselect_all');
            return false;
        });
        $('#refresh').on('click', function () {
            $('#public-methods').multiSelect('refresh');
            return false;
        });

        var arr = [];

        for (var i = 0; i < 100; i++) {
            arr[i] = 'elem_' + (i + 1);
        }

        $('#select-100').click(function () {
            $('#public-methods').multiSelect('select', arr);
            return false;
        });
        $('#deselect-100').click(function () {
            $('#public-methods').multiSelect('deselect', arr);
            return false;
        });

        $('#add-option').on('click', function () {
            $('#public-methods').multiSelect('addOption', {value: 42, text: 'test 42', index: 0});
            return false;
        });

        $(".ms-container").append('<i class="fas fa-exchange-alt"></i>');


    }
    else {
        throw new Error('Please install multi-select plugin! https://github.com/lou/multi-select/');
    }
});
