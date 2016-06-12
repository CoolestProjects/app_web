
var HtmlWebpackPlugin = require('html-webpack-plugin');
var AutoPrefixer = require('autoprefixer');
var path = require('path');

var env;

if (!process.env.NODE_ENV || process.env.NODE_ENV !== 'snapshot' || process.env.NODE_ENV !== 'production') {
	env = 'snapshot';
} else { env = process.env.NODE_ENV; }

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
			config: path.join(__dirname, 'src', 'modules', 'config', env + '.ts')
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
			{ test: /\.(jpg|jpeg|png|gif|svg|ico)$/i, loader:'file?name=img/[name].[ext]' },
			{ test: /\.(otf|eot|svg|ttf|woff|woff2)/i, loader : 'file?name=font/[name]/[name].[ext]' }
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
