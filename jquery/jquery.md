# [Jquery](https://jquery.com/download/)

---

## Downloading Jquery

### cdns

[cdnjs](https://cdnjs.com/)

[Google Hosted Libraries](https://developers.google.com/speed/libraries)

---

## Basic example

```html
<!DOCTYPE html>
<html>
  <head>
    <title>jQuery Course</title>
  </head>
  <body>
    <div>Hello World 1</div>
    <div class="div2">Hello World 2</div>
    <div id="div3">Hello World 3</div>
  </body>
  <script
    src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"
    integrity="sha512-894YE6QWD5I59HgZOGReFYm4dnWc1Qt5NtvYSaNcOP+u1T9qYdvdihz0PPSiiqn/+/3e7Jo4EaG7TubfWGUrMQ=="
    crossorigin="anonymous"
    referrerpolicy="no-referrer"
  ></script>
  <script src="app2.js"></script>
</html>
```

```js
//JQUERY BASIC EXAMPLE

//get div element
//get html within div element and update text
$('div').html('Jonathan Kaonga')
//listen for click event and update text

$('div')
  .on('click', () => {
    $('div').html('Jonathan Kaonga')
  })
  .html('Click Me')
```

---

## .ready()

- ready() a method that waits for the dom to be loaded before running the script.

- use this if you want to ensure the DOM is loaded before running the js script

---

## Getting elements and logging them to console

```js
/*** Loging directly */
console.log($('div'))
console.log($('.div2'))
console.log($('#div3'))
console.log($('.div2, #div3'))

/*** Store in variable */
const $ele1 = $('div')
console.log($ele1)

const ele2 = $('.div2')
console.log(ele2)

const ele3 = $('#div3')
console.log(ele3)

const ele4 = $('.div2, #div4')
console.log(ele4)
```
