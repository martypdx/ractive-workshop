/*

	ractive-events-hover
	====================

	Version 0.1.1.

	The hover event provides a convenient way to trigger behaviours
	when the user's mouse enters or leaves an element.

	The `event` object passed to handlers has a `hover` property which
	is `true` on mouseenter, `false` on mouseleave. (The mouseenter and
	mouseleave events are proprietary Internet Explorer events, which
	behave slightly differently to mouseover and mouseout. This plugin
	simulates those events in other browsers.

	Be aware that heavy use of hover interactions is generally considered
	an anti-pattern, since it excludes mobile and tablet users.

	==========================

	Troubleshooting: If you're using a module system in your app (AMD or
	something more nodey) then you may need to change the paths below,
	where it says `require( 'ractive' )` or `define([ 'ractive' ]...)`.

	==========================

	Usage: Include this file on your page below Ractive, e.g:

	    <script src='lib/ractive.js'></script>
	    <script src='lib/ractive-events-hover.js'></script>

	Or, if you're using a module loader, require this module:

	    // requiring the plugin will 'activate' it - no need to use
	    // the return value
	    require( 'ractive-events-hover' );

	Add a hover event in the normal fashion:

	    <div on-hover='foo'>hover over me!</div>

	Then add a handler:

	    ractive.on( 'foo', function ( event ) {
	      alert( event.hover ); // true on enter, false on leave
	    });

*/

(function ( global, factory ) {

	'use strict';

	// Common JS (i.e. browserify) environment
	if ( typeof module !== 'undefined' && module.exports && typeof require === 'function' ) {
		factory( require( 'ractive' ) );
	}

	// AMD?
	else if ( typeof define === 'function' && define.amd ) {
		define([ 'ractive' ], factory );
	}

	// browser global
	else if ( global.Ractive ) {
		factory( global.Ractive );
	}

	else {
		throw new Error( 'Could not find Ractive! It must be loaded before the Ractive-events-hover plugin' );
	}

}( typeof window !== 'undefined' ? window : this, function ( Ractive ) {

	'use strict';

	var hover, testDiv;

	if ( typeof document === 'undefined' ) {
		// lolz
		return;
	}

	testDiv = document.createElement( 'div' );

	// If we're in IE, we can use native mouseenter/mouseleave events
	if ( testDiv.onmouseenter !== undefined ) {
		hover = function ( node, fire ) {
			var mouseenterHandler, mouseleaveHandler;

			mouseenterHandler = function ( event ) {
				fire({
					node: node,
					original: event,
					hover: true
				});
			};

			mouseleaveHandler = function ( event ) {
				fire({
					node: node,
					original: event,
					hover: false
				});
			};

			node.addEventListener( 'mouseenter', mouseenterHandler, false );
			node.addEventListener( 'mouseleave', mouseleaveHandler, false );

			return {
				teardown: function () {
					node.removeEventListener( 'mouseenter', mouseenterHandler, false );
					node.removeEventListener( 'mouseleave', mouseleaveHandler, false );
				}
			};
		};
	}

	else {
		hover = function ( node, fire ) {
			var mouseoverHandler, mouseoutHandler;

			mouseoverHandler = function ( event ) {
				if ( node.contains( event.relatedTarget ) ) {
					return;
				}

				fire({
					node: node,
					original: event,
					hover: true
				});
			};

			mouseoutHandler = function ( event ) {
				if ( node.contains( event.relatedTarget ) ) {
					return;
				}

				fire({
					node: node,
					original: event,
					hover: false
				});
			};

			node.addEventListener( 'mouseover', mouseoverHandler, false );
			node.addEventListener( 'mouseout', mouseoutHandler, false );

			return {
				teardown: function () {
					node.removeEventListener( 'mouseover', mouseoverHandler, false );
					node.removeEventListener( 'mouseout', mouseoutHandler, false );
				}
			};
		};
	}

	Ractive.events.hover = hover;

}));
