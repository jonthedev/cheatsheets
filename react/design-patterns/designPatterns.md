# REACT DESIGN PATTERNS

## RE-USABLE LIST

**Data**

```js
export const people = [
  {
    name: 'John Doe',
    age: 54,
    hairColor: 'brown',
    hobbies: ['swimming', 'bicycling', 'video games']
  },
  {
    name: 'Brenda Smith',
    age: 33,
    hairColor: 'black',
    hobbies: ['golf', 'mathematics']
  },
  {
    name: 'Jane Garcia',
    age: 27,
    hairColor: 'blonde',
    hobbies: ['biology', 'medicine', 'gymnastics']
  }
]

export const products = [
  {
    name: 'Flat-Screen TV',
    price: '$300',
    description: 'Huge LCD screen, a great deal',
    rating: 4.5
  },
  {
    name: 'Basketball',
    price: '$10',
    description: 'Just like the pros use',
    rating: 3.8
  },
  {
    name: 'Running Shoes',
    price: '$120',
    description: 'State-of-the-art technology for optimum running',
    rating: 4.2
  }
]
```

**App.js**

```jsx
import './App.css'
import { people, products } from './data/people'
import { SmallPersonListItem } from './components/people/SmallPersonListItem'
import { LargePersonListItem } from './components/people/LargePersonListItem'
import { RegularList } from './components/RegularList'
import { NumberedList } from './components/NumberedList'
import { SmallProductListItem } from './components/products/SmallProductListItem'
import { LargeProductListItem } from './components/products/LargeProductListItem'

function App() {
  return (
    <div className='App'>
      <RegularList
        items={people}
        resourceName='person'
        itemComponent={SmallPersonListItem}
      />
      <NumberedList
        items={people}
        resourceName='person'
        itemComponent={LargePersonListItem}
      />
      <RegularList
        items={products}
        resourceName='product'
        itemComponent={SmallProductListItem}
      />
      <NumberedList
        items={products}
        resourceName='product'
        itemComponent={LargeProductListItem}
      />
    </div>
  )
}

export default App
```

**RegularList.jsx**

```jsx
export const RegularList = ({
  items,
  resourceName,
  itemComponent: ItemComponent
}) => {
  console.log(items)
  return (
    <>
      {items.map((item, i) => (
        <>
          {i}
          <ItemComponent key={i} {...{ [resourceName]: item }} />
        </>
      ))}
    </>
  )
}
```

**SmallPersonListItem.jsx**

```jsx
export const SmallPersonListItem = ({ person }) => {
  const { name, age } = person

  return (
    <p>
      Name: {name}, Age: {age} years
    </p>
  )
}
```

**LargePersonListItem.jsx**

```jsx
export const LargePersonListItem = ({ person }) => {
  const { name, age, hairColor, hobbies } = person

  return (
    <>
      <h3>{name}</h3>
      <p>Age: {age} years</p>
      <p>Hair Color: {hairColor}</p>
      <h3>Hobbies:</h3>
      <ul>
        {hobbies.map(hobby => (
          <li key={hobby}>{hobby}</li>
        ))}
      </ul>
    </>
  )
}
```
