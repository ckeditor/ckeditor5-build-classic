/**
 * @license Copyright (c) 2003-2018, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */

import ClassicEditorBase from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';
import EssentialsPlugin from '@ckeditor/ckeditor5-essentials/src/essentials';
import UploadAdapterPlugin from '@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter';
import AutoformatPlugin from '@ckeditor/ckeditor5-autoformat/src/autoformat';
import BoldPlugin from '@ckeditor/ckeditor5-basic-styles/src/bold';
import ItalicPlugin from '@ckeditor/ckeditor5-basic-styles/src/italic';
import BlockQuotePlugin from '@ckeditor/ckeditor5-block-quote/src/blockquote';
import EasyImagePlugin from '@ckeditor/ckeditor5-easy-image/src/easyimage';
import HeadingPlugin from '@ckeditor/ckeditor5-heading/src/heading';
import ImagePlugin from '@ckeditor/ckeditor5-image/src/image';
import ImageCaptionPlugin from '@ckeditor/ckeditor5-image/src/imagecaption';
import ImageStylePlugin from '@ckeditor/ckeditor5-image/src/imagestyle';
import ImageToolbarPlugin from '@ckeditor/ckeditor5-image/src/imagetoolbar';
import ImageUploadPlugin from '@ckeditor/ckeditor5-image/src/imageupload';
import LinkPlugin from '@ckeditor/ckeditor5-link/src/link';
import ListPlugin from '@ckeditor/ckeditor5-list/src/list';
import ParagraphPlugin from '@ckeditor/ckeditor5-paragraph/src/paragraph';

export default class ClassicEditor extends ClassicEditorBase {}

// Plugins which will be automatically loaded when creating an instance of this editor build.
// Note: New plugins should not be added to an existing editor build. They should be added at this stage.
ClassicEditor.defaultPlugins = [
	EssentialsPlugin,
	UploadAdapterPlugin,
	AutoformatPlugin,
	BoldPlugin,
	ItalicPlugin,
	BlockQuotePlugin,
	EasyImagePlugin,
	HeadingPlugin,
	ImagePlugin,
	ImageCaptionPlugin,
	ImageStylePlugin,
	ImageToolbarPlugin,
	ImageUploadPlugin,
	LinkPlugin,
	ListPlugin,
	ParagraphPlugin
];

// The default configuration of this editor build.
// It can be overridden by passing your own options to the `create()` method.
//
// See all the configuration options:
// https://docs.ckeditor.com/ckeditor5/latest/api/module_core_editor_editorconfig-EditorConfig.html
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
	}
};
