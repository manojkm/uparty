module.exports = {
      allFiles: [
      '<%= site.src_assets %>/scss/**/*.scss',
    ],
    options: {
      bundleExec: false,
      config: '.scss-lint.yml',
      reporterOutput: 'scss-lint-report.xml',
      colorizeOutput: true,
	  compact:false,
    },
};
