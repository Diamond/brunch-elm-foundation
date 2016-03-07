module.exports = {
  files: {
    javascripts: {
      joinTo: {
        'vendor.js': /^vendor/,
        'app.js': /^app/
      },
      order: {
        before: ['vendor/jquery.min.js', 'vendor/foundation.min.js']
      }
    },
    stylesheets: {
      joinTo: 'app.css'
    }
  },
  conventions: {
    ignored: [/elm-stuff/]
  },
  plugins: {
    babel: { presets: ['es2015'] },
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
      mainModules: ['Main.elm'],
      outputFolder: '../public/elm'
    }
  },
  paths: {
    watched: ['app', 'test', 'vendor', 'elm']
  },
  npm: {
    globals: {
      $: 'jquery',
      jQuery: 'jquery'
    }
  }
}
