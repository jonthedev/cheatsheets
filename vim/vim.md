# Vim

---

# Open

`nvim` is Neovim. Same motions as Vim for this course. `nvim --version` checks the install.

```terminal
nvim <file>
nvim worldbanc/public/company_info.md
```

Normal mode on open. `i` insert. `Esc` back to normal. `:w` save. `:q` quit. `:wq` is save and quit. `:q!` quit without saving.

## Open file at line

```terminal
vim +<number> <file>
vim +42 file.txt
```

---

# Navigation

## Move down

```terminal
j
```

## Move up

```terminal
k
```

## Move right

```terminal
l
```

## Move left

```terminal
h
```

## Move by count

Number first, then the motion. Works for `h` `j` `k` `l` and `w` `b` `e` `W`.

```terminal
5j
10k
3l
3w
2W
```

## Page forward

```terminal
Ctrl+f
```

## Page back

```terminal
Ctrl+b
```

## Half page down

```terminal
Ctrl+d
```

## Half page up

```terminal
Ctrl+u
```

## Top of screen

```terminal
H
```

## Middle of screen

```terminal
M
```

## Bottom of screen

```terminal
L
```

## Center line

Current line moves to the middle of the window.

```terminal
zz
```

## Start of line

Column 0, including indent.

```terminal
0
```

## First non-blank

Start of the text, after leading spaces.

```terminal
^
```

## End of line

```terminal
$
```

## First line

```terminal
gg
```

## Last line

```terminal
G
```

## Go to line

```terminal
<number>G
42G
```

## Next word

Precision. Stops on punctuation too. `foo-bar` is three jumps.

```terminal
w
3w
```

## Previous word

```terminal
b
```

## End of word

```terminal
e
```

## Next WORD

Speed. Whitespace only. `foo-bar` is one jump.

```terminal
W
2W
```

## Find character

`f` then the character. This line only.

```terminal
f<char>
fe
```

## Next match

Same character, forward.

```terminal
;
```

## Previous match

Same character, backward.

```terminal
,
```

---

# Folding

## Close fold

```terminal
zc
```

## Open fold

```terminal
zo
```

## Toggle fold

```terminal
za
```

## Close all folds

```terminal
zM
```

## Open all folds

```terminal
zR
```

---

# Edit

## Insert mode

```terminal
i
```

## Delete line

```terminal
dd
```

## Undo

```terminal
u
```

## Delete character

```terminal
x
```

## Insert at end of line

```terminal
A
```

## Insert at start of line

```terminal
I
```

---

# Command mode

## Enter command mode

```terminal
:
```

## Quit

```terminal
:q
```

## Save and quit

```terminal
:wq
```

## Quit without saving

```terminal
:q!
```

## Top of file

```terminal
:0
```

## End of file

```terminal
:$
```

## Line numbers

Current line is the real number; the others are distance. That’s the count for `5j` / `10k`.

```terminal
:set number
:set relativenumber
:set number relativenumber
```

---

# Search

## Search

```terminal
/
```
