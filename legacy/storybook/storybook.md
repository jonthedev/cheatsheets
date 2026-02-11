# STORYBOOK

---

## What and why?

- SStorybook is a development environment and playground for UI components.
- You can create components independently.
- Showcase those components interactively in an isolated development environment.
- Ability to view the different components that have already been developed.
- View what are the different props that those developed components accept.
- Dynamically change props, accessibility score.

---

## Install

**Inside of root**

```terminal
$ npx storybook init
```

## Start Storybook in development mode

```terminal
npm run storybook
```

---

## Creating a basic story

**Button.jsx**

```js
import styles from './Button.module.css'

const Button = props => {
  const { variant = 'primary', children, ...rest } = props
  return (
    <button
      className={`${styles.button} ${styles[variant]}`}
      {...rest}>
      {children}
    </button>
  )
}

export default Button
```

**Button.module.css**

```css
.button {
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 4px;
  cursor: pointer;
}

/* Blue */
.primary {
  background-color: #008cba;
}

/* Gray */
.secondary {
  background-color: #e7e7e7;
  color: black;
}

/* Green */
.success {
  background-color: #4caf50;
}

/* Red */
.danger {
  background-color: #f44336;
}
```

**Button.stories.js**

```js
import React from 'react'
import Button from './Button.jsx'

export default {
  title: 'Button',
  component: Button
}

export const Primary = () => (
  <Button variant='primary'>Primary</Button>
)
export const Secondary = () => (
  <Button variant='secondary'>Secondary</Button>
)
export const Success = () => (
  <Button variant='success'>Success</Button>
)
export const Danger = () => <Button variant='danger'>Danger</Button>
```

---

## Renaming stories

Reference the component name followed by the method **storyName**.

```js
export const Primary = () => (
  <Button variant='primary'>Primary</Button>
)

Primary.storyName = 'Primary blue'
```

## Stories within stories

**Subscription.stories.js**

```js
import React from 'react'
import { Primary } from '../Button/Button.stories'
import { Large } from '../Input/Input.stories'

export default {
  title: 'Form/Subscription'
}

export const PrimarySubscription = () => (
  <>
    <Large />
    <Primary />
  </>
)
```

## Args

The Args template allows you to define a global template for your stories

**Button.stories.js**

```js
import React from 'react'
import Button from './Button.jsx'

export default {
  title: 'Form/Button',
  component: Button,
  //default args which will apply to all components, keep in mind these can be overridden by adding args to the component at story level.
  args: {
    children: 'Button'
  }
}

export const Primary = () => (
  <Button variant='primary'>Primary</Button>
)
export const Secondary = () => (
  <Button variant='secondary'>Secondary</Button>
)
export const Success = () => (
  <Button variant='success'>Success</Button>
)
export const Danger = () => <Button variant='danger'>Danger</Button>

// /*** ARGS AT STORYBOOK LEVEL ***/
const Template = args => <Button {...args} />

export const PrimaryA = Template.bind({})
PrimaryA.args = {
  variant: 'primary',
  children: 'Primary Args'
}

export const SecondaryA = Template.bind({})
SecondaryA.args = {
  variant: 'primary'
  // children: 'Primary Args'
}

export const LongPrimaryA = Template.bind({})
LongPrimaryA.args = {
  ...PrimaryA.args
  // children: 'Long Primary Args'
}
```

## Decorators

### Global Decorators

Allows you to wrap global stories to your components.

**Center.js**

```js
import styles from './Center.module.css'

const Center = props => {
  return <div className={`${styles.center}`}>{props.children}</div>
}

export default Center
```

**preview.js**

```js
import { addDecorator } from '@storybook/react'
import Center from '../src/components/Center/Center'

addDecorator(story => <Center>{story()}</Center>)
```

### Individual Decorator

Import the component you want to use as a wrapper(decorator) component.

```js
import Center from '../Center/Center'

export default {
  title: 'Form/Button',
  component: Button,
  decorators: [story => <Center>{story()}</Center>]
}
```
