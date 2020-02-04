/**
 * @license Copyright (c) 2003-2019, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

// The editor creator to use.
import ClassicEditorBase from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';

import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import UploadAdapter from '@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter';
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import Strikethrough from '@ckeditor/ckeditor5-basic-styles/src/strikethrough';
import Code from '@ckeditor/ckeditor5-basic-styles/src/code';
import Subscript from '@ckeditor/ckeditor5-basic-styles/src/subscript';
import Superscript from '@ckeditor/ckeditor5-basic-styles/src/superscript';
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote';
import CKFinder from '@ckeditor/ckeditor5-ckfinder/src/ckfinder';
import EasyImage from '@ckeditor/ckeditor5-easy-image/src/easyimage';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import Image from '@ckeditor/ckeditor5-image/src/image';
import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption';
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar';
import Indent from '@ckeditor/ckeditor5-indent/src/indent';
import Link from '@ckeditor/ckeditor5-link/src/link';
import List from '@ckeditor/ckeditor5-list/src/list';
import MediaEmbed from '@ckeditor/ckeditor5-media-embed/src/mediaembed';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice';
import Table from '@ckeditor/ckeditor5-table/src/table';
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar';
import TextTransformation from '@ckeditor/ckeditor5-typing/src/texttransformation';
import CodeBlock from '@ckeditor/ckeditor5-code-block/src/codeblock';
import Highlight from '@ckeditor/ckeditor5-highlight/src/highlight';
import HorizontalLine from '@ckeditor/ckeditor5-horizontal-line/src/horizontalline';
import RemoveFormat from '@ckeditor/ckeditor5-remove-format/src/removeformat';
import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment';
import ImageViaUrlEmbed from '@ckeditor/image-via-url/src/imageviaurlembed';

export default class ClassicEditor extends ClassicEditorBase {}

// Plugins to include in the build.
ClassicEditor.builtinPlugins = [
	Essentials,
	UploadAdapter,
	Autoformat,
	Bold,
	Italic,
	Strikethrough,
	Code,
	Subscript,
	Superscript,
	BlockQuote,
	CKFinder,
	EasyImage,
	Heading,
	Image,
	ImageCaption,
	ImageStyle,
	ImageToolbar,
	Indent,
	Link,
	List,
	MediaEmbed,
	Paragraph,
	PasteFromOffice,
	Table,
	TableToolbar,
	TextTransformation,
	CodeBlock,
	Highlight,
	HorizontalLine,
	RemoveFormat,
	Alignment,
	ImageViaUrlEmbed
];

// Editor configuration.
ClassicEditor.defaultConfig = {
	toolbar: {
		items: [
			'removeFormat',
			'heading',
			'|',
			'bold',
			'italic',
			'link',
			'alignment',
			'|',
			'bulletedList',
			'numberedList',
			'indent',
			'outdent',
			'HorizontalLine',
			'/',
			'blockQuote',
			'|',
			'insertTable',
			'imageViaUrlEmbed',
			'mediaEmbed',
			'undo',
			'redo',
			'|',
			'subscript',
			'superscript',
			'highlight',
			'code',
			'codeBlock',
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
	codeBlock: {
		languages: [ {
			language: 'plaintext',
			label: 'Plain text'
		}, // The default language.
		{
			language: 'c',
			label: 'C',
			class: 'language-c'
		},
		{
			language: 'css',
			label: 'CSS',
			class: 'language-css'
		},
		{
			language: 'xml',
			label: 'HTML/XML',
			class: 'language-xml'
		},
		{
			language: 'javascript',
			label: 'JavaScript',
			class: 'language-javascript'
		},
		{
			language: 'php',
			label: 'PHP',
			class: 'language-php'
		},
		{
			language: 'python',
			label: 'Python',
			class: 'language-python'
		}
		]
	},
	highlight: {
		options: [ {
			model: 'yellowMarker',
			class: 'marker-yellow',
			title: 'Yellow Marker',
			color: '#fed541',
			type: 'marker'
		},
		{
			model: 'greenMarker',
			class: 'marker-green',
			title: 'Green marker',
			color: '#51e045',
			type: 'marker'
		},
		{
			model: 'pinkMarker',
			class: 'marker-pink',
			title: 'Pink marker',
			color: '#FF007A',
			type: 'marker'
		},
		{
			model: 'blueMarker',
			class: 'marker-blue',
			title: 'Blue marker',
			color: '#1FD7FF',
			type: 'marker'
		},

		]
	},
	// This value must be kept in sync with the language defined in webpack.config.js.
	language: 'en'
};
