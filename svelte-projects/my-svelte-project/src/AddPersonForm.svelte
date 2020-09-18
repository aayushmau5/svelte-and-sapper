<script>
    import { createEventDispatcher } from 'svelte';

    let dispatch = createEventDispatcher();

    let name;
    let age;
    let id = 3;

    const handleSubmit = () => {
        id++;
        //making the person object which we will pass to the parent 
        const person = {
            name,
            age,
            id: 4
        };
        dispatch('addPerson', person);
    }
</script>

<form on:submit|preventDefault={handleSubmit}>
    <input type="text" placeholder="Name" bind:value={name}>
    <input type="number" placeholder="Age" bind:value={age}>
    <label>Skills:</label>
    <input type="checkbox"> React
    <input type="checkbox"> Vue
    <input type="checkbox"> Svelte
    <button>Add Person</button>
</form>

<style></style>