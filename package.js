Package.describe({
  summary: " Stylus along with Jeet, Rupture, Axis and Autoprefixer! ",
  version: "0.1.0",
  git: " https://github.com/jsnoble1/meteor-multi-styl "
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.3.1');
  api.addFiles('jnoble:multi-styl.js');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('jnoble:multi-styl');
  api.addFiles('jnoble:multi-styl-tests.js');
});
