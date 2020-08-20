# TAILWIND SETUP WITH CREATE REACT APP

1. Install into your project

```terminal
yarn add tailwindcss postcss-cli autoprefixer
```

2. Add tailwind components into **'/src/index.css'**

```css
/* /src/index.css */
@tailwind base;

@tailwind components;

@tailwind utilities;
```

3. Create a tailwind config file in root of project with the following command

```terminal
npx tailwindcss init
```

4. Create a 'postcss.config.js' in root directory

5. Inside 'postcss.config.js' add plugins setup

**postcss.config.js**

```js
module.exports = {
  plugins: [require("tailwindcss"), require("autoprefixer")],
};
```

6. Add scripts to build css to 'package.json'

```json
{
  "build:css": "postcss <entry-point> -o <exit-point>",
  "watch:css": "postcss <entry-point> -o <exit-point> -w"
}
```

7. Generate tailwind css

```terminal
yarn build:css
```

8. Generate css and start react app with changes

**package.json**

```json
"scripts": {
  "start": "yarn build:css && react-scripts start",
  "build": "yarn build:css && react-scripts build",
}
```
