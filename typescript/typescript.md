# TYPESCRIPT

---

## Installing TypeScript Globally

```terminal
$ npm install typescript -g
```

## Project Setup

1. Install TypeScript Locally

```terminal
$ npm i typescript
```

2. Initialise a ts.config

```terminal
$ npx tsc --init --rootdir src --outdir lib
```

3. Compile and watch for changes

```terminal
npx tsc --watch
```

---

**Note for live updates it might be a good idea to install lite server as a dev dependency**

```terminal
$ npm install lite-server -D
```

---

# BASICS

---

## Primative types

```typescript
let isPresent: boolean = false;
let magic: number = 66.6;
let hello: string = 'world';

let notDefined: undefined = undefined;
let notPresent: null = null;

let penta: symbol = Symbol('star');
let biggy: bigint = 24n;
```

## Instance types

```ts
let regexp: RegExp = new RegExp('ab+c');

let array: Array<number> = [1, 2, 3];

let set: Set<number> = new Set([1, 2, 3]);

/** A first out collection */
class Queue<T> {
  private data: Array<T> = [];
  push(item: T) {
    this.data.push(item);
  }
  pop(): T | undefined {
    return this.data.shift();
  }
}

let queue: Queue<number> = new Queue();
```

## Arrays & Tuples

```ts
//ARRAYS AND TUPLES
let array: number[] = [1, 2, 3];

//usage
array = [1];
array = [1, 2, 3, 4, 5];

//Tuple
let tuple: [number, number] = [0, 0];

//Usage
tuple = [1, 1];
tuple = [2, 6];
```

## OBJECT TYPES AND TYPE ALIASES

```ts
type Point = { x: number; y: number };

let center: Point = {
  x: 0,
  y: 0,
};

let unit: Point = {
  x: 1,
  y: 1,
};
```

## Functions

```ts
// function add(a: number, b: number): number {
//     return a + b;
//   }

function log(message: string): void {
  console.log('LOG:', message);
}

function sum(...values: number[]) {
  return values.reduce((previous, current) => {
    return previous + current;
  });
}

type Add = (a: number, b: number) => number;
let add: Add;
add = function (a: number, b: number) {
  return a + b;
};

console.log(add(1, 1));
```

## Structural & Duck typing.

```ts
//STRUCTURAL TYPING
type User = { id: string };
type Product = { id: string };

let user: User = { id: 'user-asfef23' };
let product: Product = { id: 'product-fwefw575' };

user = product;
product = user;

type Point2D = { x: number; y: number };
type Point3D = { x: number; y: number; z: number };

let point2D: Point2D = { x: 0, y: 10 };
let point3D: Point3D = { x: 0, y: 10, z: 20 };

/** EXTRA INFO OK - DUCK TYPING */
point2D = point3D;
function takesPoint20(point: Point2D) {}
takesPoint20(point3D);
```

## Classes

```ts
class Animal {
  protected name: String;

  constructor(name: string) {
    this.name = name;
  }

  public move(distanceInMetres: number): void {
    console.log(`${this.name} moved ${distanceInMetres}m.`);
  }
}

let cat = new Animal('Cat');
cat.move(10);
// cat.name = 'Dog'; ERROR, protected/private does not allow access

class Bird extends Animal {
  fly(distanceInMeters: number) {
    console.log(`${this.name} flew ${distanceInMeters}m`); //allow acess because of protected
  }
}
```

## Generics

```ts

```
