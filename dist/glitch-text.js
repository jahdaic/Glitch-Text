// beautify
// transfer to dist
// create min version
// generate documentation

// Default Values
var DEBUG = true;
var options = {};

// ⌿⌇⎔⍦⌓⌇

if( typeof jQuery !== 'undefined' ) {
	(function ( $ ) {
		$.fn.glitch = function( overrides ) {
			return this.each(function() {
				glitch(this, overrides);
			});
		};
	}( jQuery ));
}

/**
 * Initializes the plugin
 * @param {Object} element - An HTMl element
 * @param {Object} overrides - List of options used to initialize the plugin
 */
function glitch( element, overrides ) {

	var defaultOptions = {
		duration: 2000,
		speed: 300,
		type: 'substitute',
		rate: 0.1, // 25%
		chars: [ 'ϟ', '!', '/', '$' ],
	};

	// Override default options
	for ( var option in overrides ) {
		defaultOptions[ option ] = overrides[ option ];
	}

	options = defaultOptions;

	if ( DEBUG ) console.log( 'options', options );

	// Apply the glitch
	startGlitch( element );

	// If we have a duration, we stop it after a set amount of time
	if ( options.duration > 0 ) {
		setTimeout( stopGlitch, options.duration, element );
	}
}

/**
 * Applies the selected glitch
 * @param {Object}  element - An HTML object
 * @param {boolean} child   - Whether the element is a child of the original
 */
function startGlitch( element, child ) {

	var children = element.childNodes;

	for ( var i = 0, nodeLength = children.length; i < nodeLength; i++ ) {

		// If we have a child element, we recursively glitch it
		if ( children[ i ].nodeName != '#text' ) {
			startGlitch( children[ i ], true );
			continue;
		}

		// Exclude whitespace nodes
		if ( !children[ i ].textContent.trim() ) continue;

		// Set or get original text
		var original = ( element.dataset.text ) ? JSON.parse( element.dataset.text ) : [];

		if ( original[i] )
			text = original[i];
		else
			text = original[i] = children[ i ].textContent;

		element.dataset.text = JSON.stringify( original );

		// Determine type of glitch to apply
		if ( options.type == 'substitute' )
			text = substitutionGlitch( text );

		// Update the text
		children[ i ].replaceWith( text );
	}

	if ( !child ) {
		element.dataset.timeout = setTimeout( startGlitch, options.speed, element, child );
	}
}

/**
 * Stops the glitch plugin
 * @param {Object} element - An HTML element
 */
function stopGlitch( element ) {

	if(DEBUG) console.log('Stopping', element, element.dataset.text, element.dataset.timeout);

	// We have nothing to do here
	if( !element.dataset.text ) return false;

	var children = element.childNodes;
	var original = JSON.parse( element.dataset.text );

	for ( var i = 0, nodeLength = children.length; i < nodeLength; i++ ) {

		// If we have a child element, we recursively stop it
		if ( children[ i ].nodeName != '#text' ) {
			stopGlitch( children[ i ] );
			continue;
		}

		// Exclude whitespace nodes
		if ( !children[ i ].textContent.trim() ) continue;

		// Stop the Loop
		if( element.dataset.timeout ) clearTimeout( element.dataset.timeout );

		// Reset to original text
		if ( original[i] ) children[ i ].replaceWith( original[i] );
	}

	delete element.dataset.text;
	delete element.dataset.timeout;
}

/**
 * Substitutes random letters in the text for other characters
 * @param   {string} text - The string to apply the glitch to
 * @returns {string}      - The new glitched string
 */
function substitutionGlitch( text ) {
	// Loop through randomizing characters
	for ( var j = 0, textLength = text.length; j < textLength; j++ ) {
		// Skip spaces
		if ( text[ j ] == ' ' ) continue;

		if ( Math.random() <= options.rate && text[ j ] != ' ' ) {
			text = replaceAt( text, j, getRandomElement( options.chars ) );
		}
	}

	return text;
}

/**
 * Shifts the position of letters
 */
function shiftGlitch() {
}

/**
 * Replaces a string character at a given position with another
 * @param   {string} str         - The original string to apply the change
 * @param   {int}    index       - The index of the character to replace
 * @param   {string} replacement - The character to place into the string
 * @returns {string}             - The new string
 */
function replaceAt( str, index, replacement ) {
	return str.substr( 0, index ) + replacement + str.substr( index + replacement.length );
}

/**
 * Gets a random item from an array
 * @param   {Array} list - The array to use
 * @returns {*}        - A random item from the array
 */
function getRandomElement( list ) {
	return list[ Math.floor( Math.random() * list.length ) ];
}
