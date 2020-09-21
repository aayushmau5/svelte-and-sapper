## Forms

Submitting Form event `<form on:submit|preventDefault={handleSubmit} ></form>`.

Different Types of inputs

```HTML
<script>
    let name;
    let age;
    let react = true;
    let vue = false;
    let svelte = true;
    let skills = [];

    const handleSumbit = () => {
        console.log(name,age);
    }
</script>

<form on:submit|preventDefault={handleSubmit}>
    <input type="text" placeholder="Name" bind:value={name}>
    <input type="number" placeholder="Age" bind:value={age}>
    <label>Skills:</label>
    <input type="checkbox" bind:checked={react}> React
    <input type="checkbox" bind:checked={vue}> Vue
    <input type="checkbox" bind:checked={svelte}> Svelte
    <!-- Using Grouped Attribute -->
    <label>Skills:</label>
    <input type="checkbox" bind:group={skills} value="react"> React
    <input type="checkbox" bind:group={skills} value="vue"> Vue
    <input type="checkbox" bind:group={skills} value="svelte"> Svelte
    <button>Add Person</button>
</form>
```

Binding to checkboxes

We bind to the `checked` value(true or false) to each check box.

OR

We can use the `Grouped` attribute

use `bind:group`, also we need to give `value` to the checkbox.
Now, the checked checkbox `value` will be added to the `skills` array.

### Select boxes

```HTML
<script>

    let color;

    const handleSumbit = () => {

    }
</script>

<form on:submit|preventDefault={handleSubmit}>
    <label>
        Select Box
    </label>
    <select bind:value={color}>
        <option value="black">black</option>
        <option value="orange">orange</option>
        <option value="brown">brown</option>
        <option value="white">white</option>
    </select>
</form>
```

So whatever user selects, `color` will be equal to the `value` of the option.

### Dispatching Custom Events

So how are we gonna update the `peoples` array present in `App.svelte` root component, from `AddPersonForm` component.

We need to pass that data to the parent component.
We can't use Event forwading because we cannot pass any data using it, we just forward the event.

So we need to `dispatch` a `custom event` from our form and send the form data to the parent component.

First, we need to import `createEventDispatcher` from the svelte libaray.

Inside `script` tag

> import { createEventDispatcher } from 'svelte'

Then create a `dispatcher` function

> let dispatch = createEventDispatcher();

This returns a function which is stored in (referenced by) `dispatch`.

So, whenever we want to emit a custom event with some data from a component to be handled in a parent component, we use the `dispatch` function.

Now, inside `formHandler` function,
we use the `dispatch(customEventName,data)` function to emit a event named `customEventName` with data `data`.

```HTML
<script>
    import { createEventDispatcher } from 'svelte';

    let dispatch = createEventDispatcher();

    let name;
    let age;
    let id = 3;

    const handleSubmit = () => {
        id += 1;
        //making the person object which we will pass to the parent
        const person = {
            name,
            age,
            id: 4
        };
        dispatch('addPerson', person);
        // will emit an addPerson event in the parent component
    }
</script>

<form on:submit|preventDefault={handleSubmit}>
    <input type="text" placeholder="Name" bind:value={name}>
    <input type="number" placeholder="Age" bind:value={age}>
    <button>Add Person</button>
</form>

```

Now, Listening to the custon event in the parent `App.svelte` component.

`on:customEventName={addPersonFunction}`

Now the function `addPersonFunction` will get an event parameter, the data is automatically attached to the event parameter as well.

And it's on the property `e.detail`.

```HTML
<script>
	import AddPersonForm from './AddPersonForm.svelte';

	let peoples = [
		{ name: "Jim", age: 28, id: 1 },
		{ name: "John", age: 25, id: 2 },
		{ name: "James", age: 38, id: 3 },
	];
	const addPerson = (e) => {
		const person = e.detail;
		peoples = [...peoples, person];
		// here we are not doing peoples.push() because
		// svelte won't recognize the change and update
		// the contents because svelte relies on
		// assignment to realise something need to be
		// updated.
	}
</script>

<AddPersonForm on:addPerson={addPerson} />
```
