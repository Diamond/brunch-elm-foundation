module.exports = {
  files: {
    javascripts: {
      joinTo: {
        'vendor.js': /^(?!app)/,
        'app.js': /^app/
      }
    },
    stylesheets: {
      joinTo: 'app.css'
    }
  },
  plugins: {
    babel: { presets: ['es2015'], ignore: [/elm/] },
    sass: {
      options: {
        includePaths: [
          'node_modules/foundation-sites/scss',
          'node_modules/motion-ui/src'
        ]
      }
    },
    elmBrunch: {
      elmFolder: 'elm',
      mainModules: ['elm/App.elm']
    }
  },
  paths: {
    'watched': ['elm']
  },
  npm: {
    globals: {
      $: 'jquery',
      jQuery: 'jquery'
    }
  }
}
