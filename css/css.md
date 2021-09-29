# CSS.

---

## Style Loader Webpack setup

**Style loader injects CSS into the DOM**

** this is a Continuation from SCSS SETUP**

1. Install style loader

```terminal
$ npm install style-loader
```

2. Include style loader in webpack setup

**webpack.config.js**

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
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
};
```

3. Install mini-css-extract-plugin

```terminal
$ npm install -D mini-css-extract-plugin
```

4. Setup mini-css inside webpack config

**\*webpack.config**

```js
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

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
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'main.css',
    }),
  ],
};
```

**NOTE** - Don't forget to include the css file in your index.html

---

## PostCSS

**A tool for transforming CSS with JavaScript**

1. Install

```terminal
$ npm install postcss-loader -D
```

2. Add 2 webpack

**webpack.config.js**

```js
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

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
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader', //add to css rules
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'main.css',
    }),
  ],
  watch: true,
};
```

3. Install autoprefixer for PostCss

**Autoprefixer installs missing vendors for css for older browsers**

```terminal
$ npm install autoprefixer -D
```

1. Create postcss.config.js and add autoprefixer plugin

**postcss.config.js**

```js
module.exports = {
  plugins: {
    autoprefixer: {},
  },
};
```

2. Setup browser supports

**package.json**

```json
"browserslist": [
    ">1%",
    "last 2 versions"
  ]
```
