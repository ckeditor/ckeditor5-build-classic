/* eslint-disable */

module.exports = function( source, map ) {
	source = source.replace( /("|')use strict("|');/g, '' );

	this.callback( null, source, map );
};
