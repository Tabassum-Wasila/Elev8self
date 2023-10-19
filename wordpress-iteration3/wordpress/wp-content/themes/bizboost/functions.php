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

function competency_check_shortcode() {
    global $wpdb;
	
	$html = '<form class="styled-form" method="get">';
    
	 // Populate OCCUPATION dropdown options from database
	$occupations = $wpdb->get_col("SELECT DISTINCT Occupation FROM competencies_data");
	sort($occupations);

	$html .= '<div class="form-row">';
    $html .= '<div class="form-group">';
    $html .= '<label for="label_occ" id = "label_occ">Select a job to check core competency requirements:</label>';
    $html .= '<select name="occupation" id="occupation">';
    $html .= '<option value="">Select Occupation</option>';

    foreach ($occupations as $occupation) {
        $html .= '<option value="' . esc_attr($occupation) . '">' . esc_html($occupation) . '</option>';
    }

    $html .= '</select>';
    $html .= '</div>';
    $html .= '</div>';
	$html .= '<div class="form-row">';
    $html .= '<div class="form-group">';
    $html .= '<button type="submit" class="blue-button">Submit</button>';
    $html .= '</div>';
    $html .= '</div>';
    $html .= '</form>';
	
	if (isset($_GET['occupation'])) {
		$selected_occupation = sanitize_text_field($_GET['occupation']);
		$competencies_query = $wpdb->prepare("
				SELECT Core_Competency, Proficiency_Level
				FROM competencies_data
				WHERE Occupation = %s", $selected_occupation);

		$competencies = $wpdb->get_results($competencies_query);

		$html .= '<h6>The Core Competency levels required for '.$selected_occupation.' </h6>';
		$html .= '<table style="color: green">';
		$html .= '<thead>';
		$html .= '<th style="width: 400px; text-align: left;">Core Competency</th>';
		$html .= '<th>Proficiency Level</th>';
		$html .= '</thead>';
		$html .= '<tbody>';
		foreach($competencies as $competency) {
			$html .= '<tr>';
			$html .= '<td>'. esc_html($competency->Core_Competency) .'</td>';
			$html .= '<td>'. esc_html($competency->Proficiency_Level) .'</td>';
			$html .= '</tr>';
		}
		$html .= '</tbody>';
		$html .= '</table>';
	}
	return $html;
}
add_shortcode('competency_check', 'competency_check_shortcode');

// custom code for skill shortage future
function skill_shortage_future_shortcode() {
    global $wpdb;
    
    $html = '<form class="styled-form" method="get">';
    
    // Populate future demand rating options from the database
    $occupations = $wpdb->get_col("SELECT DISTINCT NationalFutureDemandRating FROM skill_priority_data");
    sort($occupations);

    $html .= '<div class="form-row">';
    $html .= '<div class="form-group">';
    $html .= '<label for="label_occ" id="label_occ">Select shortage rating:</label>';
    $html .= '<select name="occupation" id="occupation">';
    $html .= '<option value="">Select Shortage Rating</option>';

    foreach ($occupations as $occupation) {
        $html .= '<option value="' . esc_attr($occupation) . '">' . esc_html($occupation) . '</option>';
    }

    $html .= '</select>';
    $html .= '</div>';
    $html .= '</div>';
    $html .= '<div class="form-row">';
    $html .= '<div class="form-group">';
    $html .= '<button type="submit" class="blue-button">Get Occupation Code and Title</button>';
    $html .= '</div>';
    $html .= '</div>';
    $html .= '</form>';
    
    if (isset($_GET['occupation'])) {
        $selected_occupation = sanitize_text_field($_GET['occupation']);
        $competencies_query = $wpdb->prepare("
                SELECT ANZSCO_Code, Occupation_title
                FROM skill_priority_data
                WHERE NationalFutureDemandRating = %s", $selected_occupation);

        $competencies = $wpdb->get_results($competencies_query);

        $html .= '<h6>Below table suggests the Occupations code & Title which has selected shortage rating: '.$selected_occupation.' </h6>';
        $html .= '<div id="results-container">';
        $html .= '<table id="results-table" style="color: white; border-collapse: collapse; width: 100%; border: 1px solid #fff;">';
        $html .= '<thead>';
        $html .= '<th style="width: 400px; text-align: left; border: 1px solid #fff;">Occupation ANZSCO Code</th>';
        $html .= '<th style="border: 1px solid #fff;">Occupation Title</th>';
        $html .= '</thead>';
        $html .= '<tbody>';

        // Add a class to the rows for easy handling with JavaScript
        $rowCount = 0;
        foreach ($competencies as $competency) {
            $html .= '<tr class="load-more-row" style="display:none;">';
            $html .= '<td style="border: 1px solid #fff;">'.esc_html($competency->ANZSCO_Code).'</td>';
            $html .= '<td style="border: 1px solid #fff;">'.esc_html($competency->Occupation_title).'</td>';
            $html .= '</tr>';
            $rowCount++;
        }

        $html .= '</tbody>';
        $html .= '</table>';
        $html .= '</div>';
        
        // Add JavaScript for the "Load More" functionality
        $html .= '<div id="load-more-container">';
        $html .= '<button id="load-more-button" class="blue-button">Load More</button>';
        $html .= '</div>';
        $html .= '<script>
            jQuery(document).ready(function($) {
                var itemsPerPage = 10;
                var $table = $("#results-table");
                var $rows = $table.find(".load-more-row");
                var $loadMoreButton = $("#load-more-button");
                var rowCount = ' . $rowCount . ';
                var currentItemCount = itemsPerPage;
                
                $rows.slice(0, itemsPerPage).show();

                $loadMoreButton.on("click", function() {
                    var nextItemCount = currentItemCount + itemsPerPage;
                    $rows.slice(currentItemCount, nextItemCount).show();
                    currentItemCount = nextItemCount;
                    
                    if (currentItemCount >= rowCount) {
                        $loadMoreButton.hide();
                    }
                });
            });
            </script>';
    }

    return $html;
}
add_shortcode('skill_shortage_future', 'skill_shortage_future_shortcode');



	
// custom code
function interest_skills_shortcode() {
    global $wpdb;

    $html = '<form class="styled-form" method="get">';
    
	 // Populate EDUCATION dropdown options from database
	$education_backgrounds = $wpdb->get_col("SELECT DISTINCT Occupation_Major_Sub_Group FROM education_courses");
	sort($education_backgrounds);

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
	sort($interests);
		
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
				
 		$interest_courses_query = $wpdb->prepare("
             SELECT Associated_Courses
             FROM skills_dataset_full
             WHERE Occupation_Major_sub_Group = %s AND Region = %s", $selected_interest, $selected_region);

 		$courses = $wpdb->get_results($interest_courses_query);	

        if ($skills) {
           $html .= "<h3>Skills related to $selected_interest in $selected_region:</h3>";
            $html .= "<table>";
			$html .= "<thead>";
			$html .= '<th style="text-align: left; border: 1px solid #fff;">Occupation</th>'; // Add border styles
        	$html .= '<th style="border: 1px solid #fff;">Required Certifications</th>'; // Add border styles
        	$html .= '</thead>';
        	$html .= '<tbody>';

            foreach ($skills as $skill) {
				$html .= "<tr>";
                $html .= "<td style='border: 1px solid #fff;'>" . esc_html($skill->Occupation_Unit_Group) . "</td>";
				$html .= "<td style='border: 1px solid #fff;'>";
				foreach ($courses as $course)
					if($course->Occupation_Unit_Group == $skill->Occupation_Unit_Group)
						$html .= $course->Associated_courses . "<br>";
				$html .= "</td>";
				$html .= "</tr>";
            }
            $html .= "</tbody>";
			$html .= "</table>";
			
        } else {
            $html .= "<p>Select education options to see related skills.</p>";
        }	
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
		
 		$education_courses_query = $wpdb->prepare("
             SELECT *
             FROM skills_dataset_full
             WHERE Occupation_Major_sub_Group = %s AND Region = %s", $selected_education, $selected_region);

 		$courses = $wpdb->get_results($education_courses_query);		
		
		
        if ($ed_skills) {
            $html .= "<h3>Skills related to $selected_education in $selected_region:</h3>";
            $html .= "<table>";
			$html .= "<thead>";
			$html .= '<th style="text-align: left; border: 1px solid #fff;">Occupation</th>'; // Add border styles
        	$html .= '<th style="border: 1px solid #fff;">Required Certifications</th>'; // Add border styles
        	$html .= '</thead>';
        	$html .= '<tbody>';

            foreach ($ed_skills as $ed_skill) {
				$html .= "<tr>";
                $html .= "<td style='border: 1px solid #fff;'>" . esc_html($ed_skill->Occupation_Unit_Group) . "</td>";
				$html .= "<td style='border: 1px solid #fff;'>";
				foreach ($courses as $course)
					if($course->Occupation_Unit_Group == $ed_skill->Occupation_Unit_Group)
						$html .= $course->Associated_courses . "<br>";
				$html .= "</td>";
				$html .= "</tr>";
            }
            $html .= "</tbody>";
			$html .= "</table>";
			
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
