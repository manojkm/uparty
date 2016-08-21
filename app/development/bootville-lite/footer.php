<?php
/**
 * The template for displaying the footer.
 *
 * Contains the closing of the #content div and all content after
 *
 * @package bootville
 */
?>

	</div><!-- #content -->

    <div class="footer-widgets widget-area row">
                <div class="col-lg-4 col-md-4">
                    <?php dynamic_sidebar( 'footer-1' ); ?>
                </div>

                <div class="col-lg-4 col-md-4">
                    <?php dynamic_sidebar( 'footer-2' ); ?>
                </div>

                <div class="col-lg-4 col-md-4">
                    <?php dynamic_sidebar( 'footer-3' ); ?>
                </div>
            </div>


	<footer id="colophon" class="site-footer" role="contentinfo">
			<!--row-->

            <div class="row">
                <div class="footer-logo-info">
                <a href="<?php echo esc_url( home_url( '/' ) ); ?>" title="<?php echo esc_attr( get_bloginfo( 'name', 'display' ) ); ?>" class="foot_logo"><img src="<?php echo get_template_directory_uri(); ?>/assets/img/linen_alley_logo.png" alt=""><?php //bloginfo( 'name' ); ?></a>

                        <div class="col-lg-12 col-md-12">
                              <h4>307-734-7424</h4>
                              <h6>MON-FRI: 10AM-5:30PM SAT: 10AM-5PM SUN: CLOSED</h6>
                        </div>
                    </div><!-- .footer-menu-->
            </div>



			<div class="row">
				<div class="footer-menu">
						<div class="col-lg-12 col-md-12">
							<?php if (has_nav_menu('footer-menu', 'bootville-lite')) { ?>
								<nav role="navigation">
								<?php wp_nav_menu(array(
								  'container'       => '',
								  'menu_class'      => 'footer-menu',
								  'theme_location'  => 'footer-menu')
								);
								?>
							  </nav>
							<?php } ?>
						</div>
					</div><!-- .footer-menu-->
			</div><!-- .row -->

		<div class="row">
			<div class="credits">

			<div class="col-md-12 col-lg-12">
			<div class="copyright">
				<p class="copyright">&copy; <?php _e('Copyright', 'bootville-lite'); ?> <?php echo date('Y'); ?> - <a href="<?php echo home_url(); ?>/" title="<?php bloginfo('name'); ?>" rel="home"><?php bloginfo('name'); ?></a>. All Rights Reserved. </p>
			</div>
			</div>


			</div><!-- .credits -->
		</div><!-- .row -->

	</footer><!-- #colophon -->
</div><!-- #wrap -->

<?php wp_footer(); ?>

</body>
</html>
