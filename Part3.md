# Svelte Basics

Component files must have `.svelte` extensions.

Inside each component, we have 3 different things.

- Script for any kind of component logic.
- HTML template which is automatically injected into the DOM.
- Style tag, which styles the HTML component of the current file.

`main.js` file kick starts the app. It runs first and sets everything up.

Whenever we make a component, it is automatically exported. We can then import them using `import ComponentName from 'componentPath'`.

Then we make a new instance of the component using `new Component({})` with some values.

```js
import App from "./App.svelte";

const app = new App({
  target: document.body,
  props: {
    name: "world",
  },
});

//target is where we want to insert our component in the HTML file.

//props are the data we pass to the component.
// In this case, name is a prop.
```

### Inserting into HTML

We can insert Javascript values inside the HTML template using `{javascript value}`.

```html
<script>
  let name = "Jim";
</script>

<main>
  Hello {name}
  <!-- Output: Hello Jim -->
</main>
```

Adding Click Handler to Button, using `on:click`.
We call this, reacting to a certain event.
Like reacting to a click event.

```html
<script>
  let name = "Jim";
  const changeName = () => {
    name = "John";
  };
</script>

<main>
  <button on:click="{changeName}">Click To Change Name</button>
</main>
```

So whenever the user click the button, `changeName` function will fire, resulting in `name` converstion to 'John'.

## User Input and Data binding

Changing Value using input field.
Reacting to input event.

```html
<script>
  let input = "Black";

  //passing the event parameter
  const changeInput = (e) => {
    input = e.target.value;
  };
</script>

<main>
  <h3 style="color:{input}">Hello {input}</h3>
  <input type="text" on:input="{changeInput}" />
  <!-- using the input event listener -->
</main>
```

We can use `{}` even inside attributes also.
`<h3 style="color:{input}">Hello {input} </h3>`

Here, when changing the input text field, `input` changes. This is one way binding.

If we were to change `input`, the input text field won't change.

In order to change the input field also, we bind it both ways.
This is called two way binding.

Using the `value` attribute.

```html
<input type="text" on:input="{changeInput}" value="{input}" />
```

OR Use shorthand method as well.

```html
<input type="text" bind:value="{input}" />
```

Here `bind` is a svelte keyword. Here we are bindig the `value` attribute to the `input` value.

Then, we don't even need the `changeInput` function.

### Reactive Values & Statements

Reactive values are the values that update automatically when the data they depend on changes.

In sevlte, we declare a reactive value using `$:` at the start.

```HTML
<script>
  let firstName = "Jim";
  let lastName = "Jam";

  $: fullName = `${firstName} ${lastName}`
</script>
```

Now, fullName will get updated if `firstName` or `lastName` changes.

We can also have Reactive Statements.

These are statements, instead of simple values.

They run whenever the data inside reactive statement changes.

```HTML
<script>
  $: console.log(firstName);

  //OR

  //This will run if any one of the values inside them changes.
  $: {
    console.log(fullName);
    console.log(firstName);
  }
</script>
```

## Loops

Using `each`.

```HTML
<script>
    let peoples = [
        { name: "Jim", age: 28, id: 1 },
        { name: "John", age: 25, id: 2 },
        { name: "James", age: 38, id: 3 },
    ]
</script>

<main>
    Loops
    {#each peoples as people}
    <!-- Starting of the loop body -->
        <div>
            <h4>Name: {people.name}</h4>
            <p>Age: {people.age}</p>
        </div>
    <!-- Ending of the loop body -->
    {/each}
</main>
```

When we use `each` loop, we should also apply a unique key to each element in our array and pass that unqiue key property to our loop in `()`.

So that svelte can keep track of which DOM element is connected to which item in the array.

```HTML
<main>
    Loops
    {#each peoples as people (people.id)}
    <!-- Starting of the loop body -->
        <div>
            <h4>Name: {people.name}</h4>
            <p>Age: {people.age}</p>
        </div>
    <!-- Ending of the loop body -->
    {/each}
</main>
```

Suppose if the `poeples` array is empty, then we can use `:else` to render different data.

```HTML
<main>
    Loops
    {#each peoples as people (people.id)}
    <!-- Starting of the loop body -->
        <div>
            <h4>Name: {people.name}</h4>
            <p>Age: {people.age}</p>
        </div>
    {:else}
      <h4>Data Not Present.</h4>
    <!-- Ending of the loop body -->
    {/each}
</main>
```

## Inline Event Handlers

Suppose we want to add a delete button to each element in the `peoples` array data above, and if we click on the button, the data from the array gets deleted and the component re-renders.

```HTML
<script>
    let peoples = [
        { name: "Jim", age: 28, id: 1 },
        { name: "John", age: 25, id: 2 },
        { name: "James", age: 38, id: 3 },
    ];

    const handleClick = (id) => {
        peoples = peoples.filter(people => people.id != id);
    }
</script>

<main>
    Loops
    {#each peoples as people (people.id)}
        <div>
            <h4>Name: {people.name}</h4>
            <p>Age: {people.age}</p>
            <button on:click={() => handleClick(people.id)}>Delete</button>
        </div>
    {/each}
</main>
```

Here, svelte sees the reassignment operator `peoples = peoples.filter...` and re-renders the component.
