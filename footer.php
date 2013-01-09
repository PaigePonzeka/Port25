<?php
/**
 * The template for displaying the footer.
 *
 * Contains footer content and the closing of the
 * #main and #page div elements.
 *
 * @package WordPress
 * @subpackage Twenty_Twelve
 * @since Twenty Twelve 1.0
 */
?>
	</div><!-- #main .wrapper -->
	<footer id="colophon" role="contentinfo">
		<div class="site-info footer-container">
		  Copyright &copy;<?php echo date("Y"); ?> Paul Ponzeka
			<span class="seperator">|</span> <a href="http://wordpress.org/">Proudly powered by WordPress</a>
			<span class="seperator">|</span> Site By <a href="http://ponzeka.com"> Paige </a>
		</div><!-- .site-info -->
	</footer><!-- #colophon -->
</div><!-- #page -->

<?php wp_footer(); ?>
</body>
</html>