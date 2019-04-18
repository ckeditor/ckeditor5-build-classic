/**
 * @license Copyright (c) 2003-2019, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */

'use strict';

/* eslint-env node */

const path = require( 'path' );
const webpack = require( 'webpack' );
const { bundler, styles } = require( '@ckeditor/ckeditor5-dev-utils' );

const glob = require( 'glob' );

const postCSSConfig = styles.getPostCssConfig( {
	themeImporter: {
		themePath: require.resolve( '@ckeditor/ckeditor5-theme-lark' )
	},
	minify: false
} );

postCSSConfig.plugins.push(
	require( 'postcss-custom-properties' )( {
		importFrom: glob.sync( './../../**/theme/**/*.css' )
	} )
);

module.exports = {
	devtool: 'source-map',
	performance: { hints: false },

	entry: [
		require.resolve( '@babel/polyfill' ),
		require.resolve( 'unorm' ),
		require.resolve( './src/ie11-polyfills.js' ),
		require.resolve( 'regenerator-runtime/runtime.js' ),
		path.resolve( __dirname, 'src', 'ckeditor.js' ),
	],

	output: {
		// The name under which the editor will be exported.
		library: 'ClassicEditor',

		path: path.resolve( __dirname, 'build' ),
		filename: 'ckeditor.js',
		libraryTarget: 'umd',
		libraryExport: 'default'
	},

	optimization: {
		minimizer: []
	},

	plugins: [
		new webpack.BannerPlugin( {
			banner: bundler.getLicenseBanner(),
			raw: true
		} )
	],

	module: {
		rules: [
			{
				test: /\.svg$/,
				use: [ 'raw-loader' ]
			},
			{
				test: /ckeditor5-[^/\\]+[/\\].*\.js$/,
				use: [
					{
						loader: 'babel-loader',
						options: {
							presets: [
								[
									'@babel/preset-env', {
										debug: true
									}
								]
							],
							plugins: [
								[
									'@babel/plugin-transform-modules-commonjs', {
										strictMode: false
									}
								]
							]
						}
					}
				]
			},
			{
				test: /\.js$/,
				use: [
					{
						loader: require.resolve( './src/remove-strict.js' )
					}
				]
			},
			{
				test: /\.css$/,
				use: [
					{
						loader: 'style-loader',
						options: {
							singleton: true
						}
					},
					{
						loader: 'postcss-loader',
						options: postCSSConfig
					}
				]
			}
		]
	}
};
