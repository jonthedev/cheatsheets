# PHP

Quick reference for PHP basics (coming from JS/TS). Local dev: [Herd](../herd/herd.md).

---

## Syntax basics

| JS/TS | PHP |
| ----- | --- |
| `let x = 1;` | `$x = 1;` |
| `const name = 'x';` | `$name = 'x';` (no const-by-default) |
| `true` / `false` | `true` / `false` |
| `null` | `null` |
| `//` and `/* */` | Same |
| Statements end with `;` | Same |

- Variables start with `$`.
- No `let`/`const`/`var` — just `$name = value;`.
- Constants: `define('NAME', 'value');` or `const NAME = 'value';` (inside classes).

---

## Types (loose by default)

```php
// Scalar types
$int = 42;
$float = 3.14;
$string = 'single' . " or double";
$bool = true;

// Type hints (recommended in modern PHP)
function greet(string $name): string {
    return "Hello, $name";
}
```

- Concatenation: `.` (not `+`).
- String interpolation: `"Hello, $name"` or `"Hello, {$user->name}"`.
- Common type hints: `string`, `int`, `float`, `bool`, `array`, `?string` (nullable), `void`.

---

## Arrays

```php
// Indexed (like JS array)
$list = [1, 2, 3];
$list[] = 4;

// Associative (like JS object for key/value)
$user = ['name' => 'Jane', 'role' => 'dev'];
$user['email'] = 'jane@example.com';

// Useful functions
count($list);
in_array('a', $list);
array_map(fn($x) => $x * 2, $list);
array_filter($list, fn($x) => $x > 1);
```

- `[]` for short array syntax (PHP 5.4+).
- `array_key_exists('key', $arr)` to check key; `isset($arr['key'])` for key + not null.

---

## Functions

```php
function add(int $a, int $b): int {
    return $a + $b;
}

// Arrow function (PHP 7.4+)
$double = fn($x) => $x * 2;

// Default args
function say(string $msg = 'hi'): void {
    echo $msg;
}
```

- `void` return type = no return value.
- No block-level scope for variables; function scope is the main boundary.

---

## Classes

```php
class User {
    public function __construct(
        public string $name,
        private string $email
    ) {}

    public function getEmail(): string {
        return $this->email;
    }
}

$user = new User('Jane', 'jane@example.com');
$user->name;
$user->getEmail();
```

- `$this` = instance reference (like JS `this` in a class).
- Visibility: `public`, `protected`, `private`.
- Constructor property promotion: `public string $name` in `__construct` declares and assigns.

---

## Superglobals (request/context)

| Variable | Use |
| -------- | --- |
| `$_GET` | Query params |
| `$_POST` | POST body |
| `$_SERVER` | Headers, method, path, etc. |
| `$_ENV` | Environment variables |

In Laravel you usually use the framework’s request/env APIs instead of these directly.

---

## Composer (dependency manager)

```bash
# Install dependency
composer require package/name

# Install dev dependency
composer require --dev package/name

# Autoload (PSR-4)
# Defined in composer.json; then use namespaced classes.
```

- Like npm for PHP: `composer.json` ≈ `package.json`, `vendor/` ≈ `node_modules/`.
- Run with Herd’s PHP: `herd composer ...` when you need the right PHP version.

---

## Official docs

- [PHP Manual](https://www.php.net/manual/en/)
- [PHP The Right Way](https://phptherightway.com/)
