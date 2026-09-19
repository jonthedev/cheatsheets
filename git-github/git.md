# GIT

---

# CONFIG

Most specific wins if the same key exists in more than one file:

1. `worktree` — `.git/config.worktree` (rare)
2. `--local` — `.git/config` (this repo). Omit `--global` and you are here
3. `--global` — `~/.gitconfig` (this user, all repos). Username/email live here
4. `system` — `/etc/gitconfig` (every user on the machine, rare)

`--global` is the usual one. `--local` for repo-only. You will almost never touch system or worktree.

Git 2.46+ uses `git config set` / `git config get` / `git config list` / `git config unset`. Older `git config --global user.name` and `git config --list` still work.

---

## Edit git config file

```terminal
$ git config --global --edit
```

## Show git config list

```terminal
$ git config --list
$ git config list --local
$ git config list --global
```

## Show local config file

```terminal
$ cat .git/config
```

## Set a value

Git 2.46+ `set` creates or updates. `--append` adds another value on the **same** key (Git allows duplicate keys; a Python dict would not). Older form still works (no `set` subcommand).

```terminal
$ git config set --global user.name "<your-name>"
$ git config set --global user.email "<your-email>"
$ git config set --local <section>.<key> "<value>"
$ git config set --append --local <section>.<key> "<value>"
$ git config --global user.name "<your-name>"
$ git config --global user.email "<your-email>"
```

## Get a single value

`section.key`. Add `--local` or `--global` if the same key exists in both.

```terminal
$ git config get user.name
$ git config get --local <section>.<key>
```

## Delete a value or section

`unset` removes **one** instance of `section.key`. `unset --all` removes every instance of that key. Neither deletes the whole `[section]` — that is `remove-section`. Built-in sections like `core` stay.

```terminal
$ git config unset --local <section>.<key>
$ git config unset --all --local <section>.<key>
$ git config --global --unset <section>.<key>
$ git config --global --unset-all <section>.<key>
$ git config remove-section --local <section>
$ git config --remove-section --local <section>
```

## Git config default branch on init

```terminal
$ git config --global init.defaultBranch <name>
```

## Git commit / merge editor

Terminal Git (merge message, rebase -i, commit without `-m`) uses `core.editor`. Neovim blocks until `:wq`, so no `--wait`. VS Code needs `--wait` or Git continues before you save.

```terminal
$ git config set --global core.editor nvim
$ git config set --global core.editor "code --wait"
$ git config unset --global core.editor
```

---

# FETCHING & PULLING

---

## Git fetch (fetch all changes / fetch specific branch changes)

Downloads objects and remote-tracking refs (`origin/<branch>`). Does not move your current branch or change files in the working tree.

```terminal
$ git fetch <remote>
$ git fetch <remote> <branch>
```

## Git pull

**Just like with git merge, it matters WHERE we run this command from. Whatever branch we run it from is where the changes will be merged into.**

**'git pull origin main' would fetch the latest information from the origin's main branch and merge those changes into our current branch.**

```terminal
$ git pull <remote> <branch>
```

## Pull request conflicts workflow.

```terminal
$ git fetch origin/<questionable-branch>. //fetch questionable changes from remote branch
$ git switch <questionable-branch> // switch to the branch with those changes, this will update automatically
$ git merge <clean-branch> // merge clean branch

//fix changes!

$ git switch <clean-branch>
$ git merge <questionable-branch> //now clean with no conflicts
$ push origin <clean/branch>
```

---

# STAGING.

---

## Stage files

```terminal
$ git add <file-name>
```

## Stage all files

```terminal
$ git add .
```

## Stage all files & commit

```terminal
$ git commit -a -m "<commit-message>"
```

## Unstage files

```terminal
$ git reset HEAD <file-name>
$ git rm --cached <file-name>
$ git restore --staged <file-name>
```

---

# BRANCHING

---

## Create new branch

**NOTE**: A master/main branch is only created after **first** commit

```terminal
$ git branch <new-branch-name>
```

## List all branches

```terminal
$ git branch -a
```

## List all branches with commit message & number

```terminal
$ git branch -v
```

## Switch branch

```terminal
$ git switch <branch-name>
```

## Create Branch + Switch branch

Start point is current `HEAD` unless you pass a commit (or other ref).

```terminal
$ git switch -c <branch-name>
$ git switch -c <branch-name> <commit-hash>
```

## Create branch + checkout (_OLD_)

```terminal
$ git checkout -b <new-branch-name>
```

## Create branch + checkout + track remote branch from origin

```terminal
$ git checkout -b <new-branch-name> origin/<remote-branch>
```

## Rename a branch

On the branch: `-m` and the new name. From anywhere: old name then new name.

```terminal
$ git branch -m <new-name>
$ git branch -m <old-name> <new-name>
```

## Delete branch

```terminal
$ git branch -d <branch-name>
```

---

# MERGE

---

## Fast Forward Merge

You MUST be on the branch you want to merge into. For example If you are on master, and you have a branch called servant, then '**git merge servant**' will merge the servant branch into master.

```terminal
$ git merge <branch-name>
```

## Disable Fast Forward Merge

If you do not want a fast-forward merge, use `--no-ff` so history keeps a merge commit.

```terminal
$ git merge --no-ff <branch-name>
```

## Merge a remote-tracking branch

Same merge, other side is `origin/<branch>` instead of a local name. Be on the branch you want to update.

```terminal
$ git merge origin/<branch>
```

## Rebase (replay commits onto another branch)

`onto` is the **floor**: that branch does not move. You must be on the branch whose commits you want replayed. They are copied with **new hashes** on top of the floor.

While on `feature/bugfix-1`: `git rebase main` puts that branch's unique commits on top of `main`. `main` stays still.

Do **not** rebase a public/shared branch (like `main`) onto something else. Rebase **your** private branch onto `main`.

```terminal
$ git rebase <branch>
$ git rebase main
```

## Rebase Pull (REMOTE)

Use this when pulling changes from a remote branch if you want to preserve your work on the current branch

```terminal
$ git pull --rebase origin <branch-name>
```

## Abort merge

```terminal
$ git merge --abort
```

---

# REMOTE

---

## Add new remote

`<url>` can be HTTPS, SSH, or a path to another repo on disk.

```terminal
$ git remote add <name> <url>
```

## Remove a remote

```terminal
$ git remote rm origin
```

## Rename remote

```terminal
$ git remote rename <old> <new>
```

## See current remote url

```terminal
$ git remote -v
```

## View remote branches

```terminal
git branch -r
```

## Git clone

**Retrieves all files associated with the repo and clone it to your local machine**

```terminal
$ git clone <url>
```

---

# COMMITS

---

## Git Log (List all commits)

Each commit is a snapshot plus a unique hash. The first 7 characters of the hash are enough to refer to it.

If the history is long, this opens a pager (`less`). `q` quits. `j` / `k` scroll. That is not Vim `:q`.

```terminal
$ git log
```

## Git Log (limit, no pager)

`-n` caps how many commits. `--no-pager` prints in the terminal instead of opening the pager (scripts / Boot.dev CLI).

```terminal
$ git log -n 10
$ git --no-pager log -n 10
```

## Git Log (List all commits on oneline)

`origin/<branch>` is a remote-tracking ref (last fetch). It does not check those files out.

```terminal
$ git log --oneline
$ git log --oneline --decorate=full
$ git log --oneline origin/<branch>
```

## Git Log (oneline and graph)

`--all` includes every branch, not only the one you are on. `--parents` prints each commit’s parent hashes (a merge commit has two).

```terminal
$ git log --oneline --graph
$ git log --oneline --graph --all
$ git log --oneline --graph --parents
$ git log --oneline --decorate --graph --parents
```

## Git Log (decorate)

A ref is a pointer to a commit. Branches are refs. `--decorate` is on by default (`short`). `full` shows `refs/heads/<branch>`. `no` hides names.

```terminal
$ git log --decorate=full
$ git log --decorate=no
```

## Ammend last commit (**Note**: Only works for last commit)

**NOTE** - If you forget to add a file to the last commit, first stage/add that file and then run the following command.

```terminal
$ git commit --amend (fix your message)
git commit --amend --no-edit (leave your last message as it)
```

---

# PUSHING

---

## Git push

```terminal
$ git push <orgin> <url>
```

## Git push (remote branches)

\*\*In some cases you might want to push work from a local branch to a different remote. Use this command for that scenario.

```terminal
$ git push <remote> <local-branch>:<remote-branch>
$ git push origin pancake:waffle
```

---

# GIT RESET & GIT REVERT

---

- **GIT RESET** actually moves the branch pointer backwards, eliminating commits.
- **GIT REVERT** instead creates a brand new commit which reverses/undos the changes from a commit. Because it results in a new commit, you will be prompted to enter a commit message.

## Git Reset (SOFT) (Undo commit, keep staged)

Moves the branch pointer. Staging and files on disk stay as they were. Same as: you made the edits, `git add`, never committed.

```terminal
$ git reset --soft <commit-hash>
```

## Git Reset (MIXED, default) (Undo commit, unstage, keep files)

Moves the branch pointer and resets the index. Files on disk keep the changes, unstaged. `git reset <commit-hash>` with no flag is mixed.

```terminal
$ git reset <commit-hash>
$ git reset --mixed <commit-hash>
```

## Git reset (HARD) (Undo commit and discard changes)

Branch, staging, and files on disk all match that commit. Uncommitted work after that point is gone. Do not use on commits other people already pulled.

```terminal
$ git reset --hard <commit-hash>
```

## Git revert (Undo last commit & loose changes -> make new commit)

```terminal
$ git revert <commit-hash>
```

---

# UNDOING CHANGES & TIME TRAVELLING

---

## Checkout specific commit (Detach Head)

```terminal
$ git checkout <commit-id>
```

**Use git switch to go to back to a specific branch, HEAD will be at the tip of that branch**

## Reference commits relative to HEAD

```terminal
$ git checkout HEAD-<number-of-commits-behind-head>
```

## Go back to last branch

```terminal
$ git switch -c
```

## Discard changes (HEAD as default source)

```terminal
$ git restore <file-name>
$ git checkout HEAD <file-name>
$ git checkout -- <file-name>
```

## Discard changes (alternate source)

**The command below means that we will unmodify changes from 1 commit behind head**

**BEWARE YOU WILL LOOSE ALL YOUR CURRENT CHANGES**

```terminal
$ git restore --source HEAD~1/<commit-hash> <file-name>
```

# DIFF

---

## Git Diff Header Explanation

**@@ -25, 7 +25,7 @@**: Showing 7 lines from line 25 of the files being compared.

## Git Diff

Shows UNSTAGED changes.

```terminal
$ git diff
```

## Git Diff Head

**Shows UNSTAGED & STAGED changes**

```terminal
$ git diff HEAD
```

## Git Diff (Stage only)

**Shows STAGED changes**

```terminal
$ git diff --staged / git diff --cached
```

## Git Diff (Specific file only)

```terminal
$ git diff HEAD <file-name>
$ git diff --staged <file-name>
```

## Git Diff (Compare branches)

**Will list the changes between the tips of branch1 and branch2**

```terminal
$ git diff <branch-1>..<branch-2>
$ git diff <branch-1> <branch-2>
```

## Git Diff (Compare commits)

**Will list the changes between commits using the commit hashes**

```terminal
$ git diff <commit-hash-1>..<commit-hash-2>
$ git diff <commit-hash-1> <commit-hash-2>
```

---

# STASHING

**Git provides an easy way of stashing uncommitted changes so that we can return to them later, without having to make unnecessary commits.**

---

## Git Stash

**Helps you save changes that you are not yet ready to commit. You can stash changes and then come back to them later.**

**Running git stash will take all uncommitted changes (staged and unstaged) and stash them, reverting the changes in your working copy.**

```terminal
$ git stash / git stash save
$ git stash save "Your message"
```

## Git Stash Untracked files

**Useful if you are not sure if you want to add untracked files to the git index, this command will stash untracked files along with other work.**

```terminal
$ git stash -u
```

## Git stash pop

**Removes the most recently stashed changes in your stash and re-applies them to your working copy.**

```terminal
$ git stash pop
```

## Git Stash apply

**Use this to apply whatever is stashed away, without removing it from the stash. This can be useful if you want to apply stashed changes to multiple branches.**

```terminal
$ git stash apply
```

## Apply stashed files to new branch

```terminal
$ git stash branch <branch-name>
```

## Git stash list

**View everything in your stash list**

```terminal
$ git stash list
```

```md
stash@{0}: WIP on rainbow: e34f7ca removed background color
stash@{1}: WIP on rainbow: e34f7ca removed background color
stash@{2}: WIP on rainbow: e34f7ca removed background color
stash@{3}: WIP on goodbye: 8edfb56 create index.html and app.css
```

## Git stash apply stash@{id}

**Apply specific stashes**

```terminal
$ git stash apply stash@{id}
```

## Git stash drop

**Delete a particular stash**

```terminal
$ git stash drop stash@{id}
```

## Git stash clear

**Clear the whole stash list**

```terminal
$ git stash clear
```

---

# TAGGING

# Create simple / lightweight tag

```terminal
$ git tag <tagName>
```

# Create annotated tags

```terminal
$ git tag -a v-1.0
```

# Show tag list

```terminal
$ git tag --list
```

# delete tag

```terminal
$ git tag --delete myTag
```

# Update tag

```terminal
$ git tag -a v-0.8-alpha -f ad3fdb4
```

# Tag with specific commit

```terminal
$ git tag -a <tag-name> <commit-hash>
```

# Remove tag on remote respo

```terminal
$ git push origin :<tag-name>
```

---

# MISC

---

## See what HEAD points to

```terminal
$ cat .git/HEAD
```

## Pretty-print a Git object

Readable contents of a commit (or other object) from its hash. Use this instead of `cat` / `xxd` on `.git/objects`. `-p` is pretty-print. First 7 characters of the hash are enough. `git log -1` shows the latest.

```terminal
$ git cat-file -p <hash>
$ git log -1
```
