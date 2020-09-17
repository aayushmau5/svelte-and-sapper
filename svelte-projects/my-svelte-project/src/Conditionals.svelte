<script>
    let num = 0;
</script>

<main>
    hello
    {#if num > 5}
        <h4>Num is greater than 5</h4>
    {:else if num == 5} 
        <h4>Num is equal to 5</h4>
    {:else}
        <h4>Num is less than 5</h4>
    {/if}
</main>

<style>
    main {
        font-size: 40px;
    }
</style>