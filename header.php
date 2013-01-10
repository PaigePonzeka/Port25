<?php
/**
 * The Header for our theme.
 *
 * Displays all of the <head> section and everything up till <div id="main">
 *
 * @package WordPress
 * @subpackage Twenty_Twelve
 * @since Twenty Twelve 1.0
 */
?><!DOCTYPE html>
<!--[if IE 7]>
<html class="ie ie7" <?php language_attributes(); ?>>
<![endif]-->
<!--[if IE 8]>
<html class="ie ie8" <?php language_attributes(); ?>>
<![endif]-->
<!--[if !(IE 7) | !(IE 8)  ]><!-->
<html <?php language_attributes(); ?>>
<!--<![endif]-->
<head>
<meta charset="<?php bloginfo( 'charset' ); ?>" />
<meta name="viewport" content="width=device-width" />
<title><?php wp_title( '|', true, 'right' ); ?></title>
<link rel="profile" href="http://gmpg.org/xfn/11" />
<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>" />
<?php // Loads HTML5 JavaScript file to add support for HTML5 elements in older IE versions. ?>
<!--[if lt IE 9]>
<script src="<?php echo get_template_directory_uri(); ?>/js/html5.js" type="text/javascript"></script>
<![endif]-->
<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<div id="page" class="hfeed site">
	<header id="masthead" class="site-header" role="banner">

		<hgroup class="header-container">
		  <div class="site-logo pull-left">
        <?php $header_image = get_header_image();
         if ( ! empty( $header_image ) ) : ?>
    			  <a href="<?php echo esc_url( home_url( '/' ) ); ?>">
    			  <img src="<?php echo esc_url( $header_image ); ?>" class="header-image" width="<?php echo get_custom_header()->width; ?>" height="<?php echo get_custom_header()->height; ?>" alt="" /></a>
    		<?php endif; ?>
    	</div>
    	<div class="site-title pull-left">
			  <h1>
    		  <a href="<?php echo esc_url( home_url( '/' ) ); ?>" title="<?php echo esc_attr( get_bloginfo( 'name', 'display' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a>
    		</h1>
			  <h5 class="site-description"><?php bloginfo( 'description' ); ?></h5>
			</div>
		</hgroup>

      <!-- Main Navigation -->
		<nav id="site-navigation" class="main-navigation nav-wrapper" role="navigation">
		  <div class="nav-container">
		    <div class="nav-ribbon-left"></div>
		    <?php wp_nav_menu( array( 'theme_location' => 'primary', 'menu_class' => 'nav' ) ); ?>
		    <div class="nav-ribbon-right"></div>
		  </div>

		</nav>
		<!-- / Main Navigation -->


	</header><!-- #masthead -->

	<div id="main" class="wrapper">