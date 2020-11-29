const mix = require('laravel-mix')

mix.setPublicPath('./dist')
	.browserSync({
		ignored: 'node_modules/**/*',
		injectChanges: true,
		proxy: "http://root-css-core.local",
		files: [ 'dist/**/*.css', '**/*.html'  ],
	})
	// https://webpack.js.org/configuration/resolve/
	.webpackConfig({
		resolve: {
			modules: [
				'node_modules',
			],
		},
	})
	.options({
		clearConsole: false,
		processCssUrls: false,
		terser: {
			extractComments: false,
		},
	})
	 // Compile project assets
	.sass('src/core.scss', '')
	// .sourceMaps()
