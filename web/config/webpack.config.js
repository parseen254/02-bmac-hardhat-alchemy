/** @returns {import('webpack').Configuration} Webpack Configuration */
const webpack = require('webpack')

module.exports = (config, { mode }) => {
  if (mode === 'development') {
    // Add dev plugin
  }

  // See https://github.com/WalletConnect/walletconnect-monorepo/issues/584
  config.resolve.fallback = {
    os: require.resolve(`os-browserify/browser`),
    https: require.resolve(`https-browserify`),
    http: require.resolve(`stream-http`),
    stream: require.resolve(`stream-browserify`),
    util: require.resolve(`util/`),
    url: require.resolve(`url/`),
    assert: require.resolve(`assert/`),
    crypto: require.resolve(`crypto-browserify`),
  }
  config.plugins.push(
    new webpack.ProvidePlugin({
      process: 'process/browser.js',
      Buffer: ['buffer', 'Buffer'],
    })
  )

  return config
}
