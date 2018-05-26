<?php
?>
<div class="umnw_gmap_block umnw_gmap_block_standard">
  <div class="umnw_gmap_block_inner umnw_gmap_block_standard_inner">
    <?php
    if($title){
      print '<h3 class="'.$title_classes.'">'.$title.'</h3>';
    }
    ?>
    <div id="<?php print $id; ?>" class="umnw_gmap umnw_gmap_block_standard_container<?php print ' '. $classes; ?>">
      <!-- MAP HERE! -->
    </div>
  </div>
</div>
