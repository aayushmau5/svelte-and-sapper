# Part 1

Svelte is a tool for building fast web applications.

It is similar to JavaScript frameworks such as React and Vue.

Svelte converts your app into ideal JavaScript at build time, rather than interpreting your application code at run time.

You can build your entire app with Svelte, or you can add it incrementally to an existing codebase. You can also ship components as standalone packages that work anywhere, without the overhead of a dependency on a conventional framework.

# Introduction

In Svelte, an application is composed from one or more _components_.

A component is a reusable self-contained block of code that encapsulates HTML, CSS and JavaScript that belong together, written into a `.svelte` file.

> Ally stands for Accessibility

We can use curly braces {} to show javascript.

```html
<script>
  let name = "Rick";
  let src = "url";
</script>

<img src="{src}" alt="{name} Roll" />
```

We can also use curly braces inside attributes.

### Shorthand Attributes.

it's not uncommon to have an attribute where the name and value are the same, like `src={src}`. Svelte gives us a convenient shorthand for these cases.

```html
<img {src} alt="A man dances." />
```

Just like in HTML, you can add a `<style>` tag to your component.

```html
<style>
  p {
    color: purple;
    font-family: "Comic Sans MS", cursive;
    font-size: 2em;
  }
</style>

<p>This is a paragraph.</p>
```

### Important

Importantly, these rules are scoped to the component. You won't accidentally change the style of `<p>` elements elsewhere in your app.

### Nested Components.

It would be impractical to put your entire app in a single component. Instead, we can import components from other files and include them as though we were including elements.

```html
<script>
  import Nested from "./Nested.svelte";
</script>
```

Then add it to the markup.

```html
<p>This is a paragraph.</p>
<Nested />
```
