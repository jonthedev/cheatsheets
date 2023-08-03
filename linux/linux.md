# Linux

---

## Check which shell you are in

```terminal
$ echo $SHELL
```

## Show shell path

```terminal
$ echo $PATH
```

## List all shells

```terminal
$ ls -l /bin/*sh
```

## Change shells

```terminal
$ chsh -s <path-to-shell>
$ chsh -s /bin/bash
```

## Make nested folder structure

```terminal
$ mkdir -p <folder-name>/<folder-name>/<folder-name>
```

## locate command

```terminal
$ which <command-name>
```

---

# USING REGEX PATTERNS / WILDCARDS

## Find all

```terminal
$ *<pattern>
$ *D //example
```

## Match one place

```terminal
$ ?<pattern>
$ ?.txt //example
$ file?.txt //example
```

## Match 2 places

```terminal
$ ??<pattern>
$ ??.txt //example
```

## Find all

```terminal
$ *<pattern>
```

## find within range

```terminal
$ ls file[pattern].txt
$ ls file[0-9].txt //example
$ ls file[0-9][0-9].txt //example
$ ls file[A-Z].txt //example
$ ls file[0-9][A-Z][A-Z].txt //example
$ ls file[0-9abc].txt //example
```
