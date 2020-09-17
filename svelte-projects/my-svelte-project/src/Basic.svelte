<script>
    let name = "Sherlock";

    const changeName = () => {
        name = "John";
    }
</script>

<main>
    Hello {name}

    <!-- Adding button click listener and handler -->
    <button on:click={changeName}>Change Name</button>
</main>

<style>
    main {
        font-size: 40px;
    }
</style>