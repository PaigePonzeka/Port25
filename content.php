<?php
/**
 * The default template for displaying content. Used for both single and index/archive/search.
 *
 * @package WordPress
 * @subpackage Twenty_Twelve
 * @since Twenty Twelve 1.0
 */
?>

	<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
		<?php if ( is_sticky() && is_home() && ! is_paged() ) : ?>
		<div class="featured-post">
			<?php _e( 'Featured post', 'twentytwelve' ); ?>
		</div>
		<?php endif; ?>
		<header class="entry-header">
			<?php the_post_thumbnail(); ?>
			<?php if ( is_single() ) : ?>
			  <h2 class="entry-title"><?php the_title(); ?></h2>
			<?php else : ?>
			  <h2 class="entry-title">
  				<a href="<?php the_permalink(); ?>" title="<?php echo esc_attr( sprintf( __( 'Permalink to %s' ), the_title_attribute( 'echo=0' ) ) ); ?>" rel="bookmark"><?php the_title(); ?></a>
  			</h2>

			<?php endif; // is_single() ?>

			 <?php
        $date = sprintf( '<a href="%1$s" title="%2$s" rel="bookmark"><time class="entry-date" datetime="%3$s">%2$s</time></a>',
      		esc_url( get_permalink() ),
      		esc_attr( get_the_time('l, F jS, Y') ),
      		esc_attr( get_the_date( 'c' ) ),
      		esc_html( get_the_date() )
      	);

      	$author = sprintf( '<span class="author vcard"><a class="url fn n" href="%1$s" title="%2$s" rel="author">%3$s</a></span>',
      		esc_url( get_author_posts_url( get_the_author_meta( 'ID' ) ) ),
      		esc_attr( sprintf( __( 'View all posts by %s', 'twentytwelve' ), get_the_author() ) ),
      		get_the_author()
      	);

      	// Translators: used between list items, there is a space after the comma.
      	$categories_list = get_the_category_list( __( ', ', 'twentytwelve' ) );

      	// Translators: used between list items, there is a space after the comma.
      	$tag_list = get_the_tag_list( '', __( ', ', 'twentytwelve' ) );
        ?>
        <div class="entry-author"> Written by <span class="entry-author-name"><?php echo $author ?> </span> on <span class="entry-date"><?php echo $date ?></span></div>


  			<?php if($categories_list) : ?>
  				<div class="entry-categories">
  				  <?php echo $categories_list?>
  				</div>
  			<?php endif; // tag_list() ?>

			  <?php if ( comments_open() ) : ?>
				<div class="comments-link">
					<?php comments_popup_link( '<span class="leave-reply"> <span class=" icon-comment"></span> ' . __( 'Leave a Comment' ) . '</span>', __( '1 Comment' ), __( '% Comments' ) ); ?>
				</div><!-- .comments-link -->
			<?php endif; // comments_open() ?>
		</header><!-- .entry-header -->

		<?php if ( is_search() ) : // Only display Excerpts for Search ?>
		<div class="entry-summary">
			<?php the_excerpt(); ?>
		</div><!-- .entry-summary -->
		<?php else : ?>
		<div class="entry-content">
			<?php the_content( __( 'Continue reading <span class="meta-nav">&rarr;</span>', 'twentytwelve' ) ); ?>
			<?php wp_link_pages( array( 'before' => '<div class="page-links">' . __( 'Pages:', 'twentytwelve' ), 'after' => '</div>' ) ); ?>
		</div><!-- .entry-content -->
		<?php endif; ?>

		<footer class="entry-meta">
      <?php if($tag_list) : ?>
				  <div class="entry-tags">
  			      Tags: <?php echo $tag_list?>
  			    <div>
			<?php endif; // tag_list() ?>
			<?php edit_post_link( __( 'Edit', 'twentytwelve' ), '<span class="edit-link">', '</span>' ); ?>
			<?php if ( is_singular() && get_the_author_meta( 'description' ) && is_multi_author() ) : // If a user has filled out their description and this is a multi-author blog, show a bio on their entries. ?>
				<div class="author-info">
					<div class="author-avatar">
						<?php echo get_avatar( get_the_author_meta( 'user_email' ), apply_filters( 'twentytwelve_author_bio_avatar_size', 68 ) ); ?>
					</div><!-- .author-avatar -->
					<div class="author-description">
						<h2><?php printf( __( 'About %s', 'twentytwelve' ), get_the_author() ); ?></h2>
						<p><?php the_author_meta( 'description' ); ?></p>
						<div class="author-link">
							<a href="<?php echo esc_url( get_author_posts_url( get_the_author_meta( 'ID' ) ) ); ?>" rel="author">
								<?php printf( __( 'View all posts by %s <span class="meta-nav">&rarr;</span>', 'twentytwelve' ), get_the_author() ); ?>
							</a>
						</div><!-- .author-link	-->
					</div><!-- .author-description -->
				</div><!-- .author-info -->
			<?php endif; ?>
		</footer><!-- .entry-meta -->
	</article><!-- #post -->
