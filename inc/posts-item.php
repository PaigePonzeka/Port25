<?php
  $date = sprintf( '<a href="%1$s" title="%2$s" rel="bookmark"><time class="entry-date" datetime="%3$s">%2$s</time></a>',
          esc_url( get_permalink() ),
          esc_attr( get_the_time('l, F jS, Y') ),
          esc_attr( get_the_date( 'c' ) ),
          esc_html( get_the_date() )
        );
?>
<li class="posts-list-item">
  <div class="post-list-item-wrapper">
    <h4 class="post-list-item-date"><?php echo $date ?></h4>
    <h2 class="post-list-item-headline">
      <a href="<?php the_permalink(); ?>" title="<?php echo esc_attr( sprintf( __( 'Permalink to %s' ), the_title_attribute( 'echo=0' ) ) ); ?>" rel="bookmark"><?php the_title(); ?></a>
    </h2>
    <?php
      echo get_the_tag_list('<h5 class="post-list-item-tags">Tags: ',', ','</h5>');?>
  </div>
</li>