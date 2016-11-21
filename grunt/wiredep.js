module.exports = {

    task: {
        src: [
            '<%= site.src_layoutdir %>/*.hbs',
        ],
        exclude: [
             
        ],
        options: {
            ignorePath: '../../'

        }
    }

};
