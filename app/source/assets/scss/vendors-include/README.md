# Vendors include

The `vendors-include/` directory is for third-party styles to merging them with the others in the resulting stylesheet. This is handy when using prepackaged components developed by other people (or for your own components that are maintained in another project). 

*Note -  As a general rule, do not modify files in this directory. For instance, it’s not uncommon to override a section of any vendor styles hence i recommend to put such files in `vendors-extended/` in which they have files named exactly after the vendors they overwrite.
This should make it easy to update third-party stylesheets to more current versions in the future.*

Adapted from: [Sass Guidelines](http://sass-guidelin.es/) > [Architecture](http://sass-guidelin.es/#architecture) > [Vendors folder](http://sass-guidelin.es/#vendors-folder)
