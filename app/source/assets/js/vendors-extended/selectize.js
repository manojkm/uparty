// ================================================================================================
// File Name: selectize.js
// Description: Initialize Selectize plugin
// ----------------------------------------------------------------------------------------------
// Item Name: xxx - Responsive Admin Theme
// Version: 1.2
// Author: MANOJ
// Author URL: http://www.themeforest.net/user/xxx
// ================================================================================================

$(document).ready(function () {
    'use strict';

    setTimeout(function () {
        $('.bs-selectize > .selectize-input').each(function (i, e) {
            // i is a counter of the loop element
            $(e).addClass('form-control');

        });

        $('.bs-selectize-sm > .selectize-input').each(function (i, e) {
            // i is a counter of the loop element
            $(e).addClass('form-control-sm');

        });

        $('.bs-selectize-lg > .selectize-input').each(function (i, e) {
            // i is a counter of the loop element
            $(e).addClass('form-control-lg');

        })


    }, 250);


    // Activate Selectize

    // Input type "text"
    $('#input-tags').selectize({
        persist: false,
        createOnBlur: true,
        create: true
    });

    // Input type "text" with remove button
    $('#input-tags-remove').selectize({
        plugins: ['remove_button'],
        persist: false,
        createOnBlur: true,
        create: true
    });

    $('#input-draggable').selectize({
        plugins: ['drag_drop'],
        delimiter: ',',
        persist: false,
        create: function(input) {
            return {
                value: input,
                text: input
            }
        }
    });

    // Select
    $('#select-beast').selectize({
        create: true,
        sortField: {
            field: 'text',
            direction: 'asc'
        },
        dropdownParent: 'body'
    });

    // Select sizing
    $('#select-size-default, #select-size-sm, #select-size-lg').selectize({
        create: true,
        sortField: 'text'
    });


    // Select (allow empty)
    $('#select-beast-empty').selectize({
        allowEmptyOption: true,
        create: true
    });

    // Select (disabled)
    $('#select-beast-disabled').selectize({
        create: true,
        sortField: {field: 'text'}
    });

    //  Select (option disabled)
    $('#select-beast-single-disabled').selectize({
        create: true,
        sortField: {field: 'text'}
    });

    // Select multiple
    $('#select-state-multiple').selectize({
        //maxItems: 3
    });

    // Select multiple (Max Items)
    $('#select-state-multiple-max').selectize({
        maxItems: 3
    });

    // Select multiple (disabled)
    $('#select-state-disabled').selectize({
        maxItems: 3
    });

    // Optgroups
    $('#select-gear').selectize({
        sortField: 'text'
    });

    $('#select-valid, #select-invalid').selectize();


    // State / City Selection
    var xhr;
    var select_state, $select_state;
    var select_city, $select_city;
    $select_state = $('#select-state').selectize({
        onChange: function (value) {
            if (!value.length) return;
            select_city.disable();
            select_city.clearOptions();
            select_city.load(function (callback) {
                xhr && xhr.abort();
                xhr = $.ajax({
                    url: 'http://www.corsproxy.com/api.sba.gov/geodata/primary_city_links_for_state_of/' + value + '.json',
                    success: function (results) {
                        select_city.enable();
                        callback(results);
                    },
                    error: function () {
                        callback();
                    }
                })
            });
        }
    });
    $select_city = $('#select-city').selectize({
        valueField: 'name',
        labelField: 'name',
        searchField: ['name']
    });
    select_city = $select_city[0].selectize;
    select_state = $select_state[0].selectize;
    select_city.disable();


    // Confirm Delete
    $('#input-tags-delete').selectize({
        delimiter: ',',
        persist: false,
        onDelete: function (values) {
            return confirm(values.length > 1 ? 'Are you sure you want to remove these ' + values.length + ' items?' : 'Are you sure you want to remove "' + values[0] + '"?');
        }
    });

    $('#select-car').selectize({
        options: [
            {id: 'avenger', make: 'dodge', model: 'Avenger'},
            {id: 'caliber', make: 'dodge', model: 'Caliber'},
            {id: 'caravan-grand-passenger', make: 'dodge', model: 'Caravan Grand Passenger'},
            {id: 'challenger', make: 'dodge', model: 'Challenger'},
            {id: 'ram-1500', make: 'dodge', model: 'Ram 1500'},
            {id: 'viper', make: 'dodge', model: 'Viper'},
            {id: 'a3', make: 'audi', model: 'A3'},
            {id: 'a6', make: 'audi', model: 'A6'},
            {id: 'r8', make: 'audi', model: 'R8'},
            {id: 'rs-4', make: 'audi', model: 'RS 4'},
            {id: 's4', make: 'audi', model: 'S4'},
            {id: 's8', make: 'audi', model: 'S8'},
            {id: 'tt', make: 'audi', model: 'TT'},
            {id: 'avalanche', make: 'chevrolet', model: 'Avalanche'},
            {id: 'aveo', make: 'chevrolet', model: 'Aveo'},
            {id: 'cobalt', make: 'chevrolet', model: 'Cobalt'},
            {id: 'silverado', make: 'chevrolet', model: 'Silverado'},
            {id: 'suburban', make: 'chevrolet', model: 'Suburban'},
            {id: 'tahoe', make: 'chevrolet', model: 'Tahoe'},
            {id: 'trail-blazer', make: 'chevrolet', model: 'TrailBlazer'},
        ],
        optgroups: [
            {id: 'dodge', name: 'Dodge'},
            {id: 'audi', name: 'Audi'},
            {id: 'chevrolet', name: 'Chevrolet'}
        ],
        labelField: 'model',
        valueField: 'id',
        optgroupField: 'make',
        optgroupLabelField: 'name',
        optgroupValueField: 'id',
        optgroupOrder: ['chevrolet', 'dodge', 'audi'],
        searchField: ['model'],
        plugins: ['optgroup_columns']
    });

    // Email Contacts
    var REGEX_EMAIL = '([a-z0-9!#$%&\'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&\'*+/=?^_`{|}~-]+)*@' +
        '(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?)';

    $('#select-to').selectize({
        persist: false,
        maxItems: null,
        valueField: 'email',
        labelField: 'name',
        searchField: ['name', 'email'],
        options: [
            {email: 'brian@thirdroute.com', name: 'Brian Reavis'},
            {email: 'nikola@tesla.com', name: 'Nikola Tesla'},
            {email: 'someone@gmail.com'}
        ],
        render: {
            item: function (item, escape) {
                return '<div>' +
                    (item.name ? '<span class="name">' + escape(item.name) + '</span>' : '') +
                    (item.email ? '<span class="email">' + escape(item.email) + '</span>' : '') +
                    '</div>';
            },
            option: function (item, escape) {
                var label = item.name || item.email;
                var caption = item.name ? item.email : null;
                return '<div>' +
                    '<span class="label">' + escape(label) + '</span>' +
                    (caption ? '<span class="caption">' + escape(caption) + '</span>' : '') +
                    '</div>';
            }
        },
        createFilter: function (input) {
            var match, regex;

            // email@address.com
            regex = new RegExp('^' + REGEX_EMAIL + '$', 'i');
            match = input.match(regex);
            if (match) return !this.options.hasOwnProperty(match[0]);

            // name <email@address.com>
            regex = new RegExp('^([^<]*)\<' + REGEX_EMAIL + '\>$', 'i');
            match = input.match(regex);
            if (match) return !this.options.hasOwnProperty(match[2]);

            return false;
        },
        create: function (input) {
            if ((new RegExp('^' + REGEX_EMAIL + '$', 'i')).test(input)) {
                return {email: input};
            }
            var match = input.match(new RegExp('^([^<]*)\<' + REGEX_EMAIL + '\>$', 'i'));
            if (match) {
                return {
                    email: match[2],
                    name: $.trim(match[1])
                };
            }
            alert('Invalid email address.');
            return false;
        }
    });


});
