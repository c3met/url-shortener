<script lang="ts">
    import { enhance } from '$app/forms';

    export let form;

</script>

<body>
    <div class="form-wrapper">
        <form method="POST" use:enhance>
            <label>
                Enter a URL
                <input name="url" type="url" required />
            </label>
            <button type="submit">Shorten</button>
        </form>
        
        {#if form?.message}
            <p class={form?.success ? 'success' : 'error'}>{form?.message}</p>
        {/if}
    </div>
</body>

<style>
    @import '../styles/main.css';
</style>
