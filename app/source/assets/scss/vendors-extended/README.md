# Vendors Extended

The `vendors-extended/` directory is for vendors styles override and dependencies import. If we have to override a section of any vendor, in `vendors-extended/` we create files named exactly after the vendors they overwrite.

For instance, vendors-extensions/_chosen.scss is a file containing CSS rules intended to re-declare some of Chosen’s default CSS.
This is to avoid editing the vendor files themselves, which is generally not a good idea.

Adapted from: [Sass Guidelines](http://sass-guidelin.es/) > [Architecture](http://sass-guidelin.es/#architecture) > [Vendors folder](http://sass-guidelin.es/#vendors-folder)