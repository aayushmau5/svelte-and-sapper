<script>
    export let showModal = true;
    export let isPromo = true;
    export let message = 'default value';
</script>

{#if showModal}
    <div class="backdrop" class:promo={isPromo}>
        <div class="modal">
            <p>{message}</p>
        </div>
    </div>
{/if}

<style>
    .backdrop {
        height: 100%;
        width: 100%;
        position: fixed;
        background-color: rgba(0,0,0,0.8);
    }
    
    .modal {
        padding:10px;
        border-radius: 10px;
        max-width: 400px;
        margin:10% auto;
        text-align: center;
        background-color: #fff;
    }

    .promo .modal {
        background-color: crimson;
        color:white;
    }
</style>