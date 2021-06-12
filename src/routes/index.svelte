<script>
	import { pokemons } from '../stores/pokestores';
	import PokemanCard from '../components/pokemonCard.svelte';

	let searchTerm = '';
	let filteredPokemons = [];
	$: {
		// console.log(searchTerm)
		if (searchTerm != '') {
			//search Pokemon
			filteredPokemons = $pokemons.filter((pokemon) =>
				pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
			);
			// console.log(filteredPokemons);
		} else {
			//spread making a copy cause cananot ref
			filteredPokemons = [...$pokemons];
		}
	}
</script>

<svelte:head>
	<title>Svelte Kit PokeDex</title>
</svelte:head>

<h1 class="text-4xl text-center my-8 uppercase">Svelte Kit PokeDex</h1>

<input
	class="w-full rounded-md text-lg border-2 p-4 border-gray-200"
	type="text"
	bind:value={searchTerm}
	placeholder="Search Pokemon"
/>

<div class="grid py-4 gap-4 md:grid-cols-2 grid-cols-1">
	{#each filteredPokemons as pokemon}
		<PokemanCard {pokemon} />
	{/each}
</div>
