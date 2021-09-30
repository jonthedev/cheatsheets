# GIT

---

# CONFIG

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

## Create new branch

```terminal
$ git branch <branch-name>
```

## Switch branch

```terminal
$ git switch <branch-name>
```

## Create Branch + Switch branch

```terminal
$ git switch -c <branch-name>
```

## Create branch + checkout (_OLD_)

```terminal
$ git checkout -b <new-branch-name>
```

## Create branch + checkout + track remote branch from origin

```terminal
$ git checkout -b <new-branch-name> origin/<remote-branch>
```

## Rename branch name / main (_You must be on the branch itself_);

```terminal
$ git branch -m <name>/ main
```

## rename

## Delete branch

```terminal
$ git branch -d <branch-name>
```

---

# MERGE

---

## Fast Forward Merge

```terminal
$ git merge <branch-name>
```

---

# REMOTE ORIGIN

---

**NOTE** You MUST be on the branch you want to merge into. For example If you are on master, and you have a branch called servant, then '**git merge servant**' will merge the servant branch into master.

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

# COMMITS

---

## Git Log (List all commits)

```terminal
$ git log

//PRESS ':q' to exit
```

## Git Log (List all commits on oneline)

```terminal
$ git log --oneline
```

## Ammend last commit (**Note**: Only works for last commit)

**NOTE** - If you forget to add a file to the last commit, first stage/add that file and then run the following command.

```terminal
$ git commit --amend
```

## Checkout specific commit

```terminal
$ git checkout <commit-id>
```

---

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
