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

<style>
    main {
        font-size: 30px;
    }
</style>