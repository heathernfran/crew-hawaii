<?php

add_action('wp_enqueue_scripts', 'enqueue_theme_styles');
function enqueue_theme_styles() {
  wp_enqueue_style('basscss', get_stylesheet_directory_uri() . '/node_modules/basscss/css/basscss.min.css');
  wp_enqueue_style('semantic-ui-css', get_stylesheet_directory_uri() . '/node_modules/semantic-ui/dist/semantic.min.css');
  wp_enqueue_style('theme-style', get_stylesheet_directory_uri() . '/style.css');
}
