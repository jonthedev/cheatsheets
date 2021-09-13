# SCSS

---

## Basic Setup

1. Install sass inside root directory

```terminal
$ npm install sass --save-dev
```

2. Watch and compile scss

```terminal
$ sass --watch src/scss:dist/css
```

## Gulp Setup

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
