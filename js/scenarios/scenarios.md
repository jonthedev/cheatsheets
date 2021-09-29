# SCENARIOS

---

## ARRAYS

### Get random index

```js
const arr = [1, 2, 3];

const index = Math.floor(Math.random() * arr.length);
```

### Remove an item using an index.

```js
const arr = [1, 2, 3];

const removeItem = index => {
  return arr.splice(index, 1);
};
```

## NUMBERS

### Generate a random number

```js
const num = Math.floor(Math.random() * 100 + 1);
```
