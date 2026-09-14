# Apple Terminal (Mac)

Decepticon HUD: Homebrew green on black, indigo folders, silver files.

## Profile

- Profile: **Homebrew**
- Set as **Default** and **Startup** (click Default in the profile list, then Cmd+Q)
- Background: black or very dark gray (`#121212`)
- Window opacity: **90%** so the Soundwave wallpaper reads through as a ghost, not a wash
- Font: **JetBrainsMono Nerd Font** (Homebrew resets this to Andale Mono)

## ANSI colours (Homebrew → Text → ANSI Colors)

Leave Green as Homebrew neon. Bright Blue stays default (`avit` path).

| Slot | Hex | Used for |
| --- | --- | --- |
| Blue | `#6755D4` | folders (`lsd`), close to the path colour |
| Red | `#C8C8C4` | files (`lsd`) silver |

## Shell

`ZSH_THEME="avit"` in `~/.zshrc`.

`lsd --tree` without `--classic` for icons.
