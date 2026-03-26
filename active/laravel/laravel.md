# Laravel

PHP framework. Pairs with Vue via Inertia or API + SPA. Local dev: [Herd](../herd/herd.md) (or `php artisan serve`).

---

## New project

```bash
# With Composer (ensure PHP 8.1+)
composer create-project laravel/laravel my-app
cd my-app

# With Herd: run from project dir so Herd uses correct PHP
herd composer create-project laravel/laravel my-app
```

Then `herd link my-app` or put in a parked directory → `my-app.test`.

---

## Artisan (CLI)

| Command | Description |
| ------- | ----------- |
| `php artisan serve` | Dev server (localhost:8000) |
| `php artisan make:model Post -m` | Model + migration |
| `php artisan make:controller PostController` | Controller |
| `php artisan make:controller PostController --resource` | Resource controller (CRUD) |
| `php artisan migrate` | Run migrations |
| `php artisan migrate:fresh --seed` | Fresh DB + seed |
| `php artisan route:list` | List routes |
| `php artisan tinker` | REPL |
| `php artisan about` | PHP/Laravel/env info |

With Herd, use `herd php artisan ...` so the project’s PHP version is used.

---

## Directory snapshot

| Path | Purpose |
| ---- | ------- |
| `app/Http/Controllers` | Controllers |
| `app/Models` | Eloquent models |
| `routes/web.php` | Web routes |
| `routes/api.php` | API routes |
| `resources/views` | Blade templates |
| `database/migrations` | Migrations |
| `.env` | Env vars (never commit) |

---

## Route → Controller

```php
// routes/web.php
use App\Http\Controllers\PostController;

Route::get('/posts', [PostController::class, 'index']);
Route::get('/posts/{post}', [PostController::class, 'show']);
```

```php
// app/Http/Controllers/PostController.php
namespace App\Http\Controllers;

class PostController extends Controller
{
    public function index() {
        return view('posts.index');
    }

    public function show(Post $post) {
        return view('posts.show', ['post' => $post]);
    }
}
```

Route model binding: type-hint `Post $post` and Laravel resolves it by ID.

---

## Env and config

- Copy `.env.example` → `.env`.
- `php artisan key:generate` to set `APP_KEY`.
- Use `config('app.name')`, `env('APP_DEBUG')` in code; prefer `config()` over `env()` outside config files.

---

## Vue + Laravel

- **Inertia**: SPA-like UX with Vue components; Laravel returns Inertia responses instead of Blade.
- **API**: Laravel as JSON API; separate Vue app (Vite) talks to it.
- **Blade + Vue**: Embed Vue in Blade for smaller interactions.

---

## Docs

- [Laravel Docs](https://laravel.com/docs)
- [Laravel + Vue / Inertia](https://laravel.com/docs/starter-kits#laravel-breeze) (Breeze)
