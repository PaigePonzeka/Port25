<?php
  $date = sprintf( '<time class="entry-date" datetime="%2$s">%1$s</time>',
          esc_attr( get_the_time('l, F jS, Y') ),
          esc_attr( get_the_date( 'c' ) ),
          esc_html( get_the_date() )
        );
  $post_id = get_the_id();
  $post_weight = $post_id % 10;
?>
<li class="posts-list-item post-weight-<?php echo $post_weight;?>">
  <a href="<?php the_permalink(); ?>" title="<?php echo esc_attr( sprintf( __( 'Permalink to %s' ), the_title_attribute( 'echo=0' ) ) ); ?>" rel="bookmark">
    <div class="post-list-item-wrapper">
      <h4 class="post-list-item-date">  <?php echo $date ?>
      </h4>
      <h2 class="post-list-item-headline">
        <?php the_title(); ?>
      </h2>
      <?php
        echo get_the_tag_list('<h5 class="post-list-item-tags">Tags: ',', ','</h5>');?>
    </div>
  </a>
</li>