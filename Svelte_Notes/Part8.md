# Transitions/Animations in Svelte

To use transitions, we need to import the types of transitions from `svelte/transition`.

```JS
import { fade, slide, scale } from 'svelte/transition';
// importing fade, slide, scale transition type from svelte
```

We can only use transitions on HTML tags, not Custom Components.

```HTML
<div transition:fade>
    <!-- Governs how element comes in and out -->
    <CustomComponent />
</div>

<!-- If we want different transition on element in -->
<div in:fade>
    Fades In
</div>

<!-- If we want different transition on element out -->
<div out:slide>
    Slides Out
</div>

<!-- If we only want to show transition when we click something inside the component, use local -->
<div out:slide|local>
    Slides Out
</div>
```

### Importing Animations

```JS
import { flip } from 'svelte/animate';
```

Used using `animate:animation-name={{properties}}`.

```HTML
<div in:fade out:scale|local animate:flip={{duration:500}}>
    Duration of 5ms
</div>
```

### Animating from one value to other

Tweening means generating frames for movement.

Using Tweened Stores.

Svelte has a Tweened Store builtin, that generates a series of values which can be used for each frame between a starting and an ending point.

Importing Tweened Stores

```JS
import { tweened } from 'svelte/motion';

const value = tweened(0); //store
```

Suppose we change the value of `value` from `0` to `1` using `value.set(1)`. What tweened store will do is to transition 0 to 1, going through all the numbers between 0 to 1.

0 -> 0.1 -> 0.00129 -> Something -> 1

So it will be very useful when we want to go from one value to another.

Reactive value becomes very useful here.

Suppose we want to tween from 0 to any user input, we can use reactive value `$` for tweening.

```JS
const tweenedA = tweened(0);

$: tweenedA.set(input);

// when input changes, tweenedA.set() will run.
```
