import App from "./App.svelte";
// import Basic from "./Basic.svelte";
// import Userinput from "./Userinput.svelte";
// import Reactivevalues from "./Reactivevalues.svelte";
// import Loops from "./Loops.svelte";
// import Conditionals from "./Conditionals.svelte";

const app = new App({
  target: document.body,
  props: {
    name: "world",
  },
});

// const app = new Conditionals({
//   target: document.body,
// });

export default app;
