<script>
    import {  pokemons} from "../stores/pokestores";
import PokemanCard from '../components/pokemonCard.svelte'
</script>
<svelte:head>
    <title>Svelte Kit PokeDex</title>
</svelte:head>
<h1 class='text-4xl text-center my-8 uppercase'>Svelte Kit PokeDex</h1>
<div class="grid gap-4 md:grid-cols-2 grid-cols-1">  
    {#each $pokemons as pokemon}
    <PokemanCard pokemon={pokemon}/>
    {/each}
</div>