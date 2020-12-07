# ⚡ vite-babel-plugin

A plugin for vite using babela [vite](https://github.com/vitejs/vite) plugin.

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

