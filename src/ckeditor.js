/**
 * @license Copyright (c) 2003-2019, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */

// The editor creator to use.
import ClassicEditorBase from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';

import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import UploadAdapter from '@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter';
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote';
import CKFinder from '@ckeditor/ckeditor5-ckfinder/src/ckfinder';
import EasyImage from '@ckeditor/ckeditor5-easy-image/src/easyimage';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import Image from '@ckeditor/ckeditor5-image/src/image';
import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption';
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar';
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload';
import Link from '@ckeditor/ckeditor5-link/src/link';
import List from '@ckeditor/ckeditor5-list/src/list';
import MediaEmbed from '@ckeditor/ckeditor5-media-embed/src/mediaembed';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice';
import Table from '@ckeditor/ckeditor5-table/src/table';
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar';

export default class ClassicEditor extends ClassicEditorBase {}

import Plugin from '@ckeditor/ckeditor5-core/src/plugin';

class TextTransform extends Plugin {
	constructor( editor ) {
		super( editor );

		editor.config.define( 'textTransform', {
			triggers: [ ' ', '.', ',' ],
			transformations: {
				'CKEditor': [ 'CKEditor', 'Ckeditor', 'cKEditor', 'CK Editor' ]
			}
		} );
	}

	init() {
		const editor = this.editor;

		const configuredTransformations = this._getTransformationsFromConfig();

		// Array with transformations to check for.
		const transformations = Array.from( configuredTransformations.keys() );

		// Characters that triggers transformations.
		const triggers = editor.config.get( 'textTransform.triggers' );

		editor.model.document.on( 'change', ( evt, batch ) => {
			// Skip transparent batches - might came from collaboration.
			if ( batch.type == 'transparent' ) {
				return;
			}

			const selection = editor.model.document.selection;

			// Do nothing if selection is not collapsed.
			if ( !selection.isCollapsed ) {
				return;
			}

			const changes = Array.from( editor.model.document.differ.getChanges() );
			const entry = changes[ 0 ];

			// Typing is represented by only a single change.
			if ( changes.length != 1 || entry.type !== 'insert' || entry.name != '$text' || entry.length != 1 ) {
				return;
			}

			const block = selection.focus.parent;
			const blockText = getText( block );

			const lastCharacter = blockText.slice( selection.focus.offset - 1, selection.focus.offset );

			// Only check text after trigger characters.
			if ( !triggers.includes( lastCharacter ) ) {
				return;
			}

			// The change is always associated with one trigger character.
			const textToTransformEnd = selection.focus.offset - 1;
			const textBeforeInput = blockText.slice( 0, textToTransformEnd );

			// Find if there is anything to transform.
			const textToTransform = transformations.find( key => textBeforeInput.endsWith( key ) );

			// Nothing found - end.
			if ( !textToTransform ) {
				return;
			}

			// Enqueue change to create an Undo step: this way user can always revert change with CTRL+Z.
			editor.model.enqueueChange( writer => {
				const transformTo = configuredTransformations.get( textToTransform );

				const start = writer.createPositionAt( block, textToTransformEnd - textToTransform.length );
				const end = writer.createPositionAt( block, textToTransformEnd );

				const range = writer.createRange( start, end );

				editor.model.insertContent( writer.createText( transformTo ), range );
			} );
		} );
	}

	_getTransformationsFromConfig() {
		const config = this.editor.config.get( 'textTransform.transformations' );
		const configuredTransformations = new Map();

		Object.keys( config ).forEach( key => {
			const alternations = config[ key ];

			if ( Array.isArray( alternations ) ) {
				alternations.forEach( alt => configuredTransformations.set( alt, key ) );
			} else {
				configuredTransformations.set( alternations, key );
			}
		} );

		return configuredTransformations;
	}
}

function getText( element ) {
	return Array.from( element.getChildren() ).reduce( ( a, b ) => a + b.data, '' );
}

// Plugins to include in the build.
ClassicEditor.builtinPlugins = [
	Essentials,
	UploadAdapter,
	Autoformat,
	Bold,
	Italic,
	BlockQuote,
	CKFinder,
	EasyImage,
	Heading,
	Image,
	ImageCaption,
	ImageStyle,
	ImageToolbar,
	ImageUpload,
	Link,
	List,
	MediaEmbed,
	Paragraph,
	PasteFromOffice,
	Table,
	TableToolbar,
	TextTransform
];

// Editor configuration.
ClassicEditor.defaultConfig = {
	toolbar: {
		items: [
			'heading',
			'|',
			'bold',
			'italic',
			'link',
			'bulletedList',
			'numberedList',
			'imageUpload',
			'blockQuote',
			'insertTable',
			'mediaEmbed',
			'undo',
			'redo'
		]
	},
	image: {
		toolbar: [
			'imageStyle:full',
			'imageStyle:side',
			'|',
			'imageTextAlternative'
		]
	},
	table: {
		contentToolbar: [
			'tableColumn',
			'tableRow',
			'mergeTableCells'
		]
	},
	// This value must be kept in sync with the language defined in webpack.config.js.
	language: 'en'
};
