## Conditionals in Svelte

```HTML
<script>
    let num = 0;
</script>

<main>
    hello
    {#if num > 5}
        <h4>Num is greater than 5</h4>
    {:else if num == 5}
        <h4>Num is equal to 5</h4>
    {:else}
        <h4>Num is less than 5</h4>
    {/if}
</main>
```

### Components

Suppose `App.svelte` is our root component.

If we want to add another component `Modal` nested inside `App` component, we import the component and declare it.

Inside `App.svelte`

```HTML
<script>
    import Modal from './Modal.svelte'
</script>

<Modal />
```

### CSS and Conditional Styles

If we want a global style, we can define it in `public/global.css` file.

Styles defined in `global.css` will apply to all components, unless that component has inner styling added(component specific style).

Using Conditional Classes

If we want to apply a class to something based on certain condition.

Use `class:className={condition which evaluates to either true or false}`.

Here, classname will be `promo` which we will be applied based on the value of `isPromo` variable.

```HTML
<script>
    let isPromo = true;
</script>

<div class:promo={isPromo}>
</div>
```

### Props

Props are used to pass data into the components.

We can pass prop to a component with the prop name and its value which can be interger,string,object, etc.

```HTML
<Modal message="A Message" isPromo={true}>
<!-- passing boolean in {} -->
```

Here, we pass a `message` prop to the `Modal` component whose value is `A Message`.

Accessing the prop inside the component itself.

```HTML
<script>
    export let message = 'default value'; //declare the prop which will be set outside the component.(Therefore, using export)
</script>

<h1>{message}</h1>
```
