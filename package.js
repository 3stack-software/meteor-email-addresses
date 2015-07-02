Package.describe({
  name: "3stack:email-addresses",
  version: "2.0.2",
  summary: 'https://github.com/FogCreek/email-addresses',
  git: 'https://github.com/3stack-software/meteor-email-addresses',
  documentation: 'README.md'
});

Npm.depends({
  "email-addresses": "2.0.1"
});

Package.onUse(function(api){
  api.export('emailAddresses');
  api.use('cosmos:browserify@0.4.0');
  api.addFiles([
    'email-addresses.browserify.js'
  ]);
});
