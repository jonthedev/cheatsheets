# HOMEBREW

## update

Fetches the newest version of Homebrew and updates the package definitions (formulae).

```terminal
$ brew update
```

## upgrade

Upgrades all outdated command-line packages (formulae) and graphical applications (casks) to their latest versions.

```terminal
$ brew upgrade
```

## cleanup

Removes old versions of installed software and clears out local cache files to save space.

```terminal
$ brew cleanup
```

## Show list of formulae

```terminal
$ brew list
```

## Install a package

```terminal
$ brew install <formula>
$ brew install neovim
```

`nvim --version` checks the install. `nvim` is the binary.

## uninstall formulae

```terminal
$ brew [rm | remove | uninstall ] $FORMULA
```
