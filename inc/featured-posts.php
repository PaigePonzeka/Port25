<?php
  // Get featured posts from ns featured posts plugin
  $custom_query_args = array(
    'post_type'  => 'post',
    'meta_key'   => '_is_ns_featured_post',
    'meta_value' => 'yes',
    'posts_per_page' => 3
    );
  // Get current page and append to custom query parameters array
  $custom_query_args['paged'] = get_query_var( 'paged' ) ? get_query_var( 'paged' ) : 1;
  $custom_query = new WP_Query( $custom_query_args ); ?>
  <?php
  // Pagination fix
  global $wp_query;
  $temp_query = $wp_query;
  $wp_query   = NULL;
  $wp_query   = $custom_query;
?>
<?php if ( $custom_query->have_posts() ) : ?>
  <section>
    <h3 class="section-title">Featured Posts</h3>
    <ul class="featured-posts-list">
      <!-- the loop -->
      <?php while ( $custom_query->have_posts() ) : $custom_query->the_post(); ?>
        <li class="featured-posts-list-item">
          <a href="<?php the_permalink(); ?>">
            <div class="featured-posts-list-item-wrapper">
              <h2 class="featured-posts-list-item-title">
                <?php the_title(); ?>
              </h2>
              <div class="featured-posts-list-exerpt"><?php the_excerpt(); ?>
              </div>
            </div>
          </a>
        </li>
      <?php endwhile; ?>
      <!-- end of the loop -->
    </ul>
  </section>
<?php endif; ?>
<?php
  wp_reset_postdata();

  // Reset main query object
  $wp_query = NULL;
  $wp_query = $temp_query;
?>