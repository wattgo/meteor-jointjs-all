Package.describe({
  name: 'mxmxmx:jointjs-all',
  version: '0.9.3',
  // Brief, one-line summary of the package.
  summary: 'Meteor Package for JointJS 0.9.3 (+ Plugins)',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.3.1');
  api.use('backbone', 'client');
  api.use('stevezhu:lodash@1.0.2', 'client');
  api.addFiles([ 'mxmxmx:jointjs-all.js', 'mxmxmx:jointjs-all.css' ], 'client');
});

Package.onTest(function(api) {
});
