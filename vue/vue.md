# Vue CLI

---

## Set package Manager

```terminal
$ vue create <project-name> --packageManager yarn/npm
```

---

# VUE UI

## Start VUE UI

```terminal
$ vue ui
```

---

# VUE 3

## Watch & watchEffect

The watchEffect and watch can be called during a component's setup function or in lifecycle hooks. There are two ways to stop these two functions from getting triggered. First is the watchers that we setup using these two functions are linked to the component's lifecycle and they will be automatically stopped when the component gets unmounted. But suppose if you don't want to wait for unmounting of the component and you want to explicitly control this stopping thing, then these two functions spit out a function which serves as a stop handle which can be manually invoked by us to explicitly stop these watchers from running.

```js
export default {
  name: 'Home',
  setup() {
    const search = ref('');

    //Happens everytime the data changes
    const stopWatch = watch(search, () => {
      console.log('watch function ran');
    });

    //Happens on initial load, 2nd argument watches for data changes like watch above.
    const stopEffect = watchEffect(() => {
      console.log('watchEffect function ran', search.value);
    });

    const matchingNames = computed(() => {
      return names.value.filter(name => name.includes(search.value));
    });

    const handleClick = () => {
      stopEffect();
      stopWatch();
      return;
    };

    return { names, search, matchingNames, handleClick };
  },
};
```
