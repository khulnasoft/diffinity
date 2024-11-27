const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin");
const webpackDevConfig = require('./webpack.dev.js');

module.exports = (mode) => {
	return {
		...webpackDevConfig,
		mode: 'production',
		entry: {
			diffinity: './src/diffinity.js',
			'diffinity.min': "./src/diffinity.js",
		},
		output: {
			...webpackDevConfig.output,
			path: path.join(__dirname, 'lib'),
			filename: './[name].js',
			library: {
				name: 'diffinity',
				type: 'umd',
			}
		},
		optimization: {
			minimize: true,
			minimizer: [
				new TerserPlugin({
					test: /\.min\.js$/,
					parallel: true
				})
			]
		},
		plugins: [
			new CopyWebpackPlugin({
				patterns: [{
					from: 'src/diffinity.css',
					to: 'diffinity.css',
					toType: 'file'
				}]
			})
		]
	};
}
