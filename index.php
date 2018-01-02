<?php
/**
 * The main template file
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * E.g., it puts together the home page when no home.php file exists.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package Port25V2
 */

get_header(); ?>

	<div id="primary" class="content-area">
		<main id="main" class="site-main">

		<?php
		if ( have_posts() ) :

			if ( is_home() && ! is_front_page() ) : ?>
				<header>
					<h1 class="page-title screen-reader-text"><?php single_post_title(); ?></h1>
				</header>

			<?php
			endif;
			?>
			<?php include(locate_template('inc/featured-posts.php')); ?>
				<h3 class="section-title">Recent Posts</h3>
				<ul class="posts-list">

					<?php
					/* Start the Loop */
					while ( have_posts() ) : the_post();

						include(locate_template('inc/posts-item.php'));

						/*get_template_part( 'template-parts/content', get_post_format() );*/

					endwhile;
					?>
				</ul>
			</section>
			<?php
			the_posts_navigation();

		else :

			get_template_part( 'template-parts/content', 'none' );

		endif; ?>

		</main><!-- #main -->
	</div><!-- #primary -->

<?php
get_footer();
