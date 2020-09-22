# Stores

Store of data. Subscribe to the store and get the data. Basically a way to make a centralized storage of data, which can be made available to all the components.

So everytime the data in `store` updates, the component which is `subscribed` to the `store` is gonna get the updated data.

Create a new store file `Store.js`. Notice the `.js` extension.

`writable` means we can write and read from the store.

We can pass initial data to the store as well using `writable(initial_data)`.

```js
import { writable } from "svelte/store";

//passing array as inital value of DataStore
const DataStore = writable([{ name: "Aayush" }]);

//exporting the store
export default DataStore;
```

Using Store in another component(subscribing).

```HTML
<script>
    import DataStore from 'path_to_store';

    //subscribing to the Store
    // fires a callback function when we subscribe to the store
    // whenever the data changes, the callback function will refire
    // and pass the updated data as a parameter
    DataStore.subscribe((data) => {
        // callback
        // use the data
    })
</script>
```

### Lifecycle Hooks

It is important to unsubscribe from the store because whenever we close a component from the DOM, the component gets destroyed but the subscription doesn't get destroyed. So if we open the component in the DOM after destroying the component several times, for each DOM render the component subscribes to the store, so we have more than one subscription to the store.

This can cause problems like memory leak etc.

So it is important to unsubscribe to the component, when the component is destroyed.

About lifecycle hooks, Every Svelte component has a lifecycle. It starts when it’ created and ends when it’s destroyed.

Lifecycle hooks are a handful of functions that allows us to run code at key moments of the lifecycle.

The most frequently used is `onMount` . It’s callback runs after the component is first rendered to the DOM.

```HTML
<script>
    import { onMount } from 'svelte';

    onMount(() => {
        // do something such as get value from store
        // or get data from the database
        console.log('Component Mounted');
    })
</script>
```

`onDestroy`'s callback is called when the component is being destroyed.

```HTML
<script>
    import { onDestroy } from 'svelte';

    onDestroy(() => {
        // unsubscribe from store
        console.log('Component Unmounted');
    })
</script>
```

### Unsubscribing from store using `onDestroy` lifecycle hook

First get the value of `DataStore.subscribe(...)` and store it in a variable which we can use to unsubscribe.

Because `DataStore.subscribe(...)` returns a unsubscription function, all we have to do is invoke that function to unsubscribe from the store.

```HTML
<script>
    import { onDestroy } from 'svelte';
    import { DataStore } from 'DataStore.js';

    const unsub = DataStore.subscribe((data) => {
        console.log(data);
    })

    onDestroy(() => {
       unsub();
    })
</script>
```

An easy way to subscribe to the store and automatically unsubscribe to the store when the component is destroyed is just refer directly to the store instead of storing the store data in another local variable.

Is to use `$DataStore` instead of the using another local variable.

```HTML
<script>
    import { onDestroy } from 'svelte';
    import { DataStore } from 'DataStore.js';
</script>

<!-- Using the DataStore directly using $ -->
{#each $DataStore as Data}
    <div>{Data.name}</data>
{/each}
```

### Updating Store Data

using `.update` method, we need to `return` the new updated data.

```HTML
<script>
    import DataStore from 'DataStore.js';

    // initally returns the current data to the callback
    DataStore.update(currData => {
        return [...currData,newData];
    })
</script>
```
