# SCSS.

---

## Basic Setup.

1. Install sass inside root directory

```terminal
$ npm install sass --save-dev
```

2. Watch and compile scss

```terminal
$ sass --watch src/scss:dist/css
```

---

## Webpack Setup.

**NOTE** Please refer to the CSS loader documentation after this setup.

1. Install **'node-sass' 'sass-loader' 'css-loader'** in **'package.json'**

```terminal
$ npm install node-sass sass-loader css-loader -D
```

**node-sass**

      - Will take care of compiling the sass code into css code.

**sass-loader**

        - Tells webpack where we will be loading our sass code.

**css-loader**

        - Tells webpack how to handle css code when it encounters it.

2. Set Rules in webpack configuration

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
        test: /\.scss$/,
        use: ['css-loader', 'sass-loader'],
      },
    ],
  },
};
```

---

## Gulp Setup.

1. Inside root of project initialise package.json

```terminal
$npm init -y
```

2. Install gulp & gulp-sass & Sass

```terminal
$npm install gulp gulp-sass sass --save-dev
```

**NOTE**

- gulp - Task runner, this will run our compilation tasks.

- gulp-sass - sass plugin for gulp which will compile sass.

- sass - gulp sass plugin uses this under the hood.

3. Create **gulpfile.js** in root directory.

```js
const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));

//compile our styles
function buildStyles() {
  return src('scss/**/*.scss').pipe(sass()).pipe(dest('css'));
}

//watch for changes
function watchTask() {
  watch(['scss/**/*.scss'], buildStyles);
}

//run these functions
exports.default = series(buildStyles, watchTask);
```

4. create a script command in **package.json** for gulp and then run it inside the terminal for example

```json
{
  "scripts": {
    "gulp": "gulp"
  }
}
```

**Command Line**

```terminal
$ npm run gulp
```
