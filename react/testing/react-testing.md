# React Testing

---

## Why testing is important.

Testing allows us to assert certain expectations on what we are building.

## Why use react testing library.

React testing library allows us to automate these tests in code.

## Pros of using a testing library instead of manual testing.

- ### Allows you to catch bugs very easily.
  - Testing manually on a small application may be oke but in reality you will be working on a big application, to manually test everything as the application grows is not practical, instead, you can write tests for a feature and when working on or creating a new feature, running a test will notify you if you have broken something.
  - Essentially allowing you catch possible bugs and debug them early in development
- ### Increases confidence in Application
  - As mentioned before automated tests allows you to catch bugs , if all tests pass then that means that the features of your application is working.
  - This increases the confidence that when this app is released into production that our customers will not experience bugs which increases customer satisfaction.
- ### Speeds up QA Time
  - Manually testing takes up time and is very tedious work. We can run our test suite which allows us to see if everything is working fine.
- ### Can serve as documentation
  - This can be very usefull to your team especially onboarding new developers.
  - Tests describe the code we are working with

## What does React Testing Library Do?

- Creates virtual DOM for testing
  - and utilities for interacting with DOM
- Allows for testing without a browser

## Quick comparison - Unit Test vs Functional Testing

## Unit Testing

- Isolated: mock dependencies
- Test internals

Pros.

- Very easy to pinpoint failures

Cons.

- Further from how users interact with software
- More likely to break with refactoring

## Functional Testing

- Include all relevant units
- Tests behavior

Pros.

- Close to how users interact with software
- Robust tests

Cons

- More difficult to debug failing tests

---

# JEST

- React Testing Library helps with
  - rendering components ino virtual DOM
  - searching virtual DOM
  - Interacting with virtual DOM
- Needs a test runner
  - Find tests, run them, make assertions, this is where Jest comes in.
- Jest
  - is recommended by Testing Library
  - comes with **create-react-app**
  - `$ npm test` runs an npm script that runs Jest in watch mode

---

## Running a test

**Starts jest in watch mode**

```terminal
$ npm test
```

## Assertions

An assertion is a check that values meet certain conditions. In other words, if you use expect. assertions(5) the test will fail unless expect() is called at least 5 times. This is useful for async tests, but it's not the only way to handle asynchronicity, you can find other patterns in the Jest doc.

- expect: is apart of the jest global , starts the assertion
- matcher: type of assertion which comes from jest-DOM

```js
expect(element.textContent).toBe('hello')
expect(elementsArray).toHaveLength(7)
```

## Jest-dom

- comes with create-react-app
- src/setupTests.js imports it before each test, makes matchers available
- DOM-based matchers
  - examples: toBeVisible() **or** toBeChecked()

## Jest Watch Mode

- Watch for changes in files since last commit
- Only run tests related to these files
- No changes? No Tests.

## How does Jest Work?

- **global** `test` method has two arguments:
  - string description of the test
  - test function
- Test fails if error is thrown when running function
  - assertions throw errors when expectation fails
- No error -> tests passes

---

# Accessibility and finding elements

- Testing Library recommends finding elements by accessibility handles
  - https://testing-library.com/docs/guide-which-query/
- [Roles Documentation](https://www.w3.org/TR/wai-aria/#role_definitions)

---

# Testing styles from imported CSS modules

A common question about testing styles is "why doesn't .toHaveStyle() work with classes from my imported CSS module?"

## Mocking CSS modules

In the case of create-react-app applications -- or applications that have otherwise mocked css modules for Jest -- CSS module imports are simply ignored for Jest test.

## Cosmetic Styles vs. Functional Styles

In many cases, the classes are merely cosmetic and won't affect functional tests (such as placement of the element on the page). In these cases, mocking the CSS modules works fine. However, sometimes classes do affect function. For example, say you have a CSS module that uses a hidden class, which results in display: none when interpreted. Without adding a Jest transformer to interpret the CSS, Testing Library will not know that hidden class would result in `display: none`. Tests around element visibility that rely on this class will fail.

## Transformers

For styles to be interpreted in tests, you need a transformer to, well, transform the CSS classes into styles. Here are a couple options:

https://www.npmjs.com/package/jest-transform-css

https://www.npmjs.com/package/jest-css-modules-transform

The latter has more downloads per week, but the former seems to be more actively maintained.

## Testing for Class Name

Another possibility would be to check explicitly for the class name (hidden in this example), using `toHaveClass`. This would be simpler, but farther from the actual user experience (this is testing implementation details, rather than how the user sees the page). It's always a balance, and I think either this approach or transforming the CSS would be defensible.
