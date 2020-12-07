# ⚡ vite-babel-plugin


  <a href="https://www.npmjs.org/package/vite-babel-plugin">
    <img src="https://img.shields.io/npm/v/vite-babel-plugin.svg">
  </a>
<!--  <a href="https://npmcharts.com/compare/vite-babel-plugin?minimal=true">
    <img src="http://img.shields.io/npm/dm/vite-babel-plugin.svg">
  </a> -->
  <br>

A plugin for [vite](https://github.com/vitejs/vite) using babel  plugin.

## Features

* Support babel as vite plugin. (`demo` current)


## Quick start

```bash
$ yarn add -D vite-babel-plugin
```

then in `vite.config.js`

```js
import babel from "vite-babel-plugin";

export default {
  plugins: [
    babel(),
  ],
};
```

then `vite-babel-plugin` will Will read `.babelrc` in the root directory of your project.

## License

[MIT](https://opensource.org/licenses/MIT)

## Support

If this project helped you, you might as well just point a little star, thanks. 
