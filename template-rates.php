<?php
/**
 * Template Name: Rates Template
 */

$context = Timber::get_context();
$context['rates'] = new TimberPost();
Timber::render('rates-template.twig', $context);

 ?>
