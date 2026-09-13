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

## Shell config

Runs on every new session. Hidden file in `~` (`ls -a ~`).

| Shell | File |
| --- | --- |
| zsh (Mac + Oh My Zsh) | `~/.zshrc` |
| bash | `~/.bashrc` |

```terminal
$ nano ~/.zshrc
$ vim ~/.zshrc
```

`export PATH=...` and aliases go here so they survive closing the terminal.

## Persist PATH

Append a **directory** (not the script file). Use an absolute path — relative PATH entries are looked up from *wherever you are now*.

```terminal
$ export PATH="$PATH:$HOME/worldbanc/private/bin"
$ . ~/.zshrc
$ . ~/.bashrc
```

Double quotes so `$PATH` and `$HOME` expand. `source` / `.` reloads the file without opening a new tab.

## Aliases

Shortcut for a command. Session only unless it’s in config.

```terminal
$ alias ll="ls -la"
$ alias                  # all aliases
$ alias reload           # one alias
$ unalias ll
```

Persist: `.zshrc` / `.bashrc`, or on the Mac `$ZSH_CUSTOM/aliases.zsh` (already has `reload="source ~/.zshrc"`).

## Make nested folder structure

```terminal
$ mkdir -p <folder-name>/<folder-name>/<folder-name>
```

## locate command

```terminal
$ which <command-name>
```

## Manual

Full docs for a command. Same pager as `less`.

```terminal
$ man man
$ man ls
$ man grep
```

`/` search · `n` next · `N` previous · `space` page down · `q` quit. `--help` is the short version.

## Symlink

Another **path** to the same file. Not a copy. Target first, then the new name.

```terminal
$ ln -s target_path link_path
$ ln -s documents/important.txt important.txt
$ ls -l important.txt
```

Delete the link, the file stays. Delete the file, the link breaks.

## Download a URL

`curl` is HTTP in the terminal (`fetch` in JS). `-L` follows redirects. `-o` writes a file instead of dumping the body to the screen.

```terminal
$ curl -L <url> -o <file>
$ curl -L https://github.com/bootdotdev/worldbanc/archive/refs/heads/main.zip -o worldbanc.zip
```

## Unzip

```terminal
$ unzip <file.zip>
$ unzip worldbanc.zip
```

## top

Live process list. Like Activity Monitor. Updates until `q`. Default sort is CPU.

Mac `top` (BSD) and Ubuntu `top` (GNU) are different programs. Boot.dev’s “press `O` then `mem`” is Linux. On a Mac, capital `O` is secondary sort (`secondary key [-pid]:`).

```terminal
$ top
$ top -o mem
$ q
```

While `top` is running:

| | Sort by memory | Sort by CPU |
| --- | --- | --- |
| Mac | lowercase `o`, type `mem`, Enter | `top` default, or `o` then `cpu` |
| Ubuntu | `M` | `P` |

## Interrupt (Ctrl+C)

Stops a running program. Sends SIGINT. Use it when a command hangs, you typed the wrong thing, or you do not want to wait.

```terminal
$ Ctrl+C
```

`top` also quits with `q`. Ctrl+C is the general stop.

## ps

List running processes. First number on a line is the PID.

```terminal
$ ps aux
$ ps aux | grep malicious.sh
```

`grep` also appears in the list. Kill the real program, not the grep line.

## kill

Stop a process by PID from another terminal when Ctrl+C does nothing. Default signal is SIGTERM.

```terminal
$ kill <PID>
$ kill 93838
```

SIGINT (Ctrl+C) is polite and the program can ignore it. `kill` talks to the kernel by ID. `kill -9` is last resort (SIGKILL, cannot ignore).

## Users

Each account has a home (`~`) and its own files. `root` is the superuser.

```terminal
$ whoami
$ echo $HOME
```

## sudo

Run one command as root. Needs an admin password. Read it before you run it. The next prompt is still you. Never `sudo rm -rf /`.

```terminal
$ sudo <command>
$ sudo apt update
$ sudo whoami
```

On the studio VM, ask first.

## Permissions string (`ls -l`)

Ten characters. First is type (`d` directory, `-` file). Then owner / group / others, each `rwx`.

```terminal
$ ls -l
$ ls -ld <dir>
```

`r=4` `w=2` `x=1`. `755` = `rwxr-xr-x`.

On a directory: `r` = `ls`, `w` = change contents, `x` = `cd` in.

## chmod

Change those bits. `u` owner, `g` group, `o` others. `=` set, `+` add, `-` remove. `-R` is the whole tree.

```terminal
$ chmod u=rwx,g=,o= file
$ chmod +x script.sh
$ chmod -R u=rwx,g=,o= DIR
$ chmod 770 file
```

`.` is the current directory. `+x` adds execute. `Permission denied` on `./script.sh` usually means the execute bit is off.

## chown

Change owner. Needs `sudo`. `-R` is the whole tree.

```terminal
$ sudo chown -R root contacts
$ ls -l
```

`ls -l` owner is the first name after the permission string. `chmod` if you own it. `chown` if you need to change who owns it.

`drwx------` + owner `root` means a normal `ls` inside fails. `sudo ls` is the one-command bypass.

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
