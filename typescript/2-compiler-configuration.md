# Compiler & Configuration

---

## Setup Project

- At the root of your project enter the following command

```terminal
$ tsc --init
```

## Watch mode

The following command will watch for changes in your typescript files and compile them automatically on save

```terminal
$ tsc --w / --watch
```

## Excluding & Including files

**NOTE** By default node modules is excluded

### Single file

**tsconfig.json**

```json
{
    ...,
    "exclude": ["file-name"],
    "include": ["file-name"]
}
```

### Specific file extensions using wildcard '\*'

**tsconfig.json**

#### All files

```json
{
    ...,
    "exclude": ["*.dev.ts"],
    "include": ["*.dev.ts*"]
}
```

#### All files in ANY folder

```json
{
    ...,
    "exclude": ["**/*.dev.ts"],
    "include": ["**/*.dev.ts"],
}
```

## Stop emitting files on compilation errors

Set to `true` to stop TypeScript compiling **ANY** files if an error is found.

```js
{
    ...,
    "noEmitOnError": true
}
```

## No implicit any

Enable error reporting for expressions and declarations with an implied 'any' type.

```json
{
  "noImplicitAny": false
}
```
