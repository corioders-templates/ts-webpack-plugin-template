import webpack from 'webpack';

export class WebpackPlugin {
	readonly name = 'WebpackPlugin';
	constructor() {}
	apply(compiler: webpack.Compiler): void {}
}
