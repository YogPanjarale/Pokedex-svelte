<script>
    import {  pokemon} from "../stores/pokestores";
    // console.log($pokemon)
</script>
<svelte:head>
    <title>Svelte Kit PokeDex</title>
</svelte:head>
<h1 class='text-4xl text-center my-8 uppercase'>Svelte Kit PokeDex</h1>

{#each $pokemon as pokeman}
    <p>{pokeman.name}</p>
{/each}
