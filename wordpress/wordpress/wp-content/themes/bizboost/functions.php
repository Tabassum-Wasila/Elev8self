<?php
/**
 * BizBoost functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package BizBoost
 * @since 1.0
 */

if ( ! function_exists( 'bizboost_support' ) ) :

	/**
	 * Sets up theme defaults and registers support for various WordPress features.
	 *
	 * @since 1.0
	 *
	 * @return void
	 */
	function bizboost_support() {

		// Add support for block styles.
		add_theme_support( 'wp-block-styles' );

		// Enqueue editor styles.
		add_editor_style( 'style.css' );

	}

endif;

add_action( 'after_setup_theme', 'bizboost_support' );

if ( ! function_exists( 'bizboost_styles' ) ) :

	/**
	 * Enqueue styles.
	 *
	 * @since 1.0
	 *
	 * @return void
	 */

	function bizboost_styles() {
		// Enqueue theme stylesheet.
		wp_enqueue_style(
			'bizboost-style',
			get_template_directory_uri() . '/style.css',
			array(),
			filemtime( get_theme_file_path( 'style.css' ) )
		);

		wp_enqueue_script(
            'bizboost-script',
            get_theme_file_uri( 'assets/js/custom.js' ),
            array(),
            filemtime( get_theme_file_path( 'assets/js/custom.js' ) ),
            true
        );
	}

endif;

add_action( 'wp_enqueue_scripts', 'bizboost_styles' );

if ( ! function_exists( 'bizboost_block_editor_styles' ) ) :

    /**
     * Enqueue rtl editor styles
     */

     function bizboost_block_editor_styles() {
        if( is_rtl() ){
            wp_enqueue_style(
                'bizboost-rtl',
                get_theme_file_uri( 'rtl.css' ),
                array(),
                filemtime( get_theme_file_path( 'rtl.css' ) )
            );
        }
    }

endif;

add_action( 'enqueue_block_editor_assets', 'bizboost_block_editor_styles' );


// custom code
// custom code
function interest_skills_shortcode() {
    global $wpdb;

    $html = '<form class="styled-form" method="get">';
    
	 // Populate EDUCATION dropdown options from database
	$education_backgrounds = $wpdb->get_col("SELECT DISTINCT Occupation_Major_Sub_Group FROM education_courses");

	// Add radio buttons for options
    $html .= '<div class="form-row">';
    $html .= '<div class="form-group radio-group">';
    $html .= '<label>Choose an option:</label>';
    $html .= '<label><input type="radio" name="option" value="education">I\'d like to see options related to my educational background</label>';
    $html .= '<label><input type="radio" name="option" value="interest">I want to find skills related to my interest</label>';
    $html .= '</div>';
    $html .= '</div>';
	$html .= '<div class="form-row">';
    $html .= '<div class="form-group">';
    $html .= '<label for="education_backgrounds" id = "label_ed_bc">Educational Background:</label>';
    $html .= '<select name="education_backgrounds" id="education_backgrounds">';
    $html .= '<option value="">Select Background</option>';

    foreach ($education_backgrounds as $education) {
        $html .= '<option value="' . esc_attr($education) . '">' . esc_html($education) . '</option>';
    }

    $html .= '</select>';
    $html .= '</div>';
    $html .= '</div>';

	// Populate REGIONS dropdown options from database
   	$regions = $wpdb->get_col("SELECT DISTINCT region FROM education_courses");

	$html .= '<div class="form-row">';
    $html .= '<div class="form-group">';
    $html .= '<label for="region">Region:</label>';
    $html .= '<select name="region" id="region" required>';
    $html .= '<option value="">Select Region</option>';

    foreach ($regions as $region) {
        $html .= '<option value="' . esc_attr($region) . '">' . esc_html($region) . '</option>';
    }

    $html .= '</select>';
    $html .= '</div>';
    $html .= '</div>';
	
	// Populate INTERESTS dropdown options from database
	$interests = $wpdb->get_col("SELECT DISTINCT options FROM education_training_options");
	
	$html .= '<div class="form-row">';
    $html .= '<div class="form-group">';
    $html .= '<label for="interest" id = "label_int">Interest:</label>';
    $html .= '<select name="interest" id="interest">';
    $html .= '<option value="">Select Interest</option>';

    foreach ($interests as $interest) {
        $html .= '<option value="' . esc_attr($interest) . '">' . esc_html($interest) . '</option>';
    }

    $html .= '</select>';
    $html .= '</div>';
    $html .= '</div>';
    $html .= '<div class="form-row">';
    $html .= '<div class="form-group">';
    $html .= '<button type="submit" class="blue-button">Get Skills</button>';
    $html .= '</div>';
    $html .= '</div>';
    $html .= '</form>';

    if (isset($_GET['interest'])) {

		$selected_interest = sanitize_text_field($_GET['interest']);
		//$selected_education = sanitize_text_field($_GET['education_backgrounds']);
		$selected_region = sanitize_text_field($_GET['region']);
        $interest_skills_query = $wpdb->prepare("
            SELECT DISTINCT Occupation_Unit_Group
            FROM education_skills
            WHERE Occupation_Major_sub_Group = %s AND Region = %s", $selected_interest, $selected_region);
		
        $skills = $wpdb->get_results($interest_skills_query);

        if ($skills) {
            $html .= "<h3>Skills related to $selected_interest in $selected_region:</h3>";
            $html .= "<ul>";
            foreach ($skills as $skill) {
                $html .= "<li>" . esc_html($skill->Occupation_Unit_Group) . "</li>";
            }
            $html .= "</ul>";
        } else {
            $html .= "<p>Select education options to see related skills.</p>";
        }
		
		
// 		$education_courses_query = $wpdb->prepare("
//             SELECT Associated_Courses
//             FROM skills_dataset_full
//             WHERE Occupation_Major_sub_Group = %s AND Region = %s", $selected_education, $selected_region);

// 		$courses = $wpdb->get_results($education_courses_query);		
		
    }
	
	// code for education
	    if (isset($_GET['education_backgrounds'])) {

		$selected_education = sanitize_text_field($_GET['education_backgrounds']);
		$selected_region = sanitize_text_field($_GET['region']);
 		
		$education_skills_query = $wpdb->prepare("
            SELECT DISTINCT Occupation_Unit_Group
            FROM education_skills
            WHERE Occupation_Major_sub_Group = %s AND Region = %s", $selected_education, $selected_region);
		
		$ed_skills = $wpdb->get_results($education_skills_query);
		
// 		$education_courses_query = $wpdb->prepare("
//             SELECT Associated_Courses
//             FROM skills_dataset_full
//             WHERE Occupation_Major_sub_Group = %s AND Region = %s", $selected_education, $selected_region);

// 		$courses = $wpdb->get_results($education_courses_query);		
		
		
        if ($ed_skills) {
            $html .= "<h3>Skills related to $selected_education in $selected_region:</h3>";
            $html .= "<ul>";
            foreach ($ed_skills as $ed_skill) {
                $html .= "<li>" . esc_html($ed_skill->Occupation_Unit_Group) . "</li>";
            }
            $html .= "</ul>";
			
        } else {
            $html .= "<p>Select interest options to see related skills.</p>";
        }
    }

    return $html;
}
add_shortcode('interest_skills', 'interest_skills_shortcode');
//



// Add block patterns
require get_template_directory() . '/inc/block-patterns.php';

// Add block styles
require get_template_directory() . '/inc/block-styles.php';

// Block Filters
require get_template_directory() . '/inc/block-filters.php';

// Svg icons
require get_template_directory() . '/inc/icon-function.php';

// Theme About Page
require get_template_directory() . '/inc/about.php';
