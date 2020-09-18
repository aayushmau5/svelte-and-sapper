# Event Forwading

Scenario - We have a modal. We want to toggle it showing or not showing.
Which is controlled by `let showModal = true` in `Modal` component.

In Modal.svelte

```HTML
<script>
    export let showModal = false;
</script>
```

In `App.svelte`, we define a button which toggles the value of `showModal`.

```HTML
<script>
	import Modal from './Modal.svelte';

	let showModal = false;

	const toggleModal = () => {
		showModal = !showModal;
        //toggle the showModal value
	}
</script>

<Modal message="Hey, I'm a prop value." isPromo={false} {showModal} />
<!-- showModal={showModal} can be written as {showModal} -->
<button on:click={toggleModal}>Show Modal</button>
```

So that covers our toggler when the Modal is not shown.
But we can't close the modal after it shows.

To make the modal that way, when we click on the background modal, the modal closes.

So we have to add event listener to the `backdrop` div in `Modal.svelte`.

```HTML
{#if showModal}
    <div class="backdrop" class:promo={isPromo} on:click={....}>
        <div class="modal">
            <p>{message}</p>
        </div>
    </div>
{/if}
```

However, we want to run the `toggleModal` function defined in `App.sevlte` file.

We can't just use `on:click={toggleModal}` on the `backdrop` div because that function is not defined in this component.

So we use `Event Forwading`.

Meaning we forward the `on:click` event to the `parent` element.

So when user click on the `backdrop` div, the click event is forwarded to the parent component, in this case `App.svelte` and `emit` a click event.

So we register the event listener `on:click` on the `backdrop` div, but we don't set it equal to anything.

```HTML
{#if showModal}
    <div class="backdrop" class:promo={isPromo} on:click>
        <div class="modal">
            <p>{message}</p>
        </div>
    </div>
{/if}
```

If we don't set `on:click` equal to anything, it's gonna forward the event to where we defined the component (`App.svelte`).

And now we can listen to that `on:click` event in the `App.svelte` file like this:

```HTML
<script>
	import Modal from './Modal.svelte';

	let showModal = false;

	const toggleModal = () => {
		showModal = !showModal;
        //toggle the showModal value
	}
</script>

<Modal message="Hey, I'm a prop value." isPromo={false} {showModal} on:click={toggleModal} />
<!-- showModal={showModal} can be written as {showModal} -->
<button on:click={toggleModal}>Show Modal</button>

```

Notice that the `Modal` component has `on:click` event handler present. That click event will emit from `backdrop` click event. And we are invoking the `toggleModal` function.

But there is one problem, when we click on the `modal` div, it still closes. Technically, we are still clicking on the overall element when we click inside of it.

We can overcome this problem using `Event Modifier`.

## Event Modifiers

Event Modifiers are the modifiers which we can add on to the end of event on certain element.

There are several types of event modifiers such as

- `once` - Makes sure the event can only fire once (removes handler).
- `preventDefault` - Prevent the default action (runs e.preventDefault()).
- `self` - Only fires the event if the clicked element is the target.

and 3 more. Check out the docs.

So to solve previous problem, we have to use the `self` event modifier.

Event Modifiers are added using `|event-modifier` after event listener.
ex. `on:click|self={toggleModal}` OR `on:click|self`.

So in `Modal.svelte`

```HTML

{#if showModal}
    <div class="backdrop" class:promo={isPromo} on:click|self>
        <div class="modal">
            <p>{message}</p>
        </div>
    </div>
{/if}

```

## Slots

What if we want to pass something more complex like HTML forms etc. to a component.

So for this, we use `slots`.

It gives us a way to pass Child content into a component and then render that content inside the component.

Usage:

```HTML
<script>
    import Modalslot from './Modalslot.svelte'
</script>

<Modalslot>
    <!-- Making a form -->
    <h3>Add a new person</h3>
    <form>
        <input type="text" placeholder="name">
        <input type="text" placeholder="color">
        <button>Add Person</button>
        <!-- Not implementing functionality right now -->
    </form>
</Modalslot>
```

Now, to render the child contents inside the component.
We use `slot` tag.

```HTML
{#if showModal}
    <div class="backdrop" class:promo={isPromo} on:click|self>
        <div class="modal">
            <slot</slot>
        </div>
    </div>
{/if}
```

We can also use `named slots`.
We pass the child content with the attribute `slot="slotname"` to the component.

It won't render till we use it in our component.

```HTML
<script>
    import Modalslot from './Modalslot.svelte'
</script>

<Modalslot>
    <!-- Making a form -->
    <form>
        <input type="text" placeholder="name">
        <input type="text" placeholder="color">
        <button>Add Person</button>
        <!-- Not implementing functionality right now -->
    </form>
    <div slot="slot-name">
        <h3>This is a named slot example</h3>
    </div>
</Modalslot>
```

Using the named slot inside the component.

```HTML
{#if showModal}
    <div class="backdrop" class:promo={isPromo} on:click|self>
        <div class="modal">
            <slot name="slot-name"></slot>
            <slot</slot>
        </div>
    </div>
{/if}
```

Everything else that doesn't have a `named slot` will be outputted using the `<slot></slot>` tag.

It doesn't matter the way you pass content to the component, we can render it however we want.
