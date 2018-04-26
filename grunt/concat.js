module.exports = function(grunt, options) {
    var concat = {
        options: {
            sourceMap: true
        }
    };
    var files = [];
    grunt.file.recurse('app/source/assets/scss/themes/theme-rebecca', function(abspath, rootdir, subdir, filename){
        files.push(filename);
    });

    sassFiles = files;
    files.forEach(file => {
        concat[file] = {
            src: [
                'app/source/assets/scss/themes/theme-rebecca/'+file,
                'app/source/assets/scss/app.scss'
            ],
            dest: 'app/development/assets/css/sass/'+file
        };
});

    return concat;
};
