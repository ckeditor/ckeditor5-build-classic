/**
 * @license Copyright (c) 2003-2019, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */

// The editor creator to use.
import ClassicEditorBase from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';

import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote';
import Link from '@ckeditor/ckeditor5-link/src/link';
import List from '@ckeditor/ckeditor5-list/src/list';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice';

import './ckeditor.css';
import CodeBlock from '@mcfreddie777/ckeditor5-code-block/src/codeblock';

export default class UserVoiceEditor extends ClassicEditorBase { }

// Plugins to include in the build.
UserVoiceEditor.builtinPlugins = [
	Essentials,
	Autoformat,
	Bold,
	CodeBlock,
	Italic,
	BlockQuote,
	Link,
	List,
	Paragraph,
	PasteFromOffice,
	Heading,
];

// Editor configuration.
UserVoiceEditor.defaultConfig = {
	toolbar: {
		items: [
			'heading',
			'|',
			'bold',
			'italic',
			'codeBlock',
			'link',
			'bulletedList',
			'numberedList',
		]
	},
	// This value must be kept in sync with the language defined in webpack.config.js.
	language: 'en'
};
