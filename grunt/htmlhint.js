module.exports = {
    options: {
        // htmlhintrc: '.htmlhintrc' //Config file

        'tag-pair': true,
        // Force tags to have a closing pair
        'tagname-lowercase': true,
        // Force tags to be lowercase
        'attr-lowercase': true,
        // Force attribute names to be lowercase e.g. <div id="header"> is invalid
        'attr-value-double-quotes': true,
        // Force attributes to have double quotes rather than single
        'spec-char-escape': true,
        // Force special characters to be escaped
        'id-unique': true,
        // Prevent using the same ID multiple times in a document
        'id-class-ad-disabled': true,
        // Id and class can not use ad keyword, it will blocked by adblock software.
        'attr-unsafe-chars': true,
        // Attribute value cant not use unsafe chars.
        'attr-no-duplication': true,
        // The same attribute can't be specified twice.
        'head-script-disabled': false
            // Performance: The script tag can not be used in head.
    },

    html1: {
        src: ['<%= site.dev %>/*.html']
    }
};
