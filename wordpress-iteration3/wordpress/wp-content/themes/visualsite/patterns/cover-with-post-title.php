<?php
 /**
  * Title: Cover With Post Title
  * Slug: visualsite/cover-with-post-title
  * Categories: visualsite
  */
?>

<!-- wp:group {"align":"full","style":{"spacing":{"margin":{"top":"0px"}}},"layout":{"type":"default"}} -->
<div class="wp-block-group alignfull" style="margin-top:0px"><!-- wp:cover {"url":"<?php echo esc_url( get_template_directory_uri() );?>/assets/images/bg-cover-2.jpeg","id":55,"dimRatio":50,"minHeight":300,"align":"full"} -->
<div class="wp-block-cover alignfull" style="min-height:300px"><span aria-hidden="true" class="wp-block-cover__background has-background-dim"></span><img class="wp-block-cover__image-background wp-image-55" alt="" src="<?php echo esc_url( get_template_directory_uri() );?>/assets/images/bg-cover-2.jpeg" data-object-fit="cover"/><div class="wp-block-cover__inner-container"><!-- wp:post-title {"textAlign":"center","level":1,"textColor":"background"} /--></div></div>
<!-- /wp:cover --></div>
<!-- /wp:group -->