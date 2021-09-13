# TYPESCRIPT

---

## Installing TypeScript Globally

```terminal
$ npm install typescript -g
```

## Project Setup

1. Install TypeScript Locally

```terminal
$ npm i typescript
```

2. Setup tsconfig.json in root directory

```json
{
  "compilerOptions": {
    "outDir": "./lib",
    "allowJs": true,
    "target": "es5",
    "noImplicitReturns": true,
    "sourceMap": true
  },
  // "include": ["./src/**/*"] // include all typescript files
  "include": ["./src/tut7.ts"] // include singular file
}
```

3. Compile and watch for changes

```terminal
npx tsc --watch
```
