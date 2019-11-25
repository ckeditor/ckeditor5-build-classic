/**
 * @license Copyright (c) 2003-2019, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

// The editor creator to use.
import ClassicEditorBase from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';

import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline';
import Code from '@ckeditor/ckeditor5-basic-styles/src/code';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import List from '@ckeditor/ckeditor5-list/src/list';
import Link from '@ckeditor/ckeditor5-link/src/link';
import Blockquote from '@ckeditor/ckeditor5-block-quote/src/blockquote';
import Autoformater from '@ckeditor/ckeditor5-autoformat/src/autoformat';
import GFMDataProcessor from '@ckeditor/ckeditor5-markdown-gfm/src/gfmdataprocessor';

export default class RenkuMarkdownEditor extends ClassicEditorBase {}

function Markdown( editor ) {
	editor.data.processor = new GFMDataProcessor();
}

// Plugins to include in the build.
RenkuMarkdownEditor.builtinPlugins = [
	Autoformater,
	Markdown,
	Essentials,
	Paragraph,
	Heading,
	Bold, Italic, Underline, Code,
	Link,
	List,
	Blockquote
];

// Editor configuration.
RenkuMarkdownEditor.defaultConfig = {
	toolbar: {
		items: [
			'heading', '|',
			'bold', 'italic', 'underline', '|',
			'blockQuote', 'code', 'link', '|',
			'bulletedList', 'numberedList', 'todoList', '|',
			'undo', 'redo'
		]
	},
	language: 'en'
};
