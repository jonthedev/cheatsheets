# Terman -k searchinal Commands

---

## Learn a command via tldr

```terminal
$ tldr <command>
```

## Create Folder

```terminal
$ mkdir <folder-name>
```

## Change directory (move into folder)

```terminal
$ cd <folder-name>
```

## (ZSH) Create folder and move into it

```terminal
$ take <folder-name>
```

## Create multiple nested folders

```terminal
$ mkdir -p <folder-name>/<folder-name>
```

## Delete Folder

**NOTE** The folder must be empty!

```terminal
$ rmdir <folder-name>
```

## Force Delete Folder/Files

```terminal
$ rm -rf <folder-name / file-name>
```

## Create File

```terminal
$ touch <file-name>
```

## Move file

```terminal
$ mv <source> <destination>
```

## Move file

```terminal
$ mv <folder>/ <destination>/
$ mv MoveMe/ ToThisFolder/
```

## Copy file

```terminal
$ cp <file-name>
```

## Copy current path directory

```terminal
$ pwd | pbcopy
```

## View file in the terminal

```terminal
$ cat <file-name>
```

## Go back directory

```terminal
$ cd ..
```

## Print current folder path

```terminal
pwd
```

## Show files

```terminal
$ ls
```

## Show files in long format

```terminal
$ ls -l
```

## Show hidden files in terminal

```terminal
$ ls -a
```

## Show hidden files in long format

```terminal
$ ls -la
```

## Delete history of terminal commands

```terminal
$ rm ~/.bash_history && history -c
```

## Search your Mac’s Terminal history.

**Make sure you are inside the terminal**

ctrl + r

## Kill a port

```terminal
$ lsof -i:<port-number>, // this will list the ports

//output
COMMAND   PID  USER   FD   TYPE             DEVICE SIZE/OFF NODE NAME
node    38876 MrJDK   31u  IPv4 0xbc87d9     0t0  TCP *:hbci (LISTEN)
node    38876 MrJDK   47u  IPv4 0xbc87d9      0t0  TCP localhost:hbci->localhost:53596 (CLOSE_WAIT)
```

**use the pid number to kill the port**

```terminal
$ kill -9 38876
```

## Find a file/folder

```terminal
$ open -a Finder <path-to-folder-or-file>
```

## clear terminal

```terminal
$ clear
$ ctr + l
```

## move to the beginning or line

```terminal
$ ctr + a
```

## move to the end of the line

```terminal
$ ctr + e
```

## clear text -->

```terminal
$ ctr + k
```

## clear text <--

```terminal
$ ctr + u
```

## recover deleted line

```terminal
$ ctrl + y
```

## search history

```terminal
$ ctrl + r
```

## Display first ines of a file

```terminal
$ head <count> <file>
$ head -7 names.txt
```

## Show tree of project

```terminal
$ tree -I node_modules
```

## Show file location of terminal

```terminal
$ tty
```
