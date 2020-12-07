# ⚡ vite-babel-plugin

A plugin for [vite](https://github.com/vitejs/vite) using babel.

## Features

* Support babel as vite plugin


## quick start

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

