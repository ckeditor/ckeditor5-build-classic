/**
 * @license Copyright (c) 2003-2019, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

// The editor creator to use.
import ClassicEditorBase from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';

import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import CKFinder from '@ckeditor/ckeditor5-ckfinder/src/ckfinder';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import Indent from '@ckeditor/ckeditor5-indent/src/indent';
import List from '@ckeditor/ckeditor5-list/src/list';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice';

import WordCount from '@ckeditor/ckeditor5-word-count/src/wordcount';
import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment';
import RemoveFormat from '@ckeditor/ckeditor5-remove-format/src/removeformat';
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline';
import Strikethrough from '@ckeditor/ckeditor5-basic-styles/src/strikethrough';
import Subscript from '@ckeditor/ckeditor5-basic-styles/src/subscript';
import Superscript from '@ckeditor/ckeditor5-basic-styles/src/superscript';

import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview';
import InsertInfoBlockIcon from '@ckeditor/ckeditor5-core/theme/icons/object-center.svg';

export default class ClassicEditor extends ClassicEditorBase { }

class InsertInfoBlock extends Plugin {
	init() {
		const editor = this.editor;

		editor.ui.componentFactory.add( 'insertInfoBlock', locale => {
			const view = new ButtonView( locale );

			view.set({
				label: 'Insert info block',
				icon: InsertInfoBlockIcon,
				tooltip: true
			});

			view.on( 'execute', () => {
				editor.execute( 'input', { text: '[!type your info text here!]' });
			});

			return view;
		});
	}
}

// Plugins to include in the build.
ClassicEditor.builtinPlugins = [
	Essentials,
	Autoformat,
	Bold,
	Italic,
	CKFinder,
	Heading,
	Indent,
	List,
	Paragraph,
	PasteFromOffice,
	WordCount,

	Alignment,
	RemoveFormat,
	Underline,
	Strikethrough,
	Subscript,
	Superscript,

	InsertInfoBlock
];

// Editor configuration.
ClassicEditor.defaultConfig = {
	toolbar: {
		items: [
			'bold',
			'italic',
			'underline',
			'strikethrough',
			'subscript',
			'superscript',
			'removeFormat',
			'|',
			'heading',
			'bulletedList',
			'numberedList',
			'indent',
			'outdent',
			'|',
			'undo',
			'redo',
			'alignment',
			'insertInfoBlock'
		]
	},
	// This value must be kept in sync with the language defined in webpack.config.js.
	language: 'en',
	placeholder: 'Type here...'
};
