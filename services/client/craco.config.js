const TerserPlugin = require('terser-webpack-plugin')
const backendUrl =
  process.env.NODE_ENV === 'development'
    ? 'http://backend:8888'
    : 'http://localhost:8888'

// watch https://github.com/facebook/create-react-app/issues/8320
module.exports = {
  webpack: {
    configure: (webpackConfig) => ({
      ...webpackConfig,
      optimization: {
        ...webpackConfig.optimization,
        minimizer: [
          new TerserPlugin({
            terserOptions: {
              parse: {
                ecma: 8,
              },
              compress: {
                ecma: 5,
                warnings: false,
                comparisons: false,
                inline: 2,
                drop_console: true,
              },
              mangle: {
                safari10: true,
              },
              output: {
                ecma: 5,
                comments: false,
                ascii_only: true,
              },
            },
            parallel: 2,
            cache: true,
            sourceMap: false,
            extractComments: false,
          }),
        ],
      },
    }),
  },
  devServer: { // Needed so a href queries are passed to the backend
    proxy: {
      '/': {
        target: backendUrl,
        secure: false
      }
    }
  }
}
