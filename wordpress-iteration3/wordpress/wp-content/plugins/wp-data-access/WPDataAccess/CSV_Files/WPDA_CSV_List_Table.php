<?php // phpcs:ignore Standard.Category.SniffName.ErrorCode

namespace WPDataAccess\CSV_Files {

	use WPDataAccess\Data_Dictionary\WPDA_List_Columns_Cache;
	use WPDataAccess\List_Table\WPDA_List_Table;
	use WPDataAccess\Plugin_Table_Models\WPDA_CSV_Uploads_Model;
	use WPDataAccess\Utilities\WPDA_Message_Box;
	use WPDataAccess\WPDA;

	/**
	 * List table showing upload CSV files
	 */
	class WPDA_CSV_List_Table extends WPDA_List_Table {

		/**
		 * Constructor
		 *
		 * @param array $args Constructor arguments.
		 */
		public function __construct( $args = array() ) {
			$args['column_headers']  = self::column_headers_labels();
			$args['title']           = '';
			$args['subtitle']        = '';
			$args['show_view_link']  = 'off';
			$args['allow_insert']    = 'off';
			$args['allow_update']    = 'off';
			$args['allow_delete']    = 'on';
			$args['allow_import']    = 'off';
			$args['show_page_title'] = false;

			global $wpdb;

			$args['wpdaschema_name'] = $wpdb->dbname;
			$args['table_name']      = WPDA_CSV_Uploads_Model::get_base_table_name();

			parent::__construct( $args );

			// Reset columns (we are in a sub page of the Data Explorer main page).
			$this->wpda_list_columns = WPDA_List_Columns_Cache::get_list_columns(
				$wpdb->dbname,
				WPDA_CSV_Uploads_Model::get_base_table_name()
			);
			foreach ( $this->wpda_list_columns->get_table_columns() as $table_columns ) {
				$this->columns_indexed[ $table_columns['column_name'] ] = $table_columns;
			}
		}

		/**
		 * Show list table
		 *
		 * @return void
		 */
		public function show() {
			parent::show();

			?>
			<script type="text/javascript">
				jQuery(function() {
					jQuery('#wpda_main_form').append('<input type="hidden" name="page_action" value="wpda_import_csv">');
				});
			</script>
			<?php
		}

		/**
		 * Add mapping action link
		 *
		 * @param mixed  $item Table columns.
		 * @param string $column_name Column name.
		 * @param string $actions Action.
		 * @return void
		 */
		protected function column_default_add_action( $item, $column_name, &$actions ) {
			// Add page_action to delete form.
			?>
			<script type='text/javascript'>
				jQuery("#delete_form_" + <?php echo esc_attr( self::$list_number - 1 ); ?>).attr('action', '?page=<?php echo esc_attr( $this->page ); ?>&page_action=wpda_import_csv');
			</script>
			<?php
			// Add mapping form to actions.
			$wp_nonce_action = "wpda-mapping-{$item['csv_id']}";
			$wp_nonce        = esc_attr( wp_create_nonce( $wp_nonce_action ) );
			$form_id         = '_' . ( self::$list_number - 1 );
			$mapping_form    = $this->create_post_form( 'mapping', "mapping_form{$form_id}", $item['csv_id'], $wp_nonce );
			?>
			<script type='text/javascript'>
				jQuery("#wpda_invisible_container").append("<?php echo $mapping_form; // phpcs:ignore WordPress.Security.EscapeOutput ?>");
			</script>
			<?php
			$mapping =
				sprintf(
					'<a href="javascript:void(0)" class="view wpda_tooltip" title="' .
						__( 'Map table and columns for CSV file: ', 'wp-data-access' ) . $item['csv_real_file_name'] .
						'

Needs to be performed only once" onclick="jQuery(\'#mapping_form%s\').submit()">%s</a>',
					$form_id,
					'Mapping'
				);

			// Add import form to actions.
			$wp_nonce_action = "wpda-import-csv-{$item['csv_id']}";
			$wp_nonce        = esc_attr( wp_create_nonce( $wp_nonce_action ) );
			$import_form     = $this->create_post_form( 'import_start', "import_form{$form_id}", $item['csv_id'], $wp_nonce, $item['csv_name'] );
			?>
			<script type='text/javascript'>
				jQuery("#wpda_invisible_container").append("<?php echo $import_form; // phpcs:ignore WordPress.Security.EscapeOutput ?>");
			</script>
			<?php
			$import =
				sprintf(
					'<a href="javascript:void(0)" class="view wpda_tooltip" title="' .
						__( 'Import CSV file: ', 'wp-data-access' ) . $item['csv_real_file_name'] .
						'" onclick="jQuery(\'#import_form%s\').submit()">%s</a>',
					$form_id,
					'Import'
				);

			// Add reload form to actions.
			$wp_nonce_action = "wpda-reload-csv-{$item['csv_id']}";
			$wp_nonce        = esc_attr( wp_create_nonce( $wp_nonce_action ) );
			$reload_form     = $this->create_post_form( 'reload', "reload_form{$form_id}", $item['csv_id'], $wp_nonce, $item['csv_name'] );
			?>
			<script type='text/javascript'>
				jQuery("#wpda_invisible_container").append("<?php echo $reload_form; // phpcs:ignore WordPress.Security.EscapeOutput ?>");
			</script>
			<?php
			$reload =
				sprintf(
					'<a href="javascript:void(0)" class="view wpda_tooltip" title="' .
						__( 'Upload a newer version of CSV file: ', 'wp-data-access' ) . $item['csv_real_file_name'] .
						'" onclick="jQuery(\'#reload_form%s\').submit()">%s</a>',
					$form_id,
					'Upload'
				);

			// Remove edit action.
			unset( $actions['edit'] );

			// Add new links to beginning of action list.
			//phpcs:ignore - 8.1 proof
			$actions =
				array_merge(
					array( 'mapping' => $mapping ),
					array( 'import' => $import ),
					array( 'reload' => $reload ),
					$actions
				);
		}

		/**
		 * Create post form
		 *
		 * @param string $action Action.
		 * @param string $form_id Form ID.
		 * @param string $csv_id CSV ID.
		 * @param string $wpnonce Nonce.
		 * @param string $csv_name CSV internal name.
		 * @return array|string|string[]
		 */
		private function create_post_form( $action, $form_id, $csv_id, $wpnonce, $csv_name = '' ) {
			$esc_attr = 'esc_attr';
			$form     = <<< EOT
				<form id='{$esc_attr( $form_id )}' method='post'
					  action='?page={$esc_attr( $this->page )}&page_action=wpda_import_csv'
				>
					<input type='hidden' name='action' value='{$esc_attr( $action )}' />
					<input type='hidden' name='csv_id' value='{$esc_attr( $csv_id )}' />
					<input type='hidden' name='csv_name' value='{$esc_attr( $csv_name )}' />
					<input type='hidden' name='_wpnonce' value='{$esc_attr( $wpnonce )}'>
				</form>
EOT;
			return str_replace( array( "\n", "\r" ), '', $form );
		}

		/**
		 * Get current bulk action
		 *
		 * @return array|mixed|string
		 */
		public function get_bulk_actions() {
			$actions = parent::get_bulk_actions();

			if ( is_array( $actions ) ) {
				unset( $actions['bulk-export'] );
				unset( $actions['bulk-export-xml'] );
				unset( $actions['bulk-export-json'] );
				unset( $actions['bulk-export-excel'] );
				unset( $actions['bulk-export-csv'] );
			}

			return $actions;
		}

		/**
		 * Process bulk action
		 *
		 * @return void
		 */
		public function process_bulk_action() {
			if ( 'delete' === $this->current_action() ) {
				// Check if key is available.
				if ( ! isset( $_REQUEST['csv_id'] ) ) { // input var okay.
					wp_die( __( 'ERROR: Invalid URL [missing primary key values]', 'wp-data-access' ) ); // phpcs:ignore WordPress.Security.EscapeOutput
				}
				$csv_id = sanitize_text_field( wp_unslash( $_REQUEST['csv_id'] ) ); // input var okay.

				// Check if delete is allowed.
				$wp_nonce_action = "wpda-delete-{$this->table_name}-{$csv_id}";
				$wp_nonce        = isset( $_REQUEST['_wpnonce'] ) ? sanitize_text_field( wp_unslash( $_REQUEST['_wpnonce'] ) ) : ''; // input var okay.
				if ( ! wp_verify_nonce( $wp_nonce, $wp_nonce_action ) ) {
					wp_die( __( 'ERROR: Not authorized', 'wp-data-access' ) ); // phpcs:ignore WordPress.Security.EscapeOutput
				}

				// Delete CSV file and data.
				$row = WPDA_CSV_Uploads_Model::query( $csv_id );
				if ( is_array( $row ) && 1 === count( $row ) ) {//phpcs:ignore - 8.1 proof
					// Silently delete file.
					if ( isset( $row[0]->csv_real_file_name ) ) {
						unlink( WPDA::get_plugin_upload_dir() . $row[0]->csv_real_file_name );
					}

					// Delete record.
					$next_row_to_be_deleted['csv_id'] = $csv_id;
					if ( $this->delete_row( $next_row_to_be_deleted ) ) {
						$msg = new WPDA_Message_Box(
							array(
								'message_text' => __( 'Row deleted', 'wp-data-access' ),
							)
						);
						$msg->box();
					} else {
						$msg = new WPDA_Message_Box(
							array(
								'message_text'           => __( 'Could not delete row', 'wp-data-access' ),
								'message_type'           => 'error',
								'message_is_dismissible' => false,
							)
						);
						$msg->box();
					}
				}
			} elseif ( 'bulk-delete' === $this->current_action() ) {
				if ( ! isset( $_REQUEST['bulk-selected'] ) ) { // input var okay.
					$msg = new WPDA_Message_Box(
						array(
							'message_text' => __( 'Nothing to delete', 'wp-data-access' ),
						)
					);
					$msg->box();

					return;
				}

				// Check if delete is allowed.
				$wp_nonce_action = 'wpda-delete-{$this->table_name}';
				$wp_nonce        = isset( $_REQUEST['_wpnonce2'] ) ? sanitize_text_field( wp_unslash( $_REQUEST['_wpnonce2'] ) ) : ''; // input var okay.
				if ( ! wp_verify_nonce( $wp_nonce, $wp_nonce_action ) ) {
					die( __( 'ERROR: Not authorized', 'wp-data-access' ) ); // phpcs:ignore WordPress.Security.EscapeOutput
				}

				$bulk_rows = $_REQUEST['bulk-selected']; // phpcs:ignore WordPress.Security.ValidatedSanitizedInput
				//phpcs:ignore - 8.1 proof
				$no_rows   = count(  ( array ) $bulk_rows ); // # rows to be deleted.

				$rows_to_be_deleted = array(); // Gonna hold rows to be deleted.
				for ( $i = 0; $i < $no_rows; $i ++ ) {
					// Write "json" to named array. Need to strip slashes twice. Once for the normal conversion
					// and once extra for the pre-conversion of double quotes in method column_cb().
					$row_object = json_decode( stripslashes( stripslashes( $bulk_rows[ $i ] ) ), true );

					// Check if key is available.
					if ( ! isset( $row_object['csv_id'] ) ) {
						wp_die( __( 'ERROR: Invalid URL [missing primary key values]', 'wp-data-access' ) ); // phpcs:ignore WordPress.Security.EscapeOutput
					}

					// Save key.
					$rows_to_be_deleted[ $i ] = $row_object['csv_id'];
				}

				// Looks like everything is there. Delete records from table...
				$rows_successfully_deleted = 0; // Number of rows successfully deleted.
				$rows_with_errors         = 0; // Number of rows that could not be deleted.
				for ( $i = 0; $i < $no_rows; $i ++ ) {
					// Delete CSV file and data.
					$row = WPDA_CSV_Uploads_Model::query( $rows_to_be_deleted[ $i ] );
					if ( is_array( $row ) && 1 === count( $row ) ) {//phpcs:ignore - 8.1 proof
						// Silently delete file.
						if ( isset( $row[0]->csv_real_file_name ) ) {
							unlink( WPDA_CSV_Import::get_plugin_upload_dir() . $row[0]->csv_real_file_name );
						}

						// Delete record.
						$next_row_to_be_deleted['csv_id'] = $rows_to_be_deleted[ $i ];
						if ( $this->delete_row( $next_row_to_be_deleted ) ) {
							$rows_successfully_deleted++;
						} else {
							$rows_with_errors++;
						}
					}
				}

				// Inform user about the results of the operation.
				$message = '';

				if ( 1 === $rows_successfully_deleted ) {
					$message = __( 'CSV files deleted', 'wp-data-access' );
				} elseif ( $rows_successfully_deleted > 1 ) {
					$message = "$rows_successfully_deleted " . __( 'CSV files deleted', 'wp-data-access' );
				}

				if ( '' !== $message ) {
					$msg = new WPDA_Message_Box(
						array(
							'message_text' => $message,
						)
					);
					$msg->box();
				}

				$message = '';

				if ( $rows_with_errors > 0 ) {
					$message = __( 'Not all CSV files have been deleted', 'wp-data-access' );
				}

				if ( '' !== $message ) {
					$msg = new WPDA_Message_Box(
						array(
							'message_text'           => $message,
							'message_type'           => 'error',
							'message_is_dismissible' => false,
						)
					);
					$msg->box();
				}
			} else {
				parent::process_bulk_action();
			}
		}

		/**
		 * Get column labels
		 *
		 * @return array
		 */
		public static function column_headers_labels() {
			return array(
				'csv_id'             => __( 'ID', 'wp-data-access' ),
				'csv_name'           => __( 'Import Name', 'wp-data-access' ),
				'csv_real_file_name' => __( 'Local file Name', 'wp-data-access' ),
				'csv_orig_file_name' => __( 'File Name', 'wp-data-access' ),
				'csv_timestamp'      => __( 'Timestamp', 'wp-data-access' ),
				'csv_mapping'        => __( 'Mapping', 'wp-data-access' ),
			);
		}

	}

}
