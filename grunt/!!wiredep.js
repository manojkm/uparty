module.exports = {

    task: {
        src: [
            '<%= site.src_partials %>',
        ],
        exclude: [
             
        ],
        options: {
            ignorePath: '../../../../node_modules/'

        }
    }

};