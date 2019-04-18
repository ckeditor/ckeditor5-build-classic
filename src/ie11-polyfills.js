/* eslint-disable */

( function( arr ) {
	arr.forEach(function ( item ) {
		if ( item.hasOwnProperty( 'remove' ) ) {
			return;
		}

		Object.defineProperty( item, 'remove', {
			configurable: true,
			enumerable: true,
			writable: true,
			value: function remove() {
				if ( this.parentNode !== null ) {
					this.parentNode.removeChild( this );
				}
			}
		} );
	});
} )( [ Element.prototype, CharacterData.prototype, DocumentType.prototype ] );

( function() {
	if ( typeof MouseEvent !== 'function' ) {
		window.MouseEvent = function ( type, dict ) {
			var event = document.createEvent( 'MouseEvents' );
			dict = dict || {};

			event.initMouseEvent(
				type,
				( typeof dict.bubbles == 'undefined' ) ? true : !!dict.bubbles,
				( typeof dict.cancelable == 'undefined' ) ? false : !!dict.cancelable,
				dict.view || window,
				dict.detail | 0,
				dict.screenX | 0,
				dict.screenY | 0,
				dict.clientX | 0,
				dict.clientY | 0,
				!!dict.ctrlKey,
				!!dict.altKey,
				!!dict.shiftKey,
				!!dict.metaKey,
				dict.button | 0,
				dict.relatedTarget || null
			);

			return event;
		}
	}
} )();

( function () {
	if ( typeof Event !== 'function' ) {
		window.Event = function( type ) {
			var event = document.createEvent( 'Event' );

			event.initEvent( type, true, true );

			return event;
		}
	}
} )();

( function() {
	if ( window.NodeList && !NodeList.prototype.forEach ) {
		NodeList.prototype.forEach = Array.prototype.forEach;
	}
} )();

(function() {
	var _getBoundingClientRect = Element.prototype.getBoundingClientRect;

	Object.defineProperty(Element.prototype, 'getBoundingClientRect', {
		configurable: true,
		enumerable: true,
		writable: true,
		value: function getBoundingClientRect() {
			if ( this.parentNode !== null ) {
				return _getBoundingClientRect.apply( this );
			} else {
				return {
					bottom: 0, top: 0, left: 0, right: 0, width: 0, height: 0
				};
			}
		}
	});
})();

( function() {
	function polyfill( coord ) {
		Object.defineProperty( Window.prototype, 'scroll' + coord, {
			configurable: true,
			enumerable: true,
			writable: true,
			value: function getBoundingClientRect() {
				return this[ 'page' + coord + 'Offset' ];
			}
		} );
	}

	polyfill( 'X' );
	polyfill( 'Y' );
} )();
