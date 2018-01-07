<ul class="posts-list">
  <?php
  $post_count = 0;
  while ( have_posts() ) : the_post();
    $post_count++;
    include(locate_template('inc/posts-item.php'));

  endwhile;
  ?>
</ul>