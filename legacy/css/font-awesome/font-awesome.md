# FONT AWESOME

[fort awesome github](https://github.com/FortAwesome/vue-fontawesome)

[dev to](https://dev.to/karlodelarosa3/font-awesome-5-as-a-component-in-vue-js-7ho)


## INSTALLATION

```terminal
$ npm i --save @fortawesome/fontawesome-svg-core
$ npm i --save @fortawesome/free-solid-svg-icons
$ npm i --save @fortawesome/free-brands-svg-icons
$ npm i --save @fortawesome/free-regular-svg-icons
$ npm i --save @fortawesome/vue-fontawesome
```

## import (VUE)

```js
import Vue from 'vue'
import App from './App'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(fab, fas, far);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
```

## USAGE

* Solid icons: @fortawesome/free-solid-svg-icons

```html
<font-awesome-icon :icon="['fas', 'image']" />
<font-awesome-icon :icon="['fas', 'user']" />
```

* Regular Icons: @fortawesome/free-regular-svg-icons

```html
<font-awesome-icon :icon="['far', 'image']" />
<font-awesome-icon :icon="['far', 'user']" />
```

* Branch Icons: @fortawesome/free-brands-svg-icons

```html
<font-awesome-icon :icon="['fab', 'twitter']" />
```

# EXTRA

* You can also specify the icon you just want to use.

```js
import Vue from 'vue'
import App from './App'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faUserAstronaut } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faTwitter, faUserAstronaut, faUser);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
```

* Solid Icons

```html
<font-awesome-icon icon="user-astronaut"/>
```

* Regular and Brand icons should be implemented the same as the above


```html
<font-awesome-icon :icon="['far', 'user']" />
<font-awesome-icon :icon="['fab', 'twitter']" />
```



