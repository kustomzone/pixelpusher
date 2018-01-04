module.exports = () => {
  return {
    plugins: [
      require('postcss-import')(),
      require('postcss-url')({
        url: 'inline',
      }),
      require('precss')(),
      require('autoprefixer')({
        browsers: ['last 2 versions', 'IE > 8']
      }),
      require('lost'),
      require('postcss-reporter')({
        clearMessages: true
      })
    ]
  }
}
