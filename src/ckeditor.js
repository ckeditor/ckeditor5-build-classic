/**
 * @license Copyright (c) 2003-2018, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */

import ClassicEditorBase from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';
import EssentialsPlugin from '@ckeditor/ckeditor5-essentials/src/essentials';
import AutoformatPlugin from '@ckeditor/ckeditor5-autoformat/src/autoformat';
import BoldPlugin from '@ckeditor/ckeditor5-basic-styles/src/bold';
import ItalicPlugin from '@ckeditor/ckeditor5-basic-styles/src/italic';
import UnderlinePlugin from '@ckeditor/ckeditor5-basic-styles/src/underline';
import BlockquotePlugin from '@ckeditor/ckeditor5-block-quote/src/blockquote';
import HeadingPlugin from '@ckeditor/ckeditor5-heading/src/heading';
import ImagePlugin from '@ckeditor/ckeditor5-image/src/image';
import ImagecaptionPlugin from '@ckeditor/ckeditor5-image/src/imagecaption';
import ImagestylePlugin from '@ckeditor/ckeditor5-image/src/imagestyle';
import ImagetoolbarPlugin from '@ckeditor/ckeditor5-image/src/imagetoolbar';
import LinkPlugin from '@ckeditor/ckeditor5-link/src/link';
import ListPlugin from '@ckeditor/ckeditor5-list/src/list';
import ParagraphPlugin from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import TablePlugin from '@ckeditor/ckeditor5-table/src/table';
import TableToolbarPlugin from '@ckeditor/ckeditor5-table/src/tabletoolbar';

export default class ClassicEditor extends ClassicEditorBase {}

ClassicEditor.build = {
	plugins: [
		EssentialsPlugin,
		AutoformatPlugin,
		BoldPlugin,
		ItalicPlugin,
		UnderlinePlugin,
		BlockquotePlugin,
		HeadingPlugin,
		ImagePlugin,
		ImagecaptionPlugin,
		ImagestylePlugin,
		ImagetoolbarPlugin,
		LinkPlugin,
		ListPlugin,
		ParagraphPlugin,
		TablePlugin,
		TableToolbarPlugin
	],
	config: {
		fontSize: {
            options: [8, 9, 10, 11, 12, 14, 'default', 18, 20, 22, 24, 26, 28, 36, 48, 72]
        },
		fontFamily: {
            options: [
                'default',
                'Roboto, Open Sans, Lato, Arial, sans-serif',
                'Menlo, Ubuntu Mono, Courier New, Courier, monospace'
            ]
		},
		table: {
            toolbar: [ 'tableColumn', 'tableRow', 'mergeTableCells' ]
        },
		toolbar: {
			items: [
				'heading',
				'|',
				'bold',
				'italic',
				'underline',
				'link',
				'alignment',
				'|',
				'fontSize',
				'fontFamily',
				'|',
				'bulletedList',
				'numberedList',
				'blockQuote',
				'insertTable'
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
		language: 'fr'
	}
};
