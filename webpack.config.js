
var HtmlWebpackPlugin = require('html-webpack-plugin');
var AutoPrefixer = require('autoprefixer');
var path = require('path');

module.exports = {
	entry: {
		'app': './src/app.ts'
	},
	output: {
		path: './www/',
		filename: '[name].js',
		sourceMapFilename: '[name].map.js'
	},
	target: 'web',
	debug: true,
	devtool: 'source-map',
	resolve: {
		extensions: ['', '.webpack.js', '.web.js', '.ts', '.js'],
		alias: {
			config: path.join(__dirname, 'src', 'modules', 'config', process.env.NODE_ENV + '.ts')
		}
	},
	plugins: [
		new HtmlWebpackPlugin({ template: './src/index.html' })
	],
	module: {
		loaders: [
			{ test: /\.html$/, loader: 'html' },
			{ test: /\.ts$/, loader: 'babel?presets[]=es2015!ts!tslint' },
			{ test: /\.css$/, loader: 'style!css!postcss' },
			{ test: /\.scss$/, loader: 'style!css!postcss!sass' },
			{ test: /\.(jpg|jpeg|png|gif|svg)$/i, loader:'file' },
			{ test   : /\.(otf|eot|svg|ttf|woff|woff2)/i, loader : 'file' }
		],
		postcss: [
			AutoPrefixer({browsers: [
					'last 2 Chrome versions', 'last 2 Firefox versions',
					'Explorer >= 10', 'last 2 Edge versions',
					'last 2 iOS versions', 'last 2 Safari versions'
			]})
		]
	}
};
