# GITHUB

Git is the CLI and the object database. GitHub (or GitLab, Bitbucket) is a host: another remote with a website. `origin` is only a nickname.

One GitHub **account**, many **machines**. Each machine gets its **own** SSH key. Do not copy a private key between boxes. Label keys on GitHub so you can revoke one machine.

`gh` is the GitHub CLI (create repos, auth). It is not `git`. Command list: `github-cli/github-cli.md`.

---

# First-time setup on a machine

1. `user.name` / `user.email` in Git (see `git.md` CONFIG).
2. Install `gh` **once** on that machine (Homebrew on macOS, Webi or the distro package on Linux). Do not install it two ways on the same box.
3. `gh auth login` — GitHub.com, login with a web browser, **SSH** for Git (unless a lesson or host forces HTTPS).
4. New machine: generate an Ed25519 key and add the **public** key in GitHub → Settings → SSH keys. Skip upload if `ssh -T git@github.com` already greets you.
5. `gh auth status` and `ssh -T git@github.com`.

`gh auth login` “use SSH” does not rewrite remotes that already exist. `git remote -v` still shows HTTPS until you change that URL or clone with SSH.

Headless / SSH-only box: clipboard copy and “open the browser” will fail. That is expected. Leave `gh` running, open [https://github.com/login/device](https://github.com/login/device) on a machine that **has** a browser, paste the one-time code. Do not paste a PAT unless device flow fails.

A course playground can use HTTPS for tests. Real repos on this account stay SSH.

---

# Install GitHub CLI

```terminal
$ brew install gh
$ curl -sS https://webi.sh/gh | sh
```

After Webi, new shell (or source its env). `gh` is often under `~/.local/bin`.

```terminal
$ which gh
$ gh --version
```

---

# Authenticate gh

```terminal
$ gh auth login
$ gh auth status
$ gh config get git_protocol
$ gh config set git_protocol ssh
```

`git_protocol` is only `gh`’s default for **new** clone/create URLs. Existing remotes stay HTTPS or SSH until you change them. If a lesson made you pick HTTPS, switch back with `gh config set git_protocol ssh` when you are done. Real repos that already use `git@github.com:...` are unaffected.

---

# Check for existing SSH keys

```terminal
$ ls -al ~/.ssh
```

# Generate a new key (this machine only)

```terminal
$ ssh-keygen -t ed25519 -C "<machine-label>"
```

Press enter for the default path. Use a passphrase if you want. Add the `.pub` file in the GitHub UI, or let `gh auth login` upload it.

# Add key to the agent

```terminal
$ ssh-add ~/.ssh/id_ed25519
$ ssh-add ~/.ssh/id_rsa
```

# Print / copy public key

macOS `pbcopy`. Elsewhere print it and paste into GitHub.

```terminal
$ cat ~/.ssh/id_ed25519.pub
$ pbcopy < ~/.ssh/id_ed25519.pub
```

# Test SSH to GitHub

```terminal
$ ssh -T git@github.com
```

Success looks like: authenticated, but GitHub does not provide shell access.

# Check known hosts

```terminal
$ ssh-keygen -l -f ~/.ssh/known_hosts
```

---

# Add collaborator

1. Click on the Settings tab in the right corner of the GitHub page.
2. Manage Access option under the Settings tab. On the Manage Access page, you will see an Invite collaborator link
3. You can Invite collaborators by any of the following options.
   1. Username
   2. Full Name
   3. Email
