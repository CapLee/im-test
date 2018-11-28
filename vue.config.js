module.exports = {
	devServer: {
		proxy: {
			'/': {
				target: 'http://im.fengpinnet.com',
				changeOrigin: true,
			}
		}
	}
};
