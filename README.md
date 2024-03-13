# Test case for [#3178](https://github.com/11ty/eleventy/issues/3178)

Test case for issue [#3178](https://github.com/11ty/eleventy/issues/3178) of [Eleventy](https://www.11ty.dev/). 

## npm run bsync

`npm run bsync` loads the configuration file `browsersync.eleventy.config.js` which tries to swap back to Browsersync as per [documentation](https://www.11ty.dev/docs/dev-server/#swap-back-to-browsersync):

```javascript
eleventyConfig.setServerOptions({
   module: '@11ty/eleventy-server-browsersync',
});
```

This fails because

> Directory import '[…]' is not supported resolving ES modules imported from […]  
> Did you mean to import […]/@11ty/eleventy-server-browsersync/server.js?

## npm run custom

`npm run custom` loads the configuration file `custom.eleventy.config.js` which tries to load a custom server (`./lib/custom-server/`, only extends `EleventyDevServer`):

```javascript
eleventyConfig.setServerOptions({
   module: 'custom-server/server.js',
});
```

Without the trailing `/server.js`, the following error occurs (same as with Browsersync config):

> Directory import '[…]' is not supported resolving ES modules imported from […]  
> Did you mean to import […]/custom-server/server.js?

With `/server.js`, one of the following error occurs. In 3.0.0-alpha.5 it's:

> Unexpected token u in JSON at position 0

In 3.0.0-alpha.4 it's:

> "undefined" is not valid JSON

Eleventy seems to try to open and read `./node_modules/custom-server/server.js/package.json` instead of `./node_modules/custom-server/package.json`.