// ================================================================================================
// File Name: jquery.steps.js
// Description: Initialize jquery steps plugin
// ----------------------------------------------------------------------------------------------
// Item Name: xxx - Responsive Admin Theme
// Version: 1.2
// Author: MANOJ
// Author URL: http://www.themeforest.net/user/xxx
// ================================================================================================

$(document).ready(function () {
    'use strict';

    // Update progress
    function updateProgress(elem, index) {
        var $total = $(elem).find('.steps ul li').length;
        var $current = index + 1;
        var $percent = ($current / $total) * 100;
        $(elem).find('.progress-bar').css({width: $percent + '%'}).text($percent + " % ");
        $(elem).find('.step-indicator').text("Step " + $current + " of " + $total);

    }

    function addBootstrap(elem, index) {
        var $this = $(elem);

        // Add bootstrap class action buttons
        $this.find('.actions ul li:not(:last) a').addClass('btn btn-primary');

        // Change color of the Finish button
        $this.find('.actions ul li:last-child a').addClass('btn btn-success');

    }

    // Arrow form wizard
    $("#arrow-form-wizard").steps({
        // Appearance
        headerTag: "h3",
        bodyTag: "section",
        transitionEffect: "fade",
        transitionEffectSpeed: 500,
        autoFocus: true,
        titleTemplate: '<span class="step">#index#.&nbsp;</span>&nbsp;#title#',
        cssClass: "wizard arrow-wizard",

        // Labels
        labels: {
            finish: "SUBMIT",
            next: "NEXT",
            previous: "BACK"
        },

        onInit: function (event, currentIndex) {
            updateProgress(this, currentIndex);
            addBootstrap(this, currentIndex);
        },

        onStepChanging: function (event, currentIndex, newIndex) {
            return true;
        },

        onStepChanged: function (event, currentIndex, priorIndex) {
            updateProgress(this, currentIndex);
        },

        onFinished: function (event, currentIndex) {
            alert("Submitted!");
        }
    });

    // Arrow form vertical wizard
    $("#arrow-form-wizard-vertical").steps({
        // Appearance
        headerTag: "h3",
        bodyTag: "section",
        transitionEffect: "fade",
        transitionEffectSpeed: 500,
        autoFocus: true,
        titleTemplate: '<span class="step">#index#.&nbsp;</span>&nbsp;#title#',
        cssClass: "wizard arrow-wizard",
        stepsOrientation: "vertical",

        // Labels
        labels: {
            finish: "SUBMIT",
            next: "NEXT",
            previous: "BACK"
        },

        onInit: function (event, currentIndex) {
            updateProgress(this, currentIndex);
            addBootstrap(this, currentIndex);
        },

        onStepChanging: function (event, currentIndex, newIndex) {
            return true;
        },

        onStepChanged: function (event, currentIndex, priorIndex) {
            updateProgress(this, currentIndex);
        },

        onFinished: function (event, currentIndex) {
            alert("Submitted!");
        }
    });

    // Pills form wizard
    $("#pills-form-wizard").steps({
        // Appearance
        headerTag: "h3",
        bodyTag: "section",
        transitionEffect: "fade",
        transitionEffectSpeed: 500,
        autoFocus: true,
        titleTemplate: '<span class="step">#index#.&nbsp;</span>&nbsp;#title#',
        cssClass: "wizard pills-wizard",

        // Labels
        labels: {
            finish: "SUBMIT",
            next: "NEXT",
            previous: "BACK"
        },

        onInit: function (event, currentIndex) {
            updateProgress(this, currentIndex);
            addBootstrap(this, currentIndex);
        },

        onStepChanging: function (event, currentIndex, newIndex) {
            return true;
        },

        onStepChanged: function (event, currentIndex, priorIndex) {
            updateProgress(this, currentIndex);
        },

        onFinished: function (event, currentIndex) {
            alert("Submitted!");
        }
    });

    // Pills form vertical wizard
    $("#pills-form-wizard-vertical").steps({

        // Appearance
        headerTag: "h3",
        bodyTag: "section",
        transitionEffect: "fade",
        transitionEffectSpeed: 500,
        autoFocus: true,
        titleTemplate: '<span class="step">#index#.&nbsp;</span>&nbsp;#title#',
        cssClass: "wizard pills-wizard",
        stepsOrientation: "vertical",

        // Labels
        labels: {
            finish: "SUBMIT",
            next: "NEXT",
            previous: "BACK"
        },

        onInit: function (event, currentIndex) {
            updateProgress(this, currentIndex);
            addBootstrap(this, currentIndex);
        },

        onStepChanging: function (event, currentIndex, newIndex) {
            return true;
        },

        onStepChanged: function (event, currentIndex, priorIndex) {
            updateProgress(this, currentIndex);
        },

        onFinished: function (event, currentIndex) {
            alert("Submitted!");
        }
    });

    // Circle form wizard
    $("#circle-form-wizard, #circle-form-wizard-2").steps({

        // Appearance
        headerTag: "h3",
        bodyTag: "section",
        autoFocus: true,
        titleTemplate: '<span class="step">#index#</span><span class="step-title">#title#</span>',
        cssClass: "wizard circle-wizard",

        // Labels
        labels: {
            finish: "SUBMIT",
            next: "NEXT",
            previous: "BACK"
        },

        onInit: function (event, currentIndex) {
            updateProgress(this, currentIndex);
            addBootstrap(this, currentIndex);
        },

        onStepChanging: function (event, currentIndex, newIndex) {
            return true;
        },
        onStepChanged: function (event, currentIndex, priorIndex) {
            updateProgress(this, currentIndex);
            $(this).find(".steps ul li a:eq(" + currentIndex + ") .step").addClass("animated bounceIn");
            $(this).find(".steps ul li a:eq(" + priorIndex + ") .step").removeClass("animated bounceIn");
        },

        onFinished: function (event, currentIndex) {
            alert("Submitted!");
        }
    });

    // Circle form outline wizard
    $("#circle-form-outline-wizard").steps({

        // Appearance
        headerTag: "h3",
        bodyTag: "section",
        autoFocus: true,
        titleTemplate: '<span class="step">#index#</span><span class="step-title">#title#</span>',
        cssClass: "wizard circle-wizard outline",

        // Labels
        labels: {
            finish: "SUBMIT",
            next: "NEXT",
            previous: "BACK"
        },

        onInit: function (event, currentIndex) {
            updateProgress(this, currentIndex);
            addBootstrap(this, currentIndex);
        },

        onStepChanging: function (event, currentIndex, newIndex) {
            return true;
        },
        onStepChanged: function (event, currentIndex, priorIndex) {
            updateProgress(this, currentIndex);
            $(this).find(".steps ul li a:eq(" + currentIndex + ") .step").addClass("animated bounceIn");
            $(this).find(".steps ul li a:eq(" + priorIndex + ") .step").removeClass("animated bounceIn");
        },

        onFinished: function (event, currentIndex) {
            alert("Submitted!");
        }
    });


    // Circle form wizard with validation
    var form = $("#circle-form-wizard-validation").show();

    $("#circle-form-wizard-validation").steps({

        // Appearance
        headerTag: "h3",
        bodyTag: "section",
        autoFocus: true,
        titleTemplate: '<span class="step">#index#</span><span class="step-title">#title#</span>',
        cssClass: "wizard circle-wizard",

        // Labels
        labels: {
            finish: "SUBMIT",
            next: "NEXT",
            previous: "BACK"
        },

        onInit: function (event, currentIndex) {
            updateProgress(this, currentIndex);
            addBootstrap(this, currentIndex);
        },

        onStepChanging: function (event, currentIndex, newIndex) {

            // Always allow previous action even if the current form is not valid!
            if (currentIndex > newIndex) {
                return true;
            }

            // Needed in some cases if the user went back (clean up)
            if (currentIndex < newIndex) {
                // To remove error styles
                form.find(".body:eq(" + newIndex + ") label.invalid-feedback").remove();
                form.find(".body:eq(" + newIndex + ") .is-invalid").removeClass("is-invalid");
            }

            // Disable validation on fields that are disabled or hidden.
            form.validate().settings.ignore = ":disabled,:hidden";

            // Start validation; Prevent going forward if false
            return form.valid();

        },
        onStepChanged: function (event, currentIndex, priorIndex) {
            updateProgress(this, currentIndex);
            $(this).find(".steps ul li a:eq(" + currentIndex + ") .step").addClass("animated bounceIn");
            $(this).find(".steps ul li a:eq(" + priorIndex + ") .step").removeClass("animated bounceIn");
        },

        onFinishing: function (event, currentIndex) {
            // Disable validation on fields that are disabled.
            // At this point it's recommended to do an overall check (mean ignoring only disabled fields)
            form.validate().settings.ignore = ":disabled";

            // Start validation; Prevent form submission if false
            return form.valid();
        },

        onFinished: function (event, currentIndex) {
            // Submit form input
            form.submit();
        }

    }).validate({  // Initialize validation
        validClass: 'is-valid',
        errorClass: 'is-invalid',
        errorPlacement: function (error, element) {
            // Add the `invalid-feedback` class to the error element
            error.addClass("invalid-feedback");

            // element.before(error);

            if (element.attr("type") == "radio" || element.attr("type") == "checkbox") {
                error.appendTo(element.parent("div"));
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
            email: {email: true},
            confirm: {
                equalTo: "#password-eg3"
            }

        }
    });

    // Circle form vertical wizard
    $("#circle-form-wizard-vertical").steps({

        // Appearance
        headerTag: "h3",
        bodyTag: "section",
        autoFocus: true,
        titleTemplate: '<span class="step">#index#</span><span class="step-title">#title#</span>',
        cssClass: "wizard circle-wizard",
        stepsOrientation: "vertical",

        // Labels
        labels: {
            finish: "SUBMIT",
            next: "NEXT",
            previous: "BACK"
        },

        onInit: function (event, currentIndex) {
            updateProgress(this, currentIndex);
            addBootstrap(this, currentIndex);
        },

        onStepChanging: function (event, currentIndex, newIndex) {
            return true;
        },
        onStepChanged: function (event, currentIndex, priorIndex) {
            updateProgress(this, currentIndex);
            $(this).find(".steps ul li a:eq(" + currentIndex + ") .step").addClass("animated bounceIn");
            $(this).find(".steps ul li a:eq(" + priorIndex + ") .step").removeClass("animated bounceIn");
        },

        onFinished: function (event, currentIndex) {
            alert("Submitted!");
        }
    });

    // Tab wizard
    $("#tab-wizard").steps({
        headerTag: "h3",
        bodyTag: "section",
        transitionEffect: "fade",
        enableFinishButton: true,
        enablePagination: true,
        enableAllSteps: true,
        titleTemplate: "#title#",
        cssClass: "wizard tab-wizard",

        // Labels
        labels: {
            finish: "FINISH",
            next: "NEXT",
            previous: "BACK"
        },

        onInit: function (event, currentIndex) {
            addBootstrap(this, currentIndex);
        }

    });

    // Arrow wizard
    $("#arrow-wizard").steps({

        // Appearance
        headerTag: "h3",
        bodyTag: "section",
        transitionEffect: "fade",
        transitionEffectSpeed: 500,
        autoFocus: true,
        titleTemplate: '#title#',
        cssClass: "wizard arrow-wizard",

        // Labels
        labels: {
            finish: "FINISH",
            next: "NEXT",
            previous: "BACK"
        },

        onInit: function (event, currentIndex) {
            addBootstrap(this, currentIndex);
        }

    });

    // Arrow vertical wizard
    $("#arrow-wizard-vertical").steps({

        // Appearance
        headerTag: "h3",
        bodyTag: "section",
        transitionEffect: "fade",
        transitionEffectSpeed: 500,
        autoFocus: true,
        titleTemplate: '#title#',
        cssClass: "wizard arrow-wizard",
        stepsOrientation: "vertical",

        // Labels
        labels: {
            finish: "FINISH",
            next: "NEXT",
            previous: "BACK"
        },

        onInit: function (event, currentIndex) {
            addBootstrap(this, currentIndex);
        }

    });

    // Pills wizard
    $("#pills-wizard").steps({

        // Appearance
        headerTag: "h3",
        bodyTag: "section",
        transitionEffect: "fade",
        transitionEffectSpeed: 500,
        autoFocus: true,
        titleTemplate: '#title#',
        cssClass: "wizard pills-wizard",

        // Labels
        labels: {
            finish: "FINISH",
            next: "NEXT",
            previous: "BACK"
        },

        onInit: function (event, currentIndex) {
            addBootstrap(this, currentIndex);
        }

    });

    // Pills vertical wizard
    $("#pills-wizard-vertical").steps({

        // Appearance
        headerTag: "h3",
        bodyTag: "section",
        transitionEffect: "fade",
        transitionEffectSpeed: 500,
        autoFocus: true,
        titleTemplate: '#title#',
        cssClass: "wizard pills-wizard",
        stepsOrientation: "vertical",

        // Labels
        labels: {
            finish: "FINISH",
            next: "NEXT",
            previous: "BACK"
        },

        onInit: function (event, currentIndex) {
            addBootstrap(this, currentIndex);
        }

    });

    // Circle wizard
    $("#circle-wizard").steps({

        // Appearance
        headerTag: "h3",
        bodyTag: "section",
        autoFocus: true,
        titleTemplate: '<span class="step">#index#</span><span class="step-title">#title#</span>',
        cssClass: "wizard circle-wizard",

        // Labels
        labels: {
            finish: "FINISH",
            next: "NEXT",
            previous: "BACK"
        },

        onInit: function (event, currentIndex) {
            updateProgress(this, currentIndex);
            addBootstrap(this, currentIndex);

            $(this).find('.step-title').each(function () {
                var $this = $(this);
                if ($this.siblings('span.step').length > 0) {
                    $this.siblings('span.step').empty();
                    $this.children('.step-icon').appendTo($this.siblings('span.step'));
                }
            });
        },
        onStepChanged: function (event, currentIndex, priorIndex) {
            updateProgress(this, currentIndex);
            $(this).find(".steps ul li a:eq(" + currentIndex + ") .step").addClass("animated bounceIn");
            $(this).find(".steps ul li a:eq(" + priorIndex + ") .step").removeClass("animated bounceIn");
        }

    });

    // Circle vertical wizard
    $("#circle-wizard-vertical").steps({

        // Appearance
        headerTag: "h3",
        bodyTag: "section",
        autoFocus: true,
        titleTemplate: '<span class="step">#index#</span><span class="step-title">#title#</span>',
        cssClass: "wizard circle-wizard",
        stepsOrientation: "vertical",

        // Labels
        labels: {
            finish: "FINISH",
            next: "NEXT",
            previous: "BACK"
        },

        onInit: function (event, currentIndex) {
            addBootstrap(this, currentIndex);
            $(this).find('.step-title').each(function () {
                var $this = $(this);
                if ($this.siblings('span.step').length > 0) {
                    $this.siblings('span.step').empty();
                    $this.children('.step-icon').appendTo($this.siblings('span.step'));
                }
            });
        },

        onStepChanging: function (event, currentIndex, newIndex) {
            // ALLOW NEXT STEP
            return true;
        },

        onStepChanged: function (event, currentIndex, priorIndex) {
            $(this).find(".steps ul li a:eq(" + currentIndex + ") .step").addClass("animated bounceIn");
            $(this).find(".steps ul li a:eq(" + priorIndex + ") .step").removeClass("animated bounceIn");
        }

    });

});

