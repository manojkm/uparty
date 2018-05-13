#http://thesassway.com/beginner/how-to-structure-a-sass-project.
Hey, this is not from me, not my code, not my responsibility”.
The vendor directory is for third-party CSS. This is handy when using prepackaged 
components developed by other people.

#https://github.com/mig-25/masonary-gallery/blob/04aedb72affcddd1a95ff223afa9dfe71ec7a187/app/scss/lib/_lib.scss
This file is for you to import other libraries that you would like to
include into your project.

#http://thesassway.com/beginner/how-to-structure-a-sass-project
The vendor directory is for third-party CSS. This is handy when using prepackaged components developed by other people (or for your own components that are maintained in another project). jQuery UI and a color picker are examples of CSS that you might want to place in the vendor directory. As a general rule I make it a point not to modify files in my vendor directory. If I need to make modifications I add those after the vendored files are included in my primary stylesheet. This should make it easy for me to update my third-party stylesheets to more current versions in the future.