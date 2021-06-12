<script>
    import {  pokemon} from "../stores/pokestores";
    // console.log($pokemon)
</script>
<svelte:head>
    <title>Svelte Kit PokeDex</title>
</svelte:head>
<h1>Svelte Kit PokeDex</h1>

{#each $pokemon as pokeman}
    <p>{pokeman.name}</p>
{/each}
