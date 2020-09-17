<script>
    let input = "Sherlock";

    // const changeInput = (e) => {
    //     input = e.target.value;
    // }
</script>

<main>
    <h4 style="color:{input}">Hello {input}</h4>
    <input type="text" bind:value={input}>
</main>

<style>
    main {
        font-size: 40px;
    }
</style>