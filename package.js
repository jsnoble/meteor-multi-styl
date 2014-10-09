Package.describe({
  summary: " Stylus along with Jeet, Rupture, Axis and Autoprefixer! ",
  version: "0.1.0",
  git: " https://github.com/jsnoble1/meteor-multi-styl "
});


Package._transitional_registerBuildPlugin({
  name: "compileStylus",
  use: [],
  sources: [
    'plugin/compile-stylus.js'
  ],
  npmDependencies: {
    "stylus": "0.49.1",
    "nib": "1.0.4",
    "autoprefixer-stylus": "0.3.0",
    "jeet": "6.1.2",
    "rupture": "0.4.0",
    "axis": "0.3.0"
  }
});