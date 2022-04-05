# REACT

## Creat new project

```terminal
npx create-react-app myapp
```

## Use npm instead of yarn for create react app

```
create-react-app myapp --use-npm
```

## Getting started

- src/index.js

```js
// Import the react and ReactDom libraries
import React from 'react'
import ReactDom from 'react-dom'

//Create a react component
const App = () => {
  return <div>Hi there!</div>
}

// Take the react component and show it on the screen
ReactDom.render(<App />, document.querySelector('#root'))
```

## Passing Props

- Components receive a props object, which can be used to display singular or multiple elements of content.
- To display multi elements reference 'props.children'
- To pass in singular data simply reference 'props' follwed by the 'key' name

```js
import React from "react";
const App = () => {
  return (
    <Segement>
      <div>
        <h4>Some Content</h4>
        <p>some paragraph text</p>
      </div>
    </Segement>
    <AnotherComponent title="Another Title" text="Some more text" ></AnotherComponent>
  )
}

//reference by object
const Segment = props => {
  return <div className="ui placeholder segment">{props.children}</div>;
};

// reference by key name
const AnotherComponent = props => {
  return <div className="ui placeholder segment"><h4>{props.title}</h4>
  <p>{props.text}</p>
  </div>;
};

export default Segment;
export default AnotherComponent;
```

## Functional Components | Class Components | State

- Class Components Rules

  - Must be a JavaScript Class
  - Must extend (subclass) React.Component
  - Must define a 'render' method that returns some amount of JSX

- State Rules
  - Only usable with class components
    - **NOTE** Technically can be used with functional components using the **hooks** system
  - You will confuse props with state :(
  - 'State' is a JS object that contains data relevant to a component
  - Updating 'state' on a component causes the component to (almost instantly rerender)
  - State must be initialized when a component is created
  - State **MUST** be updated by **setState** only.

```js
class App extends React.Component {
  constructor(props) {
    super(props)
    //set default state, ONLY TIME TO DO DIRECT ASSIGNMENT TO STATE
    this.state = { lat: null, errorMessage: '' }

    //get position
    window.navigator.geolocation.getCurrentPosition(
      position => {
        // update state wit setState
        this.setState({
          lat: position.coords.latitude
        })
      },
      err => {
        this.setState({
          errorMessage: err.message
        })
      }
    )
  }

  render() {
    //error getting geo location
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>
    }
    //success getting geo location
    if (!this.state.errorMessage && this.state.lat) {
      return <div>Latitude: {this.state.lat}</div>
    }
    //Loading
    return <div>Loading...</div>
  }
}

export default App

ReactDOM.render(<App />, document.querySelector('#root'))
```

## Lifecycle Methods

**Life cycle methods are methods that are called during a components 'life'**

_Lifecycle Timeline_

- **constructor**, _Good place to do one time setup_
- **render**, _Avoid doing anything besides returning JSX_
  - content is now visible on screen
- **componentDidMount**, _Good place to do data-loading!_
  - Sit and wait for updates...
- **componentDidUpdate**, _Good place to do more data-loading when state/props change_
  - Sit and wait untill this component is not longer shown
- **componentWillUnmount**, _Good place to do cleanup (especially for non-React stuff)_

## Controlled Elements VS Uncontrolled Elements

The idea of controlled elements is that we are storing all of our data inside the components.

In an uncontrolled component, we have to reach into the dom and the html to find out what data we are working with, which is generally bad! You must strive to have a complete data driven application with React.

**Controlled Element Flow**

- User types in input
- Callback gets invoked
- We call **setState** with the new value
- Component rerenders
- Input is told what it's value is (coming from state)

```js
import React from 'react'

class SearchBar extends React.Component {
  state = { term: '' }
  render() {
    return (
      <div className='ui segment'>
        <form className='ui form'>
          <div className='field'>
            <label>Image Search</label>
            <input
              className='field'
              type='text'
              value={this.state.term}
              onChange={e => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar
```

## REACT REFS

- Gives access to a single DOM element
- We create refs in the constructor, assign them to instance variables, then pass to a particular JSX element as props

## REACT FRAGMENTS

- Allows you to return multiple elements without a parent div

```js
import React from 'react'

const Accordian = ({ items }) => {
  //render list
  const renderedList = items.map(item => {
    return (
      <React.Fragment key={item.title}>
        <div className='title active'>
          <i className='dropdown icon'></i>
          {item.title}
        </div>
        <div className='content active'>
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    )
  })
  return <div className='ui styled accordion'>{renderedList}</div>
}

export default Accordian
```

## React Hooks

React hooks give functional components the same tools as class components.

- **useState** - Function that lets you use **state** in a functional component
- **useEffect** Function that lets you use _something_ like **lifecycle methods** in a functional component
- **useRef** Function that lets you create a **'ref'** in a function component

### useEffect in more detail

As we said above this hook allows function components to use something _like_ lifecycle methods

We configure the hook to run some code automatically in one of three scenarios...

- When the component is rendered for the first time only
- When the component is rendered **for the first time and whenever it rerenders**
- When the component is rendered **for the first time and (whenever it rerenders and some piece of data has changed)**

* useEffect Second Argument

The second argument with the **useEffect** method determines exactly when the code will be ran...

```js
//Empty array, Run at initial render
useEffect(() => {
  console.log('aafew')
}, [])

//Nothing, Run at inital render --> Run after every rerender
useEffect(() => {
  console.log('aafew')
})

//With data/value/variable inside an array, Run at inital render --> Run after every rerender _if_ data has changed subce last render
useEffect(() => {
  console.log('aafew')
}, [data])
```

**Note** - An effect function must not return anything besides a function, which is used for clean-up.

There are 3 work arounds for this

- declare a helper function

```js
useEffect(() => {
  const search = async () => {
    await axios.get('/someurl')
  }
}, [query])
```

- Declare a helper fucntion then immediately invoke it - **same as above**

```js
useEffect(() => {
  ;(async () => {
    await axios.get('/someurl')
  })()
}, [query])
```

- Use a promise

```js
useEffect(() => {
  axios.get('uewfiubfe').then(response => {
    console.log(response.data)
  })
}, [query])
```

## When to clean up your use effects

- When using timer functions such as setTimeout.
- Subscriptions.
- Web Sockets.
