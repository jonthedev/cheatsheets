# Arch Linux ARM “Manual Survivor” Cheatsheet

Use this as your “map” while you go through that Vim Masterclass.

## 🛡️ The “Power” commands

| Command          | What it does                                                |
| ---------------- | ----------------------------------------------------------- |
| `su - <user>`    | Switch from root to your user (e.g. `<user>`)               |
| `su -`           | Switch back to root (password: `<root-password>`)           |
| `sudo <command>` | Run a command as a boss using your own password             |
| `passwd`         | Change the password for the account you are currently using |
| `exit`           | Log out or go back one level                                |

## 📦 The “App Store” (Pacman)

| Command            | What it does                                                   |
| ------------------ | -------------------------------------------------------------- |
| `pacman -Sy`       | Refresh the “shelf” (sync the package database)                |
| `pacman -Syu`      | Full system upgrade (the “maintenance” move)                   |
| `pacman -S <pkg>`  | Install a new app (like `fastfetch` or `cowsay`)               |
| `pacman -Rs <pkg>` | Remove an app and its leftover junk                            |
| `pacman -Scc`      | The space saver: wipe the download cache (can fix “disk full”) |

## 🖥️ System “flex” & info

| Command       | What it does                                   |
| ------------- | ---------------------------------------------- |
| `fastfetch`   | The “I Use Arch” logo and system specs         |
| `hostnamectl` | Shows OS version, kernel, and architecture     |
| `df -h`       | Shows how much disk space is left              |
| `lsblk`       | Shows your drives and “rooms” (partitions)     |
| `ip addr`     | Find your IP address (needed for SSH from Mac) |

## ✍️ Vim “emergency kit”

Since you’re starting that Masterclass, keep these 4 moves in your pocket:

| Key / command | What it does                                         |
| ------------- | ---------------------------------------------------- |
| `i`           | Enter Insert mode (start typing)                     |
| `Esc`         | Exit Insert mode (to give commands)                  |
| `:w`          | Write (save the file)                                |
| `:q!`         | Quit without saving (the “I messed up” panic button) |

## 🛑 Turning it off

When you are done for the day, don’t just close the UTM window:

1. `su -` (go to root)
2. `poweroff` (safe shut down)
