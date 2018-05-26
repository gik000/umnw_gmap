<?php

/**
 * Implements hook_block_info()
 */
function umnw_gmap_block_info(){
  // Front services block
  $blocks['umnw_gmap_standard'] = array(
    'title' => '<none>',
    'info' => 'UMNW Google Maps',
    'status' => 1,
    'region' => 'content',
    'visibility' => BLOCK_VISIBILITY_LISTED,
    'pages' => '',
  );

  return $blocks;
}

/**
 * Implements hook_block_view()
 */
function umnw_gmap_block_view($delta = ''){
  $block = [];
  switch ($delta) {
    // Front services block
    case 'umnw_gmap_standard' :
      module_load_include('inc','umnw_gmap','umnw_gmap.blocks');
      $block_content = _umnw_gmap_get_markup('standard');
      $block['content'] = $block_content;
      break;
  }
  return $block;
}

/**
 * Implements hook_theme().
 */
function umnw_gmap_theme($existing, $type, $theme, $path) {
  return array(
    'umnw_gmap_standard' => array(
      'variables' => array(
        'title' => NULL,
        'title_classes' => NULL,
        'id' => NULL,
        'classes' => NULL,
      ),
      'template' => 'tpl/umnw_gmap.block.standard'
    ),
  );
}

/**
 * Returns standard map markup
 * @return string
 */
function _umnw_gmap_get_markup($block_type){
  // Deciding markup
  switch($block_type){
    case 'standard':
    default:
      // Setting values.
      $title = '';
      $title_classes = '';
      $id = '';
      $classes = '';
      break;
  }
  // Variables.
  $variables = [
    'title' => $title,
    'title_classes' => $title_classes,
    'id' => ($id != '') ? $id : 'umnw_gmap-block-standard',
    'classes' => $classes,
  ];
  // Returning theme markup.
  return theme('umnw_gmap_standard',$variables);
}