<script>
    let firstName = "Sherlock";
    let lastName = "Holmes";

    $: fullName = `${firstName} ${lastName}`
</script>

<main>
    <h1>{fullName}</h1>
    <input type="text" bind:value={firstName}>
    <input type="text" bind:value={lastName}>
</main>

<style>
    main {
        font-size: 40px;
    }
</style>