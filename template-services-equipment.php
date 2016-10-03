<?php
/**
 * Template Name: Services & Equipment Template
 */

$context = Timber::get_context();
$context['services_equipment'] = new TimberPost();
Timber::render('services-equipment-template.twig', $context);

 ?>
