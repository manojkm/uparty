// ================================================================================================
// File Name: jquery.validate.js
// Description: Initialize jquery validate plugin
// ----------------------------------------------------------------------------------------------
// Item Name: xxx - Responsive Admin Theme
// Version: 1.2
// Author: MANOJ
// Author URL: http://www.themeforest.net/user/xxx
// ================================================================================================

$(document).ready(function () {
    'use strict';

    // Add ZIP Code validator
    jQuery.validator.addMethod("zipcodeUS", function (value, element) {
        return this.optional(element) || /\d{5}-\d{4}$|^\d{5}$/.test(value)
    }, "The specified US ZIP Code is invalid");

    // Add phone validator
    jQuery.validator.addMethod("phone_format", function (value, element) {
        return this.optional(element) || /^\(\d{3}\)[ ]\d{3}\-\d{4}$/.test(value);
    }, "Invalid phone number.");

    // Add checkBox validator
    jQuery.validator.addMethod('onecheck', function (value, ele) {
        return $("input:checked").length >= 1;
    }, 'Please Select Atleast One CheckBox');

    // Initialize advanced validation
    $("#signupForm").validate({

        validClass: 'is-valid',
        errorClass: 'is-invalid',
        //TODO https://stackoverflow.com/questions/4381476/jquery-tooltip-to-display-validator-messages
        errorPlacement: function (error, element) {
            // Add the `invalid-feedback` class to the error element
            error.addClass("invalid-feedback");
            if (element.attr("type") == "radio" || element.attr("type") == "checkbox") {
                error.appendTo(element.parents().find('div:first'));
            } else {
                error.insertAfter(element)
            }
        },

        highlight: function (element, errorClass, validClass) {
            // $( element ).addClass( errorClass ).removeClass(validClass);
            $(element).addClass(errorClass);
        },
        unhighlight: function (element, errorClass, validClass) {
            // $( element ).addClass(validClass).removeClass(errorClass);
            $(element).removeClass(errorClass);
        },

        rules: {
            username: {
                minlength: 4
            },
            password: {
                minlength: 6
            },
            confirm_password: {
                minlength: 6,
                equalTo: "#password"
            },
            email: {
                email: true
            },
            phone: {
                required: true,
                phone_format: true
            },
            zip: {
                zipcodeUS: true
            },
            role: {
                onecheck: true
            },
            agree: "required"
        },
        messages: {
            firstname: "Please enter your firstname",
            lastname: "Please enter your lastname",
            username: {
                required: "Please enter a username",
                minlength: "Your username must consist of at least 4 characters"
            },
            password: {
                required: "Please provide a password",
                minlength: "Your password must be at least 6 characters long"
            },
            confirm_password: {
                required: "Please provide a password",
                minlength: "Your password must be at least 6 characters long",
                equalTo: "Please enter the same password as above"
            },
            zip: {
                required: "Please enter your zip code!"
            },
            phone: {
                required: "Please enter your phone number"
            },
            city: "Please enter your city",
            role: "You must select at least one!",
            state: "Please select your state",
            email: "Please enter a valid email address",
            agree: "Please accept our policy"
        },

        submitHandler: function (form) {
            alert("This is a valid form!");
        }
    });

    // Initialize advanced validation with tooltip
    $("#signupFormTooltip").validate({

        showErrors: function (errorMap, errorList) {

            // Clean up any tooltips for valid elements
            $.each(this.validElements(), function (index, element) {
                var $element = $(element);

                $element.data("title", "") // Clear the title - there is no error associated anymore
                    .removeClass("is-invalid")
                    .tooltip("dispose");
            });

            // Create new tooltips for invalid elements
            $.each(errorList, function (index, error) {
                var $element = $(error.element);

                $element.tooltip("dispose") // Destroy any pre-existing tooltip so we can repopulate with new tooltip content
                    .data("title", error.message)
                    .addClass("is-invalid")
                    .tooltip({
                        // Position of the tooltip on top, bottom, left or the right side of the element:
                        placement: "top",
                        template: '<div class="tooltip tooltip-danger" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',

                    }); // Create a new tooltip based on the error message we just set in the title
            });
        },

        highlight: function (element, errorClass, validClass) {
            // $( element ).addClass( errorClass ).removeClass(validClass);
            $(element).addClass(errorClass);
        },
        unhighlight: function (element, errorClass, validClass) {
            // $( element ).addClass(validClass).removeClass(errorClass);
            $(element).removeClass(errorClass);
        },

        rules: {
            username: {
                minlength: 4
            },
            password: {
                minlength: 6
            },
            confirm_password: {
                minlength: 6,
                equalTo: "#password-5"
            },
            email: {
                email: true
            },
            zip: {
                zipcodeUS: true
            },
            phone: {
                required: true,
                phone_format: true
            },
            agree: "required"
        },
        messages: {
            firstname: "Please enter your firstname",
            lastname: "Please enter your lastname",
            username: {
                required: "Please enter a username",
                minlength: "Your username must consist of at least 4 characters"
            },
            password: {
                required: "Please provide a password",
                minlength: "Your password must be at least 6 characters long"
            },
            confirm_password: {
                required: "Please provide a password",
                minlength: "Your password must be at least 6 characters long",
                equalTo: "Please enter the same password as above"
            },
            zip: {
                required: "Please enter your zip code!"
            },
            phone: {
                required: "Please enter your phone number"
            },
            city: "Please enter your city",
            state: "Please select your state",
            email: "Please enter a valid email address",
            agree: "Please accept our policy"
        },

        submitHandler: function (form) {
            alert("This is a valid form!");
        }
    });

    // On clicking reset button, every error should be cleared
    $('.clearform').on('click', function () {
        $("#signupForm").validate().resetForm();  // clear out the validation errors
    });
});
