# Herd

Laravel Herd — native PHP development environment (macOS/Windows). Ships with PHP, nginx, dnsmasq; no Homebrew required. Sites are served at `*.test`.

---

## Setup

- Install from [herd.laravel.com](https://herd.laravel.com).
- Default parked directory: `~/Herd`. Put project folders there (or use `herd link`).

---

## Sites

| Command | Description |
| ------- | ----------- |
| `herd park [path]` | Park a directory; subdirs become `dirname.test` |
| `herd link [name]` | Link current dir as `name.test` (anywhere on disk) |
| `herd unlink [name]` | Remove linked site |
| `herd sites` | List all sites |
| `herd paths` | Show parked directories |
| `herd open [site]` | Open site in browser |
| `herd edit` | Open current site in IDE |
| `herd db` | Open site DB in TablePlus (or configured client) |
| `herd site-information` | Site info (e.g. `php artisan about` for Laravel) |

---

## PHP versions

| Command | Description |
| ------- | ----------- |
| `herd use 8.3` | Set global PHP version |
| `herd isolate 8.2` | Use PHP 8.2 for current directory only |
| `herd unisolate` | Clear per-site PHP, use global |
| `herd isolated` | List isolated sites |
| `herd which-php` | Which PHP binary is used here |
| `herd php:list` | Installed PHP versions |
| `herd php:install 8.4` | Install a PHP version |
| `herd php` | Run PHP with site’s version (e.g. `herd php -v`) |
| `herd composer` | Run Composer with correct PHP |
| `herd ini` | Open php.ini in editor |

---

## Typical workflow

```bash
# 1. Park a folder (e.g. ~/Herd) so myapp becomes myapp.test
cd ~/Herd
herd park

# 2. Or link a project that lives elsewhere
cd ~/Projects/my-laravel-app
herd link my-laravel-app
# → my-laravel-app.test

# 3. Per-project PHP if needed
herd isolate 8.3

# 4. Use Herd’s PHP/Composer
herd composer install
herd php artisan serve   # optional; Herd already serves .test
```

---

## Docs

- [Herd Docs](https://herd.laravel.com/docs) — installation, sites, PHP, CLI.
