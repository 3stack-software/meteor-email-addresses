Package.describe({
  name: "3stack:email-addresses",
  version: "2.0.1",
  summary: 'https://github.com/FogCreek/email-addresses',
  git: 'https://github.com/3stack-software/meteor-email-addresses',
  documentation: 'README.md'
});

Npm.depends({
  "email-addresses": "2.0.1"
});

Package.onUse(function(api){
  api.export('emailAddresses', 'client');
  api.addFiles([
    'module.js',
    '.npm/package/node_modules/email-addresses/lib/email-addresses.js',
    'global.js'
  ], 'client');
});
