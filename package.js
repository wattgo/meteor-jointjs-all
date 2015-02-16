Package.describe({
  name: 'mxmxmx:jointjs-all',
  version: '0.9.3',
  summary: 'Meteor Package for JointJS 0.9.3 (+ Plugins)',
  git: 'https://github.com/wattgo/meteor-jointjs-all',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.3.1');
  api.use('backbone@0.9.2', 'client');
  api.use('stevezhu:lodash@1.0.2', 'client');
  api.addFiles([ 'mxmxmx:jointjs-all.js', 'mxmxmx:jointjs-all.css' ], 'client');
});

Package.onTest(function(api) {
});
