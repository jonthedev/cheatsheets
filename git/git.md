# GIT

---

## Show git config list

```terminal
$ git config --list
```

## Git config user name

```terminal
$ git config --global user.name "<your-name>"
```

## Git config user email

```terminal
$ git config --global user.email "<your-email>"
```

## Delete config entry

- All entries

```terminal
$ git config --global --unset-all <config-entry>
```

- Singular entry

```terminal
$ git config --global --unset <config-entry>
```

## Git config default branch on init

```terminal
$ git config --global init.defaultBranch <name>
```

## Set VS Code as default editor

```terminal
$ git config --global core.editor "code --wait"
```

## Revert Back To GNU nano (or default)

```terminal
$ git config --global --unset core.editor
```

---

## Stage files

```terminal
$ git add <file-name>
```

## Stage all files

```terminal
$ git add .
```

## Unstage files

```terminal
$ git rm --cached <file-name>
```

## Git Stash

```terminal
$ git stash
```

## Check Stashed Files

```terminal
$ git stash list
```

---

## Create new branch

**NOTE**: A master/main branch is only created after **first** commit

```terminal
$ git branch <new-branch-name>
```

## List all available branches

```terminal
$ git branch -a
```

## Create branch -> checkout

```terminal
$ git checkout -b <new-branch-name>
```

## Create branch -> checkout -> track remote branch from origin

```terminal
$ git checkout -b <new-branch-name> origin/<remote-branch>
```

## Rename branch name

```terminal
$ git branch -m <name>
```

## Delete branch

```terminal
$ git branch -d <branch-name>
```

---

## Add remote origin

```terminal
$ git remote add origin <github-url>
```

## Remove a remote origin in Git

```terminal
$ git remote rm origin
```

## See current origin url

```terminal
$ git remote -v
```

---

## List all commits

```terminal
$ git log
```

## Checkout specific commit

```terminal
$ git checkout <commit-id>
```
