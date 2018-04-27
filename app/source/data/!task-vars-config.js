
//todo https://github.com/asotog/phantomcss-testsuites-template/blob/70416dce40508f189c4bcfef9edd1e6c6b553c52/phantomcss.json
var build_state = 'prod',

    // Sass files
    //------------------------------------------
    sass_main_files = {
        '<%= site.dev_assets %>/css/<%=site.name %>.css': '<%= site.src_assets %>/scss/app.scss'
    },
    sass_bootstrap_files = {
        '<%= site.dev_assets %>/css/bootstrap-extended/bootstrap.css': '<%= site.src_assets %>/scss/bootstrap-extended/index.scss'
    },
    sass_pages_src_dir = '<%= site.src_assets %>/scss/pages/',
    sass_pages_dest_dir = '<%= site.dev_assets %>/css/pages/',

    sass_vendors_ext_src_dir = '<%= site.src_assets %>/scss/vendors-extensions/',
    sass_vendors_ext_dest_dir = '<%= site.dev_assets %>/css/vendors/'

    ;
