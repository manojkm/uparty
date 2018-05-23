About: third party libraries and dependencies import
#https://github.com/edx/ux-pattern-library/blob/master/pattern-library/sass/global/_lib.scss

#https://github.com/techyrajeev/TestProject/blob/326d66baf1840909bc7ad04c4e66f7b762a5c151/sass/vendors_extenstion/README.md
If we have to override a section of any vendor, in vendors-extensions/ we create files named exactly after the vendors they overwrite.
For instance, vendors-extensions/_bootstrap.scss is a file containing all CSS rules intended to re-declare some of Bootstrap’s default CSS.
This is to avoid editing the vendor files themselves, which is generally not a good idea.