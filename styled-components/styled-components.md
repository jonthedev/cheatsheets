# Styled Components

#### Styled components Extension (vs code)

Adding this extension will provide syntax highlighting for styled-components.

---

Styled components allow us to create their own encapsulated styles.

- Allows for css variables, nested css and extending our component styles.

- Allows for a more modular css when styling your components.

- you can share your state with the styles.

# Install

```terminal
$ npm install styled-components
```

---

## Why we should use styled components

**App.js**

```js
function App() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1 className='title'>Styled Components</h1>
      <button className='btn'>Click me</button>
      <div style={{ padding: '2rem' }}>
        <h2 className='title'>Hello World</h2>
      </div>
    </div>
  )
}

export default App
```

In the above example we are using inline styles on the div, if I want to re-use this style,I have to copy and paste it.

If I want to change the padding to 3 rem or something else, I then have to find the occurrence of this style throughout the project and change it manually.

If I want to use the className of the style somewhere else because its convenient, i.e 2 classNames that are the same the most recent declaration of that style will be applied this can create issues with tracking which styles are being applied.

A work around for this would be to get creative with your classNames however as the app grows this will become harder to maintain.

### Basic Styled Component

```js
import styled from 'styled-components'

//tagged template literal
const BasicTitle = styled.h1`
  text-align: right;
  text-transform: capitalize;
`

function App() {
  return (
    <div style={{ padding: '2rem' }}>
      <BasicTitle>Styled Components</BasicTitle>
      <BasicTitle>Styled Components</BasicTitle>
      <BasicTitle>Styled Components</BasicTitle>
      <BasicTitle>Styled Components</BasicTitle>
      <button className='btn'>Click me</button>
    </div>
  )
}

export default App
```

Benefits of using this...

- Styles are defined in one place
- Styled components will parse the correct tag into the DOM
- Easy to re-use
- No need to create separate css files and import them into your components.
- You don't need to worry about className collisions as styled components generates unique classNames for the component.
- Styled components will render the components children props automatically for you.

---

## Separate files

Usually you would write your components in a modular architecture. Styled components is no different and instead of writing all your styled components in one place you can break them into separate files and import them like you would with regular components.

**Buttons.js**

```jsx
import styled from 'styled-components'

const DefaultButton = styled.button`
  background: #645cff;
  color: #fff;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  text-transform: capitalize;
  padding: 0.25rem;
  display: block;
  width: 200px;
  margin: 1rem auto;
`

export default DefaultButton
```

**BasicTitle.js**

```js
import styled from 'styled-components'

const BasicTitle = styled.h1`
  text-align: center;
  text-transform: capitalize;
`

export default BasicTitle
```

**App.js**

```js
import BasicTitle from './components/BasicTitle'
import DefaultButton from './components/Buttons'

function App() {
  return (
    <div style={{ padding: '2rem' }}>
      <BasicTitle special>Styled Components</BasicTitle>
      <DefaultButton>Click me</DefaultButton>
    </div>
  )
}

export default App
```

## Simple Props

Imagine we have a different setup where we want to use different css for our components? How can this be achieved. This is where props come in.

**app.js**

Setting a prop on the first BasicTitle component

```jsx
import BasicTitle from './components/BasicTitle'
import DefaultButton from './components/Buttons'

function App() {
  return (
    <div style={{ padding: '2rem' }}>
      <BasicTitle special>Styled Components</BasicTitle>
      <BasicTitle>Styled Components</BasicTitle>
      //....
    </div>
  )
}

export default App
```

**BasicTitle.js**

We can use template string variables to return a function that automatically receives props passed into the component.

Then use those props to write a condition to determine what value to assign to css properties, in this case the text color of the button.

```js
import styled from 'styled-components'

const BasicTitle = styled.h1`
  text-align: center;
  text-transform: capitalize;
  color: ${props => props.special && 'red'};
`

export default BasicTitle
```

---

# Conclusion

### Benefits

- Styles are defined in one place
- Styled components will parse the correct tag into the DOM
- Easy to re-use
- No need to create separate css files and import them into your components.
- You don't need to worry about className collisions as styled components generates unique classNames for the component.
- Styled components will render the components children props automatically for you.
- Allows for css variables, nested css and extending our component styles.
- Allows for a more modular css when styling your components.
- You can share your state with the styles.
