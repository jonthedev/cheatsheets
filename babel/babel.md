# Babel.

- Babel is a 3rd party module that allows you to write newerJavaScript and transpile it into regular js that the browser can understand.

## Install babel.

```terminal
$ npm install -D @babel/core @babel/preset-env babel-loader
```

**babel/preset-env**

- Contains a list of rules for converting JavaScript syntax into older syntax.

## Webpack configuration.

**In the root directory create a 'webpack.config.js'**

```js
module.exports = {
  entry: './index.js',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/dist',
  },
  module: {
    rules: [
      {
        test: /\.js%/,
        exclude: /(node_modules)/,
        use: 'babel-loader',
      },
    ],
  },
};
```

## Babel configuration.

**In the root directory create a '.babelrc' file**
