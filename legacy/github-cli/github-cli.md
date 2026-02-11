# Github Cli

---

## Setup Commands

- Show list of commands

```terminal
$ gh
```

- Authorize user

```terminal
$ gh auth login
```

- Set VS Code as default text editor

```terminal
$ gh config set editor "code --wait"
```

- Get editor

```terminal
$ gh config get editor
```

- Get Git protocol

```terminal
$ gh config get git_protocol
```

- Set Git protocol

```terminal
gh config set git_protocol ssh
```

---

## REPO COMMANDS

- Create Repo

```terminal
gh repo create <repo-name>
```

- Show remote branch

```terminal
git remote -v
```

- Clone repo

```terminal
$gh repo clone <organisation-name>/<repo-name>
```

**NOTE** When using the command above it's a good idea to fork the repo if it is not owned by you so you can push/pull changes.

CD into the cloned repo and then you can run the following command...

- Fork repo

```terminal
$ gh repo fork
```

- Fork repo without cloning

```terminal
$ gh repo fork <organisation-name>/<repo-name>
```
