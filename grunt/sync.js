module.exports = {
    copy_resources_to_www: {
        files: [
            // { src: ['<%= site.dev %>/**'], dest: '<%= site.env %>/' }, // includes files in path and its subdirs
            { cwd: '<%= site.dev %>/', src: ['**'], dest: '<%= site.env %>/' }, // makes all src relative to cwd
        ],


        verbose: true, // Default: false
        //pretend: true, // Don't do any disk operations - just write log. Default: false
        failOnError: true, // Fail the task when copying is not possible. Default: false
        //ignoreInDest: "**/*.js", // Never remove js files from destination. Default: none
        updateAndDelete: false, // Remove all files from dest that are not found in src. Default: false
        compareUsing: "md5" // compares via md5 hash of file contents, instead of file modification time. Default: "mtime"

    }

};
