<?php

/**

 * The base configuration for WordPress

 *

 * The wp-config.php creation script uses this file during the installation.

 * You don't have to use the web site, you can copy this file to "wp-config.php"

 * and fill in the values.

 *

 * This file contains the following configurations:

 *

 * * Database settings

 * * Secret keys

 * * Database table prefix

 * * ABSPATH

 *

 * @link https://wordpress.org/documentation/article/editing-wp-config-php/

 *

 * @package WordPress

 */


// ** Database settings - You can get this info from your web host ** //

/** The name of the database for WordPress */

define( 'DB_NAME', 'bitnami_wordpress' );


/** Database username */

define( 'DB_USER', 'bn_wordpress' );


/** Database password */

define( 'DB_PASSWORD', '6e74bc3124b7bb166e70fc778b3b224ab4c1c18dbd883917709faf494f55549f' );


/** Database hostname */

define( 'DB_HOST', '127.0.0.1:3306' );


/** Database charset to use in creating database tables. */

define( 'DB_CHARSET', 'utf8' );


/** The database collate type. Don't change this if in doubt. */

define( 'DB_COLLATE', '' );


/**#@+

 * Authentication unique keys and salts.

 *

 * Change these to different unique phrases! You can generate these using

 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.

 *

 * You can change these at any point in time to invalidate all existing cookies.

 * This will force all users to have to log in again.

 *

 * @since 2.6.0

 */

define( 'AUTH_KEY',         'MPq=!(`eSh0 (P!L;o-ah#65=X+e8+kp8UDJjn&XX</Qc]H_D=}|sC$JbfX-3O)4' );

define( 'SECURE_AUTH_KEY',  'EN4&lc=jC-=-Lp+1|W28![YIq..Z)x[=ZXNrRU9Nt(oREGP-LmIvw22qKOIb]cbS' );

define( 'LOGGED_IN_KEY',    '7@wDzM^8,o@Ui@X5kQ}f2s4b()yq`-+BZKGHvqCjV8Di|$`T7d^Ir`qjwp7Jl3CO' );

define( 'NONCE_KEY',        '0_SHS|}ls`g<ZZ0{2|!o6S%.R{fR24lbh>%G)>;L)ct<omLG/JT6c3OV%A)5~Vy9' );

define( 'AUTH_SALT',        'D-hBTlMytGvut(ba[oqH[?IB/O$!.Xx&r1lZBQYqKMH5.H5*>y}T:T;]IlPP<xh.' );

define( 'SECURE_AUTH_SALT', '+gOy99pzXfO`v/LsJMA<nG ;1RQJ#{ctQ`uCM[,bby`$_(n?. Ac2yo8O/Dy+wqR' );

define( 'LOGGED_IN_SALT',   'WMdz!#>y@adgZimZH]7~!o<)3u1EQH3$__7X .^*sL3IPAKV+fQRCq+|P%*`IST0' );

define( 'NONCE_SALT',       ',DD;Eq&4yxHZuU->1[gM.O=tSzu-IR;|B0i?Pc#0o!i{Vvpto.Sve%0$/ *e4:?N' );


/**#@-*/


/**

 * WordPress database table prefix.

 *

 * You can have multiple installations in one database if you give each

 * a unique prefix. Only numbers, letters, and underscores please!

 */

$table_prefix = 'wp_';


/**

 * For developers: WordPress debugging mode.

 *

 * Change this to true to enable the display of notices during development.

 * It is strongly recommended that plugin and theme developers use WP_DEBUG

 * in their development environments.

 *

 * For information on other constants that can be used for debugging,

 * visit the documentation.

 *

 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/

 */

define( 'WP_DEBUG', false );


/* Add any custom values between this line and the "stop editing" line. */




define( 'FS_METHOD', 'direct' );
/**
 * The WP_SITEURL and WP_HOME options are configured to access from any hostname or IP address.
 * If you want to access only from an specific domain, you can modify them. For example:
 *  define('WP_HOME','http://example.com');
 *  define('WP_SITEURL','http://example.com');
 *
 */
if ( defined( 'WP_CLI' ) ) {
	$_SERVER['HTTP_HOST'] = '127.0.0.1';
}

define( 'WP_HOME', 'http://' . $_SERVER['HTTP_HOST'] . '/' );
define( 'WP_SITEURL', 'http://' . $_SERVER['HTTP_HOST'] . '/' );
define( 'WP_AUTO_UPDATE_CORE', 'minor' );
/* That's all, stop editing! Happy publishing. */


/** Absolute path to the WordPress directory. */

if ( ! defined( 'ABSPATH' ) ) {

	define( 'ABSPATH', __DIR__ . '/' );

}


/** Sets up WordPress vars and included files. */

require_once ABSPATH . 'wp-settings.php';

/**
 * Disable pingback.ping xmlrpc method to prevent WordPress from participating in DDoS attacks
 * More info at: https://docs.bitnami.com/general/apps/wordpress/troubleshooting/xmlrpc-and-pingback/
 */
if ( !defined( 'WP_CLI' ) ) {
	// remove x-pingback HTTP header
	add_filter("wp_headers", function($headers) {
		unset($headers["X-Pingback"]);
		return $headers;
	});
	// disable pingbacks
	add_filter( "xmlrpc_methods", function( $methods ) {
		unset( $methods["pingback.ping"] );
		return $methods;
	});
}
