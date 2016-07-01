module.exports = {

    task: {
        src: [
            '<%= site.src_layoutdir %>/*.hbs',
        ],
        exclude: [
            'jquery',
            'bootstrap',
        ],
        options: {
            ignorePath: '../../'

        }
    }

};
