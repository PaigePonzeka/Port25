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
  $tag_list = get_the_tag_list( '', __( ', ', 'twentytwelve' ) );
?>
<div class="port25-post">
  <h1 class="port25-title"><?php the_title(); ?></h1>
  <hr class="port25-divider">
  <div class="port25-post-details">
    <div class="port25-post-details-author"> Written by <span class="port25-post-details-author-name"><?php echo $author ?> </span> on <span class="port25-post-details-date"><?php echo $date ?></span></div>
    <?php if ( comments_open() ) : ?>
      <div class="port25-post-details-comments-link">
          <?php comments_popup_link( '<span class="leave-reply"> <span class=" icon-comment"></span> ' . __( 'Leave a Comment' ) . '</span>', __( '1 Comment' ), __( '% Comments' ) ); ?>
        </div><!-- .comments-link -->
      <?php endif; // comments_open() ?>
  </div>

  <div class="port25-post-content">
    <?php the_content();?>
  </div>
</div>